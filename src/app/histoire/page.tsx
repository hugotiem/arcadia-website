'use client'

import { useEffect, useRef } from 'react'
import Navigation from '@/components/Navigation'
import Image from 'next/image'

export default function Histoire() {
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

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 
            ref={setRef(0)}
            className="text-4xl font-bold mb-8 font-minion-pro animate-on-scroll"
            data-animation="animate-fade-up"
          >
            Une Expérience Maritime d&apos;Exception
          </h1>
          <p 
            ref={setRef(1)}
            className="text-gray-600 leading-relaxed animate-on-scroll"
            data-animation="animate-fade-up"
          >
            Dans la noble tradition des grands navigateurs, notre ketch sillonne avec grâce
            les eaux méditerranéennes. Façonné dans les essences les plus précieuses, il perpétue
            l&apos;excellence maritime française. De la Riviera aux rivages d&apos;Orient, notre équipage cultive
            l&apos;art subtil du voyage en mer, où chaque instant s&apos;écoule avec la délicatesse d&apos;un sablier
            d&apos;argent.
          </p>
        </div>
      </section>

      {/* Histoire Sections */}
      <div className="max-w-[90rem] mx-auto px-8 space-y-24 pb-24">
        {/* La Famille Blanchard Dignac */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div 
            ref={setRef(2)}
            className="animate-on-scroll h-fit"
            data-animation="animate-slide-right"
          >
            <h2 className="text-3xl font-bold font-minion-pro">La Famille Blanchard Dignac</h2>
            <h3 className="text-lg text-gray-500 mb-8 font-light">Une Histoire de Marins, d&apos;Aventuriers et de Passionnés</h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              La famille Blanchard Dignac, originaire du Sud-Ouest de la France,
              incarne l&apos;esprit des marins et des pionniers qui ont fait l&apos;histoire de
              cette région. Passionnés de grands vins, de gastronomie française
              et de traditions maritimes, ils ont su conjuguer ces passions.
              Chaque membre de la famille est animé par un amour profond pour
              l&apos;héritage familial et la beauté qui se retrouvent dans un château
              historique, un vignoble d&apos;exception et maintenant sur les flots.
              Dans une quête d&apos;excellence partagée en créations uniques mêlant
              art de vivre, gastronomie, bien-être et culture viticole. Les
              Blanchard Dignac perpétuent une tradition d&apos;innovation, faisant de
              tous les détails une recherche constante de la beauté dans tout ce
              qu&apos;ils entreprennent.
            </p>
          </div>
          <div 
            ref={setRef(3)}
            className="relative h-full animate-on-scroll grayscale hover:grayscale-0 transition-all duration-500"
            data-animation="animate-slide-left"
            style={{ minHeight: '400px' }}
          >
            <Image
              src="/histoire-famille.jpg"
              alt="La Famille Blanchard Dignac"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Diviseur */}
        <div className="w-full h-px bg-black" />

        {/* Le Château de Lurs */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div 
            ref={setRef(4)}
            className="relative h-full animate-on-scroll grayscale hover:grayscale-0 transition-all duration-500"
            data-animation="animate-slide-right"
            style={{ minHeight: '400px' }}
          >
            <Image
              src="/histoire-chateau.jpg"
              alt="Le Château de Lurs"
              fill
              className="object-cover"
            />
          </div>
          <div 
            ref={setRef(5)}
            className="animate-on-scroll h-fit"
            data-animation="animate-slide-left"
          >
            <div className="text-right">
              <h2 className="text-3xl font-bold font-minion-pro">Le Château de Lurs</h2>
              <h3 className="text-lg text-gray-500 mb-8 font-light">Un Lieu d&apos;Art et de Création</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                Le Château de Lurs, un ancien fort médiéval niché sur les hauteurs de
                la Durance, est l&apos;un des joyaux acquis par la famille Blanchard Dignac.
                Différents créateurs et artistes s&apos;y sont succédé au fil des siècles,
                laissant leur empreinte sur ce lieu magique. La famille a entrepris
                une méticulueuse restauration en 1994, imaginant avec précision
                l&apos;avenir tout en respectant son passé. Un espace dédié à l&apos;art et à
                la création a été aménagé, permettant aux artistes d&apos;y trouver
                inspiration et leur création. Le château est devenu un véritable
                sanctuaire de l&apos;art, où le passé et la création contemporaine se
                rencontrent, permettant à ceux qui y vivent et y travaillent de se
                nourrir du rayonnement spirituel de la Provence.
              </p>
            </div>
          </div>
        </section>

        {/* Diviseur */}
        <div className="w-full h-px bg-black" />

        {/* L'École d'Art */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start" id="ecole">
          <div 
            ref={setRef(6)}
            className="animate-on-scroll h-fit"
            data-animation="animate-slide-right"
          >
            <h2 className="text-3xl font-bold font-minion-pro">L&apos;École d&apos;Art</h2>
            <h3 className="text-lg text-gray-500 mb-8 font-light">Financer l&apos;Avenir du Beau</h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              La famille Blanchard Dignac accorde une importance capitale à
              l&apos;éducation artistique et la musique. Il s&apos;agit d&apos;une mission de transmettre
              une vision d&apos;art élaborée et de perpétuation du savoir et de la préservation
              de l&apos;héritage de la tradition maritime. Les générations futures peuvent ainsi
              découvrir et perpétuer cet art de vivre unique. L&apos;école est devenue un
              carrefour de talents et de rencontres où se conjuguent dans une culture
              artistique riche. L&apos;école est vite devenue un lieu d&apos;exception où les créateurs
              peuvent s&apos;exprimer librement et trouver l&apos;inspiration nécessaire
              dans une démarche de mécénat durable. Pour eux, l&apos;art est une
              richesse à partager, et ils transmettent cet art avec passion
              pour construire un avenir où la beauté occupe une place primordiale.
            </p>
          </div>
          <div 
            ref={setRef(7)}
            className="relative h-full animate-on-scroll grayscale hover:grayscale-0 transition-all duration-500"
            data-animation="animate-slide-left"
            style={{ minHeight: '400px' }}
          >
            <Image
              src="/histoire-ecole.jpg"
              alt="L&apos;École d&apos;Art"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>
      </div>
    </main>
  )
} 