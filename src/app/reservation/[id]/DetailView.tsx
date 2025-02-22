'use client';

import { motion, useInView } from 'framer-motion';
import { experiences } from '@/app/gallery-data';
import { useRef } from 'react';
import Image from 'next/image';
import ReservationForm from '@/components/ReservationForm'
import Navigation from '@/components/Navigation'

export default function DetailView({ itemId }: { itemId: string }) {
  const item = experiences.find(item => item.id === itemId);
  
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  
  const isSection1InView = useInView(section1Ref, { once: true, margin: "-100px" });
  const isSection2InView = useInView(section2Ref, { once: true, margin: "-100px" });
  const isSection3InView = useInView(section3Ref, { once: true, margin: "-100px" });

  if (!item) {
    return (
      <>
      <Navigation />
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold">Item not found</h1>
        <p className="text-gray-600">The item you are looking for does not exist.</p>
      </div>
      </>
    );
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="container mx-auto pb-20 pt-32">
        <div className="relative w-full">
          <motion.div
            layoutId={`card-container-${item.id}`}
            className="rounded-lg overflow-hidden"
          >
            <div className="relative flex flex-col md:flex-row items-center w-full">
              <div className="md:w-1/2 w-full relative">
                {/* Title and ID overlay */}
                <div className="absolute inset-0 z-10 flex flex-col justify-center p-4">
                  <motion.div 
                    layoutId={`card-content-${item.id}`}
                    className="flex flex-row items-center gap-8"
                  >
                    <h2 className="text-[6vw] md:text-[2vw] font-light rotate-180 [writing-mode:vertical-lr] text-white">
                      {item.title}
                    </h2>
                  </motion.div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-[8vw] md:text-[3vw] font-light text-white">
                      {item.id}
                    </span>
                  </div>
                </div>
                
                {/* Image */}
                <motion.div 
                  layoutId={`card-image-${item.id}`}
                  className="relative "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </motion.div>
              </div>
              
              {/* Description content */}
              <div className="p-6 w-full md:w-1/2">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-3xl font-bold mb-4"
              >
                {item.title}
              </motion.h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="prose max-w-none max-w-lg"
                >
                  <p className="text-lg">{item.details}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Introduction Text */}
        <motion.div 
          className="max-w-4xl mx-auto mt-20 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-gray-600 leading-relaxed text-lg">
            Le voyage débute dès le quai, le voilier vous tend les bras, déjà le voilà prêt, dans le port-là, à larguer les amarres pour votre horizon. Élégante et sans contrainte, ainsi se déroule une excursion authentique avec le capitaine. Le départ, une découverte approchée avec le capitaine, femme d&apos;expérience qui vous guide dans les eaux de la côte d&apos;azur. Une parenthèse rare s&apos;ouvre à quatre privilégiés.
          </p>
        </motion.div>

        {/* Additional Sections */}
        <div className="mt-20 space-y-20">
          {/* Liberté et Flexibilité Totale */}
          <motion.section
            ref={section1Ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isSection1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-light mb-6">LIBERTÉ ET FLEXIBILITÉ TOTALE</h2>
              <p className="text-gray-600 leading-relaxed">
                Le voyage s&apos;en remet à vous et votre voilier vous transporte où que vous mène dans le temps et l&apos;espace selon vos aspirations. Liberté absolue pour naviguer à votre rythme, vous arrêter où bon vous semble. Élégante et sans contrainte, ainsi se déroule une excursion authentique avec le capitaine. Pensez, décidez, nous exécutons. Le programme est le vôtre, la destination est votre choix.
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[400px]">
              <Image 
                src="/liberty.jpg" 
                alt="Liberté en mer" 
                fill
                className="rounded-lg shadow-xl object-cover" 
              />
            </div>
          </motion.section>

          {/* Une Cuisine d'Exception */}
          <motion.section
            ref={section2Ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isSection2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[400px]">
              <Image 
                src="/cuisine.jpg" 
                alt="Cuisine d&apos;exception" 
                fill
                className="rounded-lg shadow-xl object-cover" 
              />
            </div>
            <div>
              <h2 className="text-2xl font-light mb-6">UNE CUISINE D&apos;EXCEPTION</h2>
              <p className="text-gray-600 leading-relaxed">
                Une cuisine raffinée, préparée à bord par notre chef. Il sublime les produits frais de la mer et du terroir. À la fois délicate et authentique, la gastronomie à bord est un art qui se décline à chaque repas. Nous accordons une attention particulière à vos préférences pour créer des menus sur mesure. Notre chef s&apos;adapte à vos goûts et restrictions alimentaires pour que chaque repas soit un moment de plaisir absolu.
              </p>
            </div>
          </motion.section>

          {/* Activités et Découverte */}
          <motion.section
            ref={section3Ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isSection3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-light mb-6">ACTIVITÉS ET DÉCOUVERTE</h2>
              <p className="text-gray-600 leading-relaxed">
                Chaque escale est une invitation à de nouvelles découvertes. Profitez des plus belles plages de la Méditerranée, explorez des criques secrètes accessibles uniquement par la mer. Le capitaine et l&apos;équipage vous accompagnent dans vos activités nautiques : paddle, snorkeling, pêche... Découvrez les trésors cachés du littoral et profitez de moments privilégiés en toute intimité.
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[400px]">
              <Image 
                src="/activities.jpg" 
                alt="Activités en mer" 
                fill
                className="rounded-lg shadow-xl object-cover" 
              />
            </div>
          </motion.section>
        </div>
        <div className="h-[1px] bg-gray-500 mt-20" />

        {/* Reservation Form Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light mb-6">Réserver cette expérience</h2>
              <p className="text-gray-600">
                Vous souhaitez vivre cette expérience ? Écrivez nous et planifions ensemble votre navigation.
              </p>
            </div>

            <ReservationForm 
              onSubmit={(formData) => {
                console.log('Form submitted:', formData)
              }} 
            />
          </div>
        </section>
      </div>
    </div>
  );
}