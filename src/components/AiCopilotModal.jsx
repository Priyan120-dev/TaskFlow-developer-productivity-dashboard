import React, { useState, useEffect, useRef } from 'react';
import { aiApi, projectsApi, tasksApi } from '../services/api';
import { CloseIcon, AlertCircleIcon, CheckSquareIcon, FolderKanbanIcon, CopilotIcon } from './Icons';
import Badge from './Badge';

const SUGGESTION_CHIPS = [
  '🎯 What should I focus on today?',
  '📁 Create project: Cloud Infrastructure & Redis',
  '⚡ Explain JWT authentication in TaskFlow',
  '💡 Break down tasks for MongoDB database indexing',
  '🚀 How do I optimize React rendering performance?',
];

// Simple markdown formatter helper for clean AI responses
const FormattedMessage = ({ content }) => {
  if (!content) return null;

  // Split content by code blocks or lines
  const lines = content.split('\n');

  return (
    <div className="space-y-2 text-sm leading-relaxed text-slate-800">
      {lines.map((line, idx) => {
        // Headers
        if (line.startsWith('### ')) {
          return (
            <h4 key={idx} className="font-bold text-slate-900 text-sm mt-3 mb-1">
              {line.replace('### ', '')}
            </h4>
          );
        }
        if (line.startsWith('## ')) {
          return (
            <h3 key={idx} className="font-bold text-slate-900 text-base mt-3 mb-1">
              {line.replace('## ', '')}
            </h3>
          );
        }
        if (line.startsWith('# ')) {
          return (
            <h2 key={idx} className="font-bold text-slate-900 text-lg mt-3 mb-1">
              {line.replace('# ', '')}
            </h2>
          );
        }

        // Bullet points
        if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
          const bulletText = line.trim().replace(/^[-*]\s+/, '');
          return (
            <div key={idx} className="flex items-start gap-2 ml-2 my-1">
              <span className="text-blue-500 font-bold">•</span>
              <span className="flex-1">{renderFormattedText(bulletText)}</span>
            </div>
          );
        }

        // Numbered list
        const numMatch = line.trim().match(/^(\d+)\.\s+(.*)/);
        if (numMatch) {
          return (
            <div key={idx} className="flex items-start gap-2 ml-2 my-1">
              <span className="font-semibold text-blue-600 text-xs mt-0.5">{numMatch[1]}.</span>
              <span className="flex-1">{renderFormattedText(numMatch[2])}</span>
            </div>
          );
        }

        // Empty line
        if (!line.trim()) {
          return <div key={idx} className="h-1" />;
        }

        // Regular paragraph
        return <p key={idx}>{renderFormattedText(line)}</p>;
      })}
    </div>
  );
};

// Inline helper for bold and inline code
function renderFormattedText(text) {
  // Simple token parser for **bold** and `code`
  const parts = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    const codeMatch = remaining.match(/`(.+?)`/);

    // Find earliest match
    let firstMatch = null;
    let type = null;

    if (boldMatch && (!codeMatch || boldMatch.index < codeMatch.index)) {
      firstMatch = boldMatch;
      type = 'bold';
    } else if (codeMatch) {
      firstMatch = codeMatch;
      type = 'code';
    }

    if (!firstMatch) {
      parts.push(remaining);
      break;
    }

    if (firstMatch.index > 0) {
      parts.push(remaining.substring(0, firstMatch.index));
    }

    if (type === 'bold') {
      parts.push(
        <strong key={key++} className="font-semibold text-slate-900">
          {firstMatch[1]}
        </strong>
      );
    } else if (type === 'code') {
      parts.push(
        <code
          key={key++}
          className="px-1.5 py-0.5 rounded bg-slate-100 text-blue-600 font-mono text-xs border border-slate-200"
        >
          {firstMatch[1]}
        </code>
      );
    }

    remaining = remaining.substring(firstMatch.index + firstMatch[0].length);
  }

  return parts;
}

export const AiCopilotModal = ({ isOpen, onClose, onWorkspaceMutated }) => {
  const [messages, setMessages] = useState([
    {
      id: 'welcome-msg',
      role: 'assistant',
      content:
        "Hello! I am your **TaskFlow AI Copilot**, specializing in developer productivity, full-stack architecture (React, Node.js, Express, MongoDB), debugging, and project execution.\n\nAsk me technical questions, have me break down tasks, or ask me to prepare new projects or tasks directly in your workspace!",
      action: null,
      timestamp: new Date(),
    },
  ]);

  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [actionLoadingMap, setActionLoadingMap] = useState({});
  const [error, setError] = useState('');

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom on message change
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSend = async (userText) => {
    const query = userText || input;
    if (!query || !query.trim()) return;

    const trimmed = query.trim();
    setInput('');
    setError('');

    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmed,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsSending(true);

    try {
      // Build conversation history for context (last 8 messages)
      const history = messages
        .filter((m) => m.id !== 'welcome-msg' && m.content && m.content.trim())
        .slice(-8)
        .map((m) => ({
          role: m.role,
          content: m.content.trim(),
        }));

      const res = await aiApi.copilot(trimmed, history);
      const data = res.data;

      const assistantMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data?.reply || 'I am ready to assist with your development tasks.',
        intent: data?.intent,
        action: data?.action || null,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setError(err.message || 'Failed to communicate with Copilot. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  // Safe manual confirmation handler for action proposals
  const handleConfirmAction = async (messageId, action) => {
    if (!action || !action.actionType) return;
    setActionLoadingMap((prev) => ({ ...prev, [messageId]: true }));
    setError('');

    try {
      let resultMessage = '';

      if (action.actionType === 'create_project') {
        const res = await projectsApi.create(action.payload);
        const newProj = res.data?.project;
        resultMessage = `✅ Successfully created project **"${newProj?.name || action.payload.name}"** in your database.`;
      } else if (action.actionType === 'create_task') {
        const res = await tasksApi.create(action.payload);
        const newTask = res.data?.task;
        resultMessage = `✅ Successfully added task **"${newTask?.title || action.payload.title}"** to your workspace.`;
      } else if (action.actionType === 'update_task_status') {
        await tasksApi.update(action.payload.taskId, { status: action.payload.status });
        resultMessage = `✅ Updated task status to **${action.payload.status}**.`;
      }

      // Mark action as executed in message
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId
            ? {
                ...msg,
                action: { ...msg.action, executed: true },
              }
            : msg
        )
      );

      // Append system confirmation
      setMessages((prev) => [
        ...prev,
        {
          id: `sys-${Date.now()}`,
          role: 'assistant',
          content: resultMessage,
          timestamp: new Date(),
        },
      ]);

      // Notify parent page to refresh projects / tasks
      if (onWorkspaceMutated) {
        onWorkspaceMutated();
      }
    } catch (err) {
      setError(err.message || 'Failed to execute proposed action. Please try manually.');
    } finally {
      setActionLoadingMap((prev) => ({ ...prev, [messageId]: false }));
    }
  };

  const handleDismissAction = (messageId) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId
          ? {
              ...msg,
              action: { ...msg.action, dismissed: true },
            }
          : msg
      )
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-3 sm:p-4 text-center">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        {/* Modal Dialog */}
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all w-full max-w-3xl flex flex-col h-[85vh] border border-slate-200">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex-shrink-0">
            <div className="flex items-center gap-3">
              <CopilotIcon size="lg" className="shadow-lg shadow-purple-500/30" />
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  TaskFlow AI Copilot
                </h3>
                <p className="text-xs text-slate-300">
                  Personal AI Productivity Assistant · Code, Architecture & Workspace Execution
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10"
              title="Close Copilot"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/50">
            {messages.map((msg) => {
              const isAssistant = msg.role === 'assistant';

              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${isAssistant ? 'items-start' : 'items-start flex-row-reverse'}`}
                >
                  {/* Avatar */}
                  {isAssistant ? (
                    <CopilotIcon size="md" />
                  ) : (
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white shadow-sm flex items-center justify-center text-xs font-bold flex-shrink-0">
                      YOU
                    </div>
                  )}

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 shadow-sm ${
                      isAssistant
                        ? 'bg-white border border-slate-200/90 text-slate-800'
                        : 'bg-blue-600 text-white'
                    }`}
                  >
                    {isAssistant ? (
                      <FormattedMessage content={msg.content} />
                    ) : (
                      <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                    )}

                    {/* Action Confirmation Card (Guarded against unauthorized or automatic execution) */}
                    {msg.action && msg.action.requiresConfirmation && (
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <div
                          className={`rounded-xl p-3.5 border text-xs ${
                            msg.action.executed
                              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                              : msg.action.dismissed
                              ? 'bg-slate-100 border-slate-200 text-slate-500'
                              : 'bg-purple-50/80 border-purple-200 text-slate-800'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="font-bold flex items-center gap-1.5 text-purple-900">
                              {msg.action.actionType === 'create_project' && (
                                <FolderKanbanIcon className="w-4 h-4 text-purple-600" />
                              )}
                              {msg.action.actionType === 'create_task' && (
                                <CheckSquareIcon className="w-4 h-4 text-purple-600" />
                              )}
                              <span>
                                {msg.action.actionType === 'create_project' && 'Proposed Project Creation'}
                                {msg.action.actionType === 'create_task' && 'Proposed Task Creation'}
                                {msg.action.actionType === 'update_task_status' && 'Proposed Task Status Update'}
                              </span>
                            </span>

                            {msg.action.executed ? (
                              <span className="px-2 py-0.5 bg-emerald-600 text-white rounded font-semibold text-[10px]">
                                Executed
                              </span>
                            ) : msg.action.dismissed ? (
                              <span className="px-2 py-0.5 bg-slate-300 text-slate-700 rounded font-semibold text-[10px]">
                                Dismissed
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 bg-purple-200 text-purple-800 rounded font-semibold text-[10px]">
                                Requires Confirmation
                              </span>
                            )}
                          </div>

                          <p className="font-semibold text-slate-900 mb-1">
                            {msg.action.preview?.title || 'Proposed Action'}
                          </p>
                          <p className="text-slate-600 mb-3 leading-normal">
                            {msg.action.preview?.details || 'Review proposed modifications before saving.'}
                          </p>

                          {/* Payload summary details */}
                          {msg.action.payload && !msg.action.executed && !msg.action.dismissed && (
                            <div className="p-2.5 bg-white rounded-lg border border-purple-100 space-y-1 mb-3 text-[11px]">
                              {msg.action.payload.name && (
                                <div>
                                  <span className="text-slate-400">Project:</span>{' '}
                                  <span className="font-medium text-slate-700">{msg.action.payload.name}</span>
                                </div>
                              )}
                              {msg.action.payload.title && (
                                <div>
                                  <span className="text-slate-400">Task Title:</span>{' '}
                                  <span className="font-medium text-slate-700">{msg.action.payload.title}</span>
                                </div>
                              )}
                              {msg.action.payload.priority && (
                                <div>
                                  <span className="text-slate-400">Priority:</span>{' '}
                                  <span className="font-medium capitalize text-slate-700">{msg.action.payload.priority}</span>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Action Buttons */}
                          {!msg.action.executed && !msg.action.dismissed && (
                            <div className="flex items-center gap-2 pt-1">
                              <button
                                type="button"
                                disabled={actionLoadingMap[msg.id]}
                                onClick={() => handleConfirmAction(msg.id, msg.action)}
                                className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold rounded-lg shadow-sm transition-colors text-xs flex items-center gap-1.5"
                              >
                                {actionLoadingMap[msg.id] ? (
                                  <span>Creating...</span>
                                ) : (
                                  <>
                                    <span>✓</span>
                                    <span>Confirm & Create</span>
                                  </>
                                )}
                              </button>
                              <button
                                type="button"
                                disabled={actionLoadingMap[msg.id]}
                                onClick={() => handleDismissAction(msg.id)}
                                className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 disabled:opacity-50 text-slate-700 font-medium rounded-lg transition-colors text-xs"
                              >
                                Dismiss
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="mt-2 text-[10px] text-slate-400 text-right">
                      {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              );
            })}

            {isSending && (
              <div className="flex gap-3 items-start">
                <CopilotIcon size="md" />
                <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="text-xs text-slate-500 font-medium ml-1">Copilot is thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-4 py-2 bg-white border-t border-slate-100 flex items-center gap-2 overflow-x-auto no-scrollbar flex-shrink-0">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap pl-1">
              Suggestions:
            </span>
            {SUGGESTION_CHIPS.map((chip, index) => (
              <button
                key={index}
                type="button"
                disabled={isSending}
                onClick={() => handleSend(chip)}
                className="text-xs bg-slate-100 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 border border-slate-200 text-slate-600 px-3 py-1 rounded-full whitespace-nowrap transition-colors flex-shrink-0"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Error Message */}
          {error && (
            <div className="px-4 py-2 bg-rose-50 border-t border-rose-100 flex items-center gap-2 text-xs text-rose-700 flex-shrink-0">
              <AlertCircleIcon className="w-4 h-4 text-rose-600 flex-shrink-0" />
              <span className="truncate">{error}</span>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-200 flex-shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about your tasks, architecture, or ask to create a project..."
                disabled={isSending}
                className="flex-1 px-4 py-3 bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 focus:border-purple-500 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={!input.trim() || isSending}
                className="px-5 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-40 text-white text-sm font-semibold rounded-xl shadow-sm transition-all flex items-center gap-1.5 flex-shrink-0"
              >
                <span>Send</span>
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiCopilotModal;
