const mongoose = require('mongoose');
const Task = require('../models/Task.model');
const Project = require('../models/Project.model');

const getAllTasks = async (req, res, next) => {
  try {
    const { projectId, status, priority, search } = req.query;
    const filter = {};

    if (projectId && projectId.trim() !== '') {
      if (mongoose.Types.ObjectId.isValid(projectId.trim())) {
        filter.project = projectId.trim();
      } else {
        return res.status(200).json({
          success: true,
          data: {
            tasks: [],
            total: 0,
          },
        });
      }
    }

    if (status && status.trim() !== '') {
      filter.status = status.trim();
    }

    if (priority && priority.trim() !== '') {
      filter.priority = priority.trim();
    }

    if (search && search.trim() !== '') {
      filter.title = { $regex: search.trim(), $options: 'i' };
    }

    const tasks = await Task.find(filter);

    return res.status(200).json({
      success: true,
      data: {
        tasks,
        total: tasks.length,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid ID format',
      });
    }

    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        task,
      },
    });
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const { title, description, projectId, status, priority, dueDate, assigneeId } = req.body;

    if (!projectId || !mongoose.Types.ObjectId.isValid(projectId)) {
      return res.status(404).json({
        success: false,
        message: 'Project not found',
      });
    }

    const projectExists = await Project.findById(projectId);
    if (!projectExists) {
      return res.status(404).json({
        success: false,
        message: 'Project not found',
      });
    }

    const isProjectOwner = projectExists.owner && projectExists.owner.toString() === req.user.id;
    const isAdmin = req.user.role === 'admin';
    if (!isProjectOwner && !isAdmin) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to create tasks in this project',
      });
    }

    let assignee = req.user.id;
    if (assigneeId && mongoose.Types.ObjectId.isValid(assigneeId)) {
      assignee = assigneeId;
    }

    const newTask = await Task.create({
      title: title ? title.trim() : undefined,
      description: description ? description.trim() : '',
      project: projectId,
      status: status || 'todo',
      priority: priority || 'medium',
      dueDate: dueDate || null,
      assignee,
      createdBy: req.user.id,
    });

    return res.status(201).json({
      success: true,
      message: 'Task created successfully',
      data: {
        task: newTask,
      },
    });
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid ID format',
      });
    }

    const existingTask = await Task.findById(id).populate('project');
    if (!existingTask) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      });
    }

    const isCreator = existingTask.createdBy && existingTask.createdBy.toString() === req.user.id;
    const isAssignee = existingTask.assignee && existingTask.assignee.toString() === req.user.id;
    const isProjectOwner = existingTask.project && existingTask.project.owner && existingTask.project.owner.toString() === req.user.id;
    const isAdmin = req.user.role === 'admin';

    if (!isCreator && !isAssignee && !isProjectOwner && !isAdmin) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this task',
      });
    }

    const { title, description, status, priority, dueDate, assigneeId } = req.body;
    const updates = {};
    if (title !== undefined) updates.title = title.trim();
    if (description !== undefined) updates.description = description.trim();
    if (status !== undefined) updates.status = status;
    if (priority !== undefined) updates.priority = priority;
    if (dueDate !== undefined) updates.dueDate = dueDate;
    if (assigneeId !== undefined) {
      updates.assignee = mongoose.Types.ObjectId.isValid(assigneeId) ? assigneeId : null;
    }

    const task = await Task.findByIdAndUpdate(id, updates, {
      new: true,
      returnDocument: 'after',
      runValidators: true,
    });

    return res.status(200).json({
      success: true,
      message: 'Task updated successfully',
      data: {
        task,
      },
    });
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid ID format',
      });
    }

    const task = await Task.findById(id).populate('project');
    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      });
    }

    const isCreator = task.createdBy && task.createdBy.toString() === req.user.id;
    const isProjectOwner = task.project && task.project.owner && task.project.owner.toString() === req.user.id;
    const isAdmin = req.user.role === 'admin';

    if (!isCreator && !isProjectOwner && !isAdmin) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this task',
      });
    }

    await Task.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: 'Task deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
