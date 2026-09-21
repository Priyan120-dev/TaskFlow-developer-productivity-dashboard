const mongoose = require('mongoose');
const Project = require('../models/Project.model');
const Task = require('../models/Task.model');

const getAllProjects = async (req, res, next) => {
  try {
    const { search, status } = req.query;
    const filter = {};

    if (search && search.trim() !== '') {
      filter.name = { $regex: search.trim(), $options: 'i' };
    }

    if (status && status.trim() !== '') {
      filter.status = status.trim();
    }

    const projects = await Project.find(filter);

    const enrichedProjects = await Promise.all(
      projects.map(async (project) => {
        const [taskCount, completedTasks] = await Promise.all([
          Task.countDocuments({ project: project._id }),
          Task.countDocuments({ project: project._id, status: 'done' }),
        ]);

        const projectObj = project.toJSON ? project.toJSON() : project.toObject();
        return {
          ...projectObj,
          taskCount,
          completedTasks,
        };
      })
    );

    return res.status(200).json({
      success: true,
      data: {
        projects: enrichedProjects,
        total: enrichedProjects.length,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getProjectById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid ID format',
      });
    }

    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found',
      });
    }

    const [taskCount, completedTasks] = await Promise.all([
      Task.countDocuments({ project: project._id }),
      Task.countDocuments({ project: project._id, status: 'done' }),
    ]);

    const projectObj = project.toJSON ? project.toJSON() : project.toObject();
    const enrichedProject = {
      ...projectObj,
      taskCount,
      completedTasks,
    };

    return res.status(200).json({
      success: true,
      data: {
        project: enrichedProject,
      },
    });
  } catch (error) {
    next(error);
  }
};

const createProject = async (req, res, next) => {
  try {
    const { name, description, status, dueDate, color } = req.body;

    const newProject = await Project.create({
      name: name ? name.trim() : undefined,
      description: description ? description.trim() : undefined,
      status: status || 'active',
      dueDate: dueDate || null,
      color: color || '#3b82f6',
      owner: req.user.id,
    });

    const projectObj = newProject.toJSON ? newProject.toJSON() : newProject.toObject();

    return res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: {
        project: projectObj,
      },
    });
  } catch (error) {
    next(error);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid ID format',
      });
    }

    const { name, description, status, dueDate, color } = req.body;
    const updates = {};
    if (name !== undefined) updates.name = name.trim();
    if (description !== undefined) updates.description = description.trim();
    if (status !== undefined) updates.status = status;
    if (dueDate !== undefined) updates.dueDate = dueDate;
    if (color !== undefined) updates.color = color;

    const project = await Project.findByIdAndUpdate(id, updates, {
      new: true,
      returnDocument: 'after',
      runValidators: true,
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Project updated successfully',
      data: {
        project,
      },
    });
  } catch (error) {
    next(error);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid ID format',
      });
    }

    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found',
      });
    }

    await Task.deleteMany({ project: id });
    await Project.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: 'Project and its tasks deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
