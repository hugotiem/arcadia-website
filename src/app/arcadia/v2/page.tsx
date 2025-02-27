import Navigation from '@/components/Navigation'
import Image from 'next/image'

export default function ArcadiaV2() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section avec Scroll Horizontal */}
      <div className="h-screen overflow-x-scroll snap-x snap-mandatory">
        {/* Première section - Hero */}
        <section className="relative w-screen h-screen snap-start">
          <Image
            src="/hero-boat.jpg"
            alt="Voilier Arcadia"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-7xl font-minion-pro mb-6">ARCADIA</h1>
            <p className="text-xl font-light">Faites défiler pour découvrir</p>
          </div>
        </section>

        {/* Deuxième section - Spécifications */}
        <section className="relative w-screen h-screen snap-start bg-white flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <h2 className="text-4xl font-minion-pro mb-16 text-center">Caractéristiques Techniques</h2>
            <div className="grid grid-cols-3 gap-12">
              {/* Colonne 1 */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm text-gray-500 uppercase tracking-wider">Construction</h3>
                  <p className="text-2xl mt-2">1987</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 uppercase tracking-wider">Longueur</h3>
                  <p className="text-2xl mt-2">21 m</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 uppercase tracking-wider">Largeur</h3>
                  <p className="text-2xl mt-2">4,70 m</p>
                </div>
              </div>

              {/* Colonne 2 */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm text-gray-500 uppercase tracking-wider">Matériau</h3>
                  <p className="text-2xl mt-2">Coque Bois</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 uppercase tracking-wider">Moteur</h3>
                  <p className="text-2xl mt-2">Yanmar 100 HP</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 uppercase tracking-wider">Capacité</h3>
                  <p className="text-2xl mt-2">12 invités</p>
                </div>
              </div>

              {/* Colonne 3 */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm text-gray-500 uppercase tracking-wider">Cabines</h3>
                  <p className="text-2xl mt-2">4</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 uppercase tracking-wider">Couchages</h3>
                  <p className="text-2xl mt-2">8</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-500 uppercase tracking-wider">Salles de bain</h3>
                  <p className="text-2xl mt-2">2</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Troisième section - Galerie */}
        <section className="relative w-screen h-screen snap-start bg-gray-50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="grid grid-cols-2 gap-8 h-[80vh]">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/01.jpg"
                  alt="Détail du pont"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/02.jpg"
                  alt="Détail des voiles"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 