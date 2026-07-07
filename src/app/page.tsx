import DestinationsGrid from "@/components/Destinations/DestinationsGrid";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Destinations/HeroSection";
import Navbar from "@/components/Navbar";
import NileSection from "@/components/Destinations/NileSection";
import CTASection from "@/components/Destinations/CTASection";
import PageTransition from '@/components/PageTransition'



export default function Home() {
  return (
    <PageTransition>
      <main>
        <Navbar />
        <HeroSection />
        <NileSection />
        <DestinationsGrid />
        <CTASection />
        <Footer />
      </main>
    </PageTransition>
  )
}