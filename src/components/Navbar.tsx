'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import LanguageDropdown from './LanguageDropdown'
import Image from 'next/image'
import logo from '../img/newlogoo-removebg-preview1.png'


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslation()

  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 md:py-1 max-w-container-max mx-auto">
        <Link href="/" className="text-label-lg font-headline-lg tracking-widest text-primary">
          <Image width={36} height={36} src={logo} alt='name' className='inline-block ' />
          LOS REYES
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/"
            className={`text-label-lg transition-colors duration-300 ${isActive('/')
              ? 'text-primary border-b-2 border-primary-container pb-1 font-bold'
              : 'text-on-surface-variant hover:text-primary'
              }`}
          >
            {t('nav.destinations')}
          </Link>
          <Link
            href="/experiences"
            className={`text-label-lg transition-colors duration-300 ${isActive('/experiences')
              ? 'text-primary border-b-2 border-primary-container pb-1 font-bold'
              : 'text-on-surface-variant hover:text-primary'
              }`}
          >
            {t('nav.experiences')}
          </Link>
          <Link
            href="/plan"
            className={`text-label-lg transition-colors duration-300 ${isActive('/plan')
              ? 'text-primary border-b-2 border-primary-container pb-1 font-bold'
              : 'text-on-surface-variant hover:text-primary'
              }`}
          >
            {t('nav.plan')}
          </Link>
          <Link
            href="/about"
            className={`text-label-lg transition-colors duration-300 ${isActive('/about')
              ? 'text-primary border-b-2 border-primary-container pb-1 font-bold'
              : 'text-on-surface-variant hover:text-primary'
              }`}
          >
            {t('nav.about')}
          </Link>
        </div>

        <LanguageDropdown />

        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-primary-container text-on-primary-container px-6 py-2 text-label-lg uppercase tracking-widest hover:scale-105 transition-transform duration-200">
            {t('nav.inquire')}
          </button>
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-surface border-b border-outline-variant/30 shadow-lg md:hidden">
            <div className="flex flex-col gap-4 p-6">
              <Link
                href="/"
                className="text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link
                href="/experiences"
                className="text-label-lg text-primary border-b-2 border-primary-container pb-1 font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Experiences
              </Link>
              <Link
                href="/plan"
                className="text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Plan
              </Link>
              <Link
                href="/about"
                className="text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <button className="bg-primary-container text-on-primary-container px-6 py-2 text-label-lg uppercase tracking-widest hover:scale-105 transition-transform duration-200">
                Inquire Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}