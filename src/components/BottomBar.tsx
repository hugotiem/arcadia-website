import Link from 'next/link'

export default function BottomBar() {
  return (
    <>
      {/* Séparateur supérieur */}
      <div className="w-full h-px bg-gray-200" />
      
      {/* Bottom Bar */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-end items-center space-x-8">
            <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
              Contact
            </Link>
            <div className="h-4 w-px bg-gray-200" />
            <Link href="#instagram" className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
              Instagram
            </Link>
            <div className="h-4 w-px bg-gray-200" />
            <Link href="#twitter" className="text-gray-600 hover:text-gray-800 transition-colors text-sm">
              Twitter
            </Link>
          </div>
        </div>
      </section>
    </>
  )
} 