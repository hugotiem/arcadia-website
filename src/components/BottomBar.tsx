'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
interface BottomBarProps {
  backgroundColor?: string;
}

export default function BottomBar({ backgroundColor }: BottomBarProps) {

    const pathname = usePathname()

    const isHomeScreen = pathname === '/'

  return (
    <>
      {/* Séparateur supérieur */}
      { !isHomeScreen && <div className={"w-full h-px bg-gray-200"} />}
      
      {/* Bottom Bar */}
      <section className={`py-4 ${isHomeScreen ? 'fixed bottom-0 left-0 right-0' : ''}`} style={{ backgroundColor }}>
        <div className="max-w-7xl mx-auto px-4">
          {isHomeScreen ? (
            <div className="flex justify-between items-center">
              <Link href="#instagram" className="text-white font-medium hover:text-gray-200 text-lg transition-colors">
                Instagram
              </Link>
              <div className="h-4 w-px bg-white/20 mx-8" />
              <Link href="/contact" className="text-white font-medium hover:text-gray-200 text-lg transition-colors">
                Contact
              </Link>
              <div className="h-4 w-px bg-white/20 mx-8" />
              <Link href="#twitter" className="text-white font-medium hover:text-gray-200 text-lg transition-colors">
                Twitter
              </Link>
            </div>
          ) : (
            <div className="flex justify-center items-center space-x-8">
              <Link href="/contact" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">
                Contact
              </Link>
              <div className="h-4 w-px bg-gray-200" />
              <Link href="#instagram" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">
                Instagram
              </Link>
              <div className="h-4 w-px bg-gray-200" />
              <Link href="#twitter" className="text-gray-600 hover:text-gray-800 text-sm transition-colors">
                Twitter
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  )
} 