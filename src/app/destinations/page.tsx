import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DestinationsGrid from '../../components/Destinations/DestinationsGrid'

export const metadata: Metadata = {
  title: 'Destinations | Modern Heritage Egypt',
  description: 'Explore our curated selection of Egypt\'s most prestigious landmarks and experiences.',
}

export default function DestinationsPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-16 px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto text-center">
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary mb-6">
            Our Destinations
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Discover Egypt's most iconic locations through the lens of modern luxury.
          </p>
        </div>
      </section>
      <DestinationsGrid />
      <Footer />
    </main>
  )
}