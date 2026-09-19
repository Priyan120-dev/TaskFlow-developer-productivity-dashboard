import React from 'react';
import { Link } from 'react-router-dom';
import { projects, tasks, recentActivity, currentUser } from '../data/mockData';
import StatsCard from '../components/StatsCard';
import ProjectCard from '../components/ProjectCard';
import TaskCard from '../components/TaskCard';
import {
  FolderKanbanIcon,
  CheckSquareIcon,
  ClockIcon,
  LayoutDashboardIcon,
  CreateIcon,
  UpdateIcon,
  CompleteIcon,
  DeleteIcon,
} from '../components/Icons';

export const DashboardPage = () => {
  // MISSING 5: Computed values from mockData
  const totalProjects = projects.length;
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.status === 'done').length;
  const inProgressTasks = tasks.filter((t) => t.status === 'in-progress').length;

  // Format current date: e.g. Saturday, September 19, 2026
  const currentDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date());

  // Helper for activity icon mapping (MISSING 10)
  const renderActivityIcon = (type) => {
    switch (type) {
      case 'create':
        return (
          <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
            <CreateIcon className="w-4 h-4 text-emerald-600" />
          </div>
        );
      case 'update':
        return (
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0">
            <UpdateIcon className="w-4 h-4 text-blue-600" />
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
          <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0">
            <UpdateIcon className="w-4 h-4 text-slate-600" />
          </div>
        );
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200/80">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Good morning, {currentUser.name}
          </h1>
          <p className="text-sm text-slate-500 mt-1 font-medium">
            Here's what is happening with your projects today · {currentDate}
          </p>
        </div>
      </div>

      {/* 4 Stats Cards (Computed from data) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatsCard
          title="Total Projects"
          value={totalProjects}
          icon={<FolderKanbanIcon className="w-6 h-6" />}
          color="blue"
          helperText="Active workspaces"
        />
        <StatsCard
          title="Total Tasks"
          value={totalTasks}
          icon={<CheckSquareIcon className="w-6 h-6" />}
          color="purple"
          helperText="Assigned work items"
        />
        <StatsCard
          title="Completed Tasks"
          value={completedTasks}
          icon={<CheckSquareIcon className="w-6 h-6" />}
          color="emerald"
          helperText={`${Math.round((completedTasks / totalTasks) * 100)}% overall completion`}
        />
        <StatsCard
          title="In Progress"
          value={inProgressTasks}
          icon={<ClockIcon className="w-6 h-6" />}
          color="amber"
          helperText="Currently active"
        />
      </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 desktop:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Split Section: Recent Tasks & Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Tasks (2 cols) */}
        <section className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Recent Tasks</h2>
              <p className="text-xs text-slate-500">Priority and status updates</p>
            </div>
            <Link
              to="/tasks"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
            >
              View all tasks →
            </Link>
          </div>

          <div className="space-y-3">
            {tasks.slice(0, 5).map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </section>

        {/* Recent Activity Feed (1 col) */}
        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Recent Activity</h2>
            <p className="text-xs text-slate-500">Audit log of system events</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-sm space-y-4">
            {recentActivity.map((act) => (
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
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
