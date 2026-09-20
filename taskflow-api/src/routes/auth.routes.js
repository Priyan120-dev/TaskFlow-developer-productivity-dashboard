const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const validate = require('../middleware/validate');
const { validateRegister, validateLogin } = require('../validators/auth.validator');

router.post('/register', validate(validateRegister), authController.register);
router.post('/login', validate(validateLogin), authController.login);

module.exports = router;
