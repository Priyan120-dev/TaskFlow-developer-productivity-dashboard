import React from 'react';

/**
 * Badge component for status and priority labeling.
 * @param {'status' | 'priority' | 'overdue' | 'custom'} type
 * @param {string} value
 * @param {string} [className]
 */
export const Badge = ({ type = 'status', value, label, className = '' }) => {
  const normalized = (value || '').toLowerCase().trim();

  let styles = 'bg-slate-100 text-slate-700 border-slate-200';
  let displayLabel = label || value;

  if (type === 'status') {
    switch (normalized) {
      case 'todo':
        styles = 'bg-slate-100 text-slate-700 border-slate-300';
        displayLabel = label || 'Todo';
        break;
      case 'in-progress':
        styles = 'bg-blue-50 text-blue-700 border-blue-200';
        displayLabel = label || 'In Progress';
        break;
      case 'done':
      case 'completed':
        styles = 'bg-emerald-50 text-emerald-700 border-emerald-200';
        displayLabel = label || (normalized === 'completed' ? 'Completed' : 'Done');
        break;
      case 'active':
        styles = 'bg-blue-50 text-blue-700 border-blue-200';
        displayLabel = label || 'Active';
        break;
      case 'on-hold':
        styles = 'bg-amber-50 text-amber-700 border-amber-200';
        displayLabel = label || 'On Hold';
        break;
      default:
        styles = 'bg-slate-100 text-slate-700 border-slate-200';
    }
  } else if (type === 'priority') {
    switch (normalized) {
      case 'low':
        styles = 'bg-emerald-50 text-emerald-700 border-emerald-200';
        displayLabel = label || 'Low';
        break;
      case 'medium':
        styles = 'bg-amber-50 text-amber-700 border-amber-200';
        displayLabel = label || 'Medium';
        break;
      case 'high':
        styles = 'bg-rose-50 text-rose-700 border-rose-200';
        displayLabel = label || 'High';
        break;
      default:
        styles = 'bg-slate-100 text-slate-700 border-slate-200';
    }
  } else if (type === 'overdue') {
    styles = 'bg-rose-100 text-rose-700 border-rose-300 font-semibold';
    displayLabel = label || 'Overdue';
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles} ${className}`}
    >
      {displayLabel}
    </span>
  );
};

export default Badge;
