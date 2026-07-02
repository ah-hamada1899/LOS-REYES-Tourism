'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface px-4">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 lotus-pattern opacity-5"></div>
      
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Number with Gold Style */}
        <div className="relative inline-block mb-8">
          <div className="text-[120px] md:text-[160px] font-headline-lg text-primary/10 select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl md:text-7xl text-primary">404</span>
          </div>
        </div>

        {/* Gold decorative line */}
        <div className="w-24 h-1 bg-primary-container mx-auto mb-6"></div>

        <h1 className="text-headline-lg md:text-display-lg-mobile text-on-background mb-4">
          Page Not Found
        </h1>
        
        <p className="text-body-lg text-on-surface-variant mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Let us guide you back to our heritage.
        </p>

        {/* Icon */}
        <div className="mb-8">
          <span className="material-symbols-outlined text-6xl text-primary-container">
            travel_explore
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.back()}
            className="bg-surface-container border border-primary text-primary px-8 py-4 text-label-lg uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
          >
            Go Back
          </button>
          <Link
            href="/"
            className="bg-primary-container text-on-primary-container px-8 py-4 text-label-lg uppercase tracking-widest hover:scale-105 transition-transform duration-200 shadow-lg"
          >
            Return Home
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center text-label-sm">
          <Link href="/destinations" className="text-on-surface-variant hover:text-primary transition-colors">
            Destinations
          </Link>
          <span className="text-outline-variant">|</span>
          <Link href="/experiences" className="text-on-surface-variant hover:text-primary transition-colors">
            Experiences
          </Link>
          <span className="text-outline-variant">|</span>
          <Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors">
            About
          </Link>
          <span className="text-outline-variant">|</span>
          <Link href="/plan" className="text-on-surface-variant hover:text-primary transition-colors">
            Plan Your Trip
          </Link>
        </div>
      </div>

      {/* Decorative bottom element */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary-container to-transparent"></div>
    </div>
  )
}