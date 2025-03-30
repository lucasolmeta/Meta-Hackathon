import { Message, ChatResponse } from '@/types/chat';

export class ChatModel {
  private static instance: ChatModel;
  private apiKey: string;

  private constructor() {
    this.apiKey = process.env.TOGETHER_API_KEY || '';
  }

  public static getInstance(): ChatModel {
    if (!ChatModel.instance) {
      ChatModel.instance = new ChatModel();
    }
    return ChatModel.instance;
  }

  public async sendMessage(messages: Message[]): Promise<ChatResponse> {
    try {
      const response = await fetch('https://api.together.xyz/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
          messages: messages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
          temperature: 0.7,
          max_tokens: 1000,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch from Together AI');
      }

      return await response.json();
    } catch (error) {
      console.error('Error in ChatModel:', error);
      throw error;
    }
  }
} 