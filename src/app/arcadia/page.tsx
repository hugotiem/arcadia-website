'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Navigation from '@/components/Navigation'
import Image from 'next/image'
import { mainsonNeueExtended } from '../fonts'
import StatsSection from '@/components/StatsSection'
import ImageCarousel from '@/components/ImageCarousel'

export default function Arcadia() {
  const heroRef = useRef(null)
  const dividerRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const isDividerInView = useInView(dividerRef, { once: true, margin: "-100px" })

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Image avec animation */}
      <div className="w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] mx-auto px-4 pt-24" ref={heroRef}>
        <motion.div 
          className="relative aspect-[16/9] rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 100 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/hero-boat.jpg"
            alt="Voilier Arcadia"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Premier diviseur animé */}
      <div className="max-w-[95rem] mx-auto px-4 mt-12">
        <motion.div 
          className="w-full h-[1px] bg-gray-500"
          initial={{ scaleX: 0 }}
          animate={isHeroInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Stats Section with Animation */}
      <div className="max-w-[95rem] mx-auto px-4 mt-12">
        <StatsSection />
      </div>

      {/* Image Carousel */}
      <div className="max-w-[68rem] mx-auto px-4 mt-8">
        <ImageCarousel />
      </div>

      {/* Titre */}
      <div className="max-w-[95rem] mx-auto px-4 mt-8 text-center">
        <h1 className="text-4xl font-minion-pro font-bold">L&apos;ARCADIA</h1>
      </div>

      {/* Deuxième diviseur animé */}
      <div className="max-w-[95rem] mx-auto px-4 mt-5" ref={dividerRef}>
        <motion.div 
          className="w-full h-[1px] bg-gray-500"
          initial={{ scaleX: 0 }}
          animate={isDividerInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8 }}
        />
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