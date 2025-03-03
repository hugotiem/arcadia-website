'use client'

import { useEffect, useRef } from 'react'
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
      {/* Header Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 
            ref={setRef(0)}
            className="text-4xl font-bold mb-4 font-minion-pro animate-on-scroll"
            data-animation="animate-fade-up"
          >
            LE NAVIRE-ARCADIA
          </h1>
          <h2
            ref={setRef(1)}
            className="text-2xl font-light mb-8 animate-on-scroll"
            data-animation="animate-fade-up"
          >
            UN STUDIO NOMADE AU RYTHME DES VAGUES
          </h2>
          <p 
            ref={setRef(2)}
            className="text-gray-600 leading-relaxed font-light animate-on-scroll"
            data-animation="animate-fade-up"
            style={{lineHeight: '1.2em'}}
          >
            L&apos;Arcadia réunit un voilier, un château médiéval et une école d&apos;art dans une même quête :
            préserver le patrimoine, transmettre les savoirs et célébrer la création.
            Studio nomade en Méditerranée, l&apos;Arcadia favorise échanges et réflexions. Le château de
            Lurs, perché sur un piton rocheux, devient un carrefour culturel, tandis que l&apos;École d&apos;Art
            forme les créateurs de demain.
            Un projet où l&apos;art, la beauté et la transmission dialoguent pour inspirer l&apos;avenir.
          </p>
        </div>
      </section>

      {/* Histoire Sections */}
      <div className="max-w-[90rem] mx-auto px-8 space-y-24 pb-24">
        {/* Le Navire-Arcadia */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div 
            ref={setRef(3)}
            className="animate-on-scroll h-fit"
            data-animation="animate-slide-right"
          >
            <h2 className="text-3xl font-bold font-minion-pro">LE NAVIRE-ARCADIA</h2>
            <h3 className="text-lg text-gray-500 mb-8 font-light">UN STUDIO NOMADE AU RYTHME DES VAGUES</h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              Soutenu par la famille Blanchard Dignac, le Navire-Arcadia est bien plus qu&apos;un voilier : c&apos;est
              un espace de rencontres et de création où l&apos;art, la culture et la réflexion se croisent au fil des
              escales en Méditerranée. Ce studio flottant accueille artistes, écrivains, cinéastes, penseurs,
              mais aussi figures politiques et acteurs de la société, créant ainsi un lieu unique d&apos;échange
              et de dialogue.
              En participant aux grands événements culturels méditerranéens – du Festival de Cannes à
              Jazz à Juan, en passant par des rencontres littéraires et gastronomiques – le Navire-Arcadia
              devient une scène nomade où se tissent des liens entre disciplines et sensibilités. Chaque
              escale est l&apos;occasion de produire des contenus immersifs : interviews, débats,
              documentaires ou créations artistiques.
            </p>
          </div>
          <div 
            ref={setRef(4)}
            className="relative h-full animate-on-scroll transition-all duration-500"
            data-animation="animate-slide-left"
            style={{ minHeight: '400px' }}
          >
            <Image
              src="/HISTOIRE/1.JPG"
              alt="Le Navire-Arcadia"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Diviseur */}
        <div className="w-full h-px bg-black" />

        {/* Le Château de Lurs */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div 
            ref={setRef(5)}
            className="relative h-full animate-on-scroll transition-all duration-500"
            data-animation="animate-slide-right"
            style={{ minHeight: '400px' }}
          >
            <Image
              src="/HISTOIRE/2.JPG"
              alt="Le Château de Lurs"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div 
            ref={setRef(6)}
            className="animate-on-scroll h-fit"
            data-animation="animate-slide-left"
          >
            <div className="text-right">
              <h2 className="text-3xl font-bold font-minion-pro">Le Château de Lurs</h2>
              <h3 className="text-lg text-gray-500 mb-8 font-light">Un Nouveau Lieu de Culture et de Création</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                Témoin de plus de mille ans d&apos;histoire, le château de Lurs, édifié au Xe siècle par les princes-
                évêques de Sisteron, fut tour à tour résidence d&apos;été et centre spirituel, marqué par les fastes
                de l&apos;Église et les bouleversements de la Révolution. Aujourd&apos;hui, il renaît avec une nouvelle
                mission : devenir un espace dédié aux rencontres, à la culture et à la création.
                <br /><br />
                Pensé comme un lieu vivant, il accueillera artistes, écrivains, cinéastes et penseurs,
                proposant résidences de création, expositions et échanges autour des arts et des savoirs.
                Cette initiative s&apos;inscrit dans l&apos;ambition de faire de Lurs un carrefour culturel, en dialogue
                avec son patrimoine et son environnement unique.
                <br /><br />
                En écho au bateau Arcadia, qui porte ces valeurs d&apos;échange et d&apos;expression en
                Méditerranée, le château de Lurs devient une terre d&apos;inspiration et de dialogue, où
                patrimoine et création contemporaine se rencontrent.
              </p>
            </div>
          </div>
        </section>

        {/* Diviseur */}
        <div className="w-full h-px bg-black" />

        {/* L'École d'Art */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start" id="ecole">
          <div 
            ref={setRef(7)}
            className="animate-on-scroll h-fit"
            data-animation="animate-slide-right"
          >
            <h2 className="text-3xl font-bold font-minion-pro">L&apos;École d&apos;Art</h2>
            <h3 className="text-lg text-gray-500 mb-8 font-light">Financer l&apos;Avenir du Beau</h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              La famille Blanchard Dignac accorde une importance capitale à l&apos;éducation artistique et au
              mécénat. Animés par cette conviction, ils ont choisi de financer L&apos;ÉCOLE D&apos;ART, un
              établissement indépendant dédié à la transmission des savoir-faire techniques et artistiques,
              et à la préservation de la beauté sous toutes ses formes.
              <br /><br />
              L&apos;ÉCOLE D&apos;ART s&apos;inscrit dans cette vision en proposant un enseignement qui allie culture,
              technique et créativité, permettant à chaque étudiant d&apos;explorer librement son potentiel. En
              seulement cinq ans, elle s&apos;est hissée parmi les trois meilleures classes préparatoires selon le
              magazine Beaux-Arts, avec un taux de réussite aux concours supérieur à 94 %. Ces résultats
              exceptionnels témoignent de la qualité de sa pédagogie, de ses ateliers techniques et de
              l&apos;engagement sans faille de son équipe enseignante.
              <br /><br />
              Implantée à Montreuil, en Seine-Saint-Denis, l&apos;école évolue au cœur d&apos;un territoire artistique
              dynamique, en dialogue constant avec la scène contemporaine. Sous la direction de Vincent
              Villard et Julie Le Guern, elle offre un accompagnement personnalisé, formant de véritables
              polytechniciens de l&apos;art capables de naviguer entre disciplines et de tracer leur propre voie
              artistique.
              <br /><br />
              Soutenue par la famille Blanchard Dignac dans une démarche de mécénat durable, L&apos;ÉCOLE
              D&apos;ART incarne un engagement commun : faire de l&apos;art un espace de liberté, de
              transmission et d&apos;émancipation.
            </p>
          </div>
          <div 
            ref={setRef(8)}
            className="relative h-full animate-on-scroll transition-all duration-500"
            data-animation="animate-slide-left"
            style={{ minHeight: '400px' }}
          >
            <Image
              src="/HISTOIRE/3.JPG"
              alt="L&apos;École d&apos;Art"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </section>
      </div>
    </main>
  )
} 