import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-light mb-8 opacity-0 animate-[fadeInDown_1s_ease-out_forwards]">
            Page non trouvée
          </h1>
          <div className="flex flex-col items-center justify-center space-y-6">
            <p className="text-gray-600 text-lg opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
              La page que vous recherchez n&apos;existe pas ou a été déplacée.<br />
              Nous vous invitons à retourner à l&apos;accueil.
            </p>
            <Link
              href="/"
              className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300 opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 