// src/services/recommendationService.ts
import llmService from './llmService';

export class RecommendationService {
  async getProductRecommendations(userPreferences: any, productHistory: any[]): Promise<string[]> {
    // Construct a prompt for product recommendations
    const prompt = `
      Based on the following user preferences and purchase history, suggest 5 products they might like:
      
      User preferences: ${JSON.stringify(userPreferences)}
      Purchase history: ${JSON.stringify(productHistory)}
      
      Return only product names in a JSON array format.
    `;
    
    const llmResponse = await llmService.generateResponse(prompt);
    
    try {
      // Parse the response - assuming the LLM returns a JSON array
      const recommendations = JSON.parse(llmResponse.response);
      return Array.isArray(recommendations) ? recommendations : [];
    } catch (error) {
      console.error('Error parsing LLM response:', error);
      return [];
    }
  }
}

export default new RecommendationService();