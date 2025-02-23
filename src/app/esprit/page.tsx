import Navigation from '@/components/Navigation'
import BottomBar from '@/components/BottomBar'
import Image from 'next/image'
import Link from 'next/link'

export default function Esprit() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-light mb-8">L&apos;Esprit</h1>
          <p className="text-gray-600 leading-relaxed">
            Dans cet écrin flottant, chaque détail a été pensé pour votre bien-être. De la 
            vaisselle raffinée aux draps les plus fins, en passant par une cave à vins 
            soigneusement sélectionnée, nous avons créé un univers où l&apos;excellence française 
            s&apos;exprime dans sa plus pure tradition.
          </p>
        </div>
      </section>

      {/* Navigation Pills */}
      <div className="flex justify-center gap-4 mb-16">
        <Link 
          href="#terroir" 
          className="px-6 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
        >
          L&apos;Esprit Terroir
        </Link>
        <Link 
          href="#culture" 
          className="px-6 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
        >
          L&apos;Esprit Culture
        </Link>
        <Link 
          href="#partenariats" 
          className="px-6 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
        >
          L&apos;Esprit Partenariats
        </Link>
      </div>

      {/* Terroir Section */}
      <section id="terroir" className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-light mb-6">L&apos;Esprit de Terroir</h2>
            <p className="text-gray-600 leading-relaxed">
              Nous vous proposons une sélection de vins et des 
              produits d&apos;exeption provenant de domaines que nous 
              connaissons et apprécions. Ces crus, issus de terroirs 
              d&apos;exception, reflètent le savoir-faire des vignerons 
              passionnés avec qui nous travaillons.
            </p>
          </div>
          <div className="group overflow-hidden rounded-lg">
            <div className="relative transform transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/wine-service.jpg"
                alt="Service des vins"
                width={600}
                height={400}
                className="object-cover rounded-lg shadow-md transition-shadow duration-500 group-hover:shadow-xl"
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-light mb-6">L&apos;Esprit d&apos;échange & de culture</h2>
            <p className="text-gray-600 leading-relaxed">
              Notre voilier incarne un lieu où la mer rencontre la culture. 
              En dehors de nos activités de charter, nous organisons 
              des rencontres uniques avec des artistes, écrivains, marins 
              et autres personnalités inspirantes. Ces interviews en mer, 
              moments d&apos;échange privilégiés, nourrissent l&apos;âme du 
              bateau et enrichissent son image, offrant ainsi une 
              dimension culturelle et créative à notre univers.
            </p>
          </div>
          <div className="group overflow-hidden rounded-lg">
            <div className="relative transform transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/cultural-exchange.jpg"
                alt="Échanges culturels"
                width={600}
                height={400}
                className="object-cover rounded-lg shadow-md transition-shadow duration-500 group-hover:shadow-xl"
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Partenariats Section */}
      <section id="partenariats" className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-light mb-6">L&apos;Esprit de Partenariat</h2>
            <p className="text-gray-600 leading-relaxed">
              Nous collaborons avec des partenaires d&apos;exception qui 
              partagent notre vision de l&apos;excellence. Des maisons de 
              champagne prestigieuses aux artisans locaux, chaque 
              partenariat est soigneusement sélectionné pour enrichir 
              l&apos;expérience de nos hôtes et soutenir le savoir-faire 
              artisanal.
            </p>
          </div>
          <div className="group overflow-hidden rounded-lg">
            <div className="relative transform transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/partnership.jpg"
                alt="Nos partenariats"
                width={600}
                height={400}
                className="object-cover rounded-lg shadow-md transition-shadow duration-500 group-hover:shadow-xl"
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <BottomBar />
    </main>
  )
} 