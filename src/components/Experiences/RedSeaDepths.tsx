const divingExperiences = [
  {
    title: 'Ras Mohammed',
    description: "Explore the vertical walls and shark-rich waters of the world's most prestigious marine park.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjrqWK6g_2JrD5htFHzp70OysfHPHkivL9XRUm9l6KQx03ws7zoNFTfbSEr50RCsNcu0QaW7fIiBKzKWw1GT-CMVC4JbGiq23PjUfaoBDhxKvXGTVvr8nO8KFymQxYuqUGZGD2PHCq5zEbyMAyv_XUtfjnlo_Gie2ot01xNtjrR6RjvwEINQb4snkq4VcY8TkPnuaESPN7A3a4xPK-Wp-Jy3FUoopXpqkmFNSWKolrlin6XEEC9DF5tU0ru1SlwQm0fG9c0PhVjCOZ',
    link: '#',
    linkText: 'Explore Sites'
  },
  {
    title: 'SS Thistlegorm',
    description: "Dive into history at the world's most famous wreck, a submerged museum of the 20th century.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv0PRS9EKQxtgdRADlqDgKxSjl_hZGIwX9TMs_rdAPoZyV0LlNF5IH4CN52U1W7H5i5AyryV9G-fJFY0BzXqvoDflO3tGF2dpnX80dQHe9Lj5Qx77JaagrFpHXreZR1JIhsENs2mFO6ji0ZDSltjKaU_Pfv5RLug09Wh2CkocSZzhzwZ2kVzenWzneMVqatGENRYaRyUILhp6lnOScoK8Zhzz7nySwtmm4ZJoOg8usFnoqwTIa_AQUqXe14U4GrngX-JnAjFq53ywH',
    link: '#',
    linkText: 'Book Expedition'
  },
  {
    title: 'Marsa Alam',
    description: "Discover the untamed south, home to rare dugongs and untouched coral gardens.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6rGneWdO-O0qAsA_qL5oasPVHFJsM4SOtNALy2auH8GZTfvZ953FPo2gi6ptZ3lhHyvtdwE1y5M1N0-Evx426kAShZQdK47TzTNtXefANemvszCNdv8wTTkEgNAWWPIk3L1sYx9s4f0ENDVOisDxmbb7MbrYDw3U7w1YHwdlv8JsPHAi8UNfowBKDuKcaFRuDj9RZhWO0Vil1XGCT7fR7bhHiq4E4zgzBxBxWEdFYH5J5q31UBkdBby5Qk1qS8zdyQmaDQrtPYnKo',
    link: '#',
    linkText: 'Discover More'
  }
]

export default function RedSeaDepths() {
  return (
    <section className="bg-surface-container py-section-gap relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <svg className="w-full h-full text-primary-container fill-current" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" fill="none" r="30" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="font-label-lg text-label-lg text-secondary uppercase tracking-widest block mb-4">
            Red Sea Depths
          </span>
          <h2 className="text-headline-lg mb-4">Turquoise Immersion</h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            From the vibrant reefs of Sharm El-Sheikh to the pristine wrecks of Hurghada, discover a world of silent majesty beneath the waves.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {divingExperiences.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden bg-surface-container-lowest border-t-4 border-secondary shadow-md hover:shadow-2xl transition-all duration-500 scale-100 hover:scale-[1.02]"
            >
              <img
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                alt={item.title}
                src={item.image}
              />
              <div className="p-8">
                <h3 className="text-headline-md mb-4">{item.title}</h3>
                <p className="text-body-md text-on-surface-variant mb-6">{item.description}</p>
                <a
                  className="text-label-lg text-secondary group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-2"
                  href={item.link}
                >
                  {item.linkText} <span className="material-symbols-outlined">trending_flat</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}