'use client'

interface NavigationLoadingProps {
  isLoading: boolean
}

export default function NavigationLoading({ isLoading }: NavigationLoadingProps) {
  if (!isLoading) return null

  return (
    <div className="fixed top-0 left-0 w-full z-[9999]">
      {/* Progress bar */}
      <div className="h-1 bg-surface/80 backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-primary-container via-primary to-primary-container bg-[length:200%_100%] animate-shimmer"
          style={{
            width: '100%',
            animation: 'shimmer 1.5s ease-in-out infinite'
          }}
        />
      </div>

      {/* Loading overlay with spinner */}
      <div className="fixed inset-0 bg-surface/50 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-surface rounded-xl shadow-2xl p-8 flex flex-col items-center gap-4 min-w-[200px] border border-primary-container/20">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-primary-container rounded-full animate-spin border-t-transparent"></div>
            <div className="absolute inset-0 w-12 h-12 border-4 border-primary/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-[-8px] w-16 h-16 border-2 border-primary-container/20 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
          </div>
          <div className="text-center">
            <p className="font-body-md text-body-md text-on-surface-variant animate-pulse-text">
              Loading...
            </p>
            <div className="flex gap-1 justify-center mt-2">
              <div className="w-1.5 h-1.5 bg-primary-container rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-1.5 h-1.5 bg-primary-container rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1.5 h-1.5 bg-primary-container rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}