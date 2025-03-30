'use client'

import { useState } from 'react'
import { useChat } from 'ai/react'

export default function PetNameGenerator() {
  const [petType, setPetType] = useState('dog')
  const [petCharacteristics, setPetCharacteristics] = useState('')
  const [nameStyle, setNameStyle] = useState('cute')

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    initialMessages: [
      {
        id: 'system',
        role: 'system',
        content: `You are a creative pet name generator. Generate unique, memorable names based on the pet's characteristics and the requested style. 
        For each suggestion, provide a brief explanation of why it fits. Keep responses concise and playful.`
      }
    ]
  })

  const handleNameGeneration = (e: React.FormEvent) => {
    e.preventDefault()
    const prompt = `Generate 5 ${nameStyle} names for a ${petType} with these characteristics: ${petCharacteristics}. 
    For each name, explain why it fits the pet.`
    handleSubmit(e, { data: { prompt } })
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleNameGeneration} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pet Type
            </label>
            <select
              value={petType}
              onChange={(e) => setPetType(e.target.value)}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="fish">Fish</option>
              <option value="reptile">Reptile</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name Style
            </label>
            <select
              value={nameStyle}
              onChange={(e) => setNameStyle(e.target.value)}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            >
              <option value="cute">Cute</option>
              <option value="funny">Funny</option>
              <option value="elegant">Elegant</option>
              <option value="unique">Unique</option>
              <option value="classic">Classic</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pet Characteristics
          </label>
          <textarea
            value={petCharacteristics}
            onChange={(e) => setPetCharacteristics(e.target.value)}
            placeholder="Describe your pet's personality, appearance, or any special traits..."
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            rows={3}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !petCharacteristics.trim()}
          className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Generating Names...' : 'Generate Names'}
        </button>
      </form>

      <div className="space-y-4">
        {messages.map((message) => (
          message.role === 'assistant' && (
            <div
              key={message.id}
              className="bg-primary-50 rounded-lg p-4 animate-wiggle"
            >
              <div className="prose prose-primary max-w-none">
                {message.content.split('\n').map((line, i) => (
                  <p key={i} className="text-gray-700">{line}</p>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  )
} 