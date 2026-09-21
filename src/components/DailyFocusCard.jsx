import React, { useState, useEffect, useCallback } from 'react';
import { aiApi, tasksApi } from '../services/api';
import { AlertCircleIcon, CheckSquareIcon } from './Icons';
import copilotLogoWhite from '../assets/copilot-symbol-white.png';

export const DailyFocusCard = ({ onTaskCompleted }) => {
  const [focusData, setFocusData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState('');

  const fetchFocus = useCallback(async (refresh = false) => {
    if (refresh) setIsRefreshing(true);
    else setIsLoading(true);
    setError('');

    try {
      const res = await aiApi.getDailyFocus();
      setFocusData(res.data || null);
    } catch (err) {
      setError(err.message || 'AI focus briefing is currently unavailable.');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchFocus();
  }, [fetchFocus]);

  const handleQuickDone = async (taskId) => {
    try {
      // Optimistically remove from focus list
      setFocusData((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          focusTasks: prev.focusTasks.filter((f) => f.task.id !== taskId),
        };
      });

      await tasksApi.update(taskId, { status: 'done' });
      if (onTaskCompleted) {
        onTaskCompleted();
      }
    } catch (err) {
      // Re-fetch if update failed
      fetchFocus(true);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl border border-blue-100 p-6 shadow-sm space-y-4 animate-pulse">
        <div className="flex items-center justify-between">
          <div className="h-6 bg-slate-200 rounded w-48" />
          <div className="h-8 bg-slate-100 rounded-lg w-28" />
        </div>
        <div className="h-16 bg-slate-100 rounded-xl" />
        <div className="space-y-3 pt-2">
          <div className="h-20 bg-slate-50 rounded-xl border border-slate-100" />
          <div className="h-20 bg-slate-50 rounded-xl border border-slate-100" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-slate-600">
          <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
            <AlertCircleIcon className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">AI Daily Focus</p>
            <p className="text-xs text-slate-500">{error}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => fetchFocus(true)}
          className="px-3.5 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
        >
          Retry Analysis
        </button>
      </div>
    );
  }

  const focusTasks = focusData?.focusTasks || [];
  const summary = focusData?.summary || 'Your AI focus briefing is ready.';
  const warnings = focusData?.warnings || [];

  return (
    <div className="bg-gradient-to-b from-blue-50/50 via-white to-white rounded-2xl border border-blue-100/90 p-6 shadow-sm space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center p-1.5 shadow-sm shadow-blue-500/20 flex-shrink-0">
            <img
              src={copilotLogoWhite}
              alt="AI Engine"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              Today's Focus
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                AI Engine
              </span>
            </h2>
            <p className="text-xs text-slate-500">
              Personalized priority briefing analyzed from your live MongoDB tasks
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => fetchFocus(true)}
          disabled={isRefreshing}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-sm transition-all disabled:opacity-50 self-start sm:self-auto"
          title="Re-analyze active tasks with Gemini"
        >
          <svg
            className={`w-3.5 h-3.5 text-slate-500 ${isRefreshing ? 'animate-spin text-blue-600' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>{isRefreshing ? 'Analyzing...' : 'Refresh Focus'}</span>
        </button>
      </div>

      {/* AI Executive Summary */}
      <div className="p-3.5 rounded-xl bg-blue-500/5 border border-blue-100 text-xs text-slate-700 leading-relaxed">
        <span className="font-semibold text-blue-900 mr-1.5">Executive Briefing:</span>
        {summary}
      </div>

      {/* Focus Tasks List */}
      {focusTasks.length === 0 ? (
        <div className="p-6 text-center rounded-xl bg-slate-50 border border-slate-200/60">
          <p className="text-sm font-semibold text-slate-800">You're all clear!</p>
          <p className="text-xs text-slate-500 mt-1">
            No high-urgency tasks currently need your attention. Enjoy your focus time!
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {focusTasks.map((item) => {
            const urgencyStyles =
              item.urgency === 'urgent'
                ? 'bg-rose-50 text-rose-700 border-rose-200'
                : item.urgency === 'high'
                ? 'bg-amber-50 text-amber-700 border-amber-200'
                : 'bg-blue-50 text-blue-700 border-blue-200';

            const urgencyIcon = item.urgency === 'urgent' ? '🔥' : item.urgency === 'high' ? '⚡' : '📌';

            return (
              <div
                key={item.task.id}
                className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-sm hover:shadow transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
              >
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.rank}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h4 className="text-sm font-bold text-slate-900 truncate">
                        {item.task.title}
                      </h4>
                      {item.task.projectName && (
                        <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                          {item.task.projectName}
                        </span>
                      )}
                      <span className={`text-[11px] px-2 py-0.5 rounded-full border font-semibold flex items-center gap-1 ${urgencyStyles}`}>
                        <span>{urgencyIcon}</span>
                        <span className="capitalize">{item.urgency}</span>
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong className="text-slate-800">Why now:</strong> {item.reason}
                    </p>
                    {item.suggestedAction && (
                      <p className="text-[11px] text-blue-600 font-medium mt-1">
                        → Next step: {item.suggestedAction}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-center">
                  <button
                    type="button"
                    onClick={() => handleQuickDone(item.task.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
                    title="Mark this task done in MongoDB"
                  >
                    <CheckSquareIcon className="w-3.5 h-3.5" />
                    <span>Done</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Warnings & Attention Callouts */}
      {warnings.length > 0 && (
        <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
            <span>⚠️</span>
            <span>Attention Items:</span>
          </div>
          <ul className="text-xs text-amber-800 space-y-0.5 list-disc list-inside">
            {warnings.map((warn, i) => (
              <li key={i}>{warn}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DailyFocusCard;
