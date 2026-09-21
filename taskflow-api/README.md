# TaskFlow REST API Service

The backend REST API service for **TaskFlow — Developer Productivity Workspace**. Built with Node.js, Express, MongoDB Atlas, and Google Gemini Generative AI.

For the overarching application architecture and frontend documentation, see the [Root README](../README.md).

---

## 🛠️ Technology Stack

- **Runtime**: Node.js (v18+)
- **Framework**: Express.js (v4.19)
- **Database**: MongoDB Atlas via Mongoose ODM (v8+)
- **Authentication**: JSON Web Tokens (`jsonwebtoken`) & password hashing (`bcryptjs`)
- **AI Intelligence**: Google Gemini API via REST integration (`gemini-3.5-flash-lite`)
- **Security & Utilities**: CORS, Dotenv, UUID

---

## 🚀 Getting Started

### 1. Installation
```bash
cd taskflow-api
npm install
```

### 2. Environment Configuration
Create a `.env` file from the provided template:
```bash
cp .env.example .env
```

Configure your local `.env` variables:
```env
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
JWT_SECRET=your_jwt_secret_key_minimum_32_characters
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/taskflow?retryWrites=true&w=majority
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-3.5-flash-lite
```

> [!IMPORTANT]
> Keep `GEMINI_API_KEY`, `MONGODB_URI`, and `JWT_SECRET` confidential. The `.env` file is gitignored and must never be committed.

### 3. Database Seeding
Seed the database with the default developer account (`alex@taskflow.dev`), 3 starter projects, and 5 milestone tasks:
```bash
npm run seed
```

### 4. Running the Server

```bash
# Development mode (auto-reload via nodemon)
npm run dev

# Production mode
npm start
```

Default API Base URL: `http://localhost:5000/api`

---

## 📡 API Endpoints Overview

| Category | Method | Endpoint | Description | Auth Required |
|---|---|---|---|:---:|
| **Health** | `GET` | `/api/health` | Service health, timestamp, and database status | No |
| **Auth** | `POST` | `/api/auth/register` | Register a new user | No |
| **Auth** | `POST` | `/api/auth/login` | Authenticate user and receive JWT | No |
| **Auth** | `GET` | `/api/auth/me` | Fetch authenticated user profile | Yes |
| **Users** | `GET` | `/api/users` | List active team members | Yes |
| **Projects** | `GET` | `/api/projects` | List projects with dynamic task counters | Yes |
| **Projects** | `POST` | `/api/projects` | Create a new project (scoped to `req.user.id`) | Yes |
| **Projects** | `GET` | `/api/projects/:id` | Get project details | Yes |
| **Projects** | `PUT` | `/api/projects/:id` | Update project (enforces ownership) | Yes |
| **Projects** | `DELETE`| `/api/projects/:id` | Delete project and associated tasks | Yes |
| **Tasks** | `GET` | `/api/tasks` | Query tasks (supports `status`, `priority`, `search`) | Yes |
| **Tasks** | `POST` | `/api/tasks` | Create task linked to a project | Yes |
| **Tasks** | `GET` | `/api/tasks/:id` | Get task details | Yes |
| **Tasks** | `PUT` | `/api/tasks/:id` | Update task status, priority, or details | Yes |
| **Tasks** | `DELETE`| `/api/tasks/:id` | Delete task item | Yes |
| **Stats** | `GET` | `/api/stats` | Aggregated metrics for dashboard KPIs | Yes |
| **AI** | `POST` | `/api/ai/plan` | Decompose natural language goal into milestone tasks | Yes |
| **AI** | `GET` | `/api/ai/daily-focus` | Synthesize daily executive focus briefing | Yes |
| **AI** | `POST` | `/api/ai/copilot` | AI Copilot technical Q&A and action proposals | Yes |

Detailed endpoint specifications, request payloads, and response examples are documented in:
👉 **[docs/api.md](docs/api.md)**

---

## 🗄️ Database Architecture

- **`User`**: Handles user authentication, hashed password storage, and team roles (`developer`, `manager`, `admin`).
- **`Project`**: Workspaces containing title, description, status (`active`, `completed`, `on-hold`), owner reference, and deadlines.
- **`Task`**: Deliverables with title, description, status (`todo`, `in-progress`, `done`), priority (`low`, `medium`, `high`), estimated hours, and project/assignee references.

---

## 🔒 Security Summary

- **Bcrypt Password Hashing**: Passwords are encrypted with 10 salt rounds before saving.
- **JWT Protection**: Stateless Bearer token verification on all protected mutation and query endpoints.
- **Ownership Verification**: Backend controllers never trust client-supplied owner IDs; all writes are bound to `req.user.id`.
- **LLM Safety**: AI capabilities are purely advisory; database modifications require explicit client confirmation via standard CRUD endpoints.
