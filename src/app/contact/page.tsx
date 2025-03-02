import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import { mainsonNeueExtended, minionPro } from '../fonts'

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
        <div className="max-w-xl mx-auto px-4 text-center">
          <h1 className={`text-4xl mb-16 ${minionPro.className} font-bold`}>
            Contact
          </h1>
          
          <div className="space-y-12">
            <div className="space-y-2">
              <h2 className={`text-2xl ${minionPro.className} font-light`}>Port d&apos;attache</h2>
              <p className={`${mainsonNeueExtended.className} text-sm text-gray-600`}>
                9 quai Paul Riquet, Port de Sète<br />
                Sète, 34200, France
              </p>
            </div>

            <div className="space-y-2">
              <h2 className={`text-2xl ${minionPro.className} font-light`}>Email</h2>
              <p className={`${mainsonNeueExtended.className} text-sm text-gray-600`}>
                Contact@navire-arcadia.com
              </p>
            </div>

            <div className="space-y-2">
              <p className={`${mainsonNeueExtended.className} text-sm text-gray-600`}>Visites sur rendez-vous</p>
              <p className={`${mainsonNeueExtended.className} text-sm text-gray-600`}>Dossiers sur demande</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 