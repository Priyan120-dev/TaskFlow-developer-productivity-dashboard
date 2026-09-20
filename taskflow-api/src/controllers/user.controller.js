const store = require('../data/store');

const getAllUsers = (req, res) => {
  const users = store.users.map(({ passwordHash, _plainPassword, ...userData }) => userData);
  return res.status(200).json({
    success: true,
    data: {
      users,
      total: users.length,
    },
  });
};

const getUserById = (req, res) => {
  const { id } = req.params;
  const user = store.users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found',
    });
  }

  const { passwordHash, _plainPassword, ...userData } = user;

  return res.status(200).json({
    success: true,
    data: {
      user: userData,
    },
  });
};

module.exports = {
  getAllUsers,
  getUserById,
};
