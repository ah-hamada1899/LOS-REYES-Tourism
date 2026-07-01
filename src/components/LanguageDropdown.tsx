'use client'

import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function LanguageDropdown() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'es', label: 'Español', flag: '🇪🇸' }
  ]

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-label-sm font-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300 border border-outline-variant rounded-lg hover:border-primary-container"
        aria-label="Select language"
      >
        <span>{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.label}</span>
        <span className="material-symbols-outlined text-sm">
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-section-gap bg-surface border border-outline-variant rounded-lg shadow-lg overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as 'en' | 'es')
                setIsOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-2 py-3 text-label-sm font-label-sm transition-colors duration-200 ${
                language === lang.code
                  ? 'bg-primary-container text-on-primary-container'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
              {/* {language === lang.code && (
                <span className="material-symbols-outlined text-sm ml-auto">check</span>
              )} */}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}