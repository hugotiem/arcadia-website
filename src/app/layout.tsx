import type { Metadata } from "next";
import "./globals.css";
import { customFont } from './fonts'

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
      </body>
    </html>
  );
}
