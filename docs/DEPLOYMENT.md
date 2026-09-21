# TaskFlow Production Deployment Guide

This guide covers deploying the full-stack **TaskFlow** platform to production using **Render** (Frontend Static Site + Backend Web Service) and **MongoDB Atlas** (Cloud Database).

```mermaid
flowchart LR
    Browser[Client Browser] -->|HTTPS| Frontend[Render Static Site\nReact + Vite]
    Frontend -->|API Requests| Backend[Render Web Service\nNode.js Express API]
    Backend -->|TLS Connection| Atlas[(MongoDB Atlas Cloud DB)]
    Backend -->|HTTPS REST| Gemini[Google Gemini API]
```

---

## 📋 1. Prerequisites

Before starting, ensure you have accounts with:
1. [GitHub](https://github.com/) — Repository hosting.
2. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — Cloud database hosting (Free M0 cluster).
3. [Render](https://render.com/) — Cloud hosting for the frontend and backend.
4. [Google AI Studio](https://aistudio.google.com/) — Gemini API key.

---

## 🗄️ 2. Step 1 — MongoDB Atlas Configuration

1. **Create Cluster**:
   - Log in to MongoDB Atlas and create an **M0 Free Shared Cluster**.
   - Select your preferred cloud provider and region.
2. **Create Database User**:
   - Navigate to **Security** &rarr; **Database Access**.
   - Click **Add New Database User**.
   - Choose **Password** authentication. Note the username and password.
   - Set privileges to **Read and write to any database**.
3. **Configure Network Access**:
   - Navigate to **Security** &rarr; **Network Access**.
   - Click **Add IP Address**.
   - Select **Allow Access from Anywhere** (`0.0.0.0/0`) so Render instances can connect.
4. **Obtain Connection String**:
   - In **Deployment** &rarr; **Database**, click **Connect** &rarr; **Drivers**.
   - Copy the SRV connection URI:
     `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/taskflow?retryWrites=true&w=majority`

---

## ⚙️ 3. Step 2 — Backend Deployment (Render Web Service)

1. Log in to your [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** &rarr; **Web Service**.
3. Connect your GitHub repository (`TaskFlow-developer-productivity-dashboard`).
4. Configure the Web Service settings:
   - **Name**: `taskflow-api` (or your preferred name)
   - **Region**: Nearest to your MongoDB Atlas region
   - **Branch**: `main`
   - **Root Directory**: `taskflow-api`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: `Free`
5. **Environment Variables**:
   Under the **Environment Variables** section, add:

| Key | Value (Placeholder) | Description |
|---|---|---|
| `PORT` | `5000` | Port for Express server |
| `NODE_ENV` | `production` | Production runtime flag |
| `JWT_SECRET` | `your_secure_jwt_secret_min_32_chars` | Cryptographic secret for signing tokens |
| `MONGODB_URI` | `mongodb+srv://username:password@cluster.mongodb.net/taskflow?retryWrites=true&w=majority` | MongoDB Atlas connection string |
| `GEMINI_API_KEY` | `your_gemini_api_key_here` | Server-side Google Gemini API key |
| `GEMINI_MODEL` | `gemini-3.5-flash-lite` | Verified fast Gemini model |
| `CORS_ORIGIN` | `https://your-frontend-app.onrender.com` | Update with your frontend URL after Step 3 |

6. Click **Create Web Service**.
7. Once deployed, Render provides a public URL (e.g., `https://taskflow-api.onrender.com`).
8. Verify backend health by visiting: `https://taskflow-api.onrender.com/api/health`.

### 3.1 Seeding Production Data (Optional)
To seed the initial developer account (`alex@taskflow.dev`) and sample projects:
- In the Render Dashboard for your backend service, open the **Shell** tab.
- Run: `npm run seed`.

---

## 🌐 4. Step 3 — Frontend Deployment (Render Static Site)

1. In the Render Dashboard, click **New +** &rarr; **Static Site**.
2. Connect the same GitHub repository.
3. Configure the Static Site settings:
   - **Name**: `taskflow-app` (or your preferred name)
   - **Branch**: `main`
   - **Root Directory**: Leave blank (root of repo)
    - **Build Command**: `npm install && chmod +x node_modules/.bin/vite && npm run build`
    - **Publish Directory**: `dist`
4. **Environment Variables**:
   Add the following build-time environment variables:

| Key | Value (Example) | Description |
|---|---|---|
| `VITE_APP_NAME` | `TaskFlow` | Application display name |
| `VITE_APP_VERSION` | `1.0.0` | Application version |
| `VITE_API_URL` | `https://taskflow-api.onrender.com/api` | Your deployed Render backend API URL |

5. **Rewrite Rules (Single Page Application Routing — Critical for /dashboard, /projects, /tasks refresh)**:
   - In the Render Static Site dashboard, navigate to **Redirects/Rewrites**.
   - Click **Add Rule** and enter:
     - **Type / Action**: `Rewrite`
     - **Source**: `/*`
     - **Destination**: `/index.html`
   *(This ensures client-side routing like `/dashboard`, `/projects`, and `/tasks` serves `index.html` on direct browser reloads instead of returning "Not Found").*
6. Click **Create Static Site**.

> [!TIP]
> **Automated Blueprint Option**: Alternatively, the repository includes a verified [`render.yaml`](../render.yaml) file. In Render, you can click **New +** &rarr; **Blueprint** to deploy both the backend API and frontend static site with the rewrite rules pre-configured.

---

## 🔄 5. Step 4 — Synchronize CORS Origin

Once your frontend is assigned its public URL (e.g., `https://taskflow-app.onrender.com`):
1. Return to the **Render Web Service** (`taskflow-api`).
2. Go to **Environment Variables**.
3. Update `CORS_ORIGIN` with your exact frontend URL:
   `CORS_ORIGIN=https://taskflow-app.onrender.com`
4. Render will automatically redeploy the backend service with updated CORS rules.

---

## 🧪 6. Post-Deployment Verification Checklist

- [ ] **Health Endpoint**: `curl https://taskflow-api.onrender.com/api/health` returns `200 OK` with database status `MongoDB Atlas`.
- [ ] **Login Flow**: Open frontend URL in browser &rarr; 3D login scene loads smoothly &rarr; sign in with `alex@taskflow.dev` / `password123`.
- [ ] **Dashboard Loading**: Dashboard renders with statistics and project cards fetched from MongoDB.
- [ ] **CRUD Persistence**: Create a new project &rarr; refresh the page &rarr; project remains persisted.
- [ ] **AI Daily Focus**: "Today's Focus" card displays a synthesized executive briefing.
- [ ] **AI Copilot**: Open Copilot modal &rarr; ask *"What is TaskFlow?"* &rarr; Gemini responds cleanly.
- [ ] **Secret Scan**: Inspect browser Network tab &rarr; verify `GEMINI_API_KEY` is nowhere in headers, payloads, or frontend scripts.

---

## 🔧 7. Troubleshooting

### 1. Backend Fails to Connect to MongoDB Atlas
- **Symptoms**: Logs show `MongoServerSelectionError: connection timed out`.
- **Remedy**: Check MongoDB Atlas **Network Access**. Ensure `0.0.0.0/0` is allowed. Verify database username and password are URL-encoded if they contain special characters (`@`, `:`, `/`).

### 2. Frontend Shows "Cannot connect to TaskFlow server"
- **Symptoms**: Red network error toast appears on login or dashboard.
- **Remedy**: Verify `VITE_API_URL` in the frontend Render settings includes `/api` at the end (e.g., `https://taskflow-api.onrender.com/api`). Verify `CORS_ORIGIN` on the backend matches the frontend domain exactly without a trailing slash.

### 3. Copilot Returns "AI service is temporarily unavailable"
- **Symptoms**: Copilot chats fail with 503 error.
- **Remedy**: Verify `GEMINI_API_KEY` is set in the Render Backend environment variables. Ensure the key is active in Google AI Studio. Check server logs on Render to see the technical Google API response.
