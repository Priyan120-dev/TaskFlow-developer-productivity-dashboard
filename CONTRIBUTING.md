# Contributing to TaskFlow

Thank you for your interest in contributing to **TaskFlow**! We welcome contributions from developers of all skill levels. This guide explains our workflow, standards, and submission process.

---

## 🛠️ Development Setup

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **MongoDB**: Active MongoDB Atlas cluster or local MongoDB instance (v6.0+)
- **Google Gemini API Key**: For AI capabilities ([Google AI Studio](https://aistudio.google.com/))

### 2. Fork and Clone
```bash
git clone https://github.com/Priyan120-dev/TaskFlow-developer-productivity-dashboard.git
cd TaskFlow-developer-productivity-dashboard
```

### 3. Install Dependencies
Install dependencies for both frontend and backend:
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd taskflow-api
npm install
cd ..
```

### 4. Configure Environment Variables
Copy the example environment files and provide local configuration:

**Frontend** (`.env`):
```env
VITE_APP_NAME=TaskFlow
VITE_APP_VERSION=1.0.0
VITE_API_URL=http://localhost:5000/api
```

**Backend** (`taskflow-api/.env`):
```env
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
JWT_SECRET=your_jwt_secret_key_minimum_32_characters
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/taskflow?retryWrites=true&w=majority
GEMINI_API_KEY=your_gemini_api_key_here
GEMINI_MODEL=gemini-3.5-flash-lite
```

### 5. Seed the Database
```bash
cd taskflow-api
npm run seed
cd ..
```

### 6. Run the Application
In separate terminal tabs:
```bash
# Terminal 1 — Backend API (runs on port 5000)
cd taskflow-api
npm run dev

# Terminal 2 — Frontend App (runs on port 5173)
npm run dev
```

Visit `http://localhost:5173` in your browser. Default login: `alex@taskflow.dev` / `password123`.

---

## 🌿 Git Branching Strategy

We follow a feature-branch workflow. Please branch off `main`:

| Branch Type | Format | Example |
|---|---|---|
| Feature | `feature/<short-description>` | `feature/task-dependencies` |
| Bugfix | `fix/<short-description>` | `fix/copilot-scroll-overflow` |
| Documentation | `docs/<short-description>` | `docs/update-deployment-guide` |
| Refactoring | `refactor/<short-description>` | `refactor/api-error-handlers` |

---

## 📐 Coding Standards

- **Component Architecture**: Keep React components focused and reusable. Use functional components with hooks.
- **State Management**: Use React Context for application-wide authentication state; local component state (`useState`, `useCallback`) for view-specific data.
- **Styling**: Use utility-first Tailwind CSS classes. Maintain consistent color tokens (slate neutrals, blue primaries, purple AI accents).
- **Backend Architecture**: Follow the Controller-Service-Repository pattern. Keep Express route files thin, delegates logic to controllers and services.
- **Validation**: Validate all client inputs at the route/controller level before database persistence.
- **Authorization**: Never trust user IDs provided in request bodies for write operations; always identify users via `req.user.id` from the verified JWT.

---

## 🔒 Security Best Practices

1. **Zero Secret Leaks**: Never commit API keys, database credentials, or JWT secrets to Git.
2. **Environment Files**: Verify `.env` remains in `.gitignore`.
3. **AI Boundaries**: AI features must propose mutations with user confirmation—never perform automated database writes directly from LLM output.

---

## 🧪 Testing Your Changes

Before opening a pull request, ensure:
```bash
# 1. Frontend builds without errors
npm run build

# 2. Backend starts cleanly
cd taskflow-api
npm run dev
```
Test key user flows:
- Authentication (login, logout, registration)
- Project & task CRUD operations
- AI Goal Planner, Daily Focus, and Copilot Q&A
- Responsive layout at desktop and mobile widths

---

## 📬 Pull Request Process

1. Push your branch to your fork.
2. Open a Pull Request against `main`.
3. Provide a clear title and description:
   - What problem does this solve?
   - How was it tested?
   - Include screenshots or GIFs for UI changes.
4. Ensure all CI checks pass.
5. Address code review feedback promptly.
