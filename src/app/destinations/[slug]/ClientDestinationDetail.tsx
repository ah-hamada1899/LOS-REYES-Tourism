'use client'

import { Suspense } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Destination } from '@/data/destinations'
import Link from 'next/link'
import Image from 'next/image'
import Loading from '@/components/Loading'


interface Props {
  destination: Destination
}

export default function ClientDestinationDetail({ destination }: Props) {
  const { t } = useTranslation()

  console.log('Destination data received:', destination)

  // If it's the Eternal Sands page, show the full detailed page
  if (destination.slug === 'eternal-sands') {
    return (
      <main>
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-[90vh] min-h-[600px] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              alt={`${destination.name} Hero Image`}
              src={destination.heroImage}
              fill  
              className="absolute inset-0 w-full h-full object-cover"
              quality={100}
            />
            {/* <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${destination.heroImage}')` }}
            /> */}
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
          <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-24 text-white">
            <div className="max-w-3xl animate-fade-in-up">
              <span className="font-label-lg text-label-lg uppercase tracking-[0.3em] text-primary-container mb-4 block">
                {t('destination.eternal-sands.subtitle')}
              </span>
              <h1 className="text-display-lg-mobile md:text-display-lg mb-6 leading-none">
                {t('destination.eternal-sands.title')}
              </h1>
              <p className="text-body-lg max-w-2xl opacity-90 leading-relaxed italic">
                {t('destination.eternal-sands.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Expedition Summary Bar */}
        <section className="bg-surface-container-low py-10">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-1 border-r border-outline-variant/30">
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">{t('destination.eternal-sands.duration')}</span>
              <span className="text-[24px] font-headline-md text-primary">{t('destination.eternal-sands.duration-value')}</span>
            </div>
            <div className="flex flex-col gap-1 md:border-r border-outline-variant/30">
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">{t('destination.eternal-sands.group-size')}</span>
              <span className="text-[24px] font-headline-md text-primary">{t('destination.eternal-sands.group-size-value')}</span>
            </div>
            <div className="flex flex-col gap-1 border-r border-outline-variant/30">
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">{t('destination.eternal-sands.starting-from')}</span>
              <span className="text-[24px] font-headline-md text-primary">{t('destination.eternal-sands.starting-from-value')}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">{t('destination.eternal-sands.next-departure')}</span>
              <span className="text-[24px] font-headline-md text-primary">{t('destination.eternal-sands.next-departure-value')}</span>
            </div>
          </div>
        </section>

        {/* The Journey (Itinerary) */}
        <section className="py-section-gap relative">
          <div className="absolute inset-0 lotus-pattern pointer-events-none"></div>
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-headline-lg mb-6 text-primary">{t('destination.eternal-sands.itinerary-title')}</h2>
                <p className="text-body-lg text-on-surface-variant">{t('destination.eternal-sands.itinerary-desc')}</p>
              </div>
              <div className="hidden md:block h-px flex-1 bg-outline-variant mx-12 mb-4"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Day by Day */}
              <div className="lg:col-span-7 space-y-12 relative itinerary-line pl-12">
                {/* Day 1 */}
                <div className="relative group transition-all duration-700">
                  <div className="absolute -left-12 top-0 w-10 h-10 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container z-10 transition-transform group-hover:scale-110">
                    <span className="font-bold text-sm">01</span>
                  </div>
                  <h3 className="text-headline-md mb-4 group-hover:text-primary transition-colors">{t('destination.eternal-sands.day1-title')}</h3>
                  <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">{t('destination.eternal-sands.day1-desc')}</p>
                  <div className="flex items-center gap-3 text-primary-container font-label-lg text-label-lg uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[18px]">hotel</span>
                    {t('destination.eternal-sands.day1-stay')}
                  </div>
                </div>

                {/* Day 2 */}
                <div className="relative group transition-all duration-700">
                  <div className="absolute -left-12 top-0 w-10 h-10 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container z-10 transition-transform group-hover:scale-110">
                    <span className="font-bold text-sm">02</span>
                  </div>
                  <h3 className="text-headline-md mb-4 group-hover:text-primary transition-colors">{t('destination.eternal-sands.day2-title')}</h3>
                  <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">{t('destination.eternal-sands.day2-desc')}</p>
                  <div className="flex items-center gap-3 text-primary-container font-label-lg text-label-lg uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[18px]">temple_buddhist</span>
                    {t('destination.eternal-sands.day2-highlight')}
                  </div>
                </div>

                {/* Day 3-5 Summary */}
                <div className="relative group transition-all duration-700">
                  <div className="absolute -left-12 top-0 w-10 h-10 bg-outline-variant rounded-full flex items-center justify-center text-on-surface z-10">
                    <span className="font-bold text-sm">...</span>
                  </div>
                  <h3 className="text-headline-md mb-4 opacity-60">{t('destination.eternal-sands.day3-title')}</h3>
                  <p className="text-body-md text-on-surface-variant italic">{t('destination.eternal-sands.day3-desc')}</p>
                  <button className="mt-4 text-primary font-label-lg text-label-lg uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform">
                    {t('destination.eternal-sands.view-pdf')} <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Visual Accent Card */}
              <div className="lg:col-span-5 sticky top-32">
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-xl group transition-all duration-700">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${destination.cardImage}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10 text-white">
                    <span className="font-label-lg text-label-lg uppercase tracking-widest text-primary-container mb-2 block">{t('destination.eternal-sands.sailing-title')}</span>
                    <h4 className="text-headline-md mb-4">{t('destination.eternal-sands.sailing-title')}</h4>
                    <p className="text-body-md opacity-80 italic">{t('destination.eternal-sands.sailing-quote')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & Tiers */}
        <section className="py-section-gap bg-surface-container">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-headline-lg mb-6 text-primary">{t('destination.eternal-sands.pricing-title')}</h2>
              <p className="text-body-lg text-on-surface-variant">{t('destination.eternal-sands.pricing-desc')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Classic Heritage */}
              <div className="bg-surface p-12 shadow-sm border border-outline-variant/30 flex flex-col hover:shadow-lg transition-all duration-700">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-headline-md text-on-surface">{t('destination.eternal-sands.classic-title')}</h3>
                    <p className="text-label-lg text-primary-container uppercase tracking-widest">{t('destination.eternal-sands.classic-subtitle')}</p>
                  </div>
                  <div className="text-right">
                    <span className="block font-label-sm text-label-sm uppercase text-on-surface-variant">{t('destination.eternal-sands.starting-from')}</span>
                    <span className="text-headline-md text-primary">{t('destination.eternal-sands.classic-price')}</span>
                  </div>
                </div>
                <ul className="space-y-6 mb-12 flex-1">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container">check_circle</span>
                    <span className="text-body-md">{t('destination.eternal-sands.classic-feature1')}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container">check_circle</span>
                    <span className="text-body-md">{t('destination.eternal-sands.classic-feature2')}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container">check_circle</span>
                    <span className="text-body-md">{t('destination.eternal-sands.classic-feature3')}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container">check_circle</span>
                    <span className="text-body-md">{t('destination.eternal-sands.classic-feature4')}</span>
                  </li>
                </ul>
                <button className="w-full py-4 border border-primary text-primary font-label-lg text-label-lg uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">
                  {t('destination.eternal-sands.classic-cta')}
                </button>
              </div>

              {/* Royal Suite */}
              <div className="bg-surface p-12 shadow-md border-t-4 border-primary-container flex flex-col hover:shadow-xl transition-all relative duration-700">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-6 py-1 font-label-sm text-label-sm uppercase tracking-widest whitespace-nowrap">
                  Highly Recommended
                </div>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-headline-md text-on-surface">{t('destination.eternal-sands.royal-title')}</h3>
                    <p className="text-label-lg text-primary-container uppercase tracking-widest">{t('destination.eternal-sands.royal-subtitle')}</p>
                  </div>
                  <div className="text-right">
                    <span className="block font-label-sm text-label-sm uppercase text-on-surface-variant">{t('destination.eternal-sands.starting-from')}</span>
                    <span className="text-headline-md text-primary">{t('destination.eternal-sands.royal-price')}</span>
                  </div>
                </div>
                <ul className="space-y-6 mb-12 flex-1">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container">check_circle</span>
                    <span className="text-body-md">{t('destination.eternal-sands.royal-feature1')}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container">check_circle</span>
                    <span className="text-body-md">{t('destination.eternal-sands.royal-feature2')}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container">check_circle</span>
                    <span className="text-body-md">{t('destination.eternal-sands.royal-feature3')}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary-container">check_circle</span>
                    <span className="text-body-md">{t('destination.eternal-sands.royal-feature4')}</span>
                  </li>
                </ul>
                <button className="w-full py-4 bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-widest hover:brightness-110 transition-all">
                  {t('destination.eternal-sands.royal-cta')}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Inclusions / Exclusions */}
        <section className="py-section-gap">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h3 className="text-headline-md mb-10 text-on-surface flex items-center gap-4">
                <span className="w-12 h-px bg-primary"></span> {t('destination.eternal-sands.inclusions-title')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                <div className="flex flex-col">
                  <span className="text-label-lg text-primary uppercase mb-1">{t('destination.eternal-sands.inclusion1-title')}</span>
                  <p className="text-body-md text-on-surface-variant">{t('destination.eternal-sands.inclusion1-desc')}</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-label-lg text-primary uppercase mb-1">{t('destination.eternal-sands.inclusion2-title')}</span>
                  <p className="text-body-md text-on-surface-variant">{t('destination.eternal-sands.inclusion2-desc')}</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-label-lg text-primary uppercase mb-1">{t('destination.eternal-sands.inclusion3-title')}</span>
                  <p className="text-body-md text-on-surface-variant">{t('destination.eternal-sands.inclusion3-desc')}</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-label-lg text-primary uppercase mb-1">{t('destination.eternal-sands.inclusion4-title')}</span>
                  <p className="text-body-md text-on-surface-variant">{t('destination.eternal-sands.inclusion4-desc')}</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-headline-md mb-10 text-on-surface flex items-center gap-4">
                <span className="w-12 h-px bg-outline"></span> {t('destination.eternal-sands.exclusions-title')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                <div className="flex flex-col">
                  <span className="text-label-lg text-on-surface-variant uppercase mb-1">{t('destination.eternal-sands.exclusion1-title')}</span>
                  <p className="text-body-md text-on-surface-variant opacity-70">{t('destination.eternal-sands.exclusion1-desc')}</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-label-lg text-on-surface-variant uppercase mb-1">{t('destination.eternal-sands.exclusion2-title')}</span>
                  <p className="text-body-md text-on-surface-variant opacity-70">{t('destination.eternal-sands.exclusion2-desc')}</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-label-lg text-on-surface-variant uppercase mb-1">{t('destination.eternal-sands.exclusion3-title')}</span>
                  <p className="text-body-md text-on-surface-variant opacity-70">{t('destination.eternal-sands.exclusion3-desc')}</p>
                </div>
                <div className="flex flex-col">
                  <span className="text-label-lg text-on-surface-variant uppercase mb-1">{t('destination.eternal-sands.exclusion4-title')}</span>
                  <p className="text-body-md text-on-surface-variant opacity-70">{t('destination.eternal-sands.exclusion4-desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-section-gap relative overflow-hidden bg-primary text-white">
          <div className="absolute inset-0 opacity-20">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${destination.heroImage}')` }}
            />
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <h2 className="text-display-lg-mobile md:text-display-lg mb-8">{t('destination.eternal-sands.cta-title')}</h2>
            <p className="text-body-lg mb-12 max-w-2xl mx-auto opacity-90">{t('destination.eternal-sands.cta-desc')}</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-primary-container text-on-primary-container px-12 py-5 text-label-lg uppercase tracking-[0.2em] rounded-sm hover:scale-105 transition-all shadow-xl">
                {t('destination.eternal-sands.cta-button1')}
              </button>
              <button className="bg-transparent border-2 border-white px-12 py-5 text-label-lg uppercase tracking-[0.2em] rounded-sm hover:bg-white hover:text-primary transition-all">
                {t('destination.eternal-sands.cta-button2')}
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    )
  }

  // For other destinations, show a simpler page
  return (
    <main>
      <Navbar />
      <Suspense fallback={<Loading />}>
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">

          <Image width={1000} height={1000}
            alt={`${destination.name} Hero Image`}
            src={destination.heroImage}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 text-center text-white px-margin-mobile">
          <h1 className="text-display-lg-mobile md:text-display-lg mb-6">{destination.name}</h1>
          <p className="text-body-lg max-w-2xl mx-auto opacity-90">{destination.label}</p>
        </div>
      </section>
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <h2 className="text-headline-lg text-primary mb-8">About {destination.name}</h2>
        <p className="text-body-lg text-on-surface-variant mb-6">
          Experience the wonders of {destination.name} with our curated luxury tours.
        </p>
        <p className="text-body-lg text-on-surface-variant">
          Coming soon: Detailed itinerary and exclusive experiences for {destination.name}.
        </p>
        <div className="mt-12">
          <Link
            href="/destinations"
            className="text-primary font-label-lg text-label-lg uppercase tracking-widest hover:underline"
          >
            ← Back to Destinations
          </Link>
        </div>
      </section>
      </Suspense>
      <Footer />
    </main>
  )
}