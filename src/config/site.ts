import type { HeroSlide, NavigationItem } from "@/types/content";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://managementmenorca.com";

export const defaultNavigation: NavigationItem[] = [
  { label: "Artistas", href: "/artistas" },
  { label: "Servicios", href: "/servicios" },
  { label: "Hoteles", href: "/showbusiness-hoteles-menorca" },
  { label: "Bodas", href: "/bodas-menorca" },
  { label: "Sonido e iluminación", href: "/sonido-iluminacion-menorca" },
  { label: "Agenda", href: "/agenda" },
  { label: "Nosotros", href: "/nosotros" },
];

export const defaultHeroSlides: HeroSlide[] = [
  {
    _id: "artists",
    eyebrow: "Artistas · Booking · Producción",
    title: "Artistas para momentos que se recuerdan.",
    description:
      "Descubre propuestas musicales con personalidad para hoteles, bodas y eventos en Menorca.",
    primaryCta: { label: "Ver artistas", href: "/artistas" },
    secondaryCta: { label: "Solicitar propuesta", href: "/contacto" },
  },
  {
    _id: "production",
    eyebrow: "Sonido e iluminación",
    title: "Producción técnica para que todo suene y se vea como debe.",
    description:
      "Coordinamos sonido, iluminación, montaje y asistencia técnica con un único interlocutor.",
    primaryCta: {
      label: "Descubrir el servicio",
      href: "/sonido-iluminacion-menorca",
    },
  },
  {
    _id: "hotels",
    eyebrow: "Showbusiness hotelero",
    title: "Programación musical para hoteles con identidad.",
    description:
      "Diseñamos programaciones recurrentes, sunsets y experiencias musicales pensadas para cada espacio.",
    primaryCta: {
      label: "Showbusiness para hoteles",
      href: "/showbusiness-hoteles-menorca",
    },
  },
  {
    _id: "weddings",
    eyebrow: "Bodas en Menorca",
    title: "La música de uno de los días más importantes.",
    description:
      "Ceremonia, aperitivo, directo, DJ y producción coordinados con calma y atención al detalle.",
    primaryCta: { label: "Música para bodas", href: "/bodas-menorca" },
  },
];

export const serviceLinks = [
  {
    title: "Artistas y booking",
    description:
      "Encuentra el formato artístico adecuado y centraliza disponibilidad, contratación y coordinación.",
    href: "/artistas-menorca",
    index: "01",
  },
  {
    title: "Showbusiness para hoteles",
    description:
      "Programación musical recurrente para hoteles y agroturismos, con gestión operativa completa.",
    href: "/showbusiness-hoteles-menorca",
    index: "02",
  },
  {
    title: "Sonido e iluminación",
    description:
      "Servicio técnico integral para conciertos, bodas, hoteles y eventos corporativos.",
    href: "/sonido-iluminacion-menorca",
    index: "03",
  },
  {
    title: "Bodas y celebraciones",
    description:
      "Música y producción adaptadas a cada momento, desde la ceremonia hasta la fiesta.",
    href: "/bodas-menorca",
    index: "04",
  },
  {
    title: "Eventos corporativos",
    description:
      "Artistas, DJ y producción para experiencias de marca, convenciones y encuentros de empresa.",
    href: "/eventos-corporativos-menorca",
    index: "05",
  },
  {
    title: "Gestión laboral",
    description:
      "Derivación clara para altas, bajas, contratos y documentación de actuaciones puntuales.",
    href: "/gestion-laboral-artistas",
    index: "06",
  },
];

export const fallbackFaqs = [
  {
    question: "¿Qué tipo de artistas se pueden contratar en Menorca?",
    answer:
      "Trabajamos con diferentes formatos y estilos. Cuéntanos el tipo de evento, el espacio y la atmósfera que buscas para orientarte con propuestas adecuadas.",
  },
  {
    question: "¿Podéis organizar la programación musical de un hotel?",
    answer:
      "Sí. Podemos plantear una programación recurrente, coordinar artistas, sustituciones y necesidades técnicas desde un único punto de contacto.",
  },
  {
    question: "¿Incluís sonido e iluminación?",
    answer:
      "Podemos integrar el servicio de sonido e iluminación en la propuesta y coordinarlo con artistas, espacio y horarios.",
  },
  {
    question: "¿Trabajáis en toda Menorca?",
    answer:
      "La actividad está orientada a eventos y espacios de toda Menorca. La viabilidad concreta se confirma para cada fecha y localización.",
  },
  {
    question: "¿Con cuánta antelación debe reservarse?",
    answer:
      "Cuanto antes mejor, especialmente en temporada alta. También podemos estudiar necesidades con menos margen según disponibilidad.",
  },
];
