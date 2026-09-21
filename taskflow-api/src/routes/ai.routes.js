const express = require('express');
const router = express.Router();
const aiController = require('../controllers/ai.controller');
const authMiddleware = require('../middleware/auth.middleware');

// All AI endpoints require authenticated JWT
router.use(authMiddleware);

router.post('/plan', aiController.generatePlan);
router.get('/daily-focus', aiController.getDailyFocus);
router.post('/copilot', aiController.processCopilot);

module.exports = router;
