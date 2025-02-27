'use client'

import Image from 'next/image'
import { EspritSection as EspritSectionType } from './esprit-data'
import { cn } from '@/lib/utils'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function EspritSection({ 
  section,
  isLast
}: { 
  section: EspritSectionType,
  isLast: boolean
}) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id={section.id} className={cn("")} ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-4 md:gap-16 items-center">
          <>
           <motion.h2 
             className="md:text-4xl text-3xl font-bold md:mb-6 md:w-1/3 font-minion-pro"
             initial={{ opacity: 0, x: -50 }}
             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
             transition={{ duration: 0.6 }}
           >
             {section.title}
           </motion.h2>
            <motion.div 
              className="w-full md:w-2/3"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-600 leading-[1.2em]">
                {section.description}
              </p>
            </motion.div>
            <motion.div 
              className="group overflow-hidden rounded-md w-full md:w-1/3 ml-20"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative transform transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={600}
                  height={300}
                  className="object-cover aspect-square rounded-lg shadow-md transition-shadow duration-500 group-hover:shadow-xl"
                />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-10 rounded-lg"></div>
              </div>
            </motion.div>
          </>
      </div>
      {!isLast && (
        <motion.div 
          className="w-full h-[1px] bg-gray-500 my-4"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8 }}
        />
      )}
    </section>
  )
} 