'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { galleryItems } from '@/app/gallery-data';
import { MotionProvider } from '@/app/providers';

export default function DetailView({ itemId }: { itemId: number }) {
  const router = useRouter();
  const item = galleryItems.find(item => item.id === itemId);
  
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
    <MotionProvider>
      <div className="max-w-4xl mx-auto">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-4 text-blue-500"
          onClick={() => router.back()}
        >
          ← Back to gallery
        </motion.button>
        
        <div className="relative">
          <motion.div
            layoutId={`card-container-${item.id}`}
            className="rounded-lg overflow-hidden"
          >
            <motion.div 
              layoutId={`card-bg-${item.id}`}
              className="absolute inset-0 rounded-lg"
              style={{ backgroundColor: item.color, opacity: 0.15 }}
            />
            <motion.img
              layoutId={`card-image-${item.id}`}
              src={item.image}
              alt={item.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-6 relative">
              <motion.h1 
                layoutId={`card-title-${item.id}`}
                className="text-3xl font-bold mb-4"
              >
                {item.title}
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.3 } }}
                className="prose max-w-none"
              >
                <p className="text-lg">{item.description}</p>
                
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-2">Details</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    viverra neque in ipsum congue, vel fringilla risus efficitur.
                    Phasellus placerat velit vel erat finibus, vel faucibus odio suscipit.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </MotionProvider>
  );
}