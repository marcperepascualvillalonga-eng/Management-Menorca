import { ServiceLanding } from "@/components/sections/service-landing";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Eventos corporativos en Menorca",
  description: "Artistas, DJ, sonido, iluminación y producción para eventos corporativos y experiencias de empresa en Menorca.",
  path: "/eventos-corporativos-menorca",
});

export default function CorporatePage() {
  return <ServiceLanding
    eyebrow="Empresas y organizaciones"
    title="Eventos corporativos con ritmo, criterio y coordinación."
    intro="Artistas, DJ, sonido, iluminación y producción para cenas de empresa, convenciones, presentaciones, incentivos y activaciones en Menorca."
    path="/eventos-corporativos-menorca"
    image="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1800&q=86"
    imageAlt="Evento profesional con iluminación y música en directo"
    problemTitle="Una experiencia de marca también se escucha."
    problemBody={["La propuesta musical debe entender el tono de la empresa, el perfil de asistentes y el objetivo del encuentro.", "Coordinamos entretenimiento y producción con un enfoque profesional, evitando que la organización tenga que conectar múltiples proveedores."]}
    benefits={[
      { title: "Cenas de empresa", description: "Ambientes musicales adaptados al formato y los tiempos del encuentro." },
      { title: "Convenciones", description: "Producción y entretenimiento coordinados con la agenda profesional." },
      { title: "Presentaciones", description: "Propuestas que acompañan el lanzamiento sin eclipsar el mensaje." },
      { title: "Incentivos", description: "Experiencias musicales memorables para equipos y grupos invitados." },
      { title: "Activaciones de marca", description: "Artistas y producción alineados con la identidad y el contexto." },
      { title: "Coordinación", description: "Un interlocutor para música, técnica y operación." },
    ]}
    process={["Definimos objetivo, público, tono y condicionantes del espacio.", "Proponemos formatos artísticos y alcance técnico.", "Coordinamos con agencia, venue y proveedores implicados.", "Supervisamos el desarrollo dentro del alcance acordado."]}
    faqs={[
      { question: "¿Podéis coordinar artistas y producción técnica?", answer: "Sí. Podemos integrar ambos ámbitos para simplificar la organización y asegurar compatibilidad." },
      { question: "¿Trabajáis con agencias de eventos?", answer: "Sí. Podemos colaborar como proveedor artístico y técnico dentro de una producción más amplia." },
      { question: "¿Preparáis propuestas para grupos internacionales?", answer: "Podemos adaptar la comunicación y la selección artística al perfil del grupo. Los idiomas disponibles se confirman con cada artista." },
    ]}
    formType="corporate"
  />;
}
