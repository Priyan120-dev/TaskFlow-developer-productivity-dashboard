let users = [
  {
    id: 'user-1',
    name: 'Alex Kumar',
    email: 'alex@taskflow.dev',
    passwordHash: 'hashed_password_123',
    role: 'developer',
    createdAt: new Date('2026-08-01').toISOString(),
  },
];

let projects = [
  {
    id: 'proj-1',
    name: 'API Gateway Migration',
    description: 'Migrate legacy REST endpoints to unified API gateway.',
    status: 'active',
    color: '#3b82f6',
    dueDate: '2026-10-15',
    ownerId: 'user-1',
    createdAt: new Date('2026-08-10').toISOString(),
  },
  {
    id: 'proj-2',
    name: 'Mobile App Redesign',
    description: 'Complete UI/UX overhaul of the mobile application.',
    status: 'active',
    color: '#8b5cf6',
    dueDate: '2026-11-30',
    ownerId: 'user-1',
    createdAt: new Date('2026-08-15').toISOString(),
  },
];

let tasks = [
  {
    id: 'task-1',
    title: 'Set up API rate limiting middleware',
    description: 'Implement rate limiting using Redis for the API gateway.',
    status: 'done',
    priority: 'high',
    dueDate: '2026-09-20',
    projectId: 'proj-1',
    assigneeId: 'user-1',
    createdAt: new Date('2026-08-12').toISOString(),
    updatedAt: new Date('2026-09-18').toISOString(),
  },
  {
    id: 'task-2',
    title: 'Design new onboarding flow screens',
    description: 'Create Figma mockups for the redesigned onboarding.',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2026-10-05',
    projectId: 'proj-2',
    assigneeId: 'user-1',
    createdAt: new Date('2026-08-20').toISOString(),
    updatedAt: new Date('2026-09-10').toISOString(),
  },
  {
    id: 'task-3',
    title: 'Write API authentication documentation',
    description: 'Document OAuth2 flow and JWT token management.',
    status: 'todo',
    priority: 'medium',
    dueDate: '2026-10-10',
    projectId: 'proj-1',
    assigneeId: 'user-1',
    createdAt: new Date('2026-09-01').toISOString(),
    updatedAt: new Date('2026-09-01').toISOString(),
  },
];

module.exports = { users, projects, tasks };
