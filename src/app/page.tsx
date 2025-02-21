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
