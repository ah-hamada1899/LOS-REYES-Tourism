'use client'


import Image from "next/image"
import { useTranslation } from "@/hooks/useTranslation"
import Link from "next/link"
import { destinations } from '../../data/destinations'



// const destinations = [
//   {
//     name: 'Luxor',
//     label: "The World's Open Air Museum",
//     image: Luxor,
//     ditails: "/experiences"
//   },
//   {
//     name: 'Cairo',
//     label: 'Where History Meets the Future',
//     image: Cairo,
//     ditails: "/experiences"
//   },
//   {
//     name: 'Aswan',
//     label: 'The Nubian Gem',
//     image: Aswan,
//     ditails: "/experiences"
//   }
// ]

export default function DestinationsGrid() {
  const { t } = useTranslation()

  const displayDestinations = destinations.slice(0, 6)

  return (
    <section className="py-section-gap bg-surface-container-low px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-headline-lg text-on-background mb-4">{t('destinations.title')}</h2>
          <p className="text-body-md text-on-surface-variant max-w-xl mx-auto">
            A curated selection of Egypt&apos;s most prestigious landmarks, each offering a unique window into the past.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {displayDestinations.map((dest) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.slug}`}
              className="group relative aspect-[3/4] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 block"
            >
              <Image width={1000} height={1000}
                alt={`${dest.name} Temple`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={dest.image}
              />
              <div className="absolute inset-0 card-gradient"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full border-t-2 border-transparent group-hover:border-primary-container transition-all">
                <span className="text-label-sm text-primary-fixed uppercase tracking-widest mb-2 block">
                  {dest.label}
                </span>
                <h3 className="text-headline-md text-white">{dest.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}