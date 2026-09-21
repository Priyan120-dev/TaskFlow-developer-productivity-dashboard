import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { statsApi, projectsApi, tasksApi } from '../services/api';
import StatsCard from '../components/StatsCard';
import ProjectCard from '../components/ProjectCard';
import TaskCard from '../components/TaskCard';
import EmptyState from '../components/EmptyState';
import DailyFocusCard from '../components/DailyFocusCard';
import {
  FolderKanbanIcon,
  CheckSquareIcon,
  ClockIcon,
  CreateIcon,
  UpdateIcon,
  CompleteIcon,
  DeleteIcon,
  AlertCircleIcon,
  CopilotIcon,
} from '../components/Icons';

export const DashboardPage = () => {
  const { user } = useAuth();

  const [stats, setStats] = useState(null);
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchDashboardData = useCallback(async () => {
    setIsLoading(true);
    setError('');
    try {
      const [statsRes, projRes, tasksRes] = await Promise.all([
        statsApi.getStats(),
        projectsApi.getAll(),
        tasksApi.getAll(),
      ]);

      setStats(statsRes.data || null);
      setProjects(projRes.data?.projects || []);
      setTasks(tasksRes.data?.tasks || []);
    } catch (err) {
      setError(err.message || 'Failed to load dashboard data.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboardData();

    const handleRefresh = () => fetchDashboardData();
    window.addEventListener('taskflow:refresh-data', handleRefresh);

    return () => {
      window.removeEventListener('taskflow:refresh-data', handleRefresh);
    };
  }, [fetchDashboardData]);

  // Quick task status change from dashboard
  const handleTaskStatusChange = async (taskId, newStatus) => {
    try {
      setTasks((prev) =>
        prev.map((t) => ((t.id || t._id) === taskId ? { ...t, status: newStatus } : t))
      );
      await tasksApi.update(taskId, { status: newStatus });
      // Refresh stats and projects overview to keep numbers accurate
      const [statsRes, projRes] = await Promise.all([
        statsApi.getStats(),
        projectsApi.getAll(),
      ]);
      setStats(statsRes.data || null);
      setProjects(projRes.data?.projects || []);
    } catch {
      await fetchDashboardData();
    }
  };

  const currentDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date());

  const totalProjects = stats?.projects?.total ?? projects.length;
  const totalTasks = stats?.tasks?.total ?? tasks.length;
  const completedTasks = stats?.tasks?.completed ?? tasks.filter((t) => t.status === 'done').length;
  const inProgressTasks = stats?.tasks?.inProgress ?? tasks.filter((t) => t.status === 'in-progress').length;
  const completionRate = stats?.tasks?.completionRate ?? (totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0);

  // Derive recent activity dynamically from actual tasks and projects
  const recentActivity = [
    ...tasks.slice(0, 3).map((t) => ({
      id: `task-${t.id || t._id}`,
      action: t.status === 'done' ? 'Completed task' : 'Active task item',
      target: t.title,
      time: t.updatedAt ? new Date(t.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Recently',
      type: t.status === 'done' ? 'complete' : 'update',
    })),
    ...projects.slice(0, 2).map((p) => ({
      id: `proj-${p.id || p._id}`,
      action: 'Active project workspace',
      target: p.name,
      time: p.createdAt ? new Date(p.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric' }) : 'Ongoing',
      type: 'create',
    })),
  ];

  const renderActivityIcon = (type) => {
    switch (type) {
      case 'create':
        return (
          <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
            <CreateIcon className="w-4 h-4 text-emerald-600" />
          </div>
        );
      case 'complete':
        return (
          <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
            <CompleteIcon className="w-4 h-4 text-emerald-600" />
          </div>
        );
      case 'delete':
        return (
          <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center flex-shrink-0">
            <DeleteIcon className="w-4 h-4 text-rose-600" />
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
            <UpdateIcon className="w-4 h-4 text-blue-600" />
          </div>
        );
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200/80">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Good day, {user?.name || 'Developer'}
          </h1>
          <p className="text-sm text-slate-500 mt-1 font-medium">
            Here is what is happening with your MongoDB Atlas database today · {currentDate}
          </p>
        </div>

        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent('taskflow:open-copilot'))}
          className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl shadow-sm transition-all gap-2.5 self-start sm:self-auto cursor-pointer group"
        >
          <CopilotIcon size="sm" className="group-hover:scale-105 transition-transform" />
          <span>TaskFlow Copilot</span>
        </button>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3">
          <AlertCircleIcon className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-rose-700 font-medium">{error}</div>
        </div>
      )}

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatsCard
          title="Total Projects"
          value={isLoading ? '...' : totalProjects}
          icon={<FolderKanbanIcon className="w-6 h-6" />}
          color="blue"
          helperText="Active database workspaces"
        />
        <StatsCard
          title="Total Tasks"
          value={isLoading ? '...' : totalTasks}
          icon={<CheckSquareIcon className="w-6 h-6" />}
          color="purple"
          helperText="Assigned work items"
        />
        <StatsCard
          title="Completed Tasks"
          value={isLoading ? '...' : completedTasks}
          icon={<CheckSquareIcon className="w-6 h-6" />}
          color="emerald"
          helperText={`${completionRate}% overall completion`}
        />
        <StatsCard
          title="In Progress"
          value={isLoading ? '...' : inProgressTasks}
          icon={<ClockIcon className="w-6 h-6" />}
          color="amber"
          helperText="Currently active work"
        />
      </div>

      {/* AI Daily Focus & Priority Briefing */}
      <DailyFocusCard onTaskCompleted={fetchDashboardData} />

      {/* Projects Grid Overview */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Projects Overview</h2>
            <p className="text-xs text-slate-500">Track milestones and progress</p>
          </div>
          <Link
            to="/projects"
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
          >
            View all projects →
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-44 bg-white rounded-xl border border-slate-200 animate-pulse p-5" />
            <div className="h-44 bg-white rounded-xl border border-slate-200 animate-pulse p-5" />
            <div className="h-44 bg-white rounded-xl border border-slate-200 animate-pulse p-5" />
          </div>
        ) : projects.length === 0 ? (
          <EmptyState
            title="No projects in database"
            message="Create a project to start tracking milestones and task progress."
            actionText="+ Go to Projects"
            onAction={() => {}}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 desktop:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id || project._id} project={project} />
            ))}
          </div>
        )}
      </section>

      {/* Split Section: Recent Tasks & Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Tasks */}
        <section className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Recent Tasks</h2>
              <p className="text-xs text-slate-500">Live priority and status updates</p>
            </div>
            <Link
              to="/tasks"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
            >
              View all tasks →
            </Link>
          </div>

          {isLoading ? (
            <div className="space-y-3">
              <div className="h-16 bg-white rounded-xl border border-slate-200 animate-pulse" />
              <div className="h-16 bg-white rounded-xl border border-slate-200 animate-pulse" />
              <div className="h-16 bg-white rounded-xl border border-slate-200 animate-pulse" />
            </div>
          ) : tasks.length === 0 ? (
            <EmptyState
              title="No tasks found"
              message="No tasks currently scheduled in your MongoDB database."
              actionText="+ Go to Tasks"
              onAction={() => {}}
            />
          ) : (
            <div className="space-y-3">
              {tasks.slice(0, 5).map((task) => (
                <TaskCard
                  key={task.id || task._id}
                  task={task}
                  onStatusChange={handleTaskStatusChange}
                />
              ))}
            </div>
          )}
        </section>

        {/* Live Activity Feed */}
        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Recent Activity</h2>
            <p className="text-xs text-slate-500">Audit trail of database events</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-sm space-y-4">
            {recentActivity.length === 0 ? (
              <p className="text-xs text-slate-400 text-center py-6">No recent events recorded.</p>
            ) : (
              recentActivity.map((act) => (
                <div key={act.id} className="flex items-start gap-3 text-sm">
                  {renderActivityIcon(act.type)}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-900">
                      <span className="font-semibold">{act.action}:</span>{' '}
                      <span className="text-slate-600 truncate">{act.target}</span>
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{act.time}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
