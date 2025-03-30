// src/controllers/assistantController.ts
import { Request, Response } from 'express';
import llmService from '../services/llmService';
import recommendationService from '../services/recommendationService';

class AssistantController {
  async handleChatRequest(req: Request, res: Response): Promise<void> {
    try {
      const { message, chatHistory } = req.body;
      
      const prompt = `
        You are SmartShop AI, a helpful shopping assistant. 
        Respond to the following user message in a helpful, friendly way.
        User message: ${message}
      `;
      
      const llmResponse = await llmService.generateResponse(prompt);
      res.json({ response: llmResponse.response });
    } catch (error) {
      console.error('Error in chat request:', error);
      res.status(500).json({ error: 'Failed to process chat request' });
    }
  }
  
  async getRecommendations(req: Request, res: Response): Promise<void> {
    try {
      const { preferences, history } = req.body;
      const recommendations = await recommendationService.getProductRecommendations(preferences, history);
      res.json({ recommendations });
    } catch (error) {
      console.error('Error getting recommendations:', error);
      res.status(500).json({ error: 'Failed to generate recommendations' });
    }
  }
  
  async handleVisualSearch(req: Request, res: Response): Promise<void> {
    // Placeholder for visual search functionality
    // Will need to incorporate image analysis
    res.status(501).json({ message: 'Visual search not yet implemented' });
  }
}

export default new AssistantController();