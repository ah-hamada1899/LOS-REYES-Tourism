export default function ExperiencesCTA() {
  return (
    <section className="bg-primary text-on-primary py-24 text-center">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <h2 className="text-display-lg-mobile md:text-display-lg mb-8">Begin Your Timeless Journey</h2>
        <p className="text-body-lg mb-12 max-w-xl mx-auto opacity-90">
          Subscribe to our curated newsletter for exclusive access to new destinations and seasonal modern heritage experiences.
        </p>
        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
          <input
            className="flex-1 bg-transparent border-b-2 border-on-primary/30 py-3 px-2 focus:border-primary-container outline-none text-body-md placeholder:text-on-primary/50 text-on-primary transition-colors"
            placeholder="Your email address"
            type="email"
          />
          <button className="bg-primary-container text-on-primary-container px-10 py-3 text-label-lg font-bold uppercase tracking-widest hover:bg-surface-container-lowest transition-all">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}