import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import { mainsonNeueExtended } from '../fonts'

export const metadata: Metadata = {
  title: 'Contact | Arcadia - Voilier de luxe',
  description: 'Contactez-nous pour organiser votre séjour à bord de l\'Arcadia. Port d\'attache à Sète, visites sur rendez-vous.',
  openGraph: {
    title: 'Contact | Arcadia - Voilier de luxe',
    description: 'Contactez-nous pour organiser votre séjour à bord de l\'Arcadia. Port d\'attache à Sète, visites sur rendez-vous.',
    url: 'https://navire-arcadia.com/contact',
    siteName: 'Arcadia - Voilier de luxe',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="max-w-xl mx-auto px-4">
          <h1 className={`text-2xl mb-16 ${mainsonNeueExtended.className} font-medium`}>
            CONTACT
          </h1>
          
          <div className={`space-y-8 ${mainsonNeueExtended.className}`}>
            <div className="space-y-2">
              <h2 className="text-lg font-medium">Port d&apos;attache :</h2>
              <p className="font-thin">
                9 quai Paul Riquet, Port de Sète<br />
                Sète, 34200, France
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-medium">Email :</h2>
              <p className="font-thin">
                Contact@navire-arcadia.com
              </p>
            </div>

            <div className="space-y-1 font-thin">
              <p>Visites sur rendez-vous</p>
              <p>Dossiers sur demande</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 