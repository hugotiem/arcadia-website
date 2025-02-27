import type { Metadata } from "next";
import "./globals.css";
import { mainsonNeueExtended, minionPro } from './fonts'
import BottomBar from '@/components/BottomBar'
import Navigation from "@/components/Navigation";
export const metadata: Metadata = {
  metadataBase: new URL('https://navire-arcadia.com'),
  title: {
    default: "Arcadia - Voilier de luxe",
    template: "%s | Arcadia - Voilier de luxe"
  },
  description: "Découvrez l'expérience unique à bord de l'Arcadia, voilier de luxe en Méditerranée",
  keywords: ["voilier de luxe", "yacht", "méditerranée", "croisière de luxe", "navigation", "sète", "france"],
  authors: [{ name: "Arcadia" }],
  creator: "Arcadia",
  publisher: "Arcadia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://navire-arcadia.com"
  },
  icons: {
    icon: '/blason.png',
    apple: '/blason.png',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://navire-arcadia.com',
    siteName: 'Arcadia - Voilier de luxe',
    images: [{
      url: '/hero-boat.jpg',
      width: 1200,
      height: 630,
      alt: 'Arcadia - Voilier de luxe'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arcadia - Voilier de luxe',
    description: "Découvrez l'expérience unique à bord de l'Arcadia, voilier de luxe en Méditerranée",
    images: ['/hero-boat.jpg'],
  }
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${minionPro.variable} ${mainsonNeueExtended.variable}`}>
      <head>
        <link rel="icon" href="/blason.png" />
        <link rel="apple-touch-icon" href="/blason.png" />
      </head>
      <body className="font-custom antialiased relative font-mainson-neue-extended min-h-screen flex flex-col">
        <Navigation />
        {children}
        <BottomBar backgroundColor="transparent" />
      </body>
    </html>
  );
}
