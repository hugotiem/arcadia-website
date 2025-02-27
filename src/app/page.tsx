import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arcadia - Voilier de luxe en Méditerranée',
  description: 'Découvrez l\'Arcadia, voilier de luxe proposant des expériences uniques en Méditerranée. Navigation d\'exception, service personnalisé et moments inoubliables.',
  openGraph: {
    title: 'Arcadia - Voilier de luxe en Méditerranée',
    description: 'Découvrez l\'Arcadia, voilier de luxe proposant des expériences uniques en Méditerranée. Navigation d\'exception, service personnalisé et moments inoubliables.',
    url: 'https://navire-arcadia.com',
    siteName: 'Arcadia - Voilier de luxe',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/hero-boat.jpg',
        width: 1200,
        height: 630,
        alt: 'Voilier Arcadia en Méditerranée',
      }
    ],
  },
}

export default function Home() {
  return (
    <main className="bg-white relative h-screen">
      {/* Hero Section */}
      <section className="h-screen">
        <Image
          src="/hero-boat.jpg"
          alt="Voilier Arcadia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="relative w-[490px] h-[490px] mb-6 mx-auto">
              <Image
                src="/blason.png"
                alt="Blason Arcadia"
                width={490}
                height={490}
                className="object-contain"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
