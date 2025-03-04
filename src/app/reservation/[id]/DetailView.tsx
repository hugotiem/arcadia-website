'use client';

import { motion, useInView } from 'framer-motion';
import { experiences } from '@/app/gallery-data';
import { useRef } from 'react';
import Image from 'next/image';
import ReservationForm from '@/components/ReservationForm'

export default function DetailView({ itemId }: { itemId: string }) {
  const item = experiences.find(item => item.id === itemId);
  
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const divider1Ref = useRef(null);
  const divider2Ref = useRef(null);
  
  const isSection1InView = useInView(section1Ref, { once: true, margin: "-100px" });
  const isSection2InView = useInView(section2Ref, { once: true, margin: "-100px" });
  const isSection3InView = useInView(section3Ref, { once: true, margin: "-100px" });
  const isDivider1InView = useInView(divider1Ref, { once: true, margin: "-100px" });
  const isDivider2InView = useInView(divider2Ref, { once: true, margin: "-100px" });

  if (!item) {
    return (
      <>
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold">Item not found</h1>
        <p className="text-gray-600">The item you are looking for does not exist.</p>
      </div>
      </>
    );
  }
  
  return (
    <div className="min-h-screen bg-white">
      
      <div className="mx-auto pb-20 pt-16  max-w-[95em]">
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
                    <h2 className="text-[min(8vw,3.5rem)] md:text-[min(4vw,3rem)] xl:text-[min(3.5vw,3.5rem)] font-light rotate-180 [writing-mode:vertical-lr] text-white font-minion-pro">
                      {item.title}
                    </h2>
                  </motion.div>
                  <div className="absolute bottom-0 right-8">
                    <span className="text-[min(10vw,5rem)] md:text-[min(6vw,4.5rem)] xl:text-[min(5vw,5rem)] font-light text-white font-minion-pro">
                      {item.id}
                    </span>
                  </div>
                </div>
                
                {/* Image */}
                <motion.div
                  layoutId={`card-image-${item.id}`}
                  className="relative h-full"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover h-full w-full"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-black/30 sm:bg-transparent"></div>
              </div>
              
              {/* Description content */}
              <div className="p-6 w-full md:w-1/2">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-3xl font-bold mb-4 font-minion-pro"
              >
                {item.title}
              </motion.h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="prose max-w-lg"
                >
                  <p className="text-xl text-gray-600 ">{item.details}</p>
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
        <div className="mt-20 space-y-20 mx-8">
          {/* Liberté et Flexibilité Totale */}
          <motion.section
            ref={section1Ref}
            className="flex flex-col md:flex-row gap-8 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isSection1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-4 lg:w-2/3 font-minion-pro">Liberté et Flexibilité totale</h2>
              <p className="text-gray-600 text-lg leading-relaxed lg:w-2/3">
                Le voyage s&apos;en remet à vous et votre voilier vous transporte où que vous mène dans le temps et l&apos;espace selon vos aspirations. Liberté absolue pour naviguer à votre rythme, vous arrêter où bon vous semble. Élégante et sans contrainte, ainsi se déroule une excursion authentique avec le capitaine. Pensez, décidez, nous exécutons. Le programme est le vôtre, la destination est votre choix.
              </p>
            </div>
            <div className="relative aspect-square w-full md:w-1/2 lg:w-1/3 max-h-[300px] flex flex-col items-end">
              <Image 
                src="/liberty.jpg" 
                alt="Liberté en mer" 
                height={300}
                width={300}
                className="rounded-lg shadow-xl object-cover h-full aspect-square" 
              />
            </div>
          </motion.section>

          {/* Premier diviseur animé */}
          <div ref={divider1Ref} className="my-20">
            <motion.div 
              className="w-full h-[1px] bg-gray-500"
              initial={{ scaleX: 0 }}
              animate={isDivider1InView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>

          {/* Une Cuisine d'Exception */}
          <motion.section
            ref={section2Ref}
            className="flex flex-col-reverse md:flex-row gap-8 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isSection2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square w-full md:w-1/2 lg:w-1/3 max-h-[300px] flex flex-col items-start">
              <Image 
                src="/cuisine.jpg" 
                alt="Cuisine d'exception" 
                height={300}
                width={300}
                className="rounded-lg shadow-xl object-cover h-full aspect-square" 
              />
            </div>
            <div className="lg:w-2/3 flex flex-col lg:items-end">
              <h2 className="text-3xl font-bold mb-4 lg:text-right lg:w-2/3 font-minion-pro">Une cuisine d&apos;exception</h2>
              <p className="text-gray-600 text-lg leading-relaxed lg:w-2/3 lg:text-right ">
                Une cuisine raffinée, préparée à bord par notre chef. Il sublime les produits frais de la mer et du terroir. À la fois délicate et authentique, la gastronomie à bord est un art qui se décline à chaque repas. Nous accordons une attention particulière à vos préférences pour créer des menus sur mesure. Notre chef s&apos;adapte à vos goûts et restrictions alimentaires pour que chaque repas soit un moment de plaisir absolu.
              </p>
            </div>
          </motion.section>

          {/* Deuxième diviseur animé */}
          <div ref={divider2Ref} className="my-20">
            <motion.div 
              className="w-full h-[1px] bg-gray-500"
              initial={{ scaleX: 0 }}
              animate={isDivider2InView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>

          {/* Activités et Découverte */}
          <motion.section
            ref={section3Ref}
            className="flex flex-col md:flex-row gap-8 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isSection3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-4 lg:w-2/3 font-minion-pro">Activités et Découverte</h2>
              <p className="text-gray-600 text-lg leading-relaxed lg:w-2/3">
                Chaque escale est une invitation à de nouvelles découvertes. Profitez des plus belles plages de la Méditerranée, explorez des criques secrètes accessibles uniquement par la mer. Le capitaine et l&apos;équipage vous accompagnent dans vos activités nautiques : paddle, snorkeling, pêche... Découvrez les trésors cachés du littoral et profitez de moments privilégiés en toute intimité.
              </p>
            </div>
            <div className="relative aspect-square w-full md:w-1/2 max-h-[300px] flex flex-col items-end lg:w-1/3">
              <Image 
                src="/activities.jpg" 
                alt="Activités en mer" 
                height={300}
                width={300}  
                className="rounded-lg shadow-xl object-cover h-full aspect-square" 
              />
            </div>
          </motion.section>
        </div>
        <div className="h-[1px] bg-gray-500 mt-20" />

        {/* Reservation Form Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 font-minion-pro">Réserver cette expérience</h2>
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