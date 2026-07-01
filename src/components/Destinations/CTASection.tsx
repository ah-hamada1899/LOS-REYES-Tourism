import { Gem, Map, ShieldCheck } from "lucide-react"

export default function CTASection() {
  const features = [
    {
      icon: <Map size={32} />,
      title: 'Bespoke Itineraries',
      description: 'Tailored precisely to your dates and desires.'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Expert Concierge',
      description: '24/7 support throughout your entire journey.'
    },
    {
      icon: <Gem size={32} />,
      title: 'Luxury Stays',
      description: 'The finest palaces and boutique desert escapes.'
    }
  ]

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-inverse-surface text-surface">
      <div className="max-w-container-max mx-auto text-center">

        <h2 className="font-headline-lg text-headline-lg mb-6">Travel Your Way</h2>
        <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl mx-auto mb-12">
          Every traveler is unique. Whether you seek the thrill of a Red Sea dive or the quiet contemplation of a desert sunset, we craft experiences that resonate with your spirit.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-surface/5 p-8 border border-outline-variant/20 hover:border-primary-container transition-colors w-full md:w-72"
            >
              <span className="material-symbols-outlined text-primary-container mb-4 text-3xl">
                {feature.icon}
              </span>
              <h4 className="font-label-lg text-label-lg uppercase mb-2">{feature.title}</h4>
              <p className="text-label-sm font-label-sm text-surface-variant">{feature.description}</p>
            </div>
          ))}
        </div>
        <button className="mt-16 bg-primary-container text-on-primary-container px-12 py-5 font-label-lg text-label-lg uppercase tracking-widest hover:scale-105 transition-all shadow-lg">
          Customize My Trip
        </button>
      </div>
    </section>
  )
}