const validateRegister = (body = {}) => {
  const errors = [];
  const { name, email, password } = body;

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    errors.push('A valid email format is required');
  }

  if (!password || typeof password !== 'string' || password.length < 6) {
    errors.push('Password must be at least 6 characters');
  }

  return errors;
};

const validateLogin = (body = {}) => {
  const errors = [];
  const { email, password } = body;

  if (!email || typeof email !== 'string' || email.trim() === '') {
    errors.push('Email is required');
  }

  if (!password || typeof password !== 'string' || password === '') {
    errors.push('Password is required');
  }

  return errors;
};

module.exports = {
  validateRegister,
  validateLogin,
};
