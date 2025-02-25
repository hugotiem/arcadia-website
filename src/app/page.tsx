import Navigation from '@/components/Navigation'
import Image from 'next/image'

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
            <div className="relative w-144 h-144 mb-6 mx-auto opacity-0 animate-[fadeInDown_1s_ease-out_forwards] group">
              <Image
                src="/blason.png"
                alt="Blason Arcadia"
                width={576}
                height={576}
                className="object-contain transition-transform duration-500 group-hover:scale-110"
                quality={100}
                priority
              />
            </div>
            <p className="text-lg md:text-xl font-light opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
              Une expérience unique à la voile
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
