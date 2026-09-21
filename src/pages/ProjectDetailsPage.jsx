import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsApi, tasksApi, usersApi } from '../services/api';
import { useAuth } from '../context/AuthContext';
import Badge from '../components/Badge';
import ProgressBar from '../components/ProgressBar';
import TaskCard from '../components/TaskCard';
import ProjectModal from '../components/ProjectModal';
import TaskModal from '../components/TaskModal';
import ConfirmationModal from '../components/ConfirmationModal';
import EmptyState from '../components/EmptyState';
import { GridSkeleton } from '../components/LoadingSkeleton';
import {
  CalendarIcon,
  UpdateIcon,
  DeleteIcon,
  CheckSquareIcon,
  AlertCircleIcon,
} from '../components/Icons';

export const ProjectDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Modals state
  const [isEditProjectOpen, setIsEditProjectOpen] = useState(false);
  const [isDeleteProjectOpen, setIsDeleteProjectOpen] = useState(false);
  const [isDeleteProjectLoading, setIsDeleteProjectLoading] = useState(false);

  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const [taskToDelete, setTaskToDelete] = useState(null);
  const [isDeleteTaskLoading, setIsDeleteTaskLoading] = useState(false);

  const fetchProjectData = useCallback(async () => {
    setIsLoading(true);
    setError('');
    try {
      const [projRes, tasksRes] = await Promise.all([
        projectsApi.getById(id),
        tasksApi.getAll({ projectId: id }),
      ]);

      setProject(projRes.data?.project || null);
      setTasks(tasksRes.data?.tasks || []);

      // Fetch users for assignee assignment in tasks
      try {
        const usersRes = await usersApi.getAll();
        setUsers(usersRes.data?.users || []);
      } catch {
        // Non-fatal if users list fails
      }
    } catch (err) {
      setError(err.message || 'Failed to load project details.');
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProjectData();
  }, [fetchProjectData]);

  // Project update
  const handleUpdateProject = async (updatedData) => {
    await projectsApi.update(id, updatedData);
    await fetchProjectData();
  };

  // Project delete
  const handleDeleteProject = async () => {
    setIsDeleteProjectLoading(true);
    try {
      await projectsApi.delete(id);
      setIsDeleteProjectOpen(false);
      navigate('/projects', { replace: true });
    } catch (err) {
      setError(err.message || 'Failed to delete project.');
      setIsDeleteProjectOpen(false);
    } finally {
      setIsDeleteProjectLoading(false);
    }
  };

  // Task create or update
  const handleSaveTask = async (taskData) => {
    if (editingTask) {
      const taskId = editingTask.id || editingTask._id;
      await tasksApi.update(taskId, taskData);
    } else {
      await tasksApi.create({
        ...taskData,
        projectId: id,
      });
    }
    setEditingTask(null);
    await fetchProjectData();
  };

  // Quick task status change
  const handleTaskStatusChange = async (taskId, newStatus) => {
    try {
      // Optimistic update
      setTasks((prev) =>
        prev.map((t) => ((t.id || t._id) === taskId ? { ...t, status: newStatus } : t))
      );
      await tasksApi.update(taskId, { status: newStatus });
      // Refresh to update project task counts and completion rate
      const projRes = await projectsApi.getById(id);
      setProject(projRes.data?.project || null);
    } catch (err) {
      setError(err.message || 'Failed to update task status.');
      await fetchProjectData();
    }
  };

  // Task delete
  const handleConfirmDeleteTask = async () => {
    if (!taskToDelete) return;
    setIsDeleteTaskLoading(true);
    try {
      const taskId = taskToDelete.id || taskToDelete._id;
      await tasksApi.delete(taskId);
      setTaskToDelete(null);
      await fetchProjectData();
    } catch (err) {
      setError(err.message || 'Failed to delete task.');
      setTaskToDelete(null);
    } finally {
      setIsDeleteTaskLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6 pb-12">
        <div className="h-6 w-32 bg-slate-200 rounded animate-pulse" />
        <div className="h-44 bg-white rounded-xl border border-slate-200 animate-pulse p-6" />
        <GridSkeleton count={3} type="task" />
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="space-y-6 pb-12">
        <Link to="/projects" className="text-xs font-semibold text-blue-600 hover:underline">
          ← Back to Projects
        </Link>
        <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center max-w-md mx-auto my-12">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mx-auto mb-4">
            <AlertCircleIcon className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">Project Not Found</h2>
          <p className="text-sm text-slate-500 mb-6">{error || 'The requested project could not be found.'}</p>
          <Link
            to="/projects"
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
          >
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  const completedCount = tasks.filter((t) => t.status === 'done').length;
  const totalTasks = tasks.length;
  const progressPercent = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

  const formattedDueDate = project.dueDate
    ? new Date(project.dueDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : 'No due date';

  // Authorization: check if current user is owner or admin
  const isOwnerOrAdmin =
    user && (project.owner === user.id || project.ownerId === user.id || user.role === 'admin');

  return (
    <div className="space-y-8 pb-12">
      {/* Breadcrumb & Top Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link
          to="/projects"
          className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
        >
          ← Back to Projects
        </Link>

        {isOwnerOrAdmin && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsEditProjectOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 shadow-sm transition-colors"
            >
              <UpdateIcon className="w-3.5 h-3.5" />
              Edit Project
            </button>
            <button
              type="button"
              onClick={() => setIsDeleteProjectOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-200 hover:bg-rose-100 transition-colors"
            >
              <DeleteIcon className="w-3.5 h-3.5" />
              Delete Project
            </button>
          </div>
        )}
      </div>

      {/* Project Overview Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="flex items-start gap-3.5 flex-1">
            <span
              className="w-4 h-4 rounded-full flex-shrink-0 mt-1.5"
              style={{ backgroundColor: project.color || '#3b82f6' }}
            />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {project.name}
              </h1>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <Badge type="status" value={project.status} />
          </div>
        </div>

        {/* Milestone Meta Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-slate-400" />
            <span>Target Due: <strong className="text-slate-800">{formattedDueDate}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <CheckSquareIcon className="w-4 h-4 text-slate-400" />
            <span>Deliverables: <strong className="text-slate-800">{completedCount} of {totalTasks} Completed</strong></span>
          </div>
          <div>
            <ProgressBar progress={progressPercent} color={project.color || '#3b82f6'} />
          </div>
        </div>
      </div>

      {/* Associated Tasks Section */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Project Tasks</h2>
            <p className="text-xs text-slate-500">
              Work items scoped specifically to this project ({tasks.length} total)
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setEditingTask(null);
              setIsTaskModalOpen(true);
            }}
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
          >
            + Add Task
          </button>
        </div>

        {tasks.length === 0 ? (
          <EmptyState
            title="No tasks in this project"
            message="Get started by creating the first task or deliverable for this project."
            actionText="Create Project Task"
            onAction={() => {
              setEditingTask(null);
              setIsTaskModalOpen(true);
            }}
          />
        ) : (
          <div className="space-y-3">
            {tasks.map((task) => (
              <TaskCard
                key={task.id || task._id}
                task={task}
                onStatusChange={handleTaskStatusChange}
                onEdit={(t) => {
                  setEditingTask(t);
                  setIsTaskModalOpen(true);
                }}
                onDelete={(t) => setTaskToDelete(t)}
                canManage={true}
              />
            ))}
          </div>
        )}
      </section>

      {/* Edit Project Modal */}
      <ProjectModal
        isOpen={isEditProjectOpen}
        onClose={() => setIsEditProjectOpen(false)}
        onSave={handleUpdateProject}
        project={project}
      />

      {/* Delete Project Confirmation Modal */}
      <ConfirmationModal
        isOpen={isDeleteProjectOpen}
        title="Delete Project?"
        message={`Are you sure you want to delete "${project.name}"? This action is permanent and will cascade delete all ${tasks.length} associated tasks.`}
        confirmText="Delete Project"
        isLoading={isDeleteProjectLoading}
        onConfirm={handleDeleteProject}
        onClose={() => setIsDeleteProjectOpen(false)}
      />

      {/* Task Create / Edit Modal */}
      <TaskModal
        isOpen={isTaskModalOpen}
        onClose={() => {
          setIsTaskModalOpen(false);
          setEditingTask(null);
        }}
        onSave={handleSaveTask}
        task={editingTask}
        projects={[project]}
        users={users}
        defaultProjectId={id}
      />

      {/* Delete Task Confirmation Modal */}
      <ConfirmationModal
        isOpen={Boolean(taskToDelete)}
        title="Delete Task?"
        message={`Are you sure you want to permanently delete "${taskToDelete?.title}"?`}
        confirmText="Delete Task"
        isLoading={isDeleteTaskLoading}
        onConfirm={handleConfirmDeleteTask}
        onClose={() => setTaskToDelete(null)}
      />
    </div>
  );
};

export default ProjectDetailsPage;
