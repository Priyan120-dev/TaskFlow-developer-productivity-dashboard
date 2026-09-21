import React, { useState, useEffect, useCallback } from 'react';
import { projectsApi } from '../services/api';
import ProjectCard from '../components/ProjectCard';
import SearchBar from '../components/SearchBar';
import EmptyState from '../components/EmptyState';
import ProjectModal from '../components/ProjectModal';
import ConfirmationModal from '../components/ConfirmationModal';
import AiPlanModal from '../components/AiPlanModal';
import { GridSkeleton } from '../components/LoadingSkeleton';
import { AlertCircleIcon } from '../components/Icons';

export const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Modals state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAiPlanOpen, setIsAiPlanOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const fetchProjects = useCallback(async () => {
    setIsLoading(true);
    setError('');
    try {
      const res = await projectsApi.getAll({
        search: searchQuery,
        status: statusFilter,
      });
      setProjects(res.data?.projects || []);
    } catch (err) {
      setError(err.message || 'Failed to fetch projects.');
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery, statusFilter]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProjects();
    }, 250);

    const handleRefresh = () => {
      fetchProjects();
    };
    window.addEventListener('taskflow:refresh-data', handleRefresh);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('taskflow:refresh-data', handleRefresh);
    };
  }, [fetchProjects]);

  // Compute dynamic counts for filter buttons
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

  const handleSaveProject = async (projectData) => {
    if (editingProject) {
      const id = editingProject.id || editingProject._id;
      await projectsApi.update(id, projectData);
    } else {
      await projectsApi.create(projectData);
    }
    setEditingProject(null);
    await fetchProjects();
  };

  const handleConfirmDelete = async () => {
    if (!projectToDelete) return;
    setIsDeleteLoading(true);
    try {
      const id = projectToDelete.id || projectToDelete._id;
      await projectsApi.delete(id);
      setProjectToDelete(null);
      await fetchProjects();
    } catch (err) {
      setError(err.message || 'Failed to delete project.');
      setProjectToDelete(null);
    } finally {
      setIsDeleteLoading(false);
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setStatusFilter('all');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Projects
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage, track progress, and monitor deliverables across teams
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsAiPlanOpen(true)}
            className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg shadow-sm transition-colors"
          >
            <span>AI Task Planner</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setEditingProject(null);
              setIsModalOpen(true);
            }}
            className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
          >
            + Create Project
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3">
          <AlertCircleIcon className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-rose-700 font-medium">{error}</div>
        </div>
      )}

      {/* Search & Filter Controls */}
      <div className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="w-full md:w-80">
          <SearchBar
            id="projects-search"
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Filter projects by name..."
          />
        </div>

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

      {/* Content Area */}
      {isLoading ? (
        <GridSkeleton count={4} type="project" />
      ) : projects.length === 0 ? (
        <EmptyState
          title="No projects found"
          message={
            searchQuery || statusFilter !== 'all'
              ? `No projects matching "${searchQuery}" in ${statusFilter} status.`
              : 'Create your first project to start organizing team tasks and deliverables.'
          }
          actionText={searchQuery || statusFilter !== 'all' ? 'Reset Filters' : '+ Create Project'}
          onAction={
            searchQuery || statusFilter !== 'all'
              ? handleResetFilters
              : () => {
                  setEditingProject(null);
                  setIsModalOpen(true);
                }
          }
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 desktop:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id || project._id}
              project={project}
              onEdit={(p) => {
                setEditingProject(p);
                setIsModalOpen(true);
              }}
              onDelete={(p) => setProjectToDelete(p)}
            />
          ))}
        </div>
      )}

      {/* Create / Edit Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingProject(null);
        }}
        onSave={handleSaveProject}
        project={editingProject}
      />

      {/* AI Task Planner Modal */}
      <AiPlanModal
        isOpen={isAiPlanOpen}
        onClose={() => setIsAiPlanOpen(false)}
        onPlanCreated={() => fetchProjects()}
      />

      {/* Delete Confirmation Modal */}
      <ConfirmationModal
        isOpen={Boolean(projectToDelete)}
        title="Delete Project?"
        message={`Are you sure you want to permanently delete "${projectToDelete?.name}"? All associated tasks will also be deleted.`}
        confirmText="Delete Project"
        isLoading={isDeleteLoading}
        onConfirm={handleConfirmDelete}
        onClose={() => setProjectToDelete(null)}
      />
    </div>
  );
};

export default ProjectsPage;
