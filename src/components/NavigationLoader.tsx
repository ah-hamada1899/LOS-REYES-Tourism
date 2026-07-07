'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import NavigationLoading from './NavigationLoading'

export default function NavigationLoader() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isNavigating, setIsNavigating] = useState(false)
  const [loadingTimeout, setLoadingTimeout] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Show loading immediately for slow navigation
    const timer = setTimeout(() => {
      setIsNavigating(true)
    }, 100) // Show after 100ms to avoid flicker

    // Hide loading after navigation is complete
    const hideTimer = setTimeout(() => {
      setIsNavigating(false)
    }, 500) // Minimum loading time for UX

    // Clear timers on unmount or when navigation changes
    return () => {
      clearTimeout(timer)
      clearTimeout(hideTimer)
      if (loadingTimeout) clearTimeout(loadingTimeout)
    }
  }, [pathname, searchParams])

  return <NavigationLoading isLoading={isNavigating} />
}