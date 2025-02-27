import Navigation from '@/components/Navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ArcadiaV3() {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section Minimaliste */}
      <section className="relative h-[70vh]">
        <Image
          src="/hero-boat.jpg"
          alt="Voilier Arcadia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="text-6xl text-white font-minion-pro tracking-wider">ARCADIA</h1>
        </motion.div>
      </section>

      {/* Section Spécifications */}
      <section className="max-w-5xl mx-auto py-20 px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-minion-pro">Caractéristiques</h2>
          <div className="w-20 h-px bg-gray-200 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Dimensions */}
          <motion.div 
            {...fadeInUp}
            className="text-center"
          >
            <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-6">Dimensions</h3>
            <div className="space-y-4">
              <p className="text-lg">Longueur: 21 m</p>
              <p className="text-lg">Largeur: 4,70 m</p>
              <p className="text-lg">Tirant d'eau: 2,20 m</p>
            </div>
          </motion.div>

          {/* Construction */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-6">Construction</h3>
            <div className="space-y-4">
              <p className="text-lg">Année: 1987</p>
              <p className="text-lg">Rénovation: 2014, 2022</p>
              <p className="text-lg">Matériau: Bois</p>
            </div>
          </motion.div>

          {/* Capacités */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-6">Capacités</h3>
            <div className="space-y-4">
              <p className="text-lg">Eau: 300 L</p>
              <p className="text-lg">Carburant: Diesel</p>
              <p className="text-lg">Invités: 12</p>
            </div>
          </motion.div>

          {/* Aménagements */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-6">Aménagements</h3>
            <div className="space-y-4">
              <p className="text-lg">Cabines: 4</p>
              <p className="text-lg">Couchages: 8</p>
              <p className="text-lg">Salles de bain: 2</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Photos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src="/01.jpg"
                alt="Détail du pont"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src="/02.jpg"
                alt="Détail des voiles"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 