# TaskFlow API Documentation

Comprehensive REST API reference for the **TaskFlow** backend service, covering authentication, resource management, platform analytics, and Google Gemini AI capabilities.

## Base URL
```text
http://localhost:5000/api
```

---

## 🔒 Authentication & Headers

All protected endpoints require a signed JSON Web Token (JWT) provided via standard HTTP Bearer authorization:

```http
Authorization: Bearer <your_jwt_token>
Content-Type: application/json
```

Tokens are obtained by authenticating through `POST /api/auth/login` or `POST /api/auth/register`. Tokens expire in 7 days.

---

## 📦 Standard Response Envelopes

### Success Response (`200 OK`, `201 Created`)
```json
{
  "success": true,
  "message": "Resource retrieved or mutated successfully",
  "data": {
    "resource": { ... }
  }
}
```

### Error Response (`400`, `401`, `403`, `404`, `500`)
```json
{
  "success": false,
  "message": "Human-readable explanation of error",
  "errors": ["Optional array of specific field validation errors"]
}
```

---

## 🚦 HTTP Status Codes

| Code | Status | Meaning |
|---|---|---|
| `200` | OK | Request succeeded. |
| `201` | Created | Resource successfully created. |
| `400` | Bad Request | Validation failure or malformed payload. |
| `401` | Unauthorized | Missing, invalid, or expired JWT. |
| `403` | Forbidden | Requesting user does not own the target resource. |
| `404` | Not Found | Requested entity does not exist. |
| `409` | Conflict | Duplicate entry (e.g., email already registered). |
| `503` | Service Unavailable | External AI service temporarily unavailable. |
| `500` | Internal Server Error | Unhandled server exception. |

---

## 📋 Endpoints Matrix

### 1. System Health & Platform Analytics

#### Health Check
`GET /api/health` — Public
- **Response 200**:
```json
{
  "success": true,
  "status": "ok",
  "message": "TaskFlow API is running",
  "timestamp": "2026-09-22T01:30:00.000Z",
  "environment": "development",
  "database": "MongoDB Atlas",
  "version": "1.0.0"
}
```

#### Stats Overview
`GET /api/stats` — Protected
- **Response 200**:
```json
{
  "success": true,
  "data": {
    "users": { "total": 2 },
    "projects": {
      "total": 3,
      "active": 2,
      "completed": 1,
      "onHold": 0
    },
    "tasks": {
      "total": 5,
      "completed": 2,
      "inProgress": 1,
      "todo": 2,
      "completionRate": 40
    }
  }
}
```

---

### 2. Authentication (`/api/auth`)

#### Register User
`POST /api/auth/register` — Public
- **Request Body**:
```json
{
  "name": "Jane Developer",
  "email": "jane@taskflow.dev",
  "password": "password123",
  "role": "developer"
}
```
- **Response 201**:
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "66e01a2b3c4d5e6f7a8b9c0d",
      "name": "Jane Developer",
      "email": "jane@taskflow.dev",
      "role": "developer",
      "createdAt": "2026-09-22T01:00:00.000Z"
    }
  }
}
```

#### Login User
`POST /api/auth/login` — Public
- **Request Body**:
```json
{
  "email": "alex@taskflow.dev",
  "password": "password123"
}
```
- **Response 200**:
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "66e01a2b3c4d5e6f7a8b9c01",
      "name": "Alex Kumar",
      "email": "alex@taskflow.dev",
      "role": "developer"
    }
  }
}
```

#### Get Current User Profile
`GET /api/auth/me` — Protected
- **Response 200**: Returns authenticated user document excluding the password hash.

---

### 3. Users (`/api/users`)

#### List Users
`GET /api/users` — Protected
- **Response 200**:
```json
{
  "success": true,
  "data": {
    "users": [
      {
        "_id": "66e01a2b3c4d5e6f7a8b9c01",
        "name": "Alex Kumar",
        "email": "alex@taskflow.dev",
        "role": "developer"
      }
    ],
    "total": 1
  }
}
```

#### Get User by ID
`GET /api/users/:id` — Protected

---

### 4. Projects (`/api/projects`)

#### List Projects
`GET /api/projects` — Protected
- **Query Parameters**:
  - `status`: Filter by `active`, `completed`, or `on-hold`.
  - `search`: Filter by string match against project name or description.
- **Response 200**: Returns array of projects owned by or accessible to `req.user.id`, dynamically populated with `taskCount` and `completedTasks`.

#### Create Project
`POST /api/projects` — Protected
- **Request Body**:
```json
{
  "name": "Cloud Infrastructure & Redis",
  "description": "Migration of microservices to AWS and Redis caching",
  "status": "active",
  "color": "#3b82f6",
  "deadline": "2026-11-15T00:00:00.000Z"
}
```
- **Response 201**:
```json
{
  "success": true,
  "message": "Project created successfully",
  "data": {
    "project": {
      "_id": "66e01a2b3c4d5e6f7a8b9c10",
      "name": "Cloud Infrastructure & Redis",
      "description": "Migration of microservices to AWS and Redis caching",
      "status": "active",
      "color": "#3b82f6",
      "owner": "66e01a2b3c4d5e6f7a8b9c01",
      "deadline": "2026-11-15T00:00:00.000Z",
      "createdAt": "2026-09-22T01:30:00.000Z"
    }
  }
}
```

#### Get Project by ID
`GET /api/projects/:id` — Protected

#### Update Project
`PUT /api/projects/:id` — Protected (Verifies owner authorization)
- **Request Body**: Any valid subset of project fields (`name`, `description`, `status`, `color`, `deadline`).

#### Delete Project
`DELETE /api/projects/:id` — Protected (Cascading delete of associated tasks)

#### Get Tasks by Project
`GET /api/projects/:id/tasks` — Protected
- Returns all tasks belonging to the specified project.

---

### 5. Tasks (`/api/tasks`)

#### List Tasks
`GET /api/tasks` — Protected
- **Query Parameters**:
  - `status`: `todo`, `in-progress`, `done`
  - `priority`: `low`, `medium`, `high`
  - `projectId`: MongoDB ObjectId of parent project
  - `search`: Case-insensitive title/description search
- **Response 200**:
```json
{
  "success": true,
  "data": {
    "tasks": [
      {
        "_id": "66e01a2b3c4d5e6f7a8b9c20",
        "title": "Setup Redis Cache Cluster",
        "description": "Configure ElastiCache Redis cluster with VPC peering",
        "status": "in-progress",
        "priority": "high",
        "estimatedHours": 8,
        "dueDate": "2026-10-05T00:00:00.000Z",
        "project": {
          "_id": "66e01a2b3c4d5e6f7a8b9c10",
          "name": "Cloud Infrastructure & Redis"
        },
        "assignee": "66e01a2b3c4d5e6f7a8b9c01",
        "createdBy": "66e01a2b3c4d5e6f7a8b9c01"
      }
    ],
    "total": 1
  }
}
```

#### Create Task
`POST /api/tasks` — Protected
- **Request Body**:
```json
{
  "title": "Setup Redis Cache Cluster",
  "description": "Configure ElastiCache Redis cluster with VPC peering",
  "status": "todo",
  "priority": "high",
  "estimatedHours": 8,
  "dueDate": "2026-10-05T00:00:00.000Z",
  "projectId": "66e01a2b3c4d5e6f7a8b9c10"
}
```
- **Response 201**: Returns created task document.

#### Update Task
`PUT /api/tasks/:id` — Protected
- **Request Body**: Subset of fields to update (`status`, `priority`, `title`, `description`, `dueDate`).

#### Delete Task
`DELETE /api/tasks/:id` — Protected

---

### 6. AI Capabilities (`/api/ai`)

#### AI Goal → Complete Task Plan
`POST /api/ai/plan` — Protected
Decomposes a high-level goal into a complete milestone roadmap.
- **Request Body**:
```json
{
  "goal": "Build an AI resume analyzer with authentication, resume upload, Gemini integration and deployment in 2 weeks"
}
```
- **Response 200**:
```json
{
  "success": true,
  "data": {
    "projectTitle": "AI Resume Parser & Analyzer",
    "projectDescription": "Automated resume parsing engine using Google Gemini with secure authentication and multi-format document support.",
    "suggestedColor": "#3b82f6",
    "tasks": [
      {
        "title": "Initialize project repository & auth boilerplate",
        "description": "Scaffold Express and React with JWT authentication",
        "priority": "high",
        "estimatedHours": 6,
        "reasoning": "Foundational architecture required for user data isolation."
      },
      {
        "title": "Build file upload endpoint with PDF parsing",
        "description": "Implement multer upload and pdf-parse extraction",
        "priority": "high",
        "estimatedHours": 8,
        "reasoning": "Core ingestion pipeline for resume documents."
      }
    ]
  }
}
```

#### AI Daily Focus Engine
`GET /api/ai/daily-focus` — Protected
Analyzes authenticated user's pending MongoDB tasks and synthesizes an executive briefing.
- **Response 200**:
```json
{
  "success": true,
  "data": {
    "summary": "You have 3 active tasks today with an approaching design milestone.",
    "focusTasks": [
      {
        "taskId": "66e01a2b3c4d5e6f7a8b9c20",
        "title": "Design new onboarding flow screens",
        "priority": "high",
        "reason": "This task carries a high priority with the earliest upcoming deadline.",
        "suggestedAction": "Finalize remaining wireframes for registration and onboarding."
      }
    ],
    "warnings": []
  }
}
```

#### TaskFlow AI Copilot
`POST /api/ai/copilot` — Protected
Handles developer technical questions, contextual workspace queries, and action proposals.
- **Request Body**:
```json
{
  "message": "Create a project called Cloud Infrastructure",
  "history": [
    { "role": "user", "content": "Hello Copilot!" },
    { "role": "assistant", "content": "Hello! How can I assist your workflow today?" }
  ]
}
```
- **Response 200 (Action Proposal)**:
```json
{
  "success": true,
  "data": {
    "reply": "I have formulated a project proposal for Cloud Infrastructure. Please review and confirm below.",
    "intent": "create_project",
    "action": {
      "actionType": "create_project",
      "requiresConfirmation": true,
      "payload": {
        "name": "Cloud Infrastructure",
        "description": "Cloud migration and infrastructure setup",
        "status": "active",
        "color": "#3b82f6"
      }
    }
  }
}
```

---

## 💻 cURL Testing Commands

```bash
# 1. Health check
curl http://localhost:5000/api/health

# 2. Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"alex@taskflow.dev","password":"password123"}'

# 3. List projects (replace TOKEN)
curl http://localhost:5000/api/projects \
  -H "Authorization: Bearer <TOKEN>"

# 4. Generate AI Task Plan
curl -X POST http://localhost:5000/api/ai/plan \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <TOKEN>" \
  -d '{"goal":"Build a real-time notification service with WebSockets"}'

# 5. Query AI Copilot
curl -X POST http://localhost:5000/api/ai/copilot \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <TOKEN>" \
  -d '{"message":"What should I focus on today?"}'
```
