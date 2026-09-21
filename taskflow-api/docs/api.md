# TaskFlow API Documentation

## Base URL
http://localhost:5000/api

## New Endpoints Added

### Stats Overview
GET /api/stats

Response 200:
```json
{
  "success": true,
  "data": {
    "users": { "total": 2 },
    "projects": {
      "total": 3,
      "active": 2,
      "completed": 1
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

### Enhanced Health Check
GET /api/health

Response 200:
```json
{
  "success": true,
  "status": "ok",
  "message": "TaskFlow API is running",
  "timestamp": "2026-09-20T10:00:00.000Z",
  "environment": "development",
  "database": "MongoDB Atlas",
  "version": "1.0.0",
  "endpoints": {
    "auth": "/api/auth",
    "users": "/api/users",
    "projects": "/api/projects",
    "tasks": "/api/tasks"
  }
}
```

## Authentication
All protected routes require:
Authorization: Bearer <token>

## Response Format

### Success Response
```json
{
  "success": true,
  "message": "Description of action",
  "data": { ... }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "errors": ["field error 1", "field error 2"]
}
```

## HTTP Status Codes
| Code | Meaning |
|------|---------|
| 200  | Success |
| 201  | Created |
| 400  | Validation Error |
| 401  | Unauthorized |
| 404  | Not Found |
| 409  | Conflict (duplicate) |
| 500  | Server Error |

---

## Endpoints

### Health Check
GET /api/health

Response 200:
```json
{
  "success": true,
  "status": "ok",
  "message": "TaskFlow API is running",
  "timestamp": "2026-09-20T10:00:00.000Z"
}
```

---

### AUTH

#### Register User
POST /api/auth/register
Content-Type: application/json

Request Body:
```json
{
  "name": "Alex Kumar",
  "email": "alex@taskflow.dev",
  "password": "123456"
}
```

Success Response 201:
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "user-1",
      "name": "Alex Kumar",
      "email": "alex@taskflow.dev",
      "role": "developer",
      "createdAt": "2026-09-20T10:00:00.000Z"
    }
  }
}
```

Error 400 (validation):
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": ["Password must be at least 6 characters"]
}
```

Error 409 (duplicate email):
```json
{
  "success": false,
  "message": "Email already registered"
}
```

#### Login
POST /api/auth/login
Content-Type: application/json

Request Body:
```json
{
  "email": "alex@taskflow.dev",
  "password": "password123"
}
```

Success Response 200:
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

Error 401:
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

---

### USERS

#### Get All Users
GET /api/users
Authorization: Bearer mock-jwt-token-user-1

Response 200:
```json
{
  "success": true,
  "data": {
    "users": [...],
    "total": 1
  }
}
```

#### Get User By ID
GET /api/users/:id
Authorization: Bearer mock-jwt-token-user-1

Response 200:
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user-1",
      "name": "Alex Kumar",
      "email": "alex@taskflow.dev",
      "role": "developer",
      "createdAt": "..."
    }
  }
}
```

Error 404:
```json
{
  "success": false,
  "message": "User not found"
}
```

---

### PROJECTS

#### Get All Projects
GET /api/projects
Optional query params:
  ?search=mobile
  ?status=active

Response 200:
```json
{
  "success": true,
  "data": {
    "projects": [
      {
        "id": "proj-1",
        "name": "API Gateway Migration",
        "description": "...",
        "status": "active",
        "color": "#3b82f6",
        "dueDate": "2026-10-15",
        "ownerId": "user-1",
        "taskCount": 3,
        "completedTasks": 1,
        "createdAt": "..."
      }
    ],
    "total": 2
  }
}
```

#### Create Project
POST /api/projects
Authorization: Bearer mock-jwt-token-user-1
Content-Type: application/json

Request Body:
```json
{
  "name": "New Project",
  "description": "Project description here",
  "status": "active",
  "dueDate": "2026-12-31",
  "color": "#3b82f6"
}
```

Response 201:
```json
{
  "success": true,
  "message": "Project created successfully",
  "data": {
    "project": { ...all fields }
  }
}
```

Error 400:
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": ["Name must be at least 2 characters"]
}
```

#### Get Project By ID
GET /api/projects/:id

Response 200:
```json
{
  "success": true,
  "data": {
    "project": {
      ...all fields,
      "taskCount": 3,
      "completedTasks": 1
    }
  }
}
```

#### Update Project
PUT /api/projects/:id
Authorization: Bearer mock-jwt-token-user-1
Content-Type: application/json

Request Body (all optional):
```json
{
  "name": "Updated Name",
  "description": "Updated description",
  "status": "completed",
  "dueDate": "2026-11-30",
  "color": "#10b981"
}
```

Response 200:
```json
{
  "success": true,
  "message": "Project updated successfully",
  "data": {
    "project": { ...updated fields }
  }
}
```

#### Delete Project
DELETE /api/projects/:id
Authorization: Bearer mock-jwt-token-user-1

Response 200:
```json
{
  "success": true,
  "message": "Project and its tasks deleted successfully"
}
```

Note: Deleting a project also deletes all tasks 
belonging to that project.

---

### TASKS

#### Get All Tasks
GET /api/tasks
Optional query params:
  ?projectId=proj-1
  ?status=todo
  ?priority=high
  ?search=rate limiting

All filters work together simultaneously.

Response 200:
```json
{
  "success": true,
  "data": {
    "tasks": [
      {
        "id": "task-1",
        "title": "Set up API rate limiting",
        "description": "...",
        "status": "done",
        "priority": "high",
        "dueDate": "2026-09-20",
        "projectId": "proj-1",
        "assigneeId": "user-1",
        "createdAt": "...",
        "updatedAt": "..."
      }
    ],
    "total": 1
  }
}
```

#### Create Task
POST /api/tasks
Authorization: Bearer mock-jwt-token-user-1
Content-Type: application/json

Request Body:
```json
{
  "title": "New Task Title",
  "description": "Task description",
  "projectId": "proj-1",
  "status": "todo",
  "priority": "medium",
  "dueDate": "2026-11-01",
  "assigneeId": "user-1"
}
```

Response 201:
```json
{
  "success": true,
  "message": "Task created successfully",
  "data": {
    "task": { ...all fields }
  }
}
```

Error 404 (invalid projectId):
```json
{
  "success": false,
  "message": "Project not found"
}
```

#### Get Task By ID
GET /api/tasks/:id

Response 200:
```json
{
  "success": true,
  "data": {
    "task": { ...all fields }
  }
}
```

#### Update Task
PUT /api/tasks/:id
Content-Type: application/json

Request Body (all optional):
```json
{
  "title": "Updated title",
  "description": "Updated description",
  "status": "in-progress",
  "priority": "high",
  "dueDate": "2026-10-15",
  "assigneeId": "user-1"
}
```

Response 200:
```json
{
  "success": true,
  "message": "Task updated successfully",
  "data": {
    "task": { ...updated fields with new updatedAt }
  }
}
```

#### Delete Task
DELETE /api/tasks/:id

Response 200:
```json
{
  "success": true,
  "message": "Task deleted successfully"
}
```

---

## Curl Examples

### Health Check
```bash
curl http://localhost:5000/api/health
```

### Register
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@test.com","password":"123456"}'
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

### Get Projects With Filter
```bash
curl "http://localhost:5000/api/projects?status=active"
```

### Search Projects
```bash
curl "http://localhost:5000/api/projects?search=mobile"
```

### Create Project
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer mock-jwt-token-user-1" \
  -d '{"name":"New Project","description":"Description here"}'
```

### Get All Tasks
```bash
curl http://localhost:5000/api/tasks
```

### Filter Tasks
```bash
curl "http://localhost:5000/api/tasks?status=todo&priority=high"
```

### Search Tasks
```bash
curl "http://localhost:5000/api/tasks?search=rate"
```

### Create Task
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer mock-jwt-token-user-1" \
  -d '{"title":"New Task","projectId":"proj-1","priority":"high"}'
```

### Update Task Status
```bash
curl -X PUT http://localhost:5000/api/tasks/task-1 \
  -H "Content-Type: application/json" \
  -d '{"status":"done"}'
```

### Delete Task
```bash
curl -X DELETE http://localhost:5000/api/tasks/task-1
```
