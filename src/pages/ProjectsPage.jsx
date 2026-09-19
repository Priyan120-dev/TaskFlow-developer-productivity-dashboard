import React, { useState, useEffect } from 'react';
import { projects } from '../data/mockData';
import ProjectCard from '../components/ProjectCard';
import SearchBar from '../components/SearchBar';
import EmptyState from '../components/EmptyState';
import { GridSkeleton } from '../components/LoadingSkeleton';

export const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // 1-second loading skeleton state on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // MISSING 7: Compute dynamic counts for filter buttons
  const counts = {
    all: projects.length,
    active: projects.filter((p) => p.status === 'active').length,
    completed: projects.filter((p) => p.status === 'completed').length,
    'on-hold': projects.filter((p) => p.status === 'on-hold').length,
  };

  const filterButtons = [
    { key: 'all', label: 'All', count: counts.all },
    { key: 'active', label: 'Active', count: counts.active },
    { key: 'completed', label: 'Completed', count: counts.completed },
    { key: 'on-hold', label: 'On Hold', count: counts['on-hold'] },
  ];

  // Real-time filtering by name and status
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase().trim());
    const matchesStatus =
      statusFilter === 'all' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleResetFilters = () => {
    setSearchQuery('');
    setStatusFilter('all');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Projects
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage, track progress, and monitor deliverables across teams
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Real-time search bar */}
        <div className="w-full md:w-80">
          <SearchBar
            id="projects-search"
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Filter projects by name..."
          />
        </div>

        {/* Filter Buttons with Dynamic Count Badges (MISSING 7) */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {filterButtons.map((btn) => {
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
      </div>

      {/* Content Area: Loading Skeleton, Empty State, or Grid */}
      {isLoading ? (
        <GridSkeleton count={4} type="project" />
      ) : filteredProjects.length === 0 ? (
        <EmptyState
          title="No projects found"
          message={`No projects matching "${searchQuery}" in ${
            statusFilter === 'all' ? 'any' : statusFilter
          } status.`}
          actionText="Reset Filters"
          onAction={handleResetFilters}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 desktop:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
