import type { Metadata } from "next";
import "./globals.css";
import { customFont } from './fonts'
import BottomBar from '@/components/BottomBar'

export const metadata: Metadata = {
  title: "Arcadia - Voilier de luxe",
  description: "Découvrez l'expérience unique à bord de l'Arcadia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${customFont.variable}`}>
      <body className="font-custom antialiased">
        {children}
        <BottomBar />
      </body>
    </html>
  );
}
