import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notre Histoire | Arcadia - Voilier de luxe',
  description: 'Découvrez l\'histoire de la famille Blanchard Dignac, le Château de Lurs et l\'École d\'Art. Une tradition d\'excellence maritime française.',
  openGraph: {
    title: 'Notre Histoire | Arcadia - Voilier de luxe',
    description: 'Découvrez l\'histoire de la famille Blanchard Dignac, le Château de Lurs et l\'École d\'Art. Une tradition d\'excellence maritime française.',
    url: 'https://navire-arcadia.com/histoire',
    siteName: 'Arcadia - Voilier de luxe',
    locale: 'fr_FR',
    type: 'article',
    images: [
      {
        url: '/histoire-famille.jpg',
        width: 1200,
        height: 630,
        alt: 'La Famille Blanchard Dignac',
      }
    ],
  },
} 