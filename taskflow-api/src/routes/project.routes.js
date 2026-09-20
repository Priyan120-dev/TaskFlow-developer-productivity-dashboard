const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');
const authMiddleware = require('../middleware/auth.middleware');
const validate = require('../middleware/validate');
const { validateCreateProject, validateUpdateProject } = require('../validators/project.validator');

router.get('/', projectController.getAllProjects);
router.post('/', authMiddleware, validate(validateCreateProject), projectController.createProject);
router.get('/:id', projectController.getProjectById);
router.put('/:id', authMiddleware, validate(validateUpdateProject), projectController.updateProject);
router.delete('/:id', authMiddleware, projectController.deleteProject);

module.exports = router;
