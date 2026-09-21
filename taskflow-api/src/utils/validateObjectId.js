const mongoose = require('mongoose');

const isValidObjectId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

const validateObjectId = (id, res, label = 'Resource') => {
  if (!isValidObjectId(id)) {
    res.status(400).json({
      success: false,
      message: `Invalid ${label} ID format`,
    });
    return false;
  }
  return true;
};

module.exports = { isValidObjectId, validateObjectId };
