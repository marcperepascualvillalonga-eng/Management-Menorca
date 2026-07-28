import type { HeroSlide, NavigationItem } from "@/types/content";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://managementmenorca.com";

export const defaultNavigation: NavigationItem[] = [
  { label: "Artistas", href: "/artistas" },
  { label: "Sonido e iluminación", href: "/sonido-iluminacion-menorca" },
  { label: "Bodas", href: "/bodas-menorca" },
];

export const defaultHeroSlides: HeroSlide[] = [
  {
    _id: "artists",
    eyebrow: "Artistas · Booking · Menorca",
    title: "La música empieza por encontrar al artista adecuado.",
    description:
      "Descubre nuestro catálogo de artistas para bodas, conciertos, celebraciones y eventos en Menorca.",
    primaryCta: { label: "Ver artistas", href: "/artistas" },
    secondaryCta: { label: "Consultar disponibilidad", href: "/contacto" },
  },
  {
    _id: "production",
    eyebrow: "Sonido · Iluminación · Audiovisuales",
    title: "La parte técnica de tu evento, coordinada de principio a fin.",
    description:
      "Sonido, iluminación, pantallas LED, streaming y producción audiovisual para eventos en Menorca.",
    primaryCta: {
      label: "Sonido e iluminación",
      href: "/sonido-iluminacion-menorca",
    },
  },
  {
    _id: "weddings",
    eyebrow: "Bodas en Menorca",
    title: "Música, sonido y luz para todo el día.",
    description:
      "Ceremonia, aperitivo, artistas, DJ, iluminación, fotomatón y coordinación técnica para vuestra boda.",
    primaryCta: { label: "Preparar nuestra boda", href: "/bodas-menorca" },
  },
];

export const serviceLinks = [
  {
    title: "Artistas",
    description:
      "Catálogo, disponibilidad y contratación de artistas para eventos en Menorca.",
    href: "/artistas",
    index: "01",
  },
  {
    title: "Sonido e iluminación",
    description:
      "Producción técnica y audiovisual para corporativos, conciertos, celebraciones y eventos públicos.",
    href: "/sonido-iluminacion-menorca",
    index: "02",
  },
  {
    title: "Bodas",
    description:
      "Sonido, iluminación, música, artistas, DJ y servicios para acompañar toda la celebración.",
    href: "/bodas-menorca",
    index: "03",
  },
];

export const fallbackFaqs = [
  {
    question: "¿Qué tipo de artistas se pueden contratar en Menorca?",
    answer:
      "El catálogo reúne diferentes estilos y formatos. La disponibilidad se confirma siempre para la fecha y el tipo de evento.",
  },
  {
    question: "¿Incluís sonido e iluminación?",
    answer:
      "Sí. Podemos integrar sonido, iluminación y producción audiovisual en la propuesta del evento.",
  },
  {
    question: "¿Podéis cubrir técnicamente toda una boda?",
    answer:
      "Podemos plantear sonido e iluminación para ceremonia, aperitivo, banquete y fiesta, además de coordinar artistas y DJ.",
  },
  {
    question: "¿Trabajáis en toda Menorca?",
    answer:
      "La actividad está orientada a eventos en toda Menorca. La viabilidad se confirma para cada fecha y localización.",
  },
];
