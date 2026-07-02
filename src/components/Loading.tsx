'use client'

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-surface">
      <div className="relative">
        {/* Animated lotus flower or gold circle */}
        <div className="w-20 h-20 border-4 border-primary-container rounded-full animate-spin border-t-transparent"></div>
        
        {/* Decorative rings */}
        <div className="absolute inset-0 w-20 h-20 border-4 border-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute -inset-4 w-28 h-28 border-2 border-primary-container/30 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
      </div>
      
      <div className="mt-8 text-center">
        <div className="font-headline-md text-headline-md text-primary mb-2">
          Loading...
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Preparing your journey through Egypt
        </p>
      </div>

      {/* Decorative dots */}
      <div className="mt-6 flex gap-2">
        <div className="w-2 h-2 bg-primary-container rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-2 h-2 bg-primary-container rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-2 h-2 bg-primary-container rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  )
}