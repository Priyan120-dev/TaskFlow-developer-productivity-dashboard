import React, { useState } from 'react';
import { aiApi, projectsApi, tasksApi } from '../services/api';
import { CloseIcon, AlertCircleIcon, FolderKanbanIcon } from './Icons';
import Badge from './Badge';

const PRESET_GOALS = [
  'Launch college event website in 10 days with registration and schedule',
  'Build an AI resume analyzer with authentication, resume upload, Gemini integration and deployment',
  'Mobile app dark mode overhaul with design tokens and accessibility',
  'Set up API rate limiting and Redis caching for microservices',
];

export const AiPlanModal = ({ isOpen, onClose, onPlanCreated }) => {
  const [goal, setGoal] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const [plan, setPlan] = useState(null);

  if (!isOpen) return null;

  const handleGenerate = async (targetGoal) => {
    const promptToUse = targetGoal || goal;
    if (!promptToUse || promptToUse.trim().length < 3) {
      setError('Please enter a goal of at least 3 characters.');
      return;
    }

    setError('');
    setIsGenerating(true);

    try {
      const res = await aiApi.generatePlan(promptToUse.trim());
      setPlan(res.data?.plan || null);
    } catch (err) {
      setError(err.message || 'Failed to generate plan. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleTaskChange = (index, field, value) => {
    if (!plan) return;
    const updatedTasks = [...plan.tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      [field]: value,
    };
    setPlan({
      ...plan,
      tasks: updatedTasks,
    });
  };

  const handleConfirmAddAll = async () => {
    if (!plan) return;
    setIsSaving(true);
    setError('');

    try {
      // 1. Create Project in MongoDB
      const projRes = await projectsApi.create({
        name: plan.projectTitle,
        description: plan.projectDescription || 'Created via AI Task Planner',
        color: plan.suggestedColor || '#3b82f6',
        status: 'active',
      });

      const newProject = projRes.data?.project;
      const projectId = newProject?.id || newProject?._id;

      if (!projectId) {
        throw new Error('Failed to create project from plan.');
      }

      // 2. Create Tasks in MongoDB
      for (const task of plan.tasks) {
        await tasksApi.create({
          title: task.title,
          description: task.description || '',
          priority: task.priority || 'medium',
          dueDate: task.suggestedDueDate || null,
          projectId,
          status: 'todo',
        });
      }

      if (onPlanCreated) {
        onPlanCreated(newProject);
      }

      // Reset and close
      setPlan(null);
      setGoal('');
      onClose();
    } catch (err) {
      setError(err.message || 'Failed to save generated tasks to MongoDB.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
          onClick={!isGenerating && !isSaving ? onClose : undefined}
        />

        {/* Modal Dialog */}
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl p-6 border border-slate-200">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm shadow-blue-500/20">
                <FolderKanbanIcon className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  AI Goal → Task Planner
                </h3>
                <p className="text-xs text-slate-500">
                  Convert goals into a structured milestone roadmap with Gemini
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              disabled={isGenerating || isSaving}
              className="text-slate-400 hover:text-slate-500 rounded-lg p-1 hover:bg-slate-100 transition-colors disabled:opacity-50"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          {error && (
            <div className="mt-4 p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-xs text-rose-700 font-medium">
              <AlertCircleIcon className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Goal Input Screen */}
          {!plan && !isGenerating && (
            <div className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="ai-goal-prompt"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  What do you want to build or accomplish?
                </label>
                <textarea
                  id="ai-goal-prompt"
                  rows={3}
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="e.g. Build an AI resume analyzer with authentication, resume upload, Gemini integration and deployment in 2 weeks..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors"
                />
              </div>

              <div>
                <p className="text-xs font-medium text-slate-500 mb-2">Or try an example goal:</p>
                <div className="flex flex-wrap gap-2">
                  {PRESET_GOALS.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setGoal(preset);
                        handleGenerate(preset);
                      }}
                      className="text-left text-xs px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-600 transition-colors border border-transparent hover:border-blue-200"
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleGenerate()}
                  disabled={!goal.trim()}
                  className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <span>Generate Plan</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          )}

          {/* Generating Loading State */}
          {isGenerating && (
            <div className="py-12 flex flex-col items-center justify-center space-y-4 text-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <svg className="w-6 h-6 animate-spin text-blue-600" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Generating Task Roadmap...</p>
                <p className="text-xs text-slate-500 mt-1 max-w-sm">
                  Gemini is analyzing requirements, estimating effort, and breaking down deliverables.
                </p>
              </div>
            </div>
          )}

          {/* Generated Plan Review Screen */}
          {plan && !isGenerating && (
            <div className="mt-4 space-y-5">
              {/* Project Title & Description preview */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                    Generated Project
                  </span>
                  <span
                    className="w-3.5 h-3.5 rounded-full"
                    style={{ backgroundColor: plan.suggestedColor || '#3b82f6' }}
                  />
                </div>
                <input
                  type="text"
                  value={plan.projectTitle}
                  onChange={(e) => setPlan({ ...plan, projectTitle: e.target.value })}
                  className="w-full text-base font-bold text-slate-900 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-blue-500 focus:bg-white px-1 py-0.5 rounded transition-all focus:outline-none"
                />
                <textarea
                  rows={2}
                  value={plan.projectDescription}
                  onChange={(e) => setPlan({ ...plan, projectDescription: e.target.value })}
                  className="w-full text-xs text-slate-600 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-blue-500 focus:bg-white px-1 py-0.5 rounded transition-all focus:outline-none"
                />
              </div>

              {/* Tasks Checklist */}
              <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider px-1">
                  <span>Milestone Tasks ({plan.tasks.length})</span>
                  <span>Review & Edit</span>
                </div>

                {plan.tasks.map((task, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <span className="text-[11px] font-bold text-slate-400">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <input
                          type="text"
                          value={task.title}
                          onChange={(e) => handleTaskChange(idx, 'title', e.target.value)}
                          className="w-full text-xs font-bold text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-1"
                        />
                      </div>

                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <select
                          value={task.priority}
                          onChange={(e) => handleTaskChange(idx, 'priority', e.target.value)}
                          className="text-[11px] font-semibold px-2 py-0.5 rounded border border-slate-200 bg-slate-50 focus:outline-none"
                        >
                          <option value="high">High</option>
                          <option value="medium">Medium</option>
                          <option value="low">Low</option>
                        </select>
                        {task.estimatedHours && (
                          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                            {task.estimatedHours}h
                          </span>
                        )}
                      </div>
                    </div>

                    <input
                      type="text"
                      value={task.description}
                      onChange={(e) => handleTaskChange(idx, 'description', e.target.value)}
                      placeholder="Technical description..."
                      className="w-full text-[11px] text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded px-1"
                    />

                    {task.reasoning && (
                      <p className="text-[10px] text-slate-400 italic px-1">
                        💡 {task.reasoning}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleGenerate()}
                  disabled={isSaving}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  ↻ Regenerate Plan
                </button>

                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPlan(null)}
                    disabled={isSaving}
                    className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    Edit Prompt
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirmAddAll}
                    disabled={isSaving}
                    className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all flex items-center gap-2 disabled:opacity-60"
                  >
                    {isSaving && (
                      <svg className="animate-spin w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    )}
                    <span>{isSaving ? 'Creating in MongoDB...' : 'Add All Tasks to Workspace'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiPlanModal;
