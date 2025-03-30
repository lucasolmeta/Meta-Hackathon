'use client';

import { useState, useRef, useEffect } from 'react';

type MessageType = {
  role: 'user' | 'assistant';
  content: string;
  id: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: MessageType = {
      role: 'user',
      content: input.trim(),
      id: Date.now().toString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [
            {
              role: 'system',
              content: `You are a creative and fun pet name generator. Your job is to suggest unique, meaningful names for pets based on their characteristics, personality, and owner preferences. Always explain the meaning and inspiration behind each name suggestion. Be playful and engaging in your responses.`
            },
            ...messages,
            userMessage
          ]
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate name');
      }

      const data = await response.json();
      const assistantMessage: MessageType = {
        role: 'assistant',
        content: data.choices[0].message.content,
        id: (Date.now() + 1).toString(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      setError('Oops! Something went wrong. Please try again.');
      console.error('Name generation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full text-gray-600">
            <div className="text-center">
              <p className="text-lg mb-2">🐱 Welcome to Pet Name Genius! 🐶</p>
              <p className="text-sm mb-4">Tell me about your pet and I'll suggest the perfect name!</p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>Try asking things like:</p>
                <p>"I have a playful orange tabby cat who loves to climb"</p>
                <p>"My dog is a gentle golden retriever who loves swimming"</p>
                <p>"I need a name for my energetic hamster who loves running in his wheel"</p>
              </div>
            </div>
          </div>
        )}
        
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 ${
                message.role === 'user'
                  ? 'bg-purple-500 text-white rounded-br-none'
                  : 'bg-pink-50 text-gray-800 rounded-bl-none border border-pink-100'
              }`}
            >
              <div className="prose prose-sm">
                {message.content.split('\n').map((line, i) => (
                  <p key={i} className="mb-0">{line}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-pink-50 rounded-2xl rounded-bl-none p-4 text-gray-800 border border-pink-100">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        
        {error && (
          <div className="text-red-500 text-sm text-center bg-red-50 py-2 rounded-lg">
            {error}
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={sendMessage} className="border-t border-gray-200 p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tell me about your pet..."
            className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Generate Name
          </button>
        </div>
      </form>
    </div>
  );
} 