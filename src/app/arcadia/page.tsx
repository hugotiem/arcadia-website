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
      <div className="max-w-[50rem] mx-auto px-4 pt-24">
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

      {/* Titre */}
      <div className="max-w-[95rem] mx-auto px-4 mt-8 text-center">
        <h1 className="text-4xl font-minion-pro font-bold">L'ARCADIA</h1>
      </div>

      {/* Spécifications */}
      <div className="max-w-[95rem] mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32">
          {/* Colonne gauche */}
          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <span className="font-maison-neue">Année de construction</span>
              <span className="font-maison-neue text-gray-600">1987</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="font-maison-neue">Rénovation</span>
              <span className="font-maison-neue text-gray-600">complète en 2014 et 2022</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="font-maison-neue">Architecte</span>
              <span className="font-maison-neue text-gray-600">Van de Stadt</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="font-maison-neue">Chantier naval</span>
              <span className="font-maison-neue text-gray-600">Astilleros ALBA</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="font-maison-neue">Pavillon</span>
              <span className="font-maison-neue text-gray-600">Français</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="font-maison-neue">Longueur</span>
              <span className="font-maison-neue text-gray-600">21 m</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="font-maison-neue">Largeur</span>
              <span className="font-maison-neue text-gray-600">4,70 m</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="font-maison-neue">Tirant d'eau</span>
              <span className="font-maison-neue text-gray-600">2,20 m</span>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="space-y-2 mt-8 md:mt-0">
            <div className="flex justify-between items-baseline">
              <span className="font-maison-neue">Matériau</span>
              <span className="font-maison-neue text-gray-600">coque Bois</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="font-maison-neue">Capacité d'eau</span>
              <span className="font-maison-neue text-gray-600">300 L</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="font-maison-neue">Capacité carburant</span>
              <span className="font-maison-neue text-gray-600">Diesel</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="font-maison-neue">Moteur</span>
              <span className="font-maison-neue text-gray-600">Yanmar-4LHA-(M)-DTP, 100 HP</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="font-maison-neue">Cabines</span>
              <span className="font-maison-neue text-gray-600">4</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="font-maison-neue">Invités</span>
              <span className="font-maison-neue text-gray-600">12</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="font-maison-neue">Couchages</span>
              <span className="font-maison-neue text-gray-600">8</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="font-maison-neue">Salles de bain</span>
              <span className="font-maison-neue text-gray-600">2</span>
            </div>
          </div>
        </div>

        {/* Images du bas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 mb-16">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/ARCADIA/2.jpg"
              alt="Détail du pont"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/02.jpg"
              alt="Détail des voiles"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  )
} 