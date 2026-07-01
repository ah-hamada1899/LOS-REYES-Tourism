export default function ExperiencesHero() {
  return (
    <section className="relative h-[819px] flex items-end overflow-hidden pt-16">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Luxury sailing vessel on the Nile during golden sunset"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8sU9MQ22dsXS1YGz_XoJqCgU1ZyE0qfuVFyCcG0-b8ipbKA3rDqT5q77QyzBf_eoJFY3kfdlUAemUQh9OA4Iz05Jealz3F4ETfY_zHJV3hgw-rykHYX8bmDgEVH9DPWoRYvW8DTIXy0gQgyNp0V2F5yd9JKZJIO5lUqz0nMYEaFbaVSK-nTm94SZLf3NS_2pyTsohvOwFNzbJduVmqom3L2ZDFYNL4w6MrwCBPUsDkXJcW4WB4ofAx1Cv057pfDotaJAdUb56ZoRY"
      />
      <div className="hero-gradient absolute inset-0"></div>
      <div className="relative z-10 px-margin-mobile md:px-margin-desktop pb-24 max-w-container-max mx-auto w-full">
        <span className="font-label-lg text-label-lg text-primary-container uppercase tracking-[0.2em] mb-4 block">
          Unveiling The Contemporary
        </span>
        <h1 className="text-display-lg-mobile md:text-display-lg text-surface-container-lowest max-w-3xl">
          Modern Experiences in an Ancient Land
        </h1>
      </div>
    </section>
  )
}