import React from 'react';
import { Message as MessageType } from '@/types/chat';

interface MessageProps {
  message: MessageType;
}

export default function Message({ message }: MessageProps) {
  const isUser = message.role === 'user';

  return (
    <div
      className={`flex ${
        isUser ? 'justify-end' : 'justify-start'
      } mb-4`}
    >
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          isUser
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-800'
        }`}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
        <span className="text-xs mt-1 block opacity-70">
          {isUser ? 'You' : 'Assistant'}
        </span>
      </div>
    </div>
  );
} 