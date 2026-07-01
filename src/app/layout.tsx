import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata: Metadata = {
  title: 'Modern Heritage - Timeless Discovery of Egypt',
  description: 'Embark on a curated journey through 5,000 years of majesty. Experience Egypt as it was meant to be seen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>

        <LanguageProvider>
          {children}
        </LanguageProvider>

      </body>
    </html>
  )
}