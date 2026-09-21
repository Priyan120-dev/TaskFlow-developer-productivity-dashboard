# TaskFlow AI Capabilities Specification

This document details the three core AI features in **TaskFlow**, the underlying Google Gemini integration architecture, prompt engineering techniques, and the safety mechanisms governing AI-driven workspace operations.

---

## 🧠 1. AI Overview

TaskFlow integrates Google Gemini Generative AI not as a generic conversational gimmick, but as an **AI Productivity Intelligence Engine** connected directly to the developer's live MongoDB Atlas workspace data.

### Core Product Workflow
$$\text{High-Level Goal} \longrightarrow \text{Structured Plan} \longrightarrow \text{Daily Priority Briefing} \longrightarrow \text{Execution}$$

### Fundamental Safety Law
$$\textbf{AI Proposes} \longrightarrow \textbf{User Decides} \longrightarrow \textbf{Authorized REST APIs Execute}$$

The AI engine **never possesses database write permissions**. It only synthesizes insights, computes priorities, and formulates structured proposals. Real database mutations occur solely when the authenticated developer reviews and explicitly approves the action.

---

## 🎯 2. AI Goal → Complete Task Plan (`POST /api/ai/plan`)

### Purpose
Allows developers and engineering leads to input high-level product or technical objectives and receive a decomposed milestone roadmap with task estimates, priorities, and implementation details.

### User Flow
1. Developer clicks **AI Task Planner** on the Projects page.
2. Enters a natural language objective (e.g., *"Build an AI resume analyzer with authentication, resume upload, Gemini integration, and deployment in 2 weeks"*).
3. Gemini processes the objective and returns a structured JSON payload containing:
   - `projectTitle`: Concise project name
   - `projectDescription`: Technical scope summary
   - `suggestedColor`: Hex code for workspace visual distinction
   - `tasks`: An ordered array of 4–8 milestone tasks, each with `title`, `description`, `priority` (`high` | `medium` | `low`), `estimatedHours`, and architectural `reasoning`.
4. The frontend **`AiPlanModal.jsx`** displays the plan for **interactive developer review**. The developer can modify titles, adjust hours, or tweak priorities directly.
5. Upon clicking **Add All Tasks to Workspace**, the frontend batch-creates the project and tasks via existing authorized endpoints (`POST /api/projects` and `POST /api/tasks`).

---

## ⚡ 3. AI Daily Focus & Priority Briefing (`GET /api/ai/daily-focus`)

### Purpose
Solves developer cognitive overload by analyzing the authenticated user's active database tasks, approaching deadlines, and project contexts to synthesize an executive morning briefing.

### How It Works
1. When the Dashboard loads, the client calls `GET /api/ai/daily-focus`.
2. The controller queries MongoDB Atlas for the user's active projects (`Project.find({ owner: req.user.id })`) and pending tasks (`Task.find({ assignee: req.user.id, status: { $ne: 'done' } })`).
3. If no active tasks exist, it returns a helpful empty-state message without calling Gemini unnecessarily.
4. If tasks exist, it formats the real tasks into an analytical prompt asking Gemini to:
   - Rank the top 1–3 most critical tasks for today.
   - Provide human-readable rationale (*Why now?*).
   - Provide concrete next actions (*What to do right now*).
   - Highlight any urgent deadline risks or blocked initiatives.

### Anti-Hallucination Guard
To ensure the AI never invents fictitious task IDs:
```javascript
// Server validates AI-selected task IDs against real MongoDB documents in memory:
const validTaskIds = new Set(userTasks.map((t) => t._id.toString()));
const validatedFocusTasks = (aiResponse.focusTasks || [])
  .filter((ft) => validTaskIds.has(ft.taskId))
  .map((ft) => ({
    ...ft,
    taskDetails: userTasks.find((t) => t._id.toString() === ft.taskId),
  }));
```
Any suggested task that does not exist in the database is automatically discarded.

---

## 💬 4. TaskFlow AI Copilot (`POST /api/ai/copilot`)

### Purpose
A globally accessible personal AI assistant specializing in full-stack software development (React, Node.js, Express, MongoDB, system architecture, debugging) and workspace execution.

### Decision Matrix: Knowledge vs. Workspace
When the user sends a message, the Copilot dynamically determines the required context:

| Category | User Example | Engine Behavior | Context Ingested |
|---|---|---|---|
| **A. General Tech Knowledge** | *"Explain JWT authentication in TaskFlow"* | Responds with technical documentation, code snippets, and architecture best practices. | Technical system context & developer guidelines. |
| **B. Workspace Queries** | *"What should I focus on today?"* or *"Show my high-priority tasks"* | Queries MongoDB Atlas for the authenticated user's live tasks and projects; answers factually. | Live projects, tasks, statuses, priorities, and deadlines. |
| **C. Action Requests** | *"Create a project called Cloud Infrastructure"* or *"Create a task called Setup Redis"* | Formulates a structured action proposal with `requiresConfirmation: true`. | Project schemas, task schemas, active project IDs. |

---

## 🔌 5. Google Gemini Integration & Model Strategy

### Model Configuration
- **Active Model**: `gemini-3.5-flash-lite` (Configured via `GEMINI_MODEL` environment variable).
- **Automated Failover List**:
  1. `gemini-3.5-flash-lite` (Fastest, cost-efficient, optimal for structured JSON)
  2. `gemini-3.1-flash-lite`
  3. `gemini-flash-lite-latest`
  4. `gemini-flash-latest`
  5. `gemini-3.6-flash`
  6. `gemini-3-flash-preview`

If Google returns a transient 429 (Rate Limit) or 503 (Overloaded), the service automatically retries across candidate models before surfacing an error.

---

## 📝 6. Prompt & Request Architecture

### Request Sanitizer (`buildGeminiContents`)
Google's Gemini Protobuf API rejects malformed requests containing empty parts (`{}`) or `{ data: undefined }` with:
`GenerateContentRequest.contents[0].parts[0].data: required oneof field 'data' must have one initialized field`

TaskFlow's `buildGeminiContents` helper guarantees complete schema compliance:
1. **Universal Text Extraction**: Safely extracts text across string inputs, `msg.content`, `msg.text`, and `msg.parts`.
2. **Empty Message Elimination**: Strips whitespace-only turns.
3. **Role Mapping**: Maps `assistant` / `model` &rarr; `'model'`, `user` &rarr; `'user'`.
4. **Strict Turn Alternation**: Enforces `user` &rarr; `model` &rarr; `user` &rarr; `model`. If consecutive messages share the same role, they are cleanly merged.
5. **Pre-Flight Validation**: Asserts that every part possesses an initialized `text` field before dispatching the HTTP request.

---

## 📦 7. Structured Responses & Schema Enforcement

TaskFlow instructs Gemini to respond with structured JSON enclosed in ```json code fences:
- Clean regex stripping removes markdown formatting: `raw.replace(/```json\s*/gi, '').replace(/```\s*$/gi, '').trim()`.
- Robust `JSON.parse` with fallback error detection.
- If JSON parsing fails on open-ended conversational queries, Copilot gracefully falls back to formatted markdown text.

---

## 🛡️ 8. Confirmation-Based Actions Pattern

When Copilot identifies an action intent (`create_project`, `create_task`, `update_task_status`), it returns:

```json
{
  "reply": "I have drafted the project proposal for Cloud Infrastructure. Please review the details below.",
  "intent": "create_project",
  "action": {
    "actionType": "create_project",
    "requiresConfirmation": true,
    "payload": {
      "name": "Cloud Infrastructure",
      "description": "Migration of microservices to AWS and Redis caching",
      "status": "active",
      "color": "#3b82f6"
    }
  }
}
```

The frontend **`AiCopilotModal.jsx`** renders an interactive card:
- **`[ Confirm & Create ]`**: Invokes `projectsApi.create(action.payload)` using the user's verified JWT.
- **`[ Dismiss ]`**: Discards the proposal without mutating the database.

---

## 🔒 9. Workspace Data Isolation & Privacy

- **Tenant Isolation**: All queries executed to build AI context use `owner: req.user.id` or `assignee: req.user.id`. A user can never inspect another team member's private tasks.
- **Zero Training on User Data**: API calls use Google GenAI Developer API with standard enterprise data privacy settings.
- **No Client Key Exposure**: Browser JavaScript never accesses `GEMINI_API_KEY`.
