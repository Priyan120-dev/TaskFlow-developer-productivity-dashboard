import React from 'react';
import { NavLink } from 'react-router-dom';
import { currentUser } from '../data/mockData';
import {
  LayoutDashboardIcon,
  FolderKanbanIcon,
  CheckSquareIcon,
} from './Icons';

export const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboardIcon },
    { name: 'Projects', path: '/projects', icon: FolderKanbanIcon },
    { name: 'Tasks', path: '/tasks', icon: CheckSquareIcon },
  ];

  return (
    <aside
      className="hidden xl:flex flex-col w-64 fixed inset-y-0 left-0 z-40 text-slate-300"
      style={{ backgroundColor: '#0f172a' }}
    >
      {/* Brand Header */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800/80">
        <NavLink to="/dashboard" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform">
            TF
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white tracking-tight">
              Task<span className="text-blue-500">Flow</span>
            </span>
            <span className="text-[10px] text-slate-400 -mt-1 font-medium tracking-wider uppercase">
              Developer Hub
            </span>
          </div>
        </NavLink>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-6 px-4 space-y-1.5 overflow-y-auto">
        <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Navigation
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </div>

      {/* User Avatar & Info Section */}
      <div className="p-4 border-t border-slate-800/80 bg-slate-900/60">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-800/50">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
            {currentUser.avatar}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-white truncate">
              {currentUser.name}
            </p>
            <p className="text-xs text-slate-400 truncate">
              {currentUser.role}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
