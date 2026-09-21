# TaskFlow API — Backend REST API

Backend REST API for the TaskFlow Developer Productivity Dashboard.
Built for the Innovation Hacks Full Stack Development Internship.

## API Documentation
Full API documentation available in: docs/api.md

## Tech Stack
- Node.js & Express.js
- MongoDB & Mongoose ODM
- Bcryptjs (Secure password hashing)
- JSON Web Token (JWT authentication)
- UUID
- CORS
- Dotenv

## Setup Instructions

### 1. Installation
```bash
cd taskflow-api
npm install
cp .env.example .env
```

### 2. Environment Configuration
Configure `.env` with your settings:
```env
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
JWT_SECRET=your_jwt_secret_key_here_min_32_characters
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/taskflow?retryWrites=true&w=majority
```

### 3. Database Seeding
Seed baseline data (1 User, 3 Projects, 5 Tasks):
```bash
npm run seed
```

### 4. Start Development Server
```bash
npm run dev
```

---

## MongoDB Atlas Setup Guide

1. **Create Account & Cluster**:
   - Register at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Create a free shared cluster (M0 sandbox).
2. **Configure Database User**:
   - Navigate to **Security** -> **Database Access**.
   - Add a new database user with password authentication (ensure credentials are saved).
   - Assign built-in role: `Read and write to any database`.
3. **Configure Network Access**:
   - Navigate to **Security** -> **Network Access**.
   - Click **Add IP Address** -> select **Allow Access from Anywhere** (`0.0.0.0/0`) for development.
4. **Obtain Connection String**:
   - In **Deployment** -> **Database**, click **Connect** -> **Drivers** (Node.js).
   - Copy the SRV URI and paste it into `MONGODB_URI` in `.env`.
   - Replace `<password>` with your database user password. If password contains special characters, URL-encode them.

---

## Database Schemas & Relationships

### Collections
- **`users`**: User identity, authentication, and team roles (`developer`, `manager`, `admin`).
- **`projects`**: Initiatives with status (`active`, `completed`, `on-hold`), owner reference, and deadlines.
- **`tasks`**: Work items with status (`todo`, `in-progress`, `done`), priority (`low`, `medium`, `high`), project reference, and assignee/creator references.

### Relationships
- **User -> Projects**: One-to-Many (`Project.owner` references `User._id`).
- **Project -> Tasks**: One-to-Many (`Task.project` references `Project._id`).
- **User -> Assigned Tasks**: One-to-Many (`Task.assignee` references `User._id`).
- **User -> Created Tasks**: One-to-Many (`Task.createdBy` references `User._id`).

---

## Seed Data & Default Credentials

After running `npm run seed`:
- **Default User**:
  - **Email**: `alex@taskflow.dev`
  - **Password**: `password123`
  - **Role**: `developer`
- **Seeded Projects**:
  1. API Gateway Migration (`active`)
  2. Mobile App Redesign (`active`)
  3. Cloud Infrastructure Setup (`completed`)
- **Seeded Tasks**: 5 tasks linked across the 3 projects with diverse statuses and priorities.

---

## Persistence Verification

To verify that data persists:
1. Start the server: `npm run dev`.
2. Create a project via `POST /api/projects` or register a new user.
3. Stop the server (`Ctrl+C`).
4. Restart with `npm run dev`.
5. Call `GET /api/projects` or `GET /api/users` and observe all data remains intact in MongoDB.

---

## Endpoints

| Method | Endpoint | Query Params | Auth Required |
|--------|----------|--------------|---------------|
| GET | /api/health | - | No |
| POST | /api/auth/register | - | No |
| POST | /api/auth/login | - | No |
| GET | /api/users | - | Yes |
| GET | /api/users/:id | - | Yes |
| GET | /api/projects | ?search ?status | No |
| POST | /api/projects | - | Yes |
| GET | /api/projects/:id | - | No |
| PUT | /api/projects/:id | - | Yes |
| DELETE | /api/projects/:id | - | Yes |
| GET | /api/tasks | ?projectId ?status ?priority ?search | No |
| POST | /api/tasks | - | Yes |
| GET | /api/tasks/:id | - | No |
| PUT | /api/tasks/:id | - | Yes |
| DELETE | /api/tasks/:id | - | Yes |

---

## Example Requests

### Health Check
```bash
curl http://localhost:5000/api/health
```

### Register User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Alex Kumar","email":"alex@test.com","password":"123456"}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"alex@taskflow.dev","password":"password123"}'
```

### Get All Projects
```bash
curl http://localhost:5000/api/projects
```

### Search Projects
```bash
curl "http://localhost:5000/api/projects?search=mobile"
```

### Filter Projects by Status
```bash
curl "http://localhost:5000/api/projects?status=active"
```

### Create Project
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <jwt-token>" \
  -d '{"name":"New Project","description":"Project description here"}'
```

### Get All Tasks
```bash
curl http://localhost:5000/api/tasks
```

### Create Task
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <jwt-token>" \
  -d '{"title":"New Task","projectId":"<project-id>","priority":"high"}'
```

### Filter Tasks
```bash
curl "http://localhost:5000/api/tasks?status=todo&priority=high"
```

### Search Tasks
```bash
curl "http://localhost:5000/api/tasks?search=rate"
```

### Update Task Status
```bash
curl -X PUT http://localhost:5000/api/tasks/<task-id> \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <jwt-token>" \
  -d '{"status":"done"}'
```

### Delete Task
```bash
curl -X DELETE http://localhost:5000/api/tasks/<task-id> \
  -H "Authorization: Bearer <jwt-token>"
```
