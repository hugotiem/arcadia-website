'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname.startsWith(path)
  }

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:block h-16">
          <div className="flex items-center justify-between md:hidden w-full">
            {/* Logo Mobile */}
            <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
              <Link href="/" className="block">
                <Image
                  src="/logo.png"
                  alt="Arcadia"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              <span className="sr-only">Menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between h-full">
            {/* Left Navigation */}
            <Link 
              href="/reservation" 
              className="relative text-gray-800 hover:text-gray-600 text-sm transition-colors duration-300 group"
            >
              Réservation
              <span className={`absolute inset-x-0 -bottom-1 h-[1px] bg-gray-800 transition-transform duration-300 origin-left ${
                isActive('/reservation') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-hover:bg-gray-200'
              }`} />
            </Link>
            <Link 
              href="/esprit" 
              className="relative text-gray-800 hover:text-gray-600 text-sm transition-colors duration-300 group"
            >
              L&apos;esprit
              <span className={`absolute inset-x-0 -bottom-1 h-[1px] bg-gray-800 transition-transform duration-300 origin-left ${
                isActive('/esprit') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-hover:bg-gray-200'
              }`} />
            </Link>

            {/* Center Logo Desktop */}
            <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300 mx-8">
              <Link href="/" className="block">
                <Image
                  src="/logo.png"
                  alt="Arcadia"
                  width={240}
                  height={80}
                  className="h-8 w-auto"
                  quality={100}
                  priority
                />
              </Link>
            </div>

            {/* Right Navigation */}
            <Link 
              href="/arcadia" 
              className="relative text-gray-800 hover:text-gray-600 text-sm transition-colors duration-300 group"
            >
              L&apos;arcadia
              <span className={`absolute inset-x-0 -bottom-1 h-[1px] bg-gray-800 transition-transform duration-300 origin-left ${
                isActive('/arcadia') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-hover:bg-gray-200'
              }`} />
            </Link>
            <Link 
              href="/histoire" 
              className="relative text-gray-800 hover:text-gray-600 text-sm transition-colors duration-300 group"
            >
              Notre histoire
              <span className={`absolute inset-x-0 -bottom-1 h-[1px] bg-gray-800 transition-transform duration-300 origin-left ${
                isActive('/histoire') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-hover:bg-gray-200'
              }`} />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-4 space-y-1">
            <Link 
              href="/reservation" 
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isActive('/reservation') 
                  ? 'text-gray-900 bg-gray-50' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Réservation
            </Link>
            <Link 
              href="/esprit" 
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isActive('/esprit') 
                  ? 'text-gray-900 bg-gray-50' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              L&apos;esprit
            </Link>
            <Link 
              href="/arcadia" 
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isActive('/arcadia') 
                  ? 'text-gray-900 bg-gray-50' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              L&apos;arcadia
            </Link>
            <Link 
              href="/histoire" 
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isActive('/histoire') 
                  ? 'text-gray-900 bg-gray-50' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Notre histoire
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 