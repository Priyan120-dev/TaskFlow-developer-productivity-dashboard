module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'No token provided. Authorization required.',
    });
  }
  const token = authHeader.split(' ')[1];
  if (!token || token.trim() === '') {
    return res.status(401).json({
      success: false,
      message: 'Invalid token format.',
    });
  }
  req.user = { id: 'user-1', email: 'alex@taskflow.dev' };
  next();
};
