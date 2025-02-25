import Image from 'next/image'
import { EspritSection as EspritSectionType } from './esprit-data'
import { cn } from '@/lib/utils'

export default function EspritSection({ 
  section
}: { 
  section: EspritSectionType
}) {

  return (
    <section id={section.id} className={cn("py-20")}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <>
           <h2 className="text-5xl font-bold mb-6 md:w-1/3 font-minion-pro">{section.title}</h2>
            <div className="w-full md:w-2/3">
             
              <p className="text-gray-600 leading-relaxed text-lg">
                {section.description}
              </p>
            </div>
            <div className="group overflow-hidden rounded-md w-full md:w-1/3">
              <div className="relative transform transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={600}
                  height={400}
                  className="object-cover rounded-lg shadow-md transition-shadow duration-500 group-hover:shadow-xl"
                />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-10 rounded-lg"></div>
              </div>
            </div>
          </>
      </div>
      <div className="w-full h-[1px] bg-gray-500 my-8"></div>
    </section>
  )
} 