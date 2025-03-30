// src/routes/apiRoutes.ts
import express from 'express';
import assistantController from '../controllers/assistantController';

const router = express.Router();

router.post('/chat', assistantController.handleChatRequest);
router.post('/recommendations', assistantController.getRecommendations);
router.post('/visual-search', assistantController.handleVisualSearch);

export default router;