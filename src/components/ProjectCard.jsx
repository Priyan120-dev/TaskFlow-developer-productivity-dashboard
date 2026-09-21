import React from 'react';
import { Link } from 'react-router-dom';
import Badge from './Badge';
import ProgressBar from './ProgressBar';
import { CalendarIcon, UpdateIcon, DeleteIcon } from './Icons';

export const ProjectCard = ({ project, onEdit, onDelete, canManage = true }) => {
  const {
    id,
    _id,
    name,
    description,
    status,
    completedTasks = 0,
    taskCount = 0,
    dueDate,
    color = '#3b82f6',
  } = project;

  const projectId = id || _id;
  const percentage = taskCount > 0 ? Math.round((completedTasks / taskCount) * 100) : 0;

  // Format date nicely e.g., Oct 15, 2026
  const formattedDate = dueDate
    ? new Date(dueDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : 'No due date';

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <Link
            to={`/projects/${projectId}`}
            className="flex items-center gap-2 group-hover:text-blue-600 transition-colors flex-1 min-w-0"
          >
            <span
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: color }}
            />
            <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 truncate">
              {name}
            </h3>
          </Link>

          <div className="flex items-center gap-1.5 flex-shrink-0">
            <Badge type="status" value={status} />

            {canManage && (onEdit || onDelete) && (
              <div className="flex items-center gap-1 pl-1 border-l border-slate-200">
                {onEdit && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onEdit(project);
                    }}
                    title="Edit project"
                    className="p-1 rounded text-slate-400 hover:text-blue-600 hover:bg-slate-100 transition-colors"
                  >
                    <UpdateIcon className="w-3.5 h-3.5" />
                  </button>
                )}
                {onDelete && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onDelete(project);
                    }}
                    title="Delete project"
                    className="p-1 rounded text-slate-400 hover:text-rose-600 hover:bg-slate-100 transition-colors"
                  >
                    <DeleteIcon className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        <p className="text-sm text-slate-500 mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="space-y-4 pt-2 border-t border-slate-100">
        <div>
          <div className="flex justify-between items-center text-xs text-slate-500 mb-1.5 font-medium">
            <span>Tasks</span>
            <span className="text-slate-700 font-semibold">
              {completedTasks}/{taskCount} done
            </span>
          </div>
          <ProgressBar progress={percentage} showLabel={false} color={color} />
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
          <div className="flex items-center gap-1.5">
            <CalendarIcon className="w-3.5 h-3.5 text-slate-400" />
            <span>Due {formattedDate}</span>
          </div>
          <Link
            to={`/projects/${projectId}`}
            className="font-semibold text-blue-600 hover:underline text-xs"
          >
            Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
