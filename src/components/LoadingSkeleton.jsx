import React from 'react';

export const ProjectSkeleton = () => (
  <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm animate-pulse space-y-4">
    <div className="flex justify-between items-center">
      <div className="h-5 bg-slate-200 rounded w-2/3" />
      <div className="h-5 bg-slate-200 rounded-full w-16" />
    </div>
    <div className="space-y-2">
      <div className="h-3.5 bg-slate-200 rounded w-full" />
      <div className="h-3.5 bg-slate-200 rounded w-4/5" />
    </div>
    <div className="pt-2 space-y-2 border-t border-slate-100">
      <div className="flex justify-between">
        <div className="h-3 bg-slate-200 rounded w-12" />
        <div className="h-3 bg-slate-200 rounded w-16" />
      </div>
      <div className="h-2 bg-slate-200 rounded-full w-full" />
      <div className="flex justify-between pt-1">
        <div className="h-3 bg-slate-200 rounded w-20" />
        <div className="h-3 bg-slate-200 rounded w-8" />
      </div>
    </div>
  </div>
);

export const TaskSkeleton = () => (
  <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm animate-pulse flex flex-col sm:flex-row sm:items-center justify-between gap-3">
    <div className="flex-1 space-y-2">
      <div className="h-4 bg-slate-200 rounded w-1/2" />
      <div className="h-3 bg-slate-200 rounded w-3/4" />
    </div>
    <div className="flex items-center gap-2">
      <div className="h-6 bg-slate-200 rounded-full w-16" />
      <div className="h-6 bg-slate-200 rounded-full w-14" />
      <div className="h-4 bg-slate-200 rounded w-20" />
    </div>
  </div>
);

export const GridSkeleton = ({ count = 4, type = 'project' }) => (
  <div
    className={
      type === 'project'
        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        : 'space-y-3'
    }
  >
    {Array.from({ length: count }).map((_, index) =>
      type === 'project' ? (
        <ProjectSkeleton key={index} />
      ) : (
        <TaskSkeleton key={index} />
      )
    )}
  </div>
);

export default GridSkeleton;
