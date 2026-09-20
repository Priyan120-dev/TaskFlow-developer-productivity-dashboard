const validateCreateProject = (body = {}) => {
  const errors = [];
  const { name, description, status } = body;

  if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
    errors.push('Name must be between 2 and 100 characters');
  }

  if (!description || typeof description !== 'string' || description.trim().length < 5 || description.trim().length > 500) {
    errors.push('Description must be between 5 and 500 characters');
  }

  if (status && !['active', 'completed', 'on-hold'].includes(status)) {
    errors.push('Status must be active, completed, or on-hold');
  }

  return errors;
};

const validateUpdateProject = (body = {}) => {
  const errors = [];
  const { name, description, status } = body;

  if (name !== undefined) {
    if (typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
      errors.push('Name must be between 2 and 100 characters');
    }
  }

  if (description !== undefined) {
    if (typeof description !== 'string' || description.trim().length < 5 || description.trim().length > 500) {
      errors.push('Description must be between 5 and 500 characters');
    }
  }

  if (status !== undefined) {
    if (!['active', 'completed', 'on-hold'].includes(status)) {
      errors.push('Status must be active, completed, or on-hold');
    }
  }

  return errors;
};

module.exports = {
  validateCreateProject,
  validateUpdateProject,
};
