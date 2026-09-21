import React, { useState, useEffect, useCallback } from 'react';
import { tasksApi, projectsApi, usersApi } from '../services/api';
import TaskCard from '../components/TaskCard';
import SearchBar from '../components/SearchBar';
import EmptyState from '../components/EmptyState';
import TaskModal from '../components/TaskModal';
import ConfirmationModal from '../components/ConfirmationModal';
import { GridSkeleton } from '../components/LoadingSkeleton';
import { AlertCircleIcon } from '../components/Icons';

export const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [projectFilter, setProjectFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Modals state
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  // Fetch projects and users once for filter dropdowns & modal selection
  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const [projRes, usersRes] = await Promise.all([
          projectsApi.getAll(),
          usersApi.getAll().catch(() => ({ data: { users: [] } })),
        ]);
        setProjects(projRes.data?.projects || []);
        setUsers(usersRes.data?.users || []);
      } catch {
        // Handled silently
      }
    };
    fetchMetadata();
  }, []);

  const fetchTasks = useCallback(async () => {
    setIsLoading(true);
    setError('');
    try {
      const res = await tasksApi.getAll({
        search: searchQuery,
        status: statusFilter,
        priority: priorityFilter,
        projectId: projectFilter !== 'all' ? projectFilter : undefined,
      });
      setTasks(res.data?.tasks || []);
    } catch (err) {
      setError(err.message || 'Failed to load tasks.');
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery, statusFilter, priorityFilter, projectFilter]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchTasks();
    }, 250);

    const handleRefresh = () => fetchTasks();
    window.addEventListener('taskflow:refresh-data', handleRefresh);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('taskflow:refresh-data', handleRefresh);
    };
  }, [fetchTasks]);

  // Compute status & priority counts
  const statusCounts = {
    all: tasks.length,
    todo: tasks.filter((t) => t.status === 'todo').length,
    'in-progress': tasks.filter((t) => t.status === 'in-progress').length,
    done: tasks.filter((t) => t.status === 'done').length,
  };

  const priorityCounts = {
    all: tasks.length,
    low: tasks.filter((t) => t.priority === 'low').length,
    medium: tasks.filter((t) => t.priority === 'medium').length,
    high: tasks.filter((t) => t.priority === 'high').length,
  };

  const statusButtons = [
    { key: 'all', label: 'All', count: statusCounts.all },
    { key: 'todo', label: 'Todo', count: statusCounts.todo },
    { key: 'in-progress', label: 'In Progress', count: statusCounts['in-progress'] },
    { key: 'done', label: 'Done', count: statusCounts.done },
  ];

  const priorityButtons = [
    { key: 'all', label: 'All', count: priorityCounts.all },
    { key: 'low', label: 'Low', count: priorityCounts.low },
    { key: 'medium', label: 'Medium', count: priorityCounts.medium },
    { key: 'high', label: 'High', count: priorityCounts.high },
  ];

  const handleSaveTask = async (taskData) => {
    if (editingTask) {
      const taskId = editingTask.id || editingTask._id;
      await tasksApi.update(taskId, taskData);
    } else {
      await tasksApi.create(taskData);
    }
    setEditingTask(null);
    await fetchTasks();
  };

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      setTasks((prev) =>
        prev.map((t) => ((t.id || t._id) === taskId ? { ...t, status: newStatus } : t))
      );
      await tasksApi.update(taskId, { status: newStatus });
    } catch (err) {
      setError(err.message || 'Failed to update task status.');
      await fetchTasks();
    }
  };

  const handleConfirmDelete = async () => {
    if (!taskToDelete) return;
    setIsDeleteLoading(true);
    try {
      const taskId = taskToDelete.id || taskToDelete._id;
      await tasksApi.delete(taskId);
      setTaskToDelete(null);
      await fetchTasks();
    } catch (err) {
      setError(err.message || 'Failed to delete task.');
      setTaskToDelete(null);
    } finally {
      setIsDeleteLoading(false);
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setStatusFilter('all');
    setPriorityFilter('all');
    setProjectFilter('all');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Tasks
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Track issues, feature work, and prioritize engineering milestones
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setEditingTask(null);
            setIsTaskModalOpen(true);
          }}
          disabled={projects.length === 0}
          className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          title={projects.length === 0 ? 'Create a project first' : 'Create new task'}
        >
          + Create Task
        </button>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3">
          <AlertCircleIcon className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-rose-700 font-medium">{error}</div>
        </div>
      )}

      {/* Filter Toolbar */}
      <div className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <SearchBar
              id="tasks-search"
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Filter tasks by title..."
            />
          </div>

          {/* Project Filter Selector */}
          <div className="sm:w-64">
            <select
              value={projectFilter}
              onChange={(e) => setProjectFilter(e.target.value)}
              className="w-full h-10 px-3 py-2 rounded-lg border border-slate-300 text-xs font-medium bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors"
            >
              <option value="all">All Projects</option>
              {projects.map((p) => (
                <option key={p.id || p._id} value={p.id || p._id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-2 border-t border-slate-100">
          {/* Status Filter Buttons */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">
              Status:
            </span>
            {statusButtons.map((btn) => {
              const isActive = statusFilter === btn.key;
              return (
                <button
                  key={btn.key}
                  type="button"
                  onClick={() => setStatusFilter(btn.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                  }`}
                >
                  <span>{btn.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[11px] font-semibold ${
                      isActive
                        ? 'bg-blue-700/80 text-white'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {btn.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Priority Filter Buttons */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">
              Priority:
            </span>
            {priorityButtons.map((btn) => {
              const isActive = priorityFilter === btn.key;
              return (
                <button
                  key={btn.key}
                  type="button"
                  onClick={() => setPriorityFilter(btn.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                  }`}
                >
                  <span>{btn.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[11px] font-semibold ${
                      isActive
                        ? 'bg-slate-950 text-white'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {btn.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Task List / Loading / Empty State */}
      {isLoading ? (
        <GridSkeleton count={5} type="task" />
      ) : tasks.length === 0 ? (
        <EmptyState
          title="No tasks found"
          message={
            searchQuery || statusFilter !== 'all' || priorityFilter !== 'all' || projectFilter !== 'all'
              ? 'No tasks matching your active filters and search terms.'
              : 'No tasks currently scheduled. Create your first task to start tracking work.'
          }
          actionText={
            searchQuery || statusFilter !== 'all' || priorityFilter !== 'all' || projectFilter !== 'all'
              ? 'Reset Filters'
              : '+ Create Task'
          }
          onAction={
            searchQuery || statusFilter !== 'all' || priorityFilter !== 'all' || projectFilter !== 'all'
              ? handleResetFilters
              : () => {
                  setEditingTask(null);
                  setIsTaskModalOpen(true);
                }
          }
        />
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => (
            <TaskCard
              key={task.id || task._id}
              task={task}
              onStatusChange={handleStatusChange}
              onEdit={(t) => {
                setEditingTask(t);
                setIsTaskModalOpen(true);
              }}
              onDelete={(t) => setTaskToDelete(t)}
            />
          ))}
        </div>
      )}

      {/* Create / Edit Task Modal */}
      <TaskModal
        isOpen={isTaskModalOpen}
        onClose={() => {
          setIsTaskModalOpen(false);
          setEditingTask(null);
        }}
        onSave={handleSaveTask}
        task={editingTask}
        projects={projects}
        users={users}
        defaultProjectId={projectFilter !== 'all' ? projectFilter : ''}
      />

      {/* Delete Confirmation Modal */}
      <ConfirmationModal
        isOpen={Boolean(taskToDelete)}
        title="Delete Task?"
        message={`Are you sure you want to permanently delete "${taskToDelete?.title}"?`}
        confirmText="Delete Task"
        isLoading={isDeleteLoading}
        onConfirm={handleConfirmDelete}
        onClose={() => setTaskToDelete(null)}
      />
    </div>
  );
};

export default TasksPage;
