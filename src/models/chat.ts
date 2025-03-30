import { Message, ChatResponse } from '@/types/chat';

export class ChatModel {
  private static readonly API_URL = 'https://api.together.xyz/v1/chat/completions';
  private static readonly MODEL = 'mistralai/Mixtral-8x7B-Instruct-v0.1';

  static async sendMessage(messages: Array<{ role: string; content: string }>): Promise<ChatResponse> {
    const apiKey = process.env.TOGETHER_API_KEY;
    
    if (!apiKey) {
      throw new Error('Together AI API key is not configured');
    }

    const response = await fetch(this.API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: this.MODEL,
        messages,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || 'Failed to fetch from Together AI');
    }

    return response.json();
  }
} 