'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { experiences } from '@/app/gallery-data';
import { MotionProvider } from '@/app/providers';

export default function DetailView({ itemId }: { itemId: string }) {
  const router = useRouter();
  const item = experiences.find(item => item.id === itemId);
  
  if (!item) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold">Item not found</h1>
        <button 
          onClick={() => router.push('/')}
          className="text-blue-500 mt-4 block"
        >
          Return to gallery
        </button>
      </div>
    );
  }
  
  return (
    
      <div className="container mx-auto">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-4 text-blue-500"
          onClick={() => router.back()}
        >
          ← Back to gallery
        </motion.button>
        
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
                  className="prose max-w-none"
                >
                  <p className="text-lg">{item.description}</p>
                  
                  <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-2">Details</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                      viverra neque in ipsum congue, vel fringilla risus efficitur.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

  );
}