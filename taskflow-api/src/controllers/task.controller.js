const store = require('../data/store');

const getAllTasks = (req, res) => {
  const { projectId, status, priority, search } = req.query;

  const filtered = store.tasks.filter(task => {
    const matchesProject = projectId
      ? task.projectId === projectId
      : true;
    const matchesStatus = status
      ? task.status === status
      : true;
    const matchesPriority = priority
      ? task.priority === priority
      : true;
    const matchesSearch = search
      ? task.title.toLowerCase().includes(search.toLowerCase()) ||
        (task.description && task.description.toLowerCase().includes(search.toLowerCase()))
      : true;
    return (
      matchesProject &&
      matchesStatus &&
      matchesPriority &&
      matchesSearch
    );
  });

  return res.status(200).json({
    success: true,
    data: {
      tasks: filtered,
      total: filtered.length,
    },
  });
};

const getTaskById = (req, res) => {
  const { id } = req.params;
  const task = store.tasks.find(t => t.id === id);

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
};

const createTask = (req, res) => {
  const { title, description, projectId, status, priority, dueDate, assigneeId } = req.body;

  const projectExists = store.projects.some(p => p.id === projectId);
  if (!projectExists) {
    return res.status(404).json({
      success: false,
      message: 'Project not found',
    });
  }

  const newTask = {
    id: `task-${store.tasks.length + 1}`,
    title: title.trim(),
    description: description ? description.trim() : '',
    projectId,
    status: status || 'todo',
    priority: priority || 'medium',
    dueDate: dueDate || null,
    assigneeId: assigneeId || (req.user && req.user.id) || 'user-1',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  store.tasks.push(newTask);

  return res.status(201).json({
    success: true,
    message: 'Task created successfully',
    data: {
      task: newTask,
    },
  });
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const taskIndex = store.tasks.findIndex(t => t.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Task not found',
    });
  }

  const task = store.tasks[taskIndex];
  const { title, description, status, priority, dueDate, assigneeId } = req.body;

  if (title !== undefined) task.title = title.trim();
  if (description !== undefined) task.description = description.trim();
  if (status !== undefined) task.status = status;
  if (priority !== undefined) task.priority = priority;
  if (dueDate !== undefined) task.dueDate = dueDate;
  if (assigneeId !== undefined) task.assigneeId = assigneeId;
  task.updatedAt = new Date().toISOString();

  return res.status(200).json({
    success: true,
    message: 'Task updated successfully',
    data: {
      task,
    },
  });
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  const taskIndex = store.tasks.findIndex(t => t.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Task not found',
    });
  }

  store.tasks.splice(taskIndex, 1);

  return res.status(200).json({
    success: true,
    message: 'Task deleted successfully',
  });
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
