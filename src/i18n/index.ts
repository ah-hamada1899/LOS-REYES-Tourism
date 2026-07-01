import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Language resources
const resources = {
  en: {
    translation: {
      // Navigation
      'nav.destinations': 'Destinations',
      'nav.experiences': 'Experiences',
      'nav.plan': 'Plan',
      'nav.about': 'About',
      'nav.inquire': 'Inquire Now',
      'nav.brand': 'MODERN HERITAGE',
      
      // Hero Section
      'hero.title': 'Timeless Discovery',
      'hero.subtitle': 'Embark on a curated journey through 5,000 years of majesty. From the silent sentinels of Giza to the vibrant pulse of the modern Nile, experience Egypt as it was meant to be seen.',
      'hero.cta': 'Begin Your Odyssey',
      
      // Nile Section
      'nile.label': 'The Lifeblood of History',
      'nile.title': 'The Eternal Nile',
      'nile.p1': 'For millennia, the Nile has been more than just a river; it is the rhythmic pulse of a civilization that refused to be forgotten. To sail its waters is to witness the unfolding of time itself.',
      'nile.p2': 'Our private expeditions offer an intimate perspective of the river\'s majesty, away from the crowds, where the only sound is the gentle lapping of water against the hull of your private dahabiya.',
      'nile.cta': 'Explore River Journeys',
      
      // Destinations Section
      'destinations.title': 'Featured Destinations',
      'destinations.subtitle': 'A curated selection of Egypt\'s most prestigious landmarks, each offering a unique window into the past.',
      'destinations.luxor.label': 'The World\'s Open Air Museum',
      'destinations.luxor.name': 'Luxor',
      'destinations.cairo.label': 'Where History Meets the Future',
      'destinations.cairo.name': 'Cairo',
      'destinations.aswan.label': 'The Nubian Gem',
      'destinations.aswan.name': 'Aswan',
      
      // CTA Section
      'cta.title': 'Travel Your Way',
      'cta.subtitle': 'Every traveler is unique. Whether you seek the thrill of a Red Sea dive or the quiet contemplation of a desert sunset, we craft experiences that resonate with your spirit.',
      'cta.feature1.title': 'Bespoke Itineraries',
      'cta.feature1.desc': 'Tailored precisely to your dates and desires.',
      'cta.feature2.title': 'Expert Concierge',
      'cta.feature2.desc': '24/7 support throughout your entire journey.',
      'cta.feature3.title': 'Luxury Stays',
      'cta.feature3.desc': 'The finest palaces and boutique desert escapes.',
      'cta.button': 'Customize My Trip',
      
      // Footer
      'footer.brand': 'MODERN HERITAGE',
      'footer.desc': 'Crafted for the timeless discovery of Egypt. Redefining luxury travel through the lens of ancient majesty.',
      'footer.experiences': 'Experiences',
      'footer.experiences.cultural': 'Cultural Heritage',
      'footer.experiences.sustainability': 'Sustainability',
      'footer.experiences.nile': 'Nile Cruises',
      'footer.experiences.redsea': 'Red Sea Diving',
      'footer.company': 'Company',
      'footer.company.about': 'About Us',
      'footer.company.inquiry': 'Inquiry',
      'footer.company.newsletter': 'Newsletter',
      'footer.follow': 'Follow Us',
      'footer.copyright': '© 2024 Modern Heritage. All rights reserved. Crafted for the Timeless Discovery of Egypt.',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service',
      
      // Experiences Page
      'experiences.hero.label': 'Unveiling The Contemporary',
      'experiences.hero.title': 'Modern Experiences in an Ancient Land',
      'experiences.nile.label': 'Nile Odysseys',
      'experiences.nile.title': 'Dahabiya: The Art of Slow Sailing',
      'experiences.nile.desc': 'Experience the river of life as the aristocrats once did, reimagined for the modern connoisseur. Our private dahabiyas offer a tranquil sanctuary, blending bespoke Egyptian craftsmanship with ultra-modern amenities.',
      'experiences.nile.charters': 'Bespoke Private Charters',
      'experiences.nile.dining': 'Farm-to-Table Deck Dining',
      'experiences.redsea.label': 'Red Sea Depths',
      'experiences.redsea.title': 'Turquoise Immersion',
      'experiences.redsea.desc': 'From the vibrant reefs of Sharm El-Sheikh to the pristine wrecks of Hurghada, discover a world of silent majesty beneath the waves.',
      'experiences.redsea.ras': 'Ras Mohammed',
      'experiences.redsea.ras.desc': 'Explore the vertical walls and shark-rich waters of the world\'s most prestigious marine park.',
      'experiences.redsea.ras.cta': 'Explore Sites',
      'experiences.redsea.thistle': 'SS Thistlegorm',
      'experiences.redsea.thistle.desc': 'Dive into history at the world\'s most famous wreck, a submerged museum of the 20th century.',
      'experiences.redsea.thistle.cta': 'Book Expedition',
      'experiences.redsea.marsa': 'Marsa Alam',
      'experiences.redsea.marsa.desc': 'Discover the untamed south, home to rare dugongs and untouched coral gardens.',
      'experiences.redsea.marsa.cta': 'Discover More',
      'experiences.cairo.label': 'Cairo After Dark',
      'experiences.cairo.title': 'Modern Gastronomy & Nightlife',
      'experiences.cairo.desc': 'When the sun sets behind the Giza plateau, the capital awakens. Cairo\'s modern heartbeat is found in its sophisticated rooftop lounges and experimental kitchens, where traditional flavors are distilled into contemporary masterpieces.',
      'experiences.cairo.lounges': 'Skyline Lounges',
      'experiences.cairo.dining': 'Avant-Garde Dining',
      'experiences.cairo.jazz': 'Boutique Jazz Bars',
      'experiences.cta.title': 'Begin Your Timeless Journey',
      'experiences.cta.desc': 'Subscribe to our curated newsletter for exclusive access to new destinations and seasonal modern heritage experiences.',
      'experiences.cta.button': 'Subscribe',
    }
  },
  es: {
    translation: {
      // Navigation
      'nav.destinations': 'Destinos',
      'nav.experiences': 'Experiencias',
      'nav.plan': 'Planificar',
      'nav.about': 'Sobre Nosotros',
      'nav.inquire': 'Consultar Ahora',
      'nav.brand': 'HERENCIA MODERNA',
      
      // Hero Section
      'hero.title': 'Descubrimiento Atemporal',
      'hero.subtitle': 'Embárquese en un viaje curado a través de 5,000 años de majestuosidad. Desde los centinelas silenciosos de Giza hasta el pulso vibrante del Nilo moderno, experimente Egipto como debe ser visto.',
      'hero.cta': 'Comience Su Odisea',
      
      // Nile Section
      'nile.label': 'La Sangre de la Historia',
      'nile.title': 'El Nilo Eterno',
      'nile.p1': 'Durante milenios, el Nilo ha sido más que un río; es el pulso rítmico de una civilización que se negó a ser olvidada. Navegar por sus aguas es presenciar el desarrollo del tiempo mismo.',
      'nile.p2': 'Nuestras expediciones privadas ofrecen una perspectiva íntima de la majestuosidad del río, lejos de las multitudes, donde el único sonido es el suave chapoteo del agua contra el casco de su dahabiya privada.',
      'nile.cta': 'Explorar Viajes Fluviales',
      
      // Destinations Section
      'destinations.title': 'Destinos Destacados',
      'destinations.subtitle': 'Una selección curada de los monumentos más prestigiosos de Egipto, cada uno ofreciendo una ventana única al pasado.',
      'destinations.luxor.label': 'El Museo al Aire Libre del Mundo',
      'destinations.luxor.name': 'Luxor',
      'destinations.cairo.label': 'Donde la Historia se Encuentra con el Futuro',
      'destinations.cairo.name': 'El Cairo',
      'destinations.aswan.label': 'La Joya Nubia',
      'destinations.aswan.name': 'Asuán',
      
      // CTA Section
      'cta.title': 'Viaje a Su Manera',
      'cta.subtitle': 'Cada viajero es único. Ya sea que busque la emoción de un buceo en el Mar Rojo o la contemplación tranquila de un atardecer en el desierto, creamos experiencias que resuenan con su espíritu.',
      'cta.feature1.title': 'Itinerarios Personalizados',
      'cta.feature1.desc': 'Adaptados precisamente a sus fechas y deseos.',
      'cta.feature2.title': 'Conserje Experto',
      'cta.feature2.desc': 'Soporte 24/7 durante todo su viaje.',
      'cta.feature3.title': 'Estancias de Lujo',
      'cta.feature3.desc': 'Los mejores palacios y escapadas boutique en el desierto.',
      'cta.button': 'Personalizar Mi Viaje',
      
      // Footer
      'footer.brand': 'HERENCIA MODERNA',
      'footer.desc': 'Creado para el descubrimiento atemporal de Egipto. Redefiniendo el viaje de lujo a través de la lente de la majestuosidad antigua.',
      'footer.experiences': 'Experiencias',
      'footer.experiences.cultural': 'Patrimonio Cultural',
      'footer.experiences.sustainability': 'Sostenibilidad',
      'footer.experiences.nile': 'Cruceros por el Nilo',
      'footer.experiences.redsea': 'Buceo en el Mar Rojo',
      'footer.company': 'Compañía',
      'footer.company.about': 'Sobre Nosotros',
      'footer.company.inquiry': 'Consulta',
      'footer.company.newsletter': 'Boletín',
      'footer.follow': 'Síguenos',
      'footer.copyright': '© 2024 Herencia Moderna. Todos los derechos reservados. Creado para el Descubrimiento Atemporal de Egipto.',
      'footer.privacy': 'Política de Privacidad',
      'footer.terms': 'Términos de Servicio',
      
      // Experiences Page
      'experiences.hero.label': 'Descubriendo lo Contemporáneo',
      'experiences.hero.title': 'Experiencias Modernas en una Tierra Antigua',
      'experiences.nile.label': 'Odiseas del Nilo',
      'experiences.nile.title': 'Dahabiya: El Arte de Navegar Lentamente',
      'experiences.nile.desc': 'Experimente el río de la vida como lo hicieron los aristócratas, reinventado para el conocedor moderno. Nuestras dahabiyas privadas ofrecen un santuario tranquilo, combinando la artesanía egipcia personalizada con comodidades ultra-modernas.',
      'experiences.nile.charters': 'Charters Privados Personalizados',
      'experiences.nile.dining': 'Cena en Cubierta de la Granja a la Mesa',
      'experiences.redsea.label': 'Profundidades del Mar Rojo',
      'experiences.redsea.title': 'Inmersión Turquesa',
      'experiences.redsea.desc': 'Desde los vibrantes arrecifes de Sharm El-Sheikh hasta los naufragios prístinos de Hurghada, descubra un mundo de majestuosidad silenciosa bajo las olas.',
      'experiences.redsea.ras': 'Ras Mohammed',
      'experiences.redsea.ras.desc': 'Explore las paredes verticales y las aguas ricas en tiburones del parque marino más prestigioso del mundo.',
      'experiences.redsea.ras.cta': 'Explorar Sitios',
      'experiences.redsea.thistle': 'SS Thistlegorm',
      'experiences.redsea.thistle.desc': 'Bucee en la historia en el naufragio más famoso del mundo, un museo sumergido del siglo XX.',
      'experiences.redsea.thistle.cta': 'Reservar Expedición',
      'experiences.redsea.marsa': 'Marsa Alam',
      'experiences.redsea.marsa.desc': 'Descubra el sur indómito, hogar de raros dugongos y jardines de coral intactos.',
      'experiences.redsea.marsa.cta': 'Descubrir Más',
      'experiences.cairo.label': 'El Cairo Después del Anochecer',
      'experiences.cairo.title': 'Gastronomía y Vida Nocturna Moderna',
      'experiences.cairo.desc': 'Cuando el sol se pone detrás de la meseta de Giza, la capital despierta. El latido moderno de El Cairo se encuentra en sus sofisticados lounges en azoteas y cocinas experimentales, donde los sabores tradicionales se destilan en obras maestras contemporáneas.',
      'experiences.cairo.lounges': 'Lounges en el Horizonte',
      'experiences.cairo.dining': 'Gastronomía de Vanguardia',
      'experiences.cairo.jazz': 'Bares de Jazz Boutique',
      'experiences.cta.title': 'Comience Su Viaje Atemporal',
      'experiences.cta.desc': 'Suscríbase a nuestro boletín curado para acceso exclusivo a nuevos destinos y experiencias de herencia moderna de temporada.',
      'experiences.cta.button': 'Suscribirse',
    }
  }
}

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n