import React from 'react';
import { SearchIcon, CloseIcon } from './Icons';

export const SearchBar = ({
  value = '',
  onChange,
  placeholder = 'Search...',
  className = '',
  id = 'search-input',
}) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <div className="absolute left-3.5 text-slate-400 pointer-events-none flex items-center">
        <SearchIcon className="w-4 h-4" />
      </div>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-9 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute right-3 text-slate-400 hover:text-slate-600 focus:outline-none p-0.5 rounded-full hover:bg-slate-100 transition-colors"
          title="Clear search"
          aria-label="Clear search"
        >
          <CloseIcon className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
