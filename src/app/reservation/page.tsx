'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Experience } from '../gallery-data'
import Gallery from '@/components/Gallery'

export default function Reservation() {
  const [formData] = useState({
    prenom: '',
    nom: '',
    date: '',
    message: '',
    pays: ''
  })
  const [isSubmitted] = useState(false)
  const [selectedExperience] = useState<Experience | null>(null)
  const [isExpanded] = useState(false)
  const expandedSectionRef = useRef<HTMLDivElement>(null)

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-white">
        <div className="pt-32 pb-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="animate-[fadeInDown_1s_ease-out_forwards] opacity-0">
              <svg 
                className="w-16 h-16 mx-auto text-green-500 mb-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <h2 className="text-3xl font-light mb-6">Merci !</h2>
              <p className="text-gray-600">
                Votre demande a bien été prise en compte pour un voyage à bord le{' '}
                <span className="font-medium">{formatDate(formData.date)}</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">

      {/* Introduction Section */}
      <section className="pt-32 pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 opacity-0 animate-[fadeInDown_1s_ease-out_forwards] font-minion-pro">
            Une Expérience Maritime d&apos;Exception
          </h1>
          <p className="text-gray-600 leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards] text-sm md:text-base">
            Dans la noble tradition des grands navigateurs, notre ketch sillonne avec grâce
            les eaux méditerranéennes. Façonné dans les essences les plus précieuses, il perpétue
            l&apos;excellence maritime française. De la Riviera aux rivages d&apos;Orient, notre équipage cultive
            l&apos;art subtil du voyage en mer, où chaque instant s&apos;écoule avec la délicatesse d&apos;un sablier
            d&apos;argent.
          </p>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto md:px-4">
          <Gallery />

          {/* Expanded Experience View */}
          <div ref={expandedSectionRef}>
            {selectedExperience && (
              <div 
                className={`mt-8 transition-all duration-500 ease-out overflow-hidden w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] ${
                  isExpanded ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white">
                  <div className="relative h-[50vh] md:h-[90vh] overflow-hidden">
                    <Image
                      src={selectedExperience.image}
                      alt={selectedExperience.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        isExpanded ? 'scale-100' : 'scale-110'
                      }`}
                      priority
                    />
                  </div>
                  <div className="p-8 md:p-16 flex flex-col justify-center max-w-3xl">
                    <div className={`transform transition-all duration-500 delay-200 ${
                      isExpanded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}>
                      <h2 className="text-5xl md:text-7xl font-light mb-8 [writing-mode:horizontal-tb] rotate-0">
                        {selectedExperience.title}
                      </h2>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {selectedExperience.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* add a divider */}
      {/* <div className="h-[1px] bg-gray-500 mt-20" /> */}
      {/* Reservation Form */}
      {/* <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-6">Réservation</h2>
            <p className="text-gray-600">
              Vous souhaitez rejoindre l&apos;Arcadia ? Écrivez nous et planifions ensemble votre navigation.
            </p>
          </div>

          <ReservationForm 
            onSubmit={(formData) => {
              setFormData(formData)
              setIsSubmitted(true)
            }} 
          />
        </div>
      </section> */}
    </main>
  )
} 