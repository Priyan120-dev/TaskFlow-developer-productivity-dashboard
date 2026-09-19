import React, { useState, useEffect } from 'react';
import { tasks } from '../data/mockData';
import TaskCard from '../components/TaskCard';
import SearchBar from '../components/SearchBar';
import EmptyState from '../components/EmptyState';
import { GridSkeleton } from '../components/LoadingSkeleton';

export const TasksPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // 1-second loading skeleton state on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // MISSING 8: Dynamically compute status & priority filter counts from tasks array
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

  // MISSING 9: Combined filter logic (Search + Status + Priority)
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase().trim());
    const matchesStatus =
      statusFilter === 'all' || task.status === statusFilter;
    const matchesPriority =
      priorityFilter === 'all' || task.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const handleResetFilters = () => {
    setSearchQuery('');
    setStatusFilter('all');
    setPriorityFilter('all');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Tasks
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Track issues, feature work, and prioritize engineering milestones
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-sm space-y-4">
        {/* Real-time search bar */}
        <div className="w-full">
          <SearchBar
            id="tasks-search"
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Filter tasks by title..."
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-1 border-t border-slate-100">
          {/* Status Filter Buttons (MISSING 8) */}
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

          {/* Priority Filter Buttons (MISSING 8) */}
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
      ) : filteredTasks.length === 0 ? (
        <EmptyState
          title="No tasks match your criteria"
          message={`No tasks matching "${searchQuery}" with status "${statusFilter}" and priority "${priorityFilter}".`}
          actionText="Reset Filters"
          onAction={handleResetFilters}
        />
      ) : (
        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TasksPage;
