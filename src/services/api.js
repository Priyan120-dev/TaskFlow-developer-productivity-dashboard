const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const TOKEN_KEY = 'taskflow_token';

export const getStoredToken = () => localStorage.getItem(TOKEN_KEY);
export const setStoredToken = (token) => {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    localStorage.removeItem(TOKEN_KEY);
  }
};

async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const token = getStoredToken();

  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(url, config);
    let data;
    try {
      data = await response.json();
    } catch {
      data = null;
    }

    if (!response.ok) {
      const error = new Error(data?.message || `HTTP error! status: ${response.status}`);
      error.status = response.status;
      error.data = data;
      error.errors = data?.errors || [];

      if (response.status === 401) {
        window.dispatchEvent(new CustomEvent('taskflow:unauthorized'));
      }

      throw error;
    }

    return data;
  } catch (error) {
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      const networkError = new Error('Cannot connect to TaskFlow server. Please ensure the backend is running.');
      networkError.status = 0;
      throw networkError;
    }
    throw error;
  }
}

export const authApi = {
  login: (credentials) =>
    request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),
  register: (userData) =>
    request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),
};

export const projectsApi = {
  getAll: (params = {}) => {
    const query = new URLSearchParams();
    if (params.search && params.search.trim()) query.append('search', params.search.trim());
    if (params.status && params.status !== 'all') query.append('status', params.status);
    const queryString = query.toString();
    return request(`/projects${queryString ? `?${queryString}` : ''}`);
  },
  getById: (id) => request(`/projects/${id}`),
  create: (data) =>
    request('/projects', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  update: (id, data) =>
    request(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  delete: (id) =>
    request(`/projects/${id}`, {
      method: 'DELETE',
    }),
};

export const tasksApi = {
  getAll: (params = {}) => {
    const query = new URLSearchParams();
    if (params.projectId && params.projectId.trim() && params.projectId !== 'all') {
      query.append('projectId', params.projectId.trim());
    }
    if (params.status && params.status !== 'all') query.append('status', params.status);
    if (params.priority && params.priority !== 'all') query.append('priority', params.priority);
    if (params.search && params.search.trim()) query.append('search', params.search.trim());
    const queryString = query.toString();
    return request(`/tasks${queryString ? `?${queryString}` : ''}`);
  },
  getById: (id) => request(`/tasks/${id}`),
  create: (data) =>
    request('/tasks', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  update: (id, data) =>
    request(`/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  delete: (id) =>
    request(`/tasks/${id}`, {
      method: 'DELETE',
    }),
};

export const usersApi = {
  getAll: () => request('/users'),
  getById: (id) => request(`/users/${id}`),
};

export const statsApi = {
  getStats: () => request('/stats'),
};

export const healthApi = {
  getHealth: () => request('/health'),
};

export const aiApi = {
  generatePlan: (goal, context = {}) =>
    request('/ai/plan', {
      method: 'POST',
      body: JSON.stringify({ goal, context }),
    }),
  getDailyFocus: () => request('/ai/daily-focus'),
  copilot: (message, history = []) =>
    request('/ai/copilot', {
      method: 'POST',
      body: JSON.stringify({ message, history }),
    }),
};

export default {
  auth: authApi,
  projects: projectsApi,
  tasks: tasksApi,
  users: usersApi,
  stats: statsApi,
  health: healthApi,
  ai: aiApi,
};
