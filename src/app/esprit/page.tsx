import { espritSections } from './esprit-data'
import EspritSection from './EspritSection'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'L\'Esprit | Arcadia - Voilier de luxe',
  description: 'Découvrez l\'esprit Arcadia : excellence française, art de vivre, gastronomie raffinée et service sur-mesure à bord de notre voilier de luxe.',
  openGraph: {
    title: 'L\'Esprit | Arcadia - Voilier de luxe',
    description: 'Découvrez l\'esprit Arcadia : excellence française, art de vivre, gastronomie raffinée et service sur-mesure à bord de notre voilier de luxe.',
    url: 'https://navire-arcadia.com/esprit',
    siteName: 'Arcadia - Voilier de luxe',
    locale: 'fr_FR',
    type: 'article',
  },
}

export default function Esprit() {
  return (
    <main className="flex-1 bg-white max-w-[90rem] mx-auto px-8">
      
      {/* Header Section */}
      <section className="pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 font-minion-pro">L&apos;Esprit</h1>
          <p className="text-gray-600 leading-[1.2em]">
            Dans cet écrin flottant, chaque détail a été pensé pour votre bien-être. De la 
            vaisselle raffinée aux draps les plus fins, en passant par une cave à vins 
            soigneusement sélectionnée, nous avons créé un univers où l&apos;excellence française 
            s&apos;exprime dans sa plus pure tradition.
          </p>
        </div>
      </section>

      {/* Navigation Pills */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
        {espritSections.map((section) => (
          <Link 
            key={section.id}
            href={`#${section.id}`} 
            className="px-6 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors font-light"
          >
            {section.title}
          </Link>
        ))}
      </div>

      {/* Content Sections */}
      {espritSections.map((section, index) => (
        <EspritSection 
          key={section.id} 
          section={section} 
          isLast={index === espritSections.length - 1}
        />
      ))}
    </main>
  )
} 