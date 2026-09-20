const validateCreateTask = (body = {}) => {
  const errors = [];
  const { title, projectId, status, priority, description } = body;

  if (!title || typeof title !== 'string' || title.trim().length < 2 || title.trim().length > 200) {
    errors.push('Title must be between 2 and 200 characters');
  }

  if (!projectId || typeof projectId !== 'string' || projectId.trim() === '') {
    errors.push('Project ID is required');
  }

  if (status && !['todo', 'in-progress', 'done'].includes(status)) {
    errors.push('Status must be todo, in-progress, or done');
  }

  if (priority && !['low', 'medium', 'high'].includes(priority)) {
    errors.push('Priority must be low, medium, or high');
  }

  if (description && typeof description === 'string' && description.length > 1000) {
    errors.push('Description cannot exceed 1000 characters');
  }

  return errors;
};

const validateUpdateTask = (body = {}) => {
  const errors = [];
  const { title, status, priority, description } = body;

  if (title !== undefined) {
    if (typeof title !== 'string' || title.trim().length < 2 || title.trim().length > 200) {
      errors.push('Title must be between 2 and 200 characters');
    }
  }

  if (status !== undefined && !['todo', 'in-progress', 'done'].includes(status)) {
    errors.push('Status must be todo, in-progress, or done');
  }

  if (priority !== undefined && !['low', 'medium', 'high'].includes(priority)) {
    errors.push('Priority must be low, medium, or high');
  }

  if (description !== undefined && typeof description === 'string' && description.length > 1000) {
    errors.push('Description cannot exceed 1000 characters');
  }

  return errors;
};

module.exports = {
  validateCreateTask,
  validateUpdateTask,
};
