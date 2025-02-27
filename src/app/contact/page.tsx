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
<<<<<<< HEAD
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-12 opacity-0 animate-[fadeInDown_1s_ease-out_forwards] font-minion-pro">
            Contact
          </h1>
          
          <div className="space-y-8 text-gray-600 opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
            <div>
              <h2 className="text-xl font-light mb-2">Port d&apos;attache</h2>
              <p className="leading-relaxed">
                9 quai Paul Riquet<br />
                Port de Sète<br />
                Sète, 34200<br />
                France
=======
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
>>>>>>> b2a1dfb3f351f9f0c25d6f5a30ae2f1308712f46
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