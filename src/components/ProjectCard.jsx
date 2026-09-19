import React from 'react';
import Badge from './Badge';
import ProgressBar from './ProgressBar';
import { CalendarIcon } from './Icons';

export const ProjectCard = ({ project }) => {
  const {
    name,
    description,
    status,
    completedTasks,
    taskCount,
    dueDate,
    color = '#3b82f6',
  } = project;

  const percentage = taskCount > 0 ? Math.round((completedTasks / taskCount) * 100) : 0;

  // Format date nicely e.g., Oct 15, 2026
  const formattedDate = new Date(dueDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: color }}
            />
            <h3 className="text-base font-bold text-slate-900 line-clamp-1">{name}</h3>
          </div>
          <Badge type="status" value={status} />
        </div>

        <p className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="space-y-4 pt-2 border-t border-slate-100">
        <div>
          <div className="flex justify-between items-center text-xs text-slate-500 mb-1.5 font-medium">
            <span>Tasks</span>
            <span className="text-slate-700 font-semibold">{completedTasks}/{taskCount} done</span>
          </div>
          <ProgressBar progress={percentage} showLabel={false} color={color} />
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
          <div className="flex items-center gap-1.5">
            <CalendarIcon className="w-3.5 h-3.5 text-slate-400" />
            <span>Due {formattedDate}</span>
          </div>
          <span className="font-semibold text-slate-700">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
