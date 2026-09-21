const Project = require('../models/Project.model');
const Task = require('../models/Task.model');
const geminiService = require('../services/gemini.service');

/**
 * Controller: AI Goal -> Complete Task Plan
 * POST /api/ai/plan
 */
const generatePlan = async (req, res, next) => {
  try {
    const { goal, context } = req.body;

    if (!goal || typeof goal !== 'string' || goal.trim().length < 3) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a goal of at least 3 characters.',
      });
    }

    const plan = await geminiService.generateTaskPlan(goal.trim(), context);

    // Validate structured plan schema
    if (!plan || !plan.projectTitle || !Array.isArray(plan.tasks)) {
      return res.status(502).json({
        success: false,
        message: 'AI generated an invalid plan format. Please try again.',
      });
    }

    // Sanitize tasks array
    const sanitizedTasks = plan.tasks.map((task, idx) => ({
      title: task.title ? String(task.title).trim() : `Milestone ${idx + 1}`,
      description: task.description ? String(task.description).trim() : '',
      priority: ['low', 'medium', 'high'].includes(task.priority) ? task.priority : 'medium',
      estimatedHours: Number(task.estimatedHours) || 3,
      suggestedDueDate: task.suggestedDueDate || null,
      order: Number(task.order) || idx + 1,
      reasoning: task.reasoning || '',
    }));

    return res.status(200).json({
      success: true,
      message: 'Plan generated successfully',
      data: {
        plan: {
          projectTitle: plan.projectTitle.trim(),
          projectDescription: (plan.projectDescription || '').trim(),
          suggestedColor: plan.suggestedColor || '#3b82f6',
          tasks: sanitizedTasks,
        },
      },
    });
  } catch (error) {
    console.error('[AI Plan Controller Error]:', error.message);
    if (error.message && error.message.includes('GEMINI_API_KEY')) {
      return res.status(503).json({
        success: false,
        message: 'AI service configuration error: GEMINI_API_KEY missing.',
      });
    }
    return res.status(503).json({
      success: false,
      message: 'AI service is temporarily unavailable. Please try again.',
    });
  }
};

/**
 * Controller: AI Daily Focus & Priority Briefing
 * GET /api/ai/daily-focus
 */
const getDailyFocus = async (req, res, next) => {
  try {
    const userId = req.user.id;

    // Fetch user's active tasks and owned projects
    const [userProjects, userTasks] = await Promise.all([
      Project.find({ owner: userId }),
      Task.find({
        $or: [{ createdBy: userId }, { assignee: userId }],
        status: { $ne: 'done' },
      }).populate('project'),
    ]);

    if (userTasks.length === 0) {
      return res.status(200).json({
        success: true,
        data: {
          focusTasks: [],
          summary: "You're all clear! No active tasks currently need your attention.",
          warnings: [],
          totalActiveTasks: 0,
        },
      });
    }

    const aiResult = await geminiService.analyzeDailyFocus(userTasks, userProjects, req.user);

    // CRITICAL SECURITY VALIDATION: Validate every returned taskId exists in user's real tasks
    const validTaskMap = new Map();
    userTasks.forEach((t) => {
      validTaskMap.set(t._id.toString(), t);
      validTaskMap.set(t.id, t);
    });

    const validatedFocusTasks = (aiResult.focusTasks || [])
      .map((item, index) => {
        const matchingTask = validTaskMap.get(item.taskId);
        if (!matchingTask) return null; // Discard hallucinated ID

        return {
          rank: index + 1,
          urgency: item.urgency || 'high',
          reason: item.reason || 'High priority milestone',
          suggestedAction: item.suggestedAction || 'Work on this task today',
          task: {
            id: matchingTask.id || matchingTask._id.toString(),
            title: matchingTask.title,
            description: matchingTask.description,
            status: matchingTask.status,
            priority: matchingTask.priority,
            dueDate: matchingTask.dueDate,
            projectName: matchingTask.project ? matchingTask.project.name : 'General',
          },
        };
      })
      .filter(Boolean);

    return res.status(200).json({
      success: true,
      data: {
        focusTasks: validatedFocusTasks,
        summary: aiResult.summary || 'Here is your recommended priority focus for today.',
        warnings: Array.isArray(aiResult.warnings) ? aiResult.warnings : [],
        totalActiveTasks: userTasks.length,
      },
    });
  } catch (error) {
    console.error('[AI Daily Focus Controller Error]:', error.message);
    if (error.message && error.message.includes('GEMINI_API_KEY')) {
      return res.status(503).json({
        success: false,
        message: 'AI service configuration error: GEMINI_API_KEY missing.',
      });
    }
    return res.status(503).json({
      success: false,
      message: 'AI service is temporarily unavailable. Please try again.',
    });
  }
};

/**
 * Controller: TaskFlow AI Copilot (Personal Developer Productivity Assistant)
 * POST /api/ai/copilot
 */
const processCopilot = async (req, res, next) => {
  try {
    const { message, history } = req.body;
    const userId = req.user.id;

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Message cannot be empty.',
      });
    }

    // Gather real isolated workspace context for this authenticated user
    const [userProjects, userTasks] = await Promise.all([
      Project.find({ owner: userId }),
      Task.find({
        $or: [{ createdBy: userId }, { assignee: userId }],
      }).populate('project'),
    ]);

    const activeTasks = userTasks.filter((t) => t.status !== 'done');
    const completedTasks = userTasks.filter((t) => t.status === 'done');
    const overdueTasks = activeTasks.filter(
      (t) => t.dueDate && new Date(t.dueDate) < new Date()
    );
    const highPriorityTasks = activeTasks.filter((t) => t.priority === 'high');

    const workspaceContext = {
      developer: {
        name: req.user.name || 'Developer',
        role: req.user.role || 'Full Stack Engineer',
      },
      stats: {
        totalProjects: userProjects.length,
        totalTasks: userTasks.length,
        activeTasks: activeTasks.length,
        completedTasks: completedTasks.length,
        overdueTasks: overdueTasks.length,
        highPriorityCount: highPriorityTasks.length,
      },
      projects: userProjects.map((p) => ({
        id: p.id || p._id.toString(),
        name: p.name,
        status: p.status,
        description: p.description,
      })),
      highPriorityTasks: highPriorityTasks.map((t) => ({
        id: t.id || t._id.toString(),
        title: t.title,
        status: t.status,
        dueDate: t.dueDate,
        projectName: t.project?.name || 'General',
      })),
      activeTasks: activeTasks.slice(0, 20).map((t) => ({
        id: t.id || t._id.toString(),
        title: t.title,
        status: t.status,
        priority: t.priority,
        dueDate: t.dueDate,
        projectName: t.project?.name || 'General',
      })),
    };

    const copilotResponse = await geminiService.processCopilotChat(
      message.trim(),
      history,
      workspaceContext
    );

    // Validate and sanitize action proposal if one was proposed
    let sanitizedAction = null;
    if (copilotResponse && copilotResponse.action && copilotResponse.action.actionType) {
      const { actionType, payload, preview } = copilotResponse.action;

      if (actionType === 'create_project' && payload?.name) {
        sanitizedAction = {
          actionType: 'create_project',
          requiresConfirmation: true,
          payload: {
            name: String(payload.name).trim(),
            description: String(payload.description || 'Project created via TaskFlow Copilot').trim(),
            status: ['active', 'completed', 'on-hold'].includes(payload.status) ? payload.status : 'active',
            color: payload.color || '#3b82f6',
          },
          preview: preview || {
            title: `Create Project: ${payload.name}`,
            details: 'Will create a new project workspace in your account.',
          },
        };
      } else if (actionType === 'create_task' && payload?.title) {
        let targetProjectId = payload.projectId;
        let matchingProject = userProjects.find(
          (p) => (p.id || p._id.toString()) === targetProjectId
        );
        if (!matchingProject && userProjects.length > 0) {
          matchingProject = userProjects[0];
          targetProjectId = matchingProject.id || matchingProject._id.toString();
        }

        sanitizedAction = {
          actionType: 'create_task',
          requiresConfirmation: true,
          payload: {
            title: String(payload.title).trim(),
            description: String(payload.description || '').trim(),
            priority: ['low', 'medium', 'high'].includes(payload.priority) ? payload.priority : 'medium',
            status: ['todo', 'in-progress', 'done'].includes(payload.status) ? payload.status : 'todo',
            ...(targetProjectId && { projectId: targetProjectId }),
          },
          preview: preview || {
            title: `Create Task: ${payload.title}`,
            details: `Will add task to project: ${matchingProject ? matchingProject.name : 'Current Workspace'}`,
          },
        };
      } else if (actionType === 'update_task_status' && payload?.taskId) {
        const matchingTask = userTasks.find(
          (t) => (t.id || t._id.toString()) === payload.taskId
        );
        if (matchingTask) {
          sanitizedAction = {
            actionType: 'update_task_status',
            requiresConfirmation: true,
            payload: {
              taskId: matchingTask.id || matchingTask._id.toString(),
              status: ['todo', 'in-progress', 'done'].includes(payload.status) ? payload.status : 'done',
            },
            preview: preview || {
              title: `Update Task Status: ${matchingTask.title}`,
              details: `Set status to: ${payload.status || 'done'}`,
            },
          };
        }
      }
    }

    return res.status(200).json({
      success: true,
      data: {
        reply:
          copilotResponse?.reply ||
          'I am ready to help you with your tasks, projects, or development questions.',
        intent: copilotResponse?.intent || 'general_chat',
        action: sanitizedAction,
      },
    });
  } catch (error) {
    console.error('[AI Copilot Controller Error]:', error.message);
    if (error.message && error.message.includes('GEMINI_API_KEY')) {
      return res.status(503).json({
        success: false,
        message: 'AI service configuration error: GEMINI_API_KEY missing.',
      });
    }
    return res.status(503).json({
      success: false,
      message: 'AI service is temporarily unavailable. Please try again.',
    });
  }
};

module.exports = {
  generatePlan,
  getDailyFocus,
  processCopilot,
};
