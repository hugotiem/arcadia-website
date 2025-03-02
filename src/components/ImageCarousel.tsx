'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

type CarouselImage = {
  src: string
  alt: string
}

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right
  const [isPaused, setIsPaused] = useState(false)
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null)
  
  // Array of images for the carousel (same 2 images repeated 3 times)
  const images: CarouselImage[] = [
    { src: '/ARCADIA/2.jpg', alt: 'Détail du pont 1' },
    { src: '/02.jpg', alt: 'Détail des voiles 1' },
    { src: '/ARCADIA/2.jpg', alt: 'Détail du pont 2' },
    { src: '/02.jpg', alt: 'Détail des voiles 2' },
    { src: '/ARCADIA/2.jpg', alt: 'Détail du pont 3' },
    { src: '/02.jpg', alt: 'Détail des voiles 3' },
  ]
  
  const totalPairs = Math.ceil(images.length / 2)
  
  // Pause auto-advance for a certain duration when user interacts
  const pauseAutoAdvance = () => {
    setIsPaused(true)
    
    // Clear any existing pause timer
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current)
    }
    
    // Resume auto-advance after 10 seconds of inactivity
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false)
    }, 10000)
  }
  
  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPairs - 1 : prevIndex - 1
    )
    pauseAutoAdvance()
  }
  
  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => 
      prevIndex === totalPairs - 1 ? 0 : prevIndex + 1
    )
    pauseAutoAdvance()
  }
  
  // Auto-advance the carousel every 5 seconds if not paused
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        goToNext()
      }, 5000)
      
      return () => clearInterval(interval)
    }
    
    return () => {}
  }, [isPaused])
  
  // Cleanup pause timer on unmount
  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current)
      }
    }
  }, [])
  
  // Get current pair of images
  const getCurrentPair = () => {
    const startIdx = currentIndex * 2
    return images.slice(startIdx, startIdx + 2)
  }
  
  // Variants for slide animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  }
  
  return (
    <div className="relative w-full py-8">
      {/* Carousel container */}
      <div className="overflow-hidden">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div 
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center"
          >
            {getCurrentPair().map((image, index) => (
              <motion.div 
                key={index} 
                className="relative w-full max-w-[500px] h-[600px] rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Navigation buttons */}
      <motion.button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full shadow-md z-10"
        aria-label="Previous images"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </motion.button>
      
      <motion.button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full shadow-md z-10"
        aria-label="Next images"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </motion.button>
      
      {/* Pagination indicators */}
      <div className="flex justify-center mt-8 gap-3">
        {Array.from({ length: totalPairs }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
              pauseAutoAdvance()
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-black w-6' : 'bg-gray-300'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 