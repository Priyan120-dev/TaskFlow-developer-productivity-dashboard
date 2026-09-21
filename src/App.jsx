import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import TasksPage from './pages/TasksPage';
import AiCopilotModal from './components/AiCopilotModal';
import { CopilotIcon } from './components/Icons';

// Layout wrapper for authenticated dashboard view
const AuthenticatedLayout = ({ children }) => {
  const [isCopilotOpen, setIsCopilotOpen] = React.useState(false);

  React.useEffect(() => {
    const handleOpen = () => setIsCopilotOpen(true);
    window.addEventListener('taskflow:open-copilot', handleOpen);
    return () => window.removeEventListener('taskflow:open-copilot', handleOpen);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex relative">
      {/* Desktop Sidebar (visible on xl / >=1280px) */}
      <Sidebar />

      {/* Main App Shell */}
      <div className="flex-1 flex flex-col min-w-0 xl:pl-64">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>

      {/* Global Floating AI Copilot Trigger */}
      <button
        type="button"
        onClick={() => setIsCopilotOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all font-semibold text-sm transform hover:-translate-y-0.5 cursor-pointer group border border-white/20"
        title="Open TaskFlow AI Copilot"
      >
        <CopilotIcon size="base" className="group-hover:scale-110 transition-transform shadow-none" />
        <span className="font-medium">Ask AI Copilot</span>
      </button>

      {/* Global AI Copilot Modal */}
      <AiCopilotModal
        isOpen={isCopilotOpen}
        onClose={() => setIsCopilotOpen(false)}
        onWorkspaceMutated={() => window.dispatchEvent(new CustomEvent('taskflow:refresh-data'))}
      />
    </div>
  );
};

export const App = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Authentication Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Application Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AuthenticatedLayout>
                <DashboardPage />
              </AuthenticatedLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <AuthenticatedLayout>
                <ProjectsPage />
              </AuthenticatedLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <ProtectedRoute>
              <AuthenticatedLayout>
                <ProjectDetailsPage />
              </AuthenticatedLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <AuthenticatedLayout>
                <TasksPage />
              </AuthenticatedLayout>
            </ProtectedRoute>
          }
        />

        {/* Default / Fallback Routes */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
