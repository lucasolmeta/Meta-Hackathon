import { NextResponse } from 'next/server';
import { Message } from '@/types/chat';
import { ChatModel } from '@/models/chat';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const chatModel = ChatModel.getInstance();
    const response = await chatModel.sendMessage(messages);
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
} 