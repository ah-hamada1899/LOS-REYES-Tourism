import CairoAfterDark from "@/components/Experiences/CairoAfterDark";
import ExperiencesCTA from "@/components/Experiences/ExperiencesCTA";
import ExperiencesHero from "@/components/Experiences/ExperiencesHero";
import NileOdysseys from "@/components/Experiences/NileOdysseys";
import RedSeaDepths from "@/components/Experiences/RedSeaDepths";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function ExperiencesPage() {
  return (
    <main>
      <Navbar />
      <ExperiencesHero />
      <NileOdysseys />
      <RedSeaDepths />
      <CairoAfterDark />
      <ExperiencesCTA />
      <Footer />
    </main>
  )
}