import Navigation from '@/components/Navigation'

export default function Loading() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-800 rounded-full animate-spin" />
            <p className="text-gray-600 text-lg">
              Chargement...
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 