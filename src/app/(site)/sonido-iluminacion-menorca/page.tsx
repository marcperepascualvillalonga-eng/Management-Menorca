import { ServiceLanding } from "@/components/sections/service-landing";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Sonido, iluminación y audiovisuales en Menorca",
  description:
    "Producción técnica para eventos corporativos, conciertos y celebraciones: sonido, iluminación, pantallas LED y streaming en Menorca.",
  path: "/sonido-iluminacion-menorca",
});

export default function TechnicalPage() {
  return (
    <ServiceLanding
      eyebrow="Producción técnica y audiovisual"
      title="Sonido, iluminación y audiovisuales para eventos en Menorca."
      intro="Producción técnica para eventos corporativos, conciertos, celebraciones y actos públicos: sonido, luz, vídeo, pantallas LED y streaming coordinados desde un mismo equipo."
      path="/sonido-iluminacion-menorca"
      image="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=86"
      imageAlt="Escenario con sonido, iluminación y producción audiovisual"
      problemTitle="Cada evento necesita una solución técnica distinta."
      problemBody={[
        "Una presentación corporativa no se trabaja igual que un concierto, una fiesta privada o un acto en una plaza. Partimos del espacio, el contenido, el público y el desarrollo previsto.",
        "Diseñamos una propuesta clara y coordinamos montaje, operación técnica, artistas y proveedores. Cada capacidad concreta se confirma según el proyecto.",
      ]}
      benefits={[
        {
          title: "Sonido para eventos",
          description:
            "Sistemas, microfonía y operación adaptados al espacio, el contenido y el público.",
        },
        {
          title: "Iluminación",
          description:
            "Luz escénica, ambiental y corporativa para crear atmósfera y dar visibilidad.",
        },
        {
          title: "Conciertos y directos",
          description:
            "Sonorización, monitores, iluminación y coordinación con riders artísticos.",
        },
        {
          title: "Eventos corporativos",
          description:
            "Presentaciones, convenciones, conferencias, galas y activaciones de marca.",
        },
        {
          title: "Pantallas LED y vídeo",
          description:
            "Soluciones visuales para contenidos, presentaciones, señal y apoyo escénico.",
        },
        {
          title: "Streaming y realización",
          description:
            "Emisión de eventos presenciales, online o híbridos según conectividad y alcance.",
        },
        {
          title: "Música ambiente",
          description:
            "Sonido distribuido para recepciones, cenas, exposiciones y espacios.",
        },
        {
          title: "Montaje y operación",
          description:
            "Planificación de accesos, montaje, pruebas, asistencia técnica y desmontaje.",
        },
        {
          title: "Producción audiovisual",
          description:
            "Coordinación de sonido, iluminación y vídeo con el espacio y la organización.",
        },
      ]}
      process={[
        "Recogemos la información del evento: espacio, horario, público, contenidos y necesidades de artistas.",
        "Realizamos la propuesta técnica de sonido, iluminación y audiovisuales adecuada al formato.",
        "Coordinamos accesos, montaje, pruebas, operación y relación con los demás equipos.",
        "Ejecutamos el servicio y cerramos el desmontaje según el alcance acordado.",
      ]}
      faqs={[
        {
          question: "¿Ofrecéis pantallas LED y streaming?",
          answer:
            "Podemos integrar vídeo, pantallas LED y streaming en la propuesta audiovisual. La solución concreta depende del espacio, los contenidos, la conectividad y el formato.",
        },
        {
          question: "¿Trabajáis en conciertos y eventos corporativos?",
          answer:
            "Sí. La producción se plantea de forma específica para conciertos, presentaciones, conferencias, galas, celebraciones y actos públicos.",
        },
        {
          question: "¿Incluye personal técnico?",
          answer:
            "La operación técnica, las pruebas y la asistencia necesarias se detallan en cada propuesta según el alcance y la complejidad.",
        },
        {
          question: "¿Se puede contratar solo una parte del servicio?",
          answer:
            "Podemos estudiar necesidades concretas de sonido, iluminación o vídeo, aunque priorizamos una coordinación técnica coherente del conjunto.",
        },
      ]}
      formType="technical"
      ctaLabel="Solicitar propuesta técnica"
    />
  );
}
