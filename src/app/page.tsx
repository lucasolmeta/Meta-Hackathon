import { Metadata } from 'next'
import PetNameGenerator from '@/components/PetNameGenerator'

export const metadata: Metadata = {
  title: 'Pet Name Generator | Find the Perfect Name for Your Pet',
  description: 'Generate unique and creative names for your pets using AI. Get personalized suggestions based on your pet\'s characteristics and your preferences.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-600 mb-4 animate-bounce">
            Pet Name Generator 🐾
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let AI help you find the perfect name for your furry, feathered, or scaly friend!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 animate-float">
            <PetNameGenerator />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Personalized Names</h3>
            <p className="text-gray-600">Get names that match your pet's personality and characteristics</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">Creative Suggestions</h3>
            <p className="text-gray-600">Discover unique and memorable names you won't find anywhere else</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Multiple Styles</h3>
            <p className="text-gray-600">Choose from cute, funny, elegant, or unique name styles</p>
          </div>
        </div>
      </div>
    </main>
  )
} 