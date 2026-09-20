const store = require('../data/store');

const getAllProjects = (req, res) => {
  const enrichedProjects = store.projects.map(project => {
    const projectTasks = store.tasks.filter(
      t => t.projectId === project.id
    );
    return {
      ...project,
      taskCount: projectTasks.length,
      completedTasks: projectTasks.filter(
        t => t.status === 'done'
      ).length,
    };
  });

  const { search, status } = req.query;
  const filtered = enrichedProjects.filter(project => {
    const matchesSearch = search
      ? project.name.toLowerCase().includes(search.toLowerCase()) ||
        (project.description && project.description.toLowerCase().includes(search.toLowerCase()))
      : true;
    const matchesStatus = status
      ? project.status === status
      : true;
    return matchesSearch && matchesStatus;
  });

  return res.status(200).json({
    success: true,
    data: {
      projects: filtered,
      total: filtered.length,
    },
  });
};

const getProjectById = (req, res) => {
  const { id } = req.params;
  const project = store.projects.find(p => p.id === id);

  if (!project) {
    return res.status(404).json({
      success: false,
      message: 'Project not found',
    });
  }

  const projectTasks = store.tasks.filter(
    t => t.projectId === project.id
  );

  const enrichedProject = {
    ...project,
    taskCount: projectTasks.length,
    completedTasks: projectTasks.filter(
      t => t.status === 'done'
    ).length,
  };

  return res.status(200).json({
    success: true,
    data: {
      project: enrichedProject,
    },
  });
};

const createProject = (req, res) => {
  const { name, description, status, dueDate, color } = req.body;

  const newProject = {
    id: `proj-${store.projects.length + 1}`,
    name: name.trim(),
    description: description.trim(),
    status: status || 'active',
    dueDate: dueDate || null,
    color: color || '#3b82f6',
    ownerId: (req.user && req.user.id) || 'user-1',
    createdAt: new Date().toISOString(),
  };

  store.projects.push(newProject);

  return res.status(201).json({
    success: true,
    message: 'Project created successfully',
    data: {
      project: newProject,
    },
  });
};

const updateProject = (req, res) => {
  const { id } = req.params;
  const projectIndex = store.projects.findIndex(p => p.id === id);

  if (projectIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Project not found',
    });
  }

  const project = store.projects[projectIndex];
  const { name, description, status, dueDate, color } = req.body;

  if (name !== undefined) project.name = name.trim();
  if (description !== undefined) project.description = description.trim();
  if (status !== undefined) project.status = status;
  if (dueDate !== undefined) project.dueDate = dueDate;
  if (color !== undefined) project.color = color;

  return res.status(200).json({
    success: true,
    message: 'Project updated successfully',
    data: {
      project,
    },
  });
};

const deleteProject = (req, res) => {
  const { id } = req.params;
  const projectIndex = store.projects.findIndex(p => p.id === id);

  if (projectIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Project not found',
    });
  }

  store.projects.splice(projectIndex, 1);

  // Delete all tasks belonging to this project
  store.tasks = store.tasks.filter(
    task => task.projectId !== id
  );

  return res.status(200).json({
    success: true,
    message: 'Project and its tasks deleted successfully',
  });
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
