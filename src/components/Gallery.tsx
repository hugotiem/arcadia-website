'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { experiences } from '@/app/gallery-data';
import { MotionProvider } from '@/app/providers';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { Experience } from '@/app/gallery-data';
export default function Gallery() {
  return (
    <MotionProvider>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </MotionProvider>
  );
}

function ExperienceCard({ experience }: { experience: Experience }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { margin: "-200px" });

  return (
    <Link href={`/reservation/${experience.id}`} className="block">
      <div className="relative cursor-pointer w-full sm:border-l overflow-hidden">
        <motion.div
          ref={cardRef}
          layoutId={`card-container-${experience.id}`}
          className="group relative flex w-screen sm:w-auto aspect-[9/12]"
          initial={{ opacity: 1 }}
        >
        <div className='h-full w-1 bg-gray-600 group-hover:bg-white transition-[background-color] duration-300'/>
          <div className={cn(
            "absolute inset-0 transition-all duration-700",
            isInView ? 'opacity-100' : 'opacity-0 sm:opacity-0',
            'sm:opacity-0 sm:group-hover:opacity-100'
          )}>
            <motion.img
              layoutId={`card-image-${experience.id}`}
              src={experience.image}
              alt={experience.title}
              className="object-cover h-full w-full"
            />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-end p-2">
            <div className="flex flex-row items-end gap-8 mb-8">
              <h2 className={cn(
                "text-3xl font-bold rotate-180 [writing-mode:vertical-lr] transition-colors duration-500",
                isInView ? 'text-white' : 'text-gray-800',
                'sm:text-gray-800 sm:group-hover:text-white font-minion-pro'
              )}>
                {experience.title}
              </h2>
              
              <div className="flex-1">
                <div className="bg-transparent sm:bg-transparent p-2 rounded-lg">
                  <p className={cn(
                    "text-sm transition-colors duration-500",
                    isInView ? 'text-white' : 'text-gray-800',
                    'sm:text-gray-600',
                    'sm:opacity-100 sm:group-hover:opacity-0 transition-opacity duration-200'
                  )}>
                    {experience.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-5">
              <span className={cn(
                "text-2xl transition-colors duration-500",
                isInView ? 'text-white' : 'text-gray-300',
                'sm:text-gray-600 sm:group-hover:text-white transition-opacity duration-200'
              )}>
                {experience.id}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </Link>
  );
}