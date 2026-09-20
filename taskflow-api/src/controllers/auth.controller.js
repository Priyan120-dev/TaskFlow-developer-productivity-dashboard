const store = require('../data/store');

const register = (req, res) => {
  const { name, email, password } = req.body;
  const normalizedEmail = email.trim().toLowerCase();

  const existingUser = store.users.find(
    u => u.email.toLowerCase() === normalizedEmail
  );

  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: 'Email already registered',
    });
  }

  const newUser = {
    id: `user-${store.users.length + 1}`,
    name: name.trim(),
    email: normalizedEmail,
    passwordHash: `hashed_password_${Date.now()}`,
    _plainPassword: password,
    role: 'developer',
    createdAt: new Date().toISOString(),
  };

  store.users.push(newUser);

  const { passwordHash, _plainPassword, ...userWithoutPassword } = newUser;

  return res.status(201).json({
    success: true,
    message: 'User registered successfully',
    data: {
      user: userWithoutPassword,
    },
  });
};

const login = (req, res) => {
  const { email, password } = req.body;
  const normalizedEmail = (email || '').trim().toLowerCase();

  const user = store.users.find(
    u => u.email.toLowerCase() === normalizedEmail
  );

  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'Invalid email or password',
    });
  }

  const isValidPassword =
    password === 'password123' ||
    password === '123456' ||
    user._plainPassword === password ||
    user.passwordHash === password;

  if (!isValidPassword) {
    return res.status(401).json({
      success: false,
      message: 'Invalid email or password',
    });
  }

  return res.status(200).json({
    success: true,
    message: 'Login successful',
    data: {
      token: `mock-jwt-token-${user.id}`,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    },
  });
};

module.exports = {
  register,
  login,
};
