import Navigation from '@/components/Navigation'
import { espritSections } from './esprit-data'
import EspritSection from './EspritSection'
import Link from 'next/link'

export default function Esprit() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-light mb-8">L&apos;Esprit</h1>
          <p className="text-gray-600 leading-relaxed">
            Dans cet écrin flottant, chaque détail a été pensé pour votre bien-être. De la 
            vaisselle raffinée aux draps les plus fins, en passant par une cave à vins 
            soigneusement sélectionnée, nous avons créé un univers où l&apos;excellence française 
            s&apos;exprime dans sa plus pure tradition.
          </p>
        </div>
      </section>

      {/* Navigation Pills */}
      <div className="flex flex-wrap justify-center gap-4 mb-16 px-4">
        {espritSections.map((section) => (
          <Link 
            key={section.id}
            href={`#${section.id}`} 
            className="px-6 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            {section.title}
          </Link>
        ))}
      </div>

      {/* Content Sections */}
      {espritSections.map((section) => (
        <EspritSection 
          key={section.id} 
          section={section} 
        />
      ))}
    </main>
  )
} 