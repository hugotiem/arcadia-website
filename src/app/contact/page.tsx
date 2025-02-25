import Navigation from '@/components/Navigation'
import type { Metadata } from 'next'

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
              </p>
            </div>

            <div>
              <h2 className="text-xl font-light mb-2">Email</h2>
              <a 
                href="mailto:contact@navire-arcadia.com"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                contact@navire-arcadia.com
              </a>
            </div>

            <div className="pt-4">
              <p className="italic">Visite sur rendez-vous</p>
              <p className="italic">Dossier sur demande</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 