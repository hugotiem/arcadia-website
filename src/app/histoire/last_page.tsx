'use client'

import { useEffect, useRef } from 'react'
import Navigation from '@/components/Navigation'
import Image from 'next/image'

function useScrollAnimation() {
  const observerRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            const animation = entry.target.getAttribute('data-animation')
            if (animation) {
              entry.target.classList.add(animation)
            }
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const setRef = (index: number) => (el: HTMLElement | null) => {
    observerRefs.current[index] = el
  }

  return setRef
}

// Données statiques pour éviter les recalculs
const sections = [
  {
    id: 'famille',
    title: 'La Famille Blanchard Dignac',
    subtitle: "Une Histoire de Marins, d'Aventuriers et de Passionnés",
    description: `La famille Blanchard Dignac, originaire du Sud-Ouest de la France,
      incarne l'esprit des marins et des pionniers qui ont fait l'histoire de
      cette région. Fiers enfants de grands vins, de gastronomie française
      et de traditions maritimes, ils ont su conjuguer ces passions.
      Chaque membre de la famille est animé par un amour profond pour
      l'héritage familial et la beauté qui se retrouvent dans un château
      historique, un vignoble d'exception et maintenant sur les flots.
      Dans une quête d'excellence partagée en créations uniques mêlant
      art de vivre, gastronomie, bien-être et culture viticole. Les
      Blanchard Dignac perpétuent une tradition d'innovation, faisant de
      tous les détails de leur recherche constante de beauté dans tous ce
      qu'ils entreprennent.`,
    image: '/histoire-famille.jpg'
  },
  {
    id: 'chateau',
    title: 'Le Château de Lurs',
    subtitle: "Un lieu d'Art et de Création",
    description: `Le Château de Lurs, une propriété emblématique de la région de
      la Durance, est l'un des joyaux acquis par la famille Blanchard Dignac.
      Différents créateurs et artistes s'y sont succédé au fil des siècles,
      laissant leur empreinte sur ce lieu magique. La famille a entrepris
      les Alpes, méticuleusement fait restaurer ce lieu, imaginant
      l'avenir tout en respectant son passé. Un espace dédié à l'art et à
      la création a été aménagé, permettant aux artistes d'y trouver
      inspiration et tout catalyser. Le château est devenu un véritable
      sanctuaire de l'art, où la beauté et la création contemporaine se
      mêlent harmonieusement à l'histoire séculaire, créant un chapitre
      neuf de l'essence même de la Provence.`,
    image: '/histoire-chateau.jpg'
  },
  {
    id: 'ecole',
    title: "L'École d'Art",
    subtitle: "Financer l'Avenir du Beau",
    description: `La famille Blanchard Dignac apporte une importance capitale à
      l'éducation artistique. L'École d'Art du Château de Lurs représente
      une vision ambitieuse de la transmission du savoir et de la préservation
      de l'héritage de la tradition maritime. Les générations futures peuvent ainsi
      découvrir et perpétuer cet art de vivre unique. L'école est devenue un
      carrefour de talents et de rencontres où se conjuguent dans une culture
      artistique riche. L'école est vite un lieu d'exception où les créateurs
      peuvent s'exprimer librement et trouver l'inspiration nécessaire
      dans une démarche de mécénat durable. Pour eux, l'art est une
      richesse à partager, et ils transmettent cet art avec passion
      pour perpétuer l'avenir et la beauté comme la pièce principale.`,
    image: '/histoire-ecole.jpg'
  }
]

export default function Histoire() {
  const setRef = useScrollAnimation()

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-8">
            Une Expérience Maritime d'Exception
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Dans la noble tradition des grands navigateurs, notre ketch sillonne avec grâce
            les eaux méditerranéennes. Façonné dans les essences les plus précieuses, il perpétue
            l'excellence maritime française. De la Riviera aux rivages d'Orient, notre équipage cultive
            l'art subtil du voyage en mer, où chaque instant s'écoule avec la délicatesse d'un sablier
            d'argent.
          </p>
        </div>
      </section>

      {/* Histoire Sections */}
      <div className="max-w-6xl mx-auto px-4 space-y-24 pb-24">
        {sections.map((section, index) => (
          <div key={section.id}>
            {index > 0 && (
              <div className="w-full h-px bg-gray-200" />
            )}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold mb-2">{section.title}</h2>
                <h3 className="text-lg mb-6 font-bold">{section.subtitle}</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{section.description}</p>
              </div>
              <div className="relative h-[400px] grayscale hover:grayscale-0 transition-all duration-500">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>
            </section>
          </div>
        ))}
      </div>
    </main>
  )
} 