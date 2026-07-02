import type { StaticImageData } from 'next/image';
import Cairo from "../img/cairo.png"
import Luxor from "../img/karnak_temple.png"
import Aswan from "../img/aswan.png"
import Cairo2 from "../img/caior2.png"
import Luxor2 from "../img/luxor2.png"
import Aswan2 from "../img/aswan2.png"
import Floka from "../img/floka.jpg"
import Desert from "../img/desert.jpg"
import aleximg from "../img/alex.jpeg"
import elmoazimg from "../img/market.jpeg"


export interface Destination {
  id: string
  slug: string
  name: string
  label: string
  image: StaticImageData
  heroImage: StaticImageData | string
  cardImage: string
  titleKey: string
  subtitleKey: string
}

export const destinations: Destination[] = [
  {
    id: 'luxor',
    slug: 'luxor',
    name: 'Luxor',
    label: "The World's Open Air Museum",
    image: Luxor,
    heroImage: Luxor2,
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbiVExxlf8k9RbXROsQfe9bYPORiAwblYR1Ms6My0blp0a4pCT-d3niKFrVYPo4Y5IoazZEzM2wIvgA49OZKTTi3dibwAP86KVdCcUQyXu2PegRrJ871aDgJOUF9dsNUrkcsjnj22CacVbWlEuqE9Zix4sPzYhC1_MG4wviNghs4rbUKJI6DV1ouvnIVxe5tjkh3oHJIRcHMpw-fe6maYLiQakWIJFjlfL-bm3-atEZfdsNLEGQ7JFmuRPslVZjOycipnymUINJ36W',
    titleKey: 'destinations.luxor.name',
    subtitleKey: 'destinations.luxor.label'
  },
  {
    id: 'cairo',
    slug: 'cairo',
    name: 'Cairo',
    label: 'Where History Meets the Future',
    image: Cairo,
    heroImage: Cairo2,
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDk8pUEe7IdSElqSsAMh7yrXJLemIZ737ydw5aYhso0eko5-UFhVzQ_y_6uJdocXuhxBYpMS6DgwO-kFBahTB47zYghdSVfKGSw2Rcw8DjXYXVmOhWQ_3j_7XsUQgltVYwGpnXd68K3f-ZRGKIx7mdwlwaC6alnzf_W-fdEd3GmWWV2lseYQb1rZmaqZYOUNp34jhu5_Orv8K4aF09_j5SxEkNuJuJ8jIEWiRFc_dYBrRK-eSkFJ_N6ALhAUYCEegUeklmyoq0Of1t4',
    titleKey: 'destinations.cairo.name',
    subtitleKey: 'destinations.cairo.label'
  },
  {
    id: 'aswan',
    slug: 'aswan',
    name: 'Aswan',
    label: 'The Nubian Gem',
    image: Aswan,
    heroImage: Aswan2,
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGpIIVl2JDG1D_VzhLdoMSKJ_5QaEkB1vxgPsAapIoXHVe2usbFYmQqRM_RSRxP53zFc1SmGeNS0Ag7BvFySCVNct1bHpAU5WJV_vjb_f_UXRaTbedVG3er_84RC3ePTJQGwxPHW1L6av9mmJ5XC5xsivnzJ0eXgyNQQwAjPB3TJ6qK3fpxnaeiFH0uxPxECJE1nluzizR40PGBpYkkKFMXIRQsN26qCw7TgBwq9ytOIYrYd_Dm6pBHpkieLo7gIURHwi8j0_kwrET',
    titleKey: 'destinations.aswan.name',
    subtitleKey: 'destinations.aswan.label'
  },
  {
    id: 'eternal-sands',
    slug: 'eternal-sands',
    name: 'Eternal Sands',
    label: 'Signature Expedition',
    image: Desert,
    heroImage: Desert,
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARPsbEYFBI62cS5s1WQnhKXWz1_DABZOZT2DbmKO1zzzXVk8jUd60zHBUblK86_PWGS1NWaSnXUkBZ-AUbEDbMeXCxnQhdhkb7vLFniY2BVGTFUPzh5hsmrdrDaKqX3sRTida-xRZNv4XQ-f0QxBmYFRpzOYg8v1EbIEa_ti_prlbkUrBqZqmxAGdaNYMFdApUjrG-xfaWEYQwT8eL7Q01LxsHsHS3FS7sprJv1CxlsCBapV1s5uf9pA',
    titleKey: 'destination.eternal-sands.title',
    subtitleKey: 'destination.eternal-sands.subtitle'
  },
  {
    id: 'elmoaz',
    slug: 'elmoaz',
    name: 'El Moaz',
    label: 'Signature Expedition',
    image: elmoazimg,
    heroImage: elmoazimg,
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARPsbEYFBI62cS5s1WQnhKXWz1_DABZOZT2DbmKO1zzzXVk8jUd60zHBUblK86_PWGS1NWaSnXUkBZ-AUbEDbMeXCxnQhdhkb7vLFniY2BVGTFUPzh5hsmrdrDaKqX3sRTida-xRZNv4XQ-f0QxBmYFRpzOYg8v1EbIEa_ti_prlbkUrBqZqmxAGdaNYMFdApUjrG-xfaWEYQwT8eL7Q01LxsHsHS3FS7sprJv1CxlsCBapV1s5uf9pA',
    titleKey: 'destination.elmoaz.title',
    subtitleKey: 'destination.elmoaz.subtitle'
  },
  {
    id: 'alexandria',
    slug: 'alexandria',
    name: 'Alexandria',
    label: 'Signature Expedition',
    image: aleximg,
    heroImage: aleximg,
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARPsbEYFBI62cS5s1WQnhKXWz1_DABZOZT2DbmKO1zzzXVk8jUd60zHBUblK86_PWGS1NWaSnXUkBZ-AUbEDbMeXCxnQhdhkb7vLFniY2BVGTFUPzh5hsmrdrDaKqX3sRTida-xRZNv4XQ-f0QxBmYFRpzOYg8v1EbIEa_ti_prlbkUrBqZqmxAGdaNYMFdApUjrG-xfaWEYQwT8eL7Q01LxsHsHS3FS7sprJv1CxlsCBapV1s5uf9pA',
    titleKey: 'destination.alexandria.title',
    subtitleKey: 'destination.alexandria.subtitle'
  }
]

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find(d => d.slug === slug)
}