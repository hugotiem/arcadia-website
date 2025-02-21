'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { galleryItems } from '@/app/gallery-data';
import { MotionProvider } from '@/app/providers';

export default function Gallery() {
  return (
    <MotionProvider>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <Link href={`/detail/${item.id}`} key={item.id} className="block">
            <div className="relative cursor-pointer hover:shadow-lg transition-shadow">
              <motion.div
                layoutId={`card-container-${item.id}`}
                className="rounded-lg overflow-hidden"
                initial={{ opacity: 1 }}
              >
                <motion.div 
                  layoutId={`card-bg-${item.id}`}
                  className="absolute inset-0 rounded-lg"
                  style={{ backgroundColor: item.color, opacity: 0.3 }}
                />
                <motion.img
                  layoutId={`card-image-${item.id}`}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <motion.div className="p-4 relative z-10">
                  <motion.h2 
                    layoutId={`card-title-${item.id}`}
                    className="text-xl font-semibold"
                  >
                    {item.title}
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2 text-sm text-gray-600"
                  >
                    Click to view details
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </Link>
        ))}
      </div>
    </MotionProvider>
  );
}