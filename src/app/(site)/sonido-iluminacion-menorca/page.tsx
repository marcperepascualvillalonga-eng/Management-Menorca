import { ServiceLanding } from "@/components/sections/service-landing";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Servicio de sonido e iluminación en Menorca",
  description: "Producción técnica, sonido profesional e iluminación para bodas, conciertos, hoteles y eventos en Menorca.",
  path: "/sonido-iluminacion-menorca",
});

export default function TechnicalPage() {
  return <ServiceLanding
    eyebrow="Producción técnica"
    title="Sonido e iluminación para eventos en Menorca."
    intro="Un servicio integral de sonido e iluminación que conecta las necesidades del evento, el espacio y los artistas sin promesas técnicas genéricas."
    path="/sonido-iluminacion-menorca"
    image="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=86"
    imageAlt="Escenario con iluminación profesional durante un concierto"
    problemTitle="La técnica debe sostener el evento, no complicarlo."
    problemBody={["Traducimos el formato, el aforo y las necesidades artísticas en una propuesta técnica clara.", "Coordinamos producción técnica de eventos, montaje, asistencia y comunicación con artistas para que todas las piezas lleguen alineadas."]}
    benefits={[
      { title: "Sonido profesional", description: "Servicio dimensionado según el evento y el espacio." },
      { title: "Iluminación", description: "Una atmósfera visual coherente con el momento y el formato." },
      { title: "Producción técnica", description: "Planificación de necesidades, horarios y coordinación." },
      { title: "Montaje y desmontaje", description: "Organización de tiempos y accesos con el espacio." },
      { title: "Asistencia técnica", description: "Acompañamiento operativo durante el evento cuando se acuerde." },
      { title: "Coordinación artística", description: "Interlocución técnica con músicos, DJ y producción." },
    ]}
    process={["Recogemos información del espacio, formato, horario y asistentes.", "Revisamos las necesidades de artistas y del evento.", "Presentamos una propuesta técnica y operativa comprensible.", "Coordinamos montaje, evento y desmontaje según el alcance acordado."]}
    faqs={[
      { question: "¿Alquiláis equipos de sonido?", answer: "El enfoque principal es el servicio integral de sonido e iluminación. El alcance concreto se define según cada evento." },
      { question: "¿Incluye personal técnico?", answer: "La asistencia necesaria se detalla en cada propuesta, según formato y complejidad." },
      { question: "¿Trabajáis en bodas y conciertos?", answer: "Sí. Estudiamos bodas, conciertos, hoteles, eventos privados y corporativos en Menorca." },
    ]}
    formType="technical"
    ctaLabel="Solicitar presupuesto técnico"
  />;
}
