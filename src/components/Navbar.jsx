import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { currentUser } from '../data/mockData';
import {
  LayoutDashboardIcon,
  FolderKanbanIcon,
  CheckSquareIcon,
  MenuIcon,
  CloseIcon,
} from './Icons';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboardIcon },
    { name: 'Projects', path: '/projects', icon: FolderKanbanIcon },
    { name: 'Tasks', path: '/tasks', icon: CheckSquareIcon },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo (visible on mobile/tablet or top bar) */}
          <div className="flex items-center gap-3">
            {/* Mobile menu button (hidden on desktop >= 1280px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>

            <NavLink to="/dashboard" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm shadow-blue-500/30">
                TF
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                Task<span className="text-blue-600">Flow</span>
              </span>
            </NavLink>
          </div>

          {/* Desktop/Tablet Nav Links in Header (for screens where sidebar isn't visible, or quick access) */}
          <nav className="hidden md:flex xl:hidden items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600 font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* User Profile Avatar */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-sm font-semibold text-slate-900 leading-tight">
                {currentUser.name}
              </span>
              <span className="text-xs text-slate-500">
                {currentUser.role}
              </span>
            </div>

            <div
              className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold text-sm border-2 border-slate-100 shadow-sm"
              title={`${currentUser.name} (${currentUser.role})`}
            >
              {currentUser.avatar}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                <span>{link.name}</span>
              </NavLink>
            );
          })}
          <div className="pt-3 mt-2 border-t border-slate-100 flex items-center gap-3 px-3">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-semibold">
              {currentUser.avatar}
            </div>
            <div className="text-xs">
              <p className="font-semibold text-slate-800">{currentUser.name}</p>
              <p className="text-slate-500">{currentUser.email}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
