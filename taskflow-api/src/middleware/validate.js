module.exports = (validatorFn) => (req, res, next) => {
  const errors = validatorFn(req.body);
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors,
    });
  }
  next();
};
