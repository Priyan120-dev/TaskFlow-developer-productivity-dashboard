/**
 * Gemini Service for TaskFlow
 * Provides Google Gemini Generative AI capabilities with verified model failover,
 * robust request sanitization, and structured generation.
 */

const getCandidateModels = () => {
  const configuredModel = process.env.GEMINI_MODEL ? process.env.GEMINI_MODEL.trim() : null;
  const defaults = [
    'gemini-3.5-flash-lite',
    'gemini-3.1-flash-lite',
    'gemini-flash-lite-latest',
    'gemini-flash-latest',
    'gemini-3.6-flash',
    'gemini-3-flash-preview',
  ];
  return Array.from(new Set([configuredModel, ...defaults].filter(Boolean)));
};

/**
 * Helper: buildGeminiContents
 * Strictly sanitizes and constructs valid Gemini Content / Part objects.
 * - Extracts valid text strings from any message representation
 * - Removes empty messages and empty parts
 * - Maps user -> 'user', assistant/model -> 'model'
 * - Guarantees NO { data: undefined }, NO parts: [{}], NO undefined/null fields
 * - Enforces alternating turns: user, model, user, model...
 */
function buildGeminiContents(history = [], currentPrompt = '') {
  const contents = [];

  const extractText = (item) => {
    if (!item) return '';
    if (typeof item === 'string') return item.trim();
    if (typeof item.text === 'string') return item.text.trim();
    if (typeof item.content === 'string') return item.content.trim();
    if (typeof item.reply === 'string') return item.reply.trim();
    if (typeof item.message === 'string') return item.message.trim();
    if (Array.isArray(item.parts)) {
      for (const part of item.parts) {
        const txt = extractText(part);
        if (txt) return txt;
      }
    }
    return '';
  };

  // 1. Process history turns
  if (Array.isArray(history)) {
    for (const msg of history) {
      if (!msg) continue;
      const role = msg.role === 'assistant' || msg.role === 'model' ? 'model' : 'user';
      const text = extractText(msg);

      // Only add non-empty text parts
      if (text && text.length > 0) {
        contents.push({
          role,
          parts: [{ text }],
        });
      }
    }
  }

  // 2. Add current user prompt
  const currentText = typeof currentPrompt === 'string' ? currentPrompt.trim() : extractText(currentPrompt);
  if (currentText && currentText.length > 0) {
    contents.push({
      role: 'user',
      parts: [{ text: currentText }],
    });
  }

  // 3. Normalize alternating roles for Gemini (must start with user, alternate user/model)
  const normalized = [];
  for (const item of contents) {
    if (normalized.length === 0) {
      if (item.role === 'model') continue; // First turn must be user
      normalized.push(item);
    } else {
      const lastItem = normalized[normalized.length - 1];
      if (lastItem.role === item.role) {
        // Merge consecutive turns with the same role
        lastItem.parts[0].text += `\n\n${item.parts[0].text}`;
      } else {
        normalized.push(item);
      }
    }
  }

  // Fallback: If empty, ensure at least one user part with the current text
  if (normalized.length === 0 && currentText) {
    normalized.push({
      role: 'user',
      parts: [{ text: currentText }],
    });
  }

  // Limit conversation history to last 10 turns for performance
  return normalized.slice(-10);
}

/**
 * Call Google Generative Language API with failover support across verified models
 */
async function callGemini(contents, systemInstruction = null, responseMimeType = 'application/json') {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey.trim() === '' || apiKey.includes('your_gemini')) {
    throw new Error('GEMINI_API_KEY is not configured on the server.');
  }

  // Pre-flight sanity validation on contents:
  // Ensure every content has non-empty parts with non-empty text strings
  if (!Array.isArray(contents) || contents.length === 0) {
    throw new Error('Gemini GenerateContentRequest.contents cannot be empty.');
  }

  for (let cIdx = 0; cIdx < contents.length; cIdx++) {
    const c = contents[cIdx];
    if (!c.role || !Array.isArray(c.parts) || c.parts.length === 0) {
      throw new Error(`Gemini content at index ${cIdx} must have valid role and parts array.`);
    }
    for (let pIdx = 0; pIdx < c.parts.length; pIdx++) {
      const p = c.parts[pIdx];
      if (typeof p.text !== 'string' || p.text.trim().length === 0) {
        throw new Error(`Gemini content at [${cIdx}].parts[${pIdx}] must have a non-empty text string.`);
      }
    }
  }

  const models = getCandidateModels();
  let lastError = null;

  for (const model of models) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const body = {
      contents,
      generationConfig: {
        responseMimeType: responseMimeType || 'application/json',
        temperature: 0.4,
      },
    };

    if (systemInstruction && typeof systemInstruction === 'string' && systemInstruction.trim().length > 0) {
      body.systemInstruction = {
        parts: [{ text: systemInstruction.trim() }],
      };
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMsg = data?.error?.message || `Gemini API returned status ${response.status} for model ${model}`;
        console.warn(`[Gemini Service Warning] Model ${model} returned HTTP ${response.status}: ${errorMsg}`);

        // Failover on 503, 429, 404, or capacity issues
        if (
          response.status === 503 ||
          response.status === 429 ||
          response.status === 404 ||
          (data?.error?.message && data.error.message.toLowerCase().includes('high demand'))
        ) {
          lastError = new Error(errorMsg);
          continue;
        }
        throw new Error(errorMsg);
      }

      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text || typeof text !== 'string') {
        throw new Error('Gemini API returned an empty response candidate.');
      }

      if (responseMimeType === 'application/json') {
        try {
          return JSON.parse(text);
        } catch {
          // If wrapped in markdown code fences, strip and parse
          try {
            const cleaned = text.replace(/```json\s*/gi, '').replace(/```\s*/g, '').trim();
            return JSON.parse(cleaned);
          } catch {
            // Fallback for Copilot if model returned unformatted text
            return {
              reply: text,
              intent: 'general_chat',
              action: null,
            };
          }
        }
      }

      return text;
    } catch (err) {
      console.error(`[Gemini Service Error] Attempt on ${model} failed:`, err.message);
      lastError = err;
      if (
        err.message &&
        (err.message.includes('503') ||
          err.message.includes('high demand') ||
          err.message.includes('404') ||
          err.message.includes('429'))
      ) {
        continue;
      }
      throw err;
    }
  }

  throw lastError || new Error('All Gemini models failed to respond.');
}

/**
 * FEATURE 1: AI Goal -> Complete Task Plan
 */
async function generateTaskPlan(goal, context = {}) {
  const systemInstruction = `You are TaskFlow AI, a senior software architect and technical project manager.
Your role is to take a developer's high-level goal or product idea and break it into a structured, realistic project plan with actionable task milestones.
Today's date is: ${new Date().toISOString().split('T')[0]}.

You MUST respond strictly with a valid JSON object matching this schema:
{
  "projectTitle": "Concise Project Name (2-50 chars)",
  "projectDescription": "Clear 1-2 sentence overview of scope and objectives",
  "suggestedColor": "#3b82f6",
  "tasks": [
    {
      "title": "Clear action-oriented task title (min 2 words)",
      "description": "Concrete technical description or acceptance criteria",
      "priority": "low" | "medium" | "high",
      "estimatedHours": 4,
      "suggestedDueDate": "YYYY-MM-DD",
      "order": 1,
      "reasoning": "Why this task is necessary and positioned here in the flow"
    }
  ]
}
Include between 4 and 8 well-scoped tasks. Sequence them logically from setup/foundation to core implementation, testing, and deployment.`;

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `User Goal: "${goal}"\nAdditional Context: ${JSON.stringify(context)}`,
        },
      ],
    },
  ];

  return callGemini(contents, systemInstruction, 'application/json');
}

/**
 * FEATURE 2: AI Daily Focus & Priority Engine
 */
async function analyzeDailyFocus(tasks, projects, user = {}) {
  const systemInstruction = `You are TaskFlow's AI Daily Focus & Priority Engine.
Your mission is to analyze the authenticated developer's actual tasks and projects to generate a personalized, high-impact focus briefing for today.
Today's date is: ${new Date().toISOString().split('T')[0]}.

CRITICAL RULE:
You MUST ONLY select and reference task IDs from the provided task list.
NEVER invent, fabricate, or hallucinate task IDs.
If a task ID is not in the input data, do NOT include it.

You MUST respond strictly with a valid JSON object matching this schema:
{
  "focusTasks": [
    {
      "taskId": "EXACT_TASK_ID_FROM_INPUT",
      "rank": 1,
      "urgency": "urgent" | "high" | "medium",
      "reason": "1-sentence explanation of why to tackle this today (deadlines, dependencies, priority)",
      "suggestedAction": "Specific 1-sentence next step"
    }
  ],
  "summary": "2-sentence executive summary of the developer's workload and top objective for today.",
  "warnings": [
    "Warning text about overdue tasks, upcoming critical deadlines, or workload bottlenecks"
  ]
}

Select the top 2 to 5 tasks that deserve immediate attention. If no tasks exist, return empty focusTasks array and a cheerful summary.`;

  const sanitizedTasks = tasks.map((t) => ({
    id: t.id || t._id?.toString(),
    title: t.title,
    description: t.description,
    status: t.status,
    priority: t.priority,
    dueDate: t.dueDate,
    projectName: t.projectName || (t.project && typeof t.project === 'object' ? t.project.name : 'General'),
  }));

  const sanitizedProjects = projects.map((p) => ({
    id: p.id || p._id?.toString(),
    name: p.name,
    status: p.status,
    dueDate: p.dueDate,
  }));

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: JSON.stringify({
            developer: { name: user.name, role: user.role },
            activeTasks: sanitizedTasks,
            projects: sanitizedProjects,
          }),
        },
      ],
    },
  ];

  return callGemini(contents, systemInstruction, 'application/json');
}

/**
 * FEATURE 3: TaskFlow AI Copilot (Personal Developer Productivity Assistant)
 */
async function processCopilotChat(message, history = [], workspaceContext = {}) {
  const systemInstruction = `You are TaskFlow Copilot, an elite Personal AI Productivity Assistant built directly into TaskFlow, a Developer Productivity Workspace.
Today's date is: ${new Date().toISOString().split('T')[0]}.

YOUR CORE CAPABILITIES & DOMAINS:
1. Developer Productivity & Workflow: Breaking down goals, managing time, prioritizing work, optimizing daily engineering routines.
2. Software Engineering: Full-stack programming concepts, modern architecture (React, Node.js, Express, MongoDB, REST APIs, JWT authentication, state management, Docker, testing), debugging guidance, and software best practices.
3. TaskFlow Workspace Intelligence: Analyzing the developer's real active projects, tasks, deadlines, and workload.
4. Project Building: Transforming app ideas into technical roadmaps, milestone breakdowns, and actionable task lists.

BEHAVIOR GUIDELINES:
- Conversational & Natural: When the user asks general engineering, learning, or productivity questions ("What is TaskFlow?", "What is JWT?", "Explain REST API authentication", "How should I structure my React project?", "Give me a roadmap to learn backend development"), provide a comprehensive, encouraging, and highly technical yet accessible explanation.
- Workspace-Aware: When the user asks about their own work ("What should I focus on today?", "Show my high-priority tasks", "What projects do I have?"), examine their real workspace context provided below and deliver a tailored, concrete recommendation based strictly on their real tasks and projects.
- Safe Mutation Protocol:
  If the user asks to create or change something in TaskFlow (e.g. "Create a project called Cloud Infrastructure & Redis", "Create a task called Setup Redis", "Mark task X as done"):
  You MUST formulate a structured action proposal with "requiresConfirmation": true.
  YOU NEVER DIRECTLY MUTATE THE DATABASE. The user will review your proposal in the UI and click "Confirm" to invoke TaskFlow's authorized APIs.

OUTPUT FORMAT:
You MUST respond strictly with a valid JSON object matching this schema:
{
  "reply": "Your conversational response in clear, professional Markdown. Be helpful, concise, and insightful.",
  "intent": "general_chat" | "workspace_query" | "plan_project" | "create_project" | "create_task" | "update_task",
  "action": null | {
    "actionType": "create_project" | "create_task" | "update_task_status",
    "requiresConfirmation": true,
    "payload": {
      // For create_project: { "name": "...", "description": "...", "status": "active", "color": "#3b82f6" }
      // For create_task: { "title": "...", "description": "...", "priority": "high" | "medium" | "low", "projectId": "optional_if_known" }
      // For update_task_status: { "taskId": "...", "status": "done" }
    },
    "preview": {
      "title": "Human-readable action title (e.g., 'Create Project: Cloud Infrastructure & Redis')",
      "details": "Summary of what will be created or changed upon user confirmation"
    }
  }
}`;

  // Construct current prompt with workspace context
  const currentPrompt = `User Request: "${message}"\n\nReal Workspace Context:\n${JSON.stringify(workspaceContext)}`;

  // Construct sanitized Gemini contents with history
  const contents = buildGeminiContents(history, currentPrompt);

  return callGemini(contents, systemInstruction, 'application/json');
}

module.exports = {
  buildGeminiContents,
  generateTaskPlan,
  analyzeDailyFocus,
  processCopilotChat,
};
