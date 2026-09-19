import React from 'react';
import Badge from './Badge';
import { CalendarIcon } from './Icons';

export const TaskCard = ({ task }) => {
  const {
    title,
    description,
    status,
    priority,
    dueDate,
    projectName,
  } = task;

  // MISSING 6: Check if task is overdue
  const isOverdue = new Date(task.dueDate) < new Date() && task.status !== 'done';

  const formattedDate = new Date(dueDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div
      className={`bg-white rounded-xl border border-slate-200/90 p-4 shadow-sm hover:shadow transition-all ${
        isOverdue ? 'border-l-4 border-l-red-500 border-red-200' : ''
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h4 className="text-sm font-semibold text-slate-900 truncate">{title}</h4>
            {projectName && (
              <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium">
                {projectName}
              </span>
            )}
          </div>
          {description && (
            <p className="text-xs text-slate-500 line-clamp-1 mb-2 sm:mb-0">
              {description}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2.5 flex-wrap flex-shrink-0">
          <Badge type="status" value={status} />
          <Badge type="priority" value={priority} />

          <div className="flex items-center gap-1.5 text-xs text-slate-500 pl-1 border-l border-slate-200">
            <CalendarIcon className="w-3.5 h-3.5 text-slate-400" />
            <span className={isOverdue ? 'text-red-600 font-semibold' : ''}>
              {formattedDate}
            </span>
            {isOverdue && <Badge type="overdue" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
