# TaskFlow — Developer Productivity Dashboard & REST API

<div align="center">

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.19-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Build Status](https://img.shields.io/badge/Build-Passing-10B981?style=for-the-badge&logo=checkmarx&logoColor=white)](https://github.com/)

<p align="center">
  <b>A responsive Developer Productivity Dashboard and robust REST API engineered for high-performance engineering teams to monitor sprints, track deliverables, manage project velocity, and synchronize task workflows in real time.</b>
</p>

*Built for the Innovation Hacks Full Stack Development Internship Evaluation.*

</div>

---

## Table of Contents
- [Visual Preview](#visual-preview)
- [Project Overview](#project-overview)
- [Demo Video](#demo-video)
- [Internship Evaluation Compliance](#internship-evaluation-compliance)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Backend REST API Documentation](#backend-rest-api-documentation)
  - [Base URL & Authentication](#base-url--authentication)
  - [Endpoints Matrix](#endpoints-matrix)
  - [Request & Response Examples](#request--response-examples)
  - [Task Status & Priority Management](#task-status--priority-management)
  - [Validation & Error Handling](#validation--error-handling)
  - [HTTP Status Codes](#http-status-codes)
- [Testing Instructions](#testing-instructions)
  - [Backend API Testing (cURL)](#backend-api-testing-curl)
  - [Frontend Testing Guide](#frontend-testing-guide)
- [Component Architecture & State Flow](#component-architecture--state-flow)
- [GitHub Repository Information](#github-repository-information)
- [Author & Credits](#author--credits)

---

## Visual Preview

### Desktop Dashboard View
![TaskFlow Dashboard](screenshots/dashboard.png)

<div align="center">

| Projects Explorer | Tasks & Overdue Tracker | Mobile Responsive (375px) |
| :---: | :---: | :---: |
| ![Projects Page](screenshots/projects.png) | ![Tasks Page](screenshots/tasks.png) | ![Mobile View](screenshots/mobile.png) |

</div>

---

## Project Overview

TaskFlow is an end-to-end full-stack developer productivity platform developed across two structured milestones:

1. **Task 1 — Frontend Web Application**: A React 18 + Vite dashboard with dynamic metric computations, multi-dimensional filtering (search + status + priority), deadline intelligence with overdue detection, responsive navigation layouts, and animated skeleton loaders.
2. **Task 2 — Backend & REST API Service**: A modular Node.js + Express REST API (`taskflow-api`) featuring an in-memory data store, token-based authentication middleware, request body schema validation, project task count enrichment, cascading project deletion, and multi-filter task queries.

---

## Demo Video

<!-- Replace the link below with your hosted demonstration recording -->
- **Walkthrough Demo Video**: [Watch TaskFlow Full Stack Demo (Loom / YouTube)](#)

> [!NOTE]
> *A full video walkthrough demonstrating both the interactive React dashboard and the backend REST API endpoints in action.*

---

## Internship Evaluation Compliance

### Task 1 — Frontend Deliverables

| # | Requirement | Status | File Reference |
| :-: | :--- | :--: | :--- |
| **1** | **Clean URL Routing** (`react-router-dom`) with `/` redirecting to `/dashboard` | Verified | [`src/App.jsx`](src/App.jsx) |
| **2** | **TypeScript Interfaces** (`User`, `Project`, `Task`, `Activity`, `TaskStatus`, etc.) | Verified | [`src/types/index.ts`](src/types/index.ts) |
| **3** | **Environment Configuration** (`.env.example` and `.env`) | Verified | [`.env.example`](.env.example) |
| **4** | **Documentation Integrity** (Tech Stack, Quick Start, Folder Hierarchy) | Verified | [`README.md`](README.md) |
| **5** | **Computed Stats Engine** (Projects, Tasks, Completed, In-Progress derived from data) | Verified | [`src/pages/DashboardPage.jsx`](src/pages/DashboardPage.jsx) |
| **6** | **Overdue Card Highlighting** (`border-l-4 border-red-500` + red "Overdue" badge) | Verified | [`src/components/TaskCard.jsx`](src/components/TaskCard.jsx) |
| **7** | **Dynamic Project Filter Badges** (`All (4)`, `Active (2)`, `Completed (1)`, `On Hold (1)`) | Verified | [`src/pages/ProjectsPage.jsx`](src/pages/ProjectsPage.jsx) |
| **8** | **Dynamic Task Filter Badges** (Status counts and Priority counts) | Verified | [`src/pages/TasksPage.jsx`](src/pages/TasksPage.jsx) |
| **9** | **Simultaneous Multi-Filter Conjunction** (Search + Status + Priority) | Verified | [`src/pages/TasksPage.jsx`](src/pages/TasksPage.jsx) |
| **10** | **Activity Type SVG Mapping** (`create`=green plus, `update`=blue pencil, `complete`=check, `delete`=trash) | Verified | [`src/components/Icons.jsx`](src/components/Icons.jsx) |

### Task 2 — Backend & REST API Deliverables

| # | Requirement | Status | File Reference |
| :-: | :--- | :--: | :--- |
| **1** | **Separate Backend Directory** (`taskflow-api`) with Express + Node.js | Verified | [`taskflow-api/src/server.js`](taskflow-api/src/server.js) |
| **2** | **In-Memory Seed Store** (Preloaded users, projects, and tasks) | Verified | [`taskflow-api/src/data/store.js`](taskflow-api/src/data/store.js) |
| **3** | **Authentication & Token Middleware** (Bearer token validation, 401 protection) | Verified | [`taskflow-api/src/middleware/auth.middleware.js`](taskflow-api/src/middleware/auth.middleware.js) |
| **4** | **Schema & Input Validation** (Factory middleware returning 400 on failure) | Verified | [`taskflow-api/src/middleware/validate.js`](taskflow-api/src/middleware/validate.js) |
| **5** | **User Registration & Login** (Email conflict check 409, credentials check 401) | Verified | [`taskflow-api/src/controllers/auth.controller.js`](taskflow-api/src/controllers/auth.controller.js) |
| **6** | **Project Metric Enrichment** (`taskCount` & `completedTasks` dynamically computed) | Verified | [`taskflow-api/src/controllers/project.controller.js`](taskflow-api/src/controllers/project.controller.js) |
| **7** | **Cascading Project Deletion** (Deleting a project removes all child tasks) | Verified | [`taskflow-api/src/controllers/project.controller.js`](taskflow-api/src/controllers/project.controller.js) |
| **8** | **Multi-Filter Task Queries** (Simultaneous filtering: `projectId`, `status`, `priority`, `search`) | Verified | [`taskflow-api/src/controllers/task.controller.js`](taskflow-api/src/controllers/task.controller.js) |
| **9** | **Project Foreign Key Validation** (Creating task validates `projectId` exists or returns 404) | Verified | [`taskflow-api/src/controllers/task.controller.js`](taskflow-api/src/controllers/task.controller.js) |
| **10** | **Centralized Error & 404 Routing** (Predictable JSON error structure) | Verified | [`taskflow-api/src/middleware/errorHandler.js`](taskflow-api/src/middleware/errorHandler.js) |
| **11** | **API Documentation Specification** (Dedicated markdown API spec file) | Verified | [`taskflow-api/docs/api.md`](taskflow-api/docs/api.md) |

---

## Technologies Used

### Frontend (Task 1)
- **Framework**: [React 18](https://react.dev/) (Functional Components, Hooks)
- **Build Tool**: [Vite 5](https://vitejs.dev/) (ESM, Fast HMR)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) (Custom Design Tokens)
- **Client Routing**: [React Router DOM v6](https://reactrouter.com/) (Browser navigation)
- **Type Definitions**: TypeScript interfaces in [`src/types/index.ts`](src/types/index.ts)
- **Icons**: Lightweight inline SVGs

### Backend (Task 2)
- **Runtime**: [Node.js](https://nodejs.org/) (v18.0.0+)
- **Web Framework**: [Express.js 4](https://expressjs.com/)
- **Cross-Origin Resource Sharing**: [CORS](https://www.npmjs.com/package/cors)
- **Configuration**: [Dotenv](https://www.npmjs.com/package/dotenv)
- **ID Generation**: [UUID](https://www.npmjs.com/package/uuid)
- **Development Tooling**: [Nodemon](https://www.npmjs.com/package/nodemon)

---

## Folder Structure

```
taskflow/
├── screenshots/                     # UI verification screenshots
│   ├── dashboard.png
│   ├── projects.png
│   ├── tasks.png
│   └── mobile.png
├── src/                             # [Task 1] Frontend Source Code
│   ├── components/                  # Reusable UI components (TaskCard, ProjectCard, Badge, etc.)
│   ├── pages/                       # Route views (DashboardPage, ProjectsPage, TasksPage)
│   ├── data/                        # Frontend seed mock dataset (mockData.js)
│   ├── types/                       # TypeScript interfaces (index.ts)
│   ├── App.jsx                      # Main app shell and client routes
│   ├── main.jsx                     # Vite root entrypoint
│   └── index.css                    # Tailwind CSS directives
├── taskflow-api/                    # [Task 2] Backend REST API Service
│   ├── docs/
│   │   └── api.md                   # Complete API specification document
│   ├── src/
│   │   ├── controllers/             # Request handlers (auth, user, project, task)
│   │   ├── data/                    # In-memory data store (store.js)
│   │   ├── middleware/              # Auth, validation, and error middlewares
│   │   ├── routes/                  # Express route definitions
│   │   ├── validators/              # Validation rule implementations
│   │   ├── app.js                   # Express application setup
│   │   └── server.js                # HTTP server listener (port 5000)
│   ├── .env.example                 # Backend environment variable template
│   ├── .gitignore                   # Ignores node_modules, .env, dist, logs
│   ├── package.json                 # Backend dependencies and run scripts
│   └── README.md                    # Backend documentation & quick start
├── .env.example                     # Frontend environment variable template
├── .gitignore                       # Root git ignore
├── index.html                       # HTML application entry
├── package.json                     # Frontend dependencies
├── tailwind.config.js               # Tailwind design system tokens
├── vite.config.js                   # Vite configuration
└── README.md                        # Master repository documentation
```

---

## Setup & Installation

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher
- **Git**: Installed and configured

### 1. Clone the Repository
```bash
git clone https://github.com/Priyan120-dev/TaskFlow-developer-productivity-dashboard.git
cd TaskFlow-developer-productivity-dashboard
```

### 2. Frontend Setup (Task 1)
```bash
# Install frontend dependencies
npm install

# Setup local environment
cp .env.example .env

# Launch Vite development server (port 5173)
npm run dev
```
Access the frontend in your browser at: `http://localhost:5173`

### 3. Backend Setup (Task 2)
```bash
# Navigate to backend directory
cd taskflow-api

# Install backend dependencies
npm install

# Setup local environment
cp .env.example .env

# Launch Express development server (port 5000)
npm run dev
```
The API server will run at `http://localhost:5000/api`. Verify health: `http://localhost:5000/api/health`.

---

## Environment Variables

### Frontend (`.env`)
| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `VITE_APP_NAME` | `TaskFlow` | Display name of the application |
| `VITE_APP_VERSION` | `1.0.0` | Semantic application build version |

### Backend (`taskflow-api/.env`)
| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `PORT` | `5000` | Port for the Express REST API |
| `NODE_ENV` | `development` | Server execution environment |
| `CORS_ORIGIN` | `http://localhost:5173` | Allowed frontend origin for CORS |
| `JWT_SECRET` | `taskflow_super_secret_key_change_in_production` | Secret key for JWT signing |

---

## Backend REST API Documentation

### Base URL & Authentication
- **Base URL**: `http://localhost:5000/api`
- **Protected Routes**: Require the HTTP header `Authorization: Bearer <token>`
- **Mock Token**: `mock-jwt-token-user-1` (generated upon login)

### Endpoints Matrix

| Method | Endpoint | Query Params | Auth Required | Description |
|--------|----------|--------------|:-------------:|-------------|
| `GET` | `/api/health` | - | No | API health check & timestamp |
| `POST` | `/api/auth/register` | - | No | Register a new user |
| `POST` | `/api/auth/login` | - | No | Authenticate user & get token |
| `GET` | `/api/users` | - | **Yes** | Retrieve all users (sanitized) |
| `GET` | `/api/users/:id` | - | **Yes** | Retrieve single user by ID |
| `GET` | `/api/projects` | `?search`, `?status` | No | List projects with `taskCount` & `completedTasks` |
| `POST` | `/api/projects` | - | **Yes** | Create a new project |
| `GET` | `/api/projects/:id` | - | No | Retrieve project by ID with task counts |
| `PUT` | `/api/projects/:id` | - | **Yes** | Update project fields |
| `DELETE` | `/api/projects/:id` | - | **Yes** | Delete project & cascade delete all child tasks |
| `GET` | `/api/tasks` | `?projectId`, `?status`, `?priority`, `?search` | No | List & multi-filter tasks |
| `POST` | `/api/tasks` | - | **Yes** | Create task (validates `projectId`) |
| `GET` | `/api/tasks/:id` | - | No | Retrieve single task by ID |
| `PUT` | `/api/tasks/:id` | - | **Yes** | Update task fields & `updatedAt` |
| `DELETE` | `/api/tasks/:id` | - | **Yes** | Delete task by ID |

---

### Request & Response Examples

#### 1. Health Check
- **Request**: `GET /api/health`
- **Response `200 OK`**:
```json
{
  "success": true,
  "status": "ok",
  "message": "TaskFlow API is running",
  "timestamp": "2026-09-20T10:00:00.000Z"
}
```

#### 2. Register User
- **Request**: `POST /api/auth/register`
```json
{
  "name": "Sarah Connor",
  "email": "sarah@taskflow.dev",
  "password": "password123"
}
```
- **Response `201 Created`**:
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "user-2",
      "name": "Sarah Connor",
      "email": "sarah@taskflow.dev",
      "role": "developer",
      "createdAt": "2026-09-20T10:05:00.000Z"
    }
  }
}
```

#### 3. Login
- **Request**: `POST /api/auth/login`
```json
{
  "email": "alex@taskflow.dev",
  "password": "password123"
}
```
- **Response `200 OK`**:
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "mock-jwt-token-user-1",
    "user": {
      "id": "user-1",
      "name": "Alex Kumar",
      "email": "alex@taskflow.dev",
      "role": "developer"
    }
  }
}
```

#### 4. Get Projects (Enriched with Task Counts)
- **Request**: `GET /api/projects?search=mobile&status=active`
- **Response `200 OK`**:
```json
{
  "success": true,
  "data": {
    "projects": [
      {
        "id": "proj-2",
        "name": "Mobile App Redesign",
        "description": "Complete UI/UX overhaul of the mobile application.",
        "status": "active",
        "color": "#8b5cf6",
        "dueDate": "2026-11-30",
        "ownerId": "user-1",
        "createdAt": "2026-08-15T00:00:00.000Z",
        "taskCount": 1,
        "completedTasks": 0
      }
    ],
    "total": 1
  }
}
```

#### 5. Create Task
- **Request**: `POST /api/tasks` (`Authorization: Bearer mock-jwt-token-user-1`)
```json
{
  "title": "Build WebSocket Notification Gateway",
  "description": "Stream live task mutations to connected clients.",
  "projectId": "proj-1",
  "status": "todo",
  "priority": "high",
  "dueDate": "2026-10-30"
}
```
- **Response `201 Created`**:
```json
{
  "success": true,
  "message": "Task created successfully",
  "data": {
    "task": {
      "id": "task-4",
      "title": "Build WebSocket Notification Gateway",
      "description": "Stream live task mutations to connected clients.",
      "projectId": "proj-1",
      "status": "todo",
      "priority": "high",
      "dueDate": "2026-10-30",
      "assigneeId": "user-1",
      "createdAt": "2026-09-20T10:10:00.000Z",
      "updatedAt": "2026-09-20T10:10:00.000Z"
    }
  }
}
```

#### 6. Delete Project (Cascading Cleanup)
- **Request**: `DELETE /api/projects/proj-1` (`Authorization: Bearer mock-jwt-token-user-1`)
- **Response `200 OK`**:
```json
{
  "success": true,
  "message": "Project and its tasks deleted successfully"
}
```

---

### Task Status & Priority Management

TaskFlow enforces strict lifecycle state validation across all write operations:

```
Task Lifecycle:
[ todo ] ──────> [ in-progress ] ──────> [ done ]
```

- **Allowed Task Statuses**:
  - `todo` — Backlog / unstarted items (Default)
  - `in-progress` — Active sprint tasks
  - `done` — Completed deliverables
- **Allowed Task Priorities**:
  - `low` — Low impact / technical chore
  - `medium` — Standard feature (Default)
  - `high` — Critical path / sprint milestone
- **Allowed Project Statuses**:
  - `active` — In active execution (Default)
  - `completed` — Delivered
  - `on-hold` — Blocked or paused

---

### Validation & Error Handling

All write endpoints pass through the factory middleware [`src/middleware/validate.js`](taskflow-api/src/middleware/validate.js). If any field violates constraints, a descriptive `400 Bad Request` payload is returned without breaking execution:

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Title must be between 2 and 200 characters",
    "Priority must be low, medium, or high"
  ]
}
```

### HTTP Status Codes

| Code | Status | Usage in TaskFlow API |
|:---:|:---|:---|
| `200` | **OK** | Successful `GET`, `PUT`, or `DELETE` request |
| `201` | **Created** | Successful resource creation via `POST` |
| `400` | **Bad Request** | Input validation failure (missing/invalid fields) |
| `401` | **Unauthorized** | Missing or malformed Bearer authorization token |
| `404` | **Not Found** | Resource (user, project, task) or route does not exist |
| `409` | **Conflict** | Duplicate registration attempt with an existing email |
| `500` | **Internal Server Error** | Unexpected unhandled server exception |

---

## Testing Instructions

### Backend API Testing (cURL)

With the backend running on `http://localhost:5000`, run the following commands:

```bash
# 1. Health check
curl http://localhost:5000/api/health

# 2. Register user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Alex Kumar","email":"alex.dev@taskflow.dev","password":"password123"}'

# 3. Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"alex@taskflow.dev","password":"password123"}'

# 4. Get all projects (enriched with taskCount & completedTasks)
curl http://localhost:5000/api/projects

# 5. Search & filter projects
curl "http://localhost:5000/api/projects?search=mobile&status=active"

# 6. Create project (Protected)
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer mock-jwt-token-user-1" \
  -d '{"name":"Security Hardening","description":"Implement rate limiting and CSP headers"}'

# 7. Multi-filter tasks (Search + Status + Priority + ProjectId)
curl "http://localhost:5000/api/tasks?projectId=proj-1&status=done&priority=high"

# 8. Create task (Protected, validates projectId)
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer mock-jwt-token-user-1" \
  -d '{"title":"Implement Redis cache","projectId":"proj-1","priority":"high"}'

# 9. Update task status
curl -X PUT http://localhost:5000/api/tasks/task-1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer mock-jwt-token-user-1" \
  -d '{"status":"done"}'

# 10. Cascading delete project
curl -X DELETE http://localhost:5000/api/projects/proj-1 \
  -H "Authorization: Bearer mock-jwt-token-user-1"
```

### Frontend Testing Guide

1. **Navigation Flow**:
   - Visit `http://localhost:5173/` → Automatically redirects to `/dashboard`.
   - Click **Projects** → Route transitions to `/projects` with active blue styling.
   - Click **Tasks** → Route transitions to `/tasks` with active blue styling.

2. **Real-Time Instant Search & Combined Filtering**:
   - On `/projects`: Filter by typing in the search box; matches filter in real time.
   - On `/tasks`: Combine search term, status chip, and priority chip simultaneously. If zero items match, click **"Reset Filters"** to restore.

3. **Overdue Item Intelligence**:
   - Items where `dueDate < new Date() && status !== 'done'` display a left red border (`border-l-4 border-red-500`) and a red **"Overdue"** badge.

---

## Component Architecture & State Flow

```mermaid
graph TD
    subgraph Frontend ["Frontend (Task 1) - React + Vite"]
        A[mockData.js / State Store] --> B[App Shell / Router]
        B --> C[DashboardPage]
        B --> D[ProjectsPage]
        B --> E[TasksPage]
        
        C --> C1[StatsCard - Computed]
        C --> C2[ProjectCard Grid]
        C --> C3[Recent Tasks List]
        C --> C4[Activity Feed]
        
        D --> D1[SearchBar & Filters]
        D --> D2[ProjectCard Grid]
        
        E --> E1[Multi-Filter Conjunction]
        E --> E2[TaskCard with Overdue Engine]
    end

    subgraph Backend ["Backend (Task 2) - Node.js + Express"]
        API[Express App - /api] --> H[GET /api/health]
        API --> AUTH[Auth Router - /api/auth]
        API --> USR[User Router - /api/users]
        API --> PRJ[Project Router - /api/projects]
        API --> TSK[Task Router - /api/tasks]

        AUTH --> MW_VAL[validate.js]
        PRJ --> MW_AUTH[auth.middleware.js]
        TSK --> MW_AUTH
        
        PRJ --> STORE[(In-Memory store.js)]
        TSK --> STORE
        USR --> STORE
        AUTH --> STORE
    end
```

---

## GitHub Repository Information

- **Repository**: [`https://github.com/Priyan120-dev/TaskFlow-developer-productivity-dashboard`](https://github.com/Priyan120-dev/TaskFlow-developer-productivity-dashboard)
- **Primary Branch**: `main`
- **Evaluation Milestones**:
  - `Task 1`: Frontend Developer Productivity Dashboard (React, Tailwind, Vite)
  - `Task 2`: Backend & REST API Development (`taskflow-api` Express microservice)

---

## Author & Credits

- **Developer**: PRIYAN
- **Role**: Full Stack Developer
- **Email**: [priyaniyappan120@gmail.com](mailto:priyan@taskflow.dev)
- **Program**: Innovation Hacks Full Stack Development Internship

---

## License

This project is licensed under the [MIT License](LICENSE).
