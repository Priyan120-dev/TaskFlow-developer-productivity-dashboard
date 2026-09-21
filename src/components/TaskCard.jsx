import React from 'react';
import Badge from './Badge';
import { CalendarIcon, UpdateIcon, DeleteIcon, CheckSquareIcon } from './Icons';

export const TaskCard = ({
  task,
  onStatusChange,
  onEdit,
  onDelete,
  canManage = true,
}) => {
  const {
    id,
    _id,
    title,
    description,
    status = 'todo',
    priority = 'medium',
    dueDate,
    projectName,
    project,
  } = task;

  const taskId = id || _id;
  const pName = projectName || (project && typeof project === 'object' ? project.name : '');

  const isOverdue = dueDate && new Date(dueDate) < new Date() && status !== 'done';

  const formattedDate = dueDate
    ? new Date(dueDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : 'No date';

  const nextStatusMap = {
    todo: 'in-progress',
    'in-progress': 'done',
    done: 'todo',
  };

  const handleCycleStatus = (e) => {
    e.stopPropagation();
    if (onStatusChange) {
      onStatusChange(taskId, nextStatusMap[status] || 'todo');
    }
  };

  return (
    <div
      className={`bg-white rounded-xl border border-slate-200/90 p-4 shadow-sm hover:shadow transition-all group ${
        isOverdue ? 'border-l-4 border-l-red-500 border-red-200' : ''
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            {onStatusChange && (
              <button
                type="button"
                onClick={handleCycleStatus}
                title={`Click to mark ${nextStatusMap[status] || 'next'}`}
                className={`w-5 h-5 rounded flex items-center justify-center transition-colors border ${
                  status === 'done'
                    ? 'bg-emerald-600 border-emerald-600 text-white'
                    : 'border-slate-300 hover:border-blue-500 text-transparent hover:text-slate-300'
                }`}
              >
                <CheckSquareIcon className="w-3.5 h-3.5" />
              </button>
            )}

            <h4
              className={`text-sm font-semibold truncate ${
                status === 'done' ? 'line-through text-slate-400' : 'text-slate-900'
              }`}
            >
              {title}
            </h4>

            {pName && (
              <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-medium">
                {pName}
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
          <button
            type="button"
            onClick={onStatusChange ? handleCycleStatus : undefined}
            className={onStatusChange ? 'cursor-pointer hover:opacity-85' : 'cursor-default'}
            title={onStatusChange ? `Status: ${status} (Click to change)` : `Status: ${status}`}
          >
            <Badge type="status" value={status} />
          </button>
          <Badge type="priority" value={priority} />

          <div className="flex items-center gap-1.5 text-xs text-slate-500 pl-1 border-l border-slate-200">
            <CalendarIcon className="w-3.5 h-3.5 text-slate-400" />
            <span className={isOverdue ? 'text-red-600 font-semibold' : ''}>
              {formattedDate}
            </span>
            {isOverdue && <Badge type="overdue" />}
          </div>

          {canManage && (onEdit || onDelete) && (
            <div className="flex items-center gap-1 pl-1 border-l border-slate-200">
              {onEdit && (
                <button
                  type="button"
                  onClick={() => onEdit(task)}
                  title="Edit task"
                  className="p-1 rounded text-slate-400 hover:text-blue-600 hover:bg-slate-100 transition-colors"
                >
                  <UpdateIcon className="w-3.5 h-3.5" />
                </button>
              )}
              {onDelete && (
                <button
                  type="button"
                  onClick={() => onDelete(task)}
                  title="Delete task"
                  className="p-1 rounded text-slate-400 hover:text-rose-600 hover:bg-slate-100 transition-colors"
                >
                  <DeleteIcon className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
