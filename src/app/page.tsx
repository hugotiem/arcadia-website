import Navigation from '@/components/Navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/hero-boat.jpg"
          alt="Voilier Arcadia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-light mb-6 opacity-0 animate-[fadeInDown_1s_ease-out_forwards]">
              ARCADIA
            </h1>
            <p className="text-lg md:text-xl font-light opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
              Une expérience unique à la voile
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 md:mb-8 opacity-0 animate-[fadeInDown_1s_ease-out_forwards]">
            Une Expérience Maritime d&apos;Exception
          </h2>
          <p className="text-gray-600 leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards] text-sm md:text-base">
            Dans la noble tradition des grands navigateurs, notre ketch sillonne avec grâce
            les eaux méditerranéennes. Façonné dans les essences les plus précieuses, il perpétue
            l&apos;excellence maritime française. De la Riviera aux rivages d&apos;Orient, notre équipage cultive
            l&apos;art subtil du voyage en mer, où chaque instant s&apos;écoule avec la délicatesse d&apos;un sablier
            d&apos;argent.
          </p>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {/* Navigation Journalière */}
          <div className="group relative h-[400px] md:h-[600px] border-b md:border-b-0 md:border-r border-gray-100">
            <div className="absolute inset-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700">
              <Image
                src="/navigation-journaliere.jpg"
                alt="Navigation Journalière"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative z-10 h-full flex cursor-pointer">
              <div className="flex flex-row md:flex-col justify-between py-8 px-8">
                <span className="text-3xl md:text-4xl font-light text-gray-300 md:group-hover:text-white transition-colors duration-500">01</span>
                <h2 className="text-xl md:text-2xl font-light md:rotate-180 md:[writing-mode:vertical-lr] md:group-hover:text-white transition-colors duration-500">
                  Navigation Journalière
                </h2>
              </div>
              <div className="absolute bottom-8 left-8 md:left-24 right-8 bg-white/80 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none">
                <p className="text-base md:text-sm text-gray-800 md:text-gray-600 md:group-hover:text-white transition-colors duration-500">
                  Une parenthèse rare s&apos;ouvre à quatre privilégiés. Le temps
                  d&apos;une journée, notre équipage perpétue la grande tradition
                  maritime, entre élégance du service et raffinement des instants.
                </p>
              </div>
            </div>
          </div>

          {/* Réceptions Distinguées */}
          <div className="group relative h-[400px] md:h-[600px] border-b md:border-b-0 md:border-r border-gray-100">
            <div className="absolute inset-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700">
              <Image
                src="/receptions-distinguees.jpg"
                alt="Réceptions Distinguées"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative z-10 h-full flex cursor-pointer">
              <div className="flex flex-row md:flex-col justify-between py-8 px-8">
                <span className="text-3xl md:text-4xl font-light text-gray-300 md:group-hover:text-white transition-colors duration-500">02</span>
                <h2 className="text-xl md:text-2xl font-light md:rotate-180 md:[writing-mode:vertical-lr] md:group-hover:text-white transition-colors duration-500">
                  Réceptions Distinguées
                </h2>
              </div>
              <div className="absolute bottom-8 left-8 md:left-24 right-8 bg-white/80 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none">
                <p className="text-base md:text-sm text-gray-800 md:text-gray-600 md:group-hover:text-white transition-colors duration-500">
                  Dans l&apos;intimité de dix convives,
                  notre navire devient l&apos;écrin de
                  vos célébrations les plus délicates.
                  Un cadre d&apos;exception pour des
                  moments choisis, où discrétion
                  et excellence se marient
                  naturellement.
                </p>
              </div>
            </div>
          </div>

          {/* Croisières Hebdomadaires */}
          <div className="group relative h-[400px] md:h-[600px] border-b md:border-b-0 md:border-r border-gray-100">
            <div className="absolute inset-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700">
              <Image
                src="/croisieres-hebdomadaires.jpg"
                alt="Croisières Hebdomadaires"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative z-10 h-full flex cursor-pointer">
              <div className="flex flex-row md:flex-col justify-between py-8 px-8">
                <span className="text-3xl md:text-4xl font-light text-gray-300 md:group-hover:text-white transition-colors duration-500">03</span>
                <h2 className="text-xl md:text-2xl font-light md:rotate-180 md:[writing-mode:vertical-lr] md:group-hover:text-white transition-colors duration-500">
                  Croisières Hebdomadaires
                </h2>
              </div>
              <div className="absolute bottom-8 left-8 md:left-24 right-8 bg-white/80 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none">
                <p className="text-base md:text-sm text-gray-800 md:text-gray-600 md:group-hover:text-white transition-colors duration-500">
                  Une semaine d&apos;exception où le temps
                  se suspend entre ciel et mer. Nos
                  escales soigneusement sélectionnées
                  vous font découvrir les plus beaux
                  mouillages de Méditerranée.
                </p>
              </div>
            </div>
          </div>

          {/* Expériences Personnalisées */}
          <div className="group relative h-[400px] md:h-[600px]">
            <div className="absolute inset-0 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700">
              <Image
                src="/experiences-personnalisees.jpg"
                alt="Expériences Personnalisées"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative z-10 h-full flex cursor-pointer">
              <div className="flex flex-row md:flex-col justify-between py-8 px-8">
                <span className="text-3xl md:text-4xl font-light text-gray-300 md:group-hover:text-white transition-colors duration-500">04</span>
                <h2 className="text-xl md:text-2xl font-light md:rotate-180 md:[writing-mode:vertical-lr] md:group-hover:text-white transition-colors duration-500">
                  Expériences Personnalisées
                </h2>
              </div>
              <div className="absolute bottom-8 left-8 md:left-24 right-8 bg-white/80 md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none">
                <p className="text-base md:text-sm text-gray-800 md:text-gray-600 md:group-hover:text-white transition-colors duration-500">
                  Votre rêve maritime prend vie selon
                  vos désirs. Notre équipage met son
                  expertise à votre service pour créer
                  une expérience unique, à votre image.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 md:space-x-16">
            <Link href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors text-sm md:text-base">
              Contact
            </Link>
            <Link href="#instagram" className="text-gray-600 hover:text-gray-800 transition-colors text-sm md:text-base">
              Instagram
            </Link>
            <Link href="#twitter" className="text-gray-600 hover:text-gray-800 transition-colors text-sm md:text-base">
              Twitter
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
