export type TaskStatus = 'todo' | 'in-progress' | 'done';
export type Priority = 'low' | 'medium' | 'high';
export type ProjectStatus = 'active' | 'completed' | 'on-hold';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  completedTasks: number;
  taskCount: number;
  dueDate: string;
  color: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
  dueDate: string;
  projectId: string;
  projectName: string;
}

export interface Activity {
  id: string;
  action: string;
  target: string;
  time: string;
  type: 'create' | 'update' | 'complete' | 'delete';
}
