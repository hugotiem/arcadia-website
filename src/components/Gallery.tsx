'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { experiences } from '@/app/gallery-data';
import { MotionProvider } from '@/app/providers';

export default function Gallery() {
  return (
    <MotionProvider>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {experiences.map((experience) => (
          <Link href={`/reservation/${experience.id}`} key={experience.id} className="block">
            <div className="relative cursor-pointer w-full border-l-4 border-gray-100">
              <motion.div
                layoutId={`card-container-${experience.id}`}
                className="group relative h-[400px] md:h-[600px] border-b md:border-b-0 md:border-r border-gray-100 last:border-r-0"
                initial={{ opacity: 1 }}
              >
                <div 
                key={experience.id}
                className="group relative h-[400px] md:h-[600px] border-b md:border-b-0 md:border-r border-gray-100 last:border-r-0"
                // onClick={() => handleExperienceClick(experience)}
              >
                <div className="absolute inset-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700">
                  <motion.img
                    layoutId={`card-image-${experience.id}`}
                    src={experience.image}
                    alt={experience.title}
                    // fill
                    className="object-cover h-full w-full"
                  />
                  {/* <div className="absolute inset-0 bg-black/30" /> */}
                </div>
                <div className="relative z-10 h-full flex flex-col justify-center cursor-pointer p-8">
                  <div className="flex flex-row items-center gap-8">
                    <h2 className="text-xl md:text-2xl font-light md:rotate-180 md:[writing-mode:vertical-lr] md:group-hover:text-white transition-colors duration-500">
                      {experience.title}
                    </h2>
                    
                    <div className="flex-1">
                      <div className="bg-white/80 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none">
                        <p className="text-base md:text-sm text-gray-800 md:text-gray-600 md:group-hover:text-white transition-colors duration-500">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-8 right-8">
                    <span className="text-3xl md:text-4xl font-light text-gray-300 md:group-hover:text-white transition-colors duration-500">{experience.id}</span>
                  </div>
                </div>
              </div>
              </motion.div>
            </div>
          </Link>
        ))}
      </div>
    </MotionProvider>
  );
}