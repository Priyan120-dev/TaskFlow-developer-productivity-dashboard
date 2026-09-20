const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');
const authMiddleware = require('../middleware/auth.middleware');
const validate = require('../middleware/validate');
const { validateCreateTask, validateUpdateTask } = require('../validators/task.validator');

router.get('/', taskController.getAllTasks);
router.post('/', authMiddleware, validate(validateCreateTask), taskController.createTask);
router.get('/:id', taskController.getTaskById);
router.put('/:id', authMiddleware, validate(validateUpdateTask), taskController.updateTask);
router.delete('/:id', authMiddleware, taskController.deleteTask);

module.exports = router;
