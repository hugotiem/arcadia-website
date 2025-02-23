import Navigation from '@/components/Navigation'

export default function Arcadia() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Section En Construction */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-light mb-8 opacity-0 animate-[fadeInDown_1s_ease-out_forwards]">
            L&apos;Arcadia
          </h1>
          <div className="flex flex-col items-center justify-center space-y-6">
            <svg 
              className="w-24 h-24 text-gray-400 animate-[scaleIn_1s_ease-out_0.5s_forwards] opacity-0" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            <p className="text-gray-600 text-lg opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]">
              Cette page est en cours de construction.<br />
              Nous préparons une expérience unique pour vous présenter notre magnifique voilier.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 