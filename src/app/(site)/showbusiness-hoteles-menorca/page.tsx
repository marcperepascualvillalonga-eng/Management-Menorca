import { ServiceLanding } from "@/components/sections/service-landing";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Programación musical para hoteles en Menorca",
  description: "Artistas, música en directo, DJ, sunsets y coordinación de showbusiness para hoteles y agroturismos en Menorca.",
  path: "/showbusiness-hoteles-menorca",
});

export default function HotelsPage() {
  return <ServiceLanding
    eyebrow="Hoteles y agroturismos"
    title="Programación musical para hoteles con identidad."
    intro="Diseñamos música en directo para hoteles en Menorca y coordinamos artistas, técnica, sustituciones y operativa desde un único punto de contacto."
    path="/showbusiness-hoteles-menorca"
    image="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1800&q=86"
    imageAlt="Músico interpretando una actuación acústica"
    problemTitle="Una programación coherente sin sumar carga al equipo."
    problemBody={["La música de un hotel debe reforzar su identidad, adaptarse a cada espacio y funcionar semana tras semana.", "Planteamos formatos, frecuencia y atmósferas; coordinamos artistas para hoteles en Menorca y resolvemos la operativa cotidiana."]}
    benefits={[
      { title: "Programación recurrente", description: "Una agenda musical coherente con el calendario y los espacios del hotel." },
      { title: "Directos y acústicos", description: "Formatos de música en directo pensados para terrazas, restaurantes y sunsets." },
      { title: "DJ y experiencias", description: "Sesiones y momentos especiales adaptados al perfil del establecimiento." },
      { title: "Coordinación artística", description: "Disponibilidad, horarios, documentación y comunicación centralizadas." },
      { title: "Producción técnica", description: "Necesidades de sonido e iluminación coordinadas con cada propuesta." },
      { title: "Continuidad operativa", description: "Gestión de cambios y sustituciones para mantener la programación." },
    ]}
    process={["Entendemos la identidad del hotel, sus espacios y el perfil de huésped.", "Proponemos formatos, frecuencia y una selección artística coherente.", "Cerramos calendario, necesidades técnicas y operativa.", "Coordinamos cada fecha y revisamos la programación cuando sea necesario."]}
    faqs={[
      { question: "¿Podéis crear una programación musical completa?", answer: "Sí. Podemos plantear el calendario, seleccionar formatos y coordinar artistas, técnica y sustituciones." },
      { question: "¿Trabajáis con agroturismos?", answer: "Sí. Adaptamos la escala y el enfoque de la propuesta a hoteles, agroturismos y otros alojamientos." },
      { question: "¿Organizáis sunsets en Menorca?", answer: "Podemos diseñar experiencias de sunset con música en directo o DJ, siempre según las condiciones reales del espacio." },
    ]}
    formType="hotel"
    ctaLabel="Crear una programación musical"
  />;
}
