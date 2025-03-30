// src/services/llmService.ts
import axios from 'axios';

export interface LLMResponse {
  response: string;
}

export class LlamaService {
  private readonly endpoint: string;
  
  constructor() {
    this.endpoint = process.env.OLLAMA_ENDPOINT || 'http://localhost:11434/api/generate';
  }
  
  async generateResponse(prompt: string, context?: string[]): Promise<LLMResponse> {
    try {
      const response = await axios.post(this.endpoint, {
        model: 'llama3',
        prompt: prompt,
        context: context || [],
        stream: false
      });
      
      return { response: response.data.response };
    } catch (error) {
      console.error('Error calling Llama model:', error);
      throw new Error('Failed to generate response from LLM');
    }
  }
}

export default new LlamaService();