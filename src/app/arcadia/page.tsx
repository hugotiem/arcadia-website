import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Image from 'next/image'
import { mainsonNeueExtended } from '../fonts'

export const metadata: Metadata = {
  title: 'L\'Arcadia | Voilier de luxe en Méditerranée',
  description: 'Découvrez l\'Arcadia, un ketch d\'exception. Luxe, confort et élégance pour une expérience maritime unique en Méditerranée.',
  openGraph: {
    title: 'L\'Arcadia | Voilier de luxe en Méditerranée',
    description: 'Découvrez l\'Arcadia, un ketch d\'exception. Luxe, confort et élégance pour une expérience maritime unique en Méditerranée.',
    url: 'https://navire-arcadia.com/arcadia',
    siteName: 'Arcadia - Voilier de luxe',
    locale: 'fr_FR',
    type: 'article',
  },
}

export default function Arcadia() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Image */}
      <div className="w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] mx-auto px-4 pt-24">
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
          <Image
            src="/hero-boat.jpg"
            alt="Voilier Arcadia"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Titre et Divider */}
      <div className="max-w-[95rem] mx-auto px-4 mt-8 text-center">
        <h1 className="text-4xl font-minion-pro font-bold">ARCADIA</h1>
        <div className="w-full h-[1px] bg-black/20 mt-5"></div>
      </div>

      {/* Images du bas */}
      <div className="max-w-[68rem] mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <div className="relative w-[500px] h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/ARCADIA/2.jpg"
              alt="Détail du pont"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-[500px] h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/02.jpg"
              alt="Détail des voiles"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Spécifications */}
      <div className="max-w-[95rem] mx-auto px-4 mt-16 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32">
          {/* Colonne gauche */}
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <span className={`${mainsonNeueExtended.className} font-semibold text-base`}>Année de construction</span>
              <span className={`${mainsonNeueExtended.className} font-light text-base`}>1987</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className={`${mainsonNeueExtended.className} font-semibold text-base`}>Rénovation</span>
              <span className={`${mainsonNeueExtended.className} font-light text-base`}>complète en 2014 et 2022</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className={`${mainsonNeueExtended.className} font-semibold text-base`}>Architecte</span>
              <span className={`${mainsonNeueExtended.className} font-light text-base`}>Van de Stadt</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className={`${mainsonNeueExtended.className} font-semibold text-base`}>Chantier naval</span>
              <span className={`${mainsonNeueExtended.className} font-light text-base`}>Astilleros ALBA</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className={`${mainsonNeueExtended.className} font-semibold text-base`}>Pavillon</span>
              <span className={`${mainsonNeueExtended.className} font-light text-base`}>Français</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className={`${mainsonNeueExtended.className} font-semibold text-base`}>Longueur</span>
              <span className={`${mainsonNeueExtended.className} font-light text-base`}>21 m</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className={`${mainsonNeueExtended.className} font-semibold text-base`}>Largeur</span>
              <span className={`${mainsonNeueExtended.className} font-light text-base`}>4,70 m</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className={`${mainsonNeueExtended.className} font-semibold text-base`}>Tirant d&apos;eau</span>
              <span className={`${mainsonNeueExtended.className} font-light text-base`}>2,20 m</span>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="space-y-2 mt-8 md:mt-0">
            <div className="flex justify-between items-baseline">
              <span className={`${mainsonNeueExtended.className} font-semibold text-base`}>Matériau</span>
              <span className={`${mainsonNeueExtended.className} font-light text-base`}>coque Bois</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className={`${mainsonNeueExtended.className} font-semibold text-base`}>Capacité d&apos;eau</span>
              <span className={`${mainsonNeueExtended.className} font-light text-base`}>300 L</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className={`${mainsonNeueExtended.className} font-semibold text-base`}>Capacité carburant</span>
              <span className={`${mainsonNeueExtended.className} font-light text-base`}>Diesel</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className={`${mainsonNeueExtended.className} font-semibold text-base`}>Moteur</span>
              <span className={`${mainsonNeueExtended.className} font-light text-base`}>Yanmar-4LHA-(M)-DTP, 100 HP</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className={`${mainsonNeueExtended.className} font-semibold text-base`}>Cabines</span>
              <span className={`${mainsonNeueExtended.className} font-light text-base`}>4</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className={`${mainsonNeueExtended.className} font-semibold text-base`}>Invités</span>
              <span className={`${mainsonNeueExtended.className} font-light text-base`}>12</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className={`${mainsonNeueExtended.className} font-semibold text-base`}>Couchages</span>
              <span className={`${mainsonNeueExtended.className} font-light text-base`}>8</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className={`${mainsonNeueExtended.className} font-semibold text-base`}>Salles de bain</span>
              <span className={`${mainsonNeueExtended.className} font-light text-base`}>2</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 