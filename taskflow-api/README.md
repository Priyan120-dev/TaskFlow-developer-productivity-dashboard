# TaskFlow API — Backend REST API

Backend REST API for the TaskFlow Developer Productivity Dashboard.
Built for the Innovation Hacks Full Stack Development Internship.

## API Documentation
Full API documentation available in: docs/api.md

## Tech Stack
- Node.js
- Express.js
- UUID (for ID generation)
- CORS
- Dotenv

## Setup Instructions
```bash
cd taskflow-api
npm install
cp .env.example .env
npm run dev
```

## Environment Variables
See `.env.example` for all required variables.

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
  -H "Authorization: Bearer mock-jwt-token-user-1" \
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
  -H "Authorization: Bearer mock-jwt-token-user-1" \
  -d '{"title":"New Task","projectId":"proj-1","priority":"high"}'
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
curl -X PUT http://localhost:5000/api/tasks/task-1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer mock-jwt-token-user-1" \
  -d '{"status":"done"}'
```

### Delete Task
```bash
curl -X DELETE http://localhost:5000/api/tasks/task-1 \
  -H "Authorization: Bearer mock-jwt-token-user-1"
```
