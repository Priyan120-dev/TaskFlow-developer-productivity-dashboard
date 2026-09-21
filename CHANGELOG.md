# Changelog

All notable changes to the **TaskFlow** project are documented in this file, structured across the four core milestones of the Innovation Hacks Full Stack Development Internship.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Task 4] — Full-Stack Integration, AI Capabilities & Production Experience

### Added
- **Full-Stack End-to-End Integration**: Connected React 18 frontend directly to Express backend and live MongoDB Atlas cluster, replacing mock/in-memory states.
- **Client Authentication Flow**: Built React Auth Context (`AuthContext.jsx`), persistent JWT session management, automatic redirect guards (`ProtectedRoute.jsx`), and dedicated login and registration pages.
- **Three Core AI Capabilities**:
  - **AI Goal → Complete Task Plan** (`POST /api/ai/plan`): Decomposes natural language engineering goals into structured project deliverables with task estimates and milestone priorities.
  - **AI Daily Focus & Priority Briefing** (`GET /api/ai/daily-focus`): Analyzes active user workload and delivers executive daily summaries with actionable recommendations and hallucination-guarded task matching.
  - **TaskFlow AI Copilot** (`POST /api/ai/copilot`): Personal AI productivity assistant offering software engineering Q&A, contextual workspace querying, and confirmation-guarded action proposals.
- **Guarded Action Proposal Pattern**: Copilot proposes project and task creation operations with `requiresConfirmation: true`. Actions render interactive UI cards requiring explicit user approval before executing existing authorized CRUD endpoints.
- **3D Cyber-Tech Futuristic Login Experience**: Implemented WebGL 3D scene using Three.js featuring metallic geometric concentric floor, rotating orbital tracks, neon cyan/blue light rings, and 5 elevated pedestals with floating 3D artifacts (TypeScript cube, Code `</>` slab, Cloud cube, Security shield with lightning bolt, and Collaboration team badge).
- **Custom Logo Symbol Branding**: Integrated custom geometric logo mark across the Copilot modal header, message avatars, floating trigger badge, and Today's Focus card.
- **Automated AI Failover**: Configured Google Gemini API service with candidate failover across verified models (`gemini-3.5-flash-lite`, `gemini-3.1-flash-lite`, `gemini-flash-lite-latest`, `gemini-flash-latest`, `gemini-3.6-flash`).

### Changed
- Refactored `src/services/api.js` with centralized Axios client, Bearer token interceptor, and comprehensive error handling.
- Optimized bundle splitting with Vite `rollupOptions.manualChunks` isolating Three.js runtime.

---

## [Task 3] — MongoDB Database Integration & Security Hardening

### Added
- **MongoDB Atlas Persistence**: Replaced ephemeral in-memory storage with cloud-hosted MongoDB Atlas database connection via Mongoose ODM.
- **Mongoose Data Models**:
  - `User`: Identity, email indexing, password storage, team roles (`developer`, `manager`, `admin`).
  - `Project`: Workspaces with status enum, color codes, deadlines, and `owner` relationship.
  - `Task`: Deliverables with status, priority, estimated hours, and `project` / `assignee` / `createdBy` relationships.
- **Security & Authentication**:
  - Encrypted passwords using `bcryptjs` (10 salt rounds).
  - JWT token generation upon login/registration with configurable expiration.
  - Bearer authentication verification middleware (`auth.middleware.js`).
- **Data Seeding Engine**: Automated database seeder (`taskflow-api/src/data/seed.js`) populating default developer credentials (`alex@taskflow.dev`), 3 realistic projects, and 5 categorized milestone tasks.
- **Platform Analytics Endpoint**: Implemented `GET /api/stats` aggregating project totals, task status distributions, and overall completion percentages.
- **Health Check Endpoint**: Implemented `GET /api/health` reporting server status, timestamp, environment, database type, and route catalog.

### Changed
- Migrated all CRUD controllers (`project.controller.js`, `task.controller.js`, `user.controller.js`) to asynchronous Mongoose operations.
- Added strict ObjectId validation preventing cast errors and injection attempts.

---

## [Task 2] — Node.js & Express REST API Foundation

### Added
- **Express Server Architecture**: Built modular REST API service in `taskflow-api/` with separated routes, controllers, middleware, and data layers.
- **Route Modules**:
  - `/api/auth`: User registration, login, and profile verification.
  - `/api/users`: Team member retrieval.
  - `/api/projects`: Full CRUD operations and cascading task retrieval (`/api/projects/:id/tasks`).
  - `/api/tasks`: Full CRUD operations with multi-field query filtering (`status`, `priority`, `project`, `search`).
- **Input Validation**: Added request body validation ensuring required fields, type correctness, and valid enum values.
- **Cross-Origin Configuration**: Integrated `cors` middleware configured for Vite development server.

---

## [Task 1] — Developer Productivity Dashboard Frontend

### Added
- **React 18 & Vite SPA**: Scaffolded single-page application with component-driven architecture and Vite build tooling.
- **Tailwind CSS Design System**: Crafted modern SaaS user interface with curated color palette, subtle glassmorphism, and responsive breakpoints.
- **Interactive Views**:
  - **Dashboard**: High-level KPI metrics (total projects, total tasks, completed, in progress) and recent project cards.
  - **Projects Explorer**: Grid view of active initiatives with progress bars, team badges, and status filtering.
  - **Tasks Manager**: Work item board with priority badges, overdue deadline intelligence, and multi-filter combination search.
- **UI Enhancements**:
  - Loading skeleton placeholders.
  - Animated activity type indicators.
  - Mobile-responsive sliding navigation drawer.
