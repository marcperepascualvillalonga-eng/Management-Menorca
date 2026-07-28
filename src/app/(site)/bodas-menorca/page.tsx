import { ServiceLanding } from "@/components/sections/service-landing";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Sonido, iluminación y artistas para bodas en Menorca",
  description:
    "Sonido e iluminación para toda la boda, artistas, DJ, música ambiente, fotomatón y coordinación técnica en Menorca.",
  path: "/bodas-menorca",
});

export default function WeddingsPage() {
  return (
    <ServiceLanding
      eyebrow="Bodas en Menorca"
      title="Sonido, iluminación y música para toda vuestra boda."
      intro="Un único equipo para coordinar ceremonia, aperitivo, banquete y fiesta: sonido, iluminación, artistas, DJ, música ambiente, fotomatón y apoyo técnico."
      path="/bodas-menorca"
      image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=86"
      imageAlt="Celebración de boda al aire libre"
      problemTitle="La boda empieza mucho antes de la pista de baile."
      problemBody={[
        "La ceremonia necesita que cada palabra se escuche. El aperitivo pide ambiente. Los discursos, microfonía clara. La fiesta, sonido, luz y energía.",
        "Diseñamos la cobertura técnica de toda la jornada y la combinamos con artistas, DJ y servicios complementarios para simplificar la coordinación.",
      ]}
      benefits={[
        {
          title: "Sonido para ceremonia",
          description:
            "Microfonía para oficiantes y discursos, reproducción musical y apoyo a artistas.",
        },
        {
          title: "Aperitivo y banquete",
          description:
            "Música ambiente, sonido distribuido y actuaciones en directo.",
        },
        {
          title: "Artistas",
          description:
            "Solistas, acústicos, grupos y otros formatos según estilo y disponibilidad.",
        },
        {
          title: "DJ y fiesta",
          description:
            "Sonido e iluminación para la pista de baile y el cierre de la celebración.",
        },
        {
          title: "Iluminación ambiental",
          description:
            "Luz decorativa y funcional para acompañar cada espacio y momento.",
        },
        {
          title: "Fotomatón",
          description:
            "Una experiencia participativa para invitados, integrada en la planificación.",
        },
        {
          title: "Momentos especiales",
          description:
            "Microfonía, reproducción de contenidos y coordinación con la planificación.",
        },
        {
          title: "Coordinación completa",
          description:
            "Un único interlocutor para artistas, técnica, tiempos y espacios.",
        },
      ]}
      process={[
        "Repasamos la boda completa: espacios, horarios, ceremonia, aperitivo, banquete y fiesta.",
        "Definimos necesidades de sonido, iluminación, música, artistas y servicios complementarios.",
        "Coordinamos la propuesta con finca, catering, wedding planner y demás proveedores.",
        "Realizamos pruebas y ejecutamos cada cambio de espacio y momento según la planificación.",
      ]}
      faqs={[
        {
          question: "¿Podéis cubrir el sonido de toda la boda?",
          answer:
            "Sí. Podemos plantear la cobertura desde la ceremonia hasta la fiesta, incluyendo microfonía, música ambiente, artistas, DJ e iluminación.",
        },
        {
          question: "¿Hay grupos y solistas para diferentes estilos?",
          answer:
            "El catálogo se organiza por categorías y formatos. También podemos orientar la búsqueda según el ambiente que queráis.",
        },
        {
          question: "¿Ofrecéis fotomatón?",
          answer:
            "El fotomatón puede incorporarse como servicio complementario dentro de la propuesta, sujeto a disponibilidad y condiciones del espacio.",
        },
        {
          question: "¿Con cuánta antelación conviene reservar?",
          answer:
            "En temporada alta conviene consultar cuanto antes. La disponibilidad siempre se confirma para una fecha concreta.",
        },
      ]}
      formType="wedding"
      ctaLabel="Contarnos cómo será vuestra boda"
    />
  );
}
