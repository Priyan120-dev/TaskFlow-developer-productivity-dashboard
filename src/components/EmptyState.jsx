import React from 'react';
import { SearchIcon } from './Icons';

export const EmptyState = ({
  title = 'No results found',
  message = "We couldn't find anything matching your search and filter criteria.",
  actionText = 'Clear Filters',
  onAction,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-12 text-center max-w-md mx-auto my-8">
      <div className="w-14 h-14 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
        <SearchIcon className="w-6 h-6" />
      </div>
      <h3 className="text-base font-bold text-slate-800 mb-1">{title}</h3>
      <p className="text-sm text-slate-500 mb-6 max-w-sm mx-auto leading-relaxed">
        {message}
      </p>
      {onAction && (
        <button
          type="button"
          onClick={onAction}
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
