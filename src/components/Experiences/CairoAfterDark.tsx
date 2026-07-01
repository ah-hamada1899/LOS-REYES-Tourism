const experiences = [
  {
    title: 'Skyline Lounges',
    icon: 'nightlight'
  },
  {
    title: 'Avant-Garde Dining',
    icon: 'restaurant'
  },
  {
    title: 'Boutique Jazz Bars',
    icon: 'music_note'
  }
]

export default function CairoAfterDark() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row gap-gutter items-center">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="relative">
            <img
              className="w-full aspect-square object-cover"
              alt="Modern rooftop restaurant in Cairo with Pyramids view"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSbfn7d_AT9UGsGPhtNeuCT5TSmMe3WGN6ApEz8GJ-xZmbWkAIOEZdgWfAbLF9ys245gYnBN4JMcDqUw9Lfyzws1BGPVcT807OjgOZru6S_Rqybs718ugYJOL7wsjh62R0O9U9XMQ8oZM8if8VR3CBYf6vIj_caDW7SluF_XXRd7eTaPgsgJgdNKeM9JIIub1hh_8qEcrZZdppO0FOsqcHm9_OW8rwO7d2JM8rGWZVgkrGoO4JfEjiVnFd-jcjlVcFJM_Tm-710pDH"
            />
            <div className="absolute -bottom-10 -right-10 bg-secondary p-8 hidden lg:block">
              <p className="text-headline-md text-surface uppercase italic">
                Taste the <br />Future
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2 pl-0 md:pl-12">
          <span className="font-label-lg text-label-lg text-primary uppercase tracking-widest block mb-4">
            Cairo After Dark
          </span>
          <h2 className="text-headline-lg mb-8">Modern Gastronomy &amp; Nightlife</h2>
          <p className="text-body-lg text-on-surface-variant mb-8">
            When the sun sets behind the Giza plateau, the capital awakens. Cairo&apos;s modern heartbeat is found in its sophisticated rooftop lounges and experimental kitchens, where traditional flavors are distilled into contemporary masterpieces.
          </p>
          <div className="space-y-6">
            {experiences.map((item) => (
              <div key={item.title} className="border-b border-outline-variant pb-4 group cursor-pointer">
                <div className="flex justify-between items-center">
                  <h4 className="text-[24px] font-headline-md group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <span className="material-symbols-outlined text-primary-container">{item.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}