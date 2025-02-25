'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
interface BottomBarProps {
  backgroundColor?: string;
  position?: 'fixed' | 'absolute';
}

export default function BottomBar({ backgroundColor, position }: BottomBarProps) {

    const pathname = usePathname()

    const isHomeScreen = pathname === '/'

  return (
    <>
      {/* Séparateur supérieur */}
      { !isHomeScreen && <div className={"w-full h-px bg-gray-200"} />}
      
      {/* Bottom Bar */}
      <section className={`py-8 ${isHomeScreen ? 'fixed bottom-0 left-0 right-0' : ''}`} style={{ backgroundColor }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center space-x-8">
            <Link href="/contact" className={`${isHomeScreen ? 'text-white font-medium hover:text-gray-200 text-lg' : 'text-gray-600 hover:text-gray-800 text-sm'} transition-colors`}>
              Contact
            </Link>
            <div className={`h-4 w-px ${isHomeScreen ? 'bg-white/20' : 'bg-gray-200'}`} />
            <Link href="#instagram" className={`${isHomeScreen ? 'text-white font-medium hover:text-gray-200 text-lg' : 'text-gray-600 hover:text-gray-800 text-sm'} transition-colors`}>
              Instagram
            </Link>
            <div className={`h-4 w-px ${isHomeScreen ? 'bg-white/20' : 'bg-gray-200'}`} />
            <Link href="#twitter" className={`${isHomeScreen ? 'text-white font-medium hover:text-gray-200 text-lg' : 'text-gray-600 hover:text-gray-800 text-sm'} transition-colors`}>
              Twitter
            </Link>
          </div>
        </div>
      </section>
    </>
  )
} 