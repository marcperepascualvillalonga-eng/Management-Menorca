import { ServiceLanding } from "@/components/sections/service-landing";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Música para bodas en Menorca",
  description: "Grupos, solistas, DJ, sonido e iluminación y coordinación musical completa para bodas en Menorca.",
  path: "/bodas-menorca",
});

export default function WeddingsPage() {
  return <ServiceLanding
    eyebrow="Bodas y celebraciones"
    title="Música para bodas en Menorca, de principio a fin."
    intro="Diseñamos una experiencia musical personal para ceremonia, aperitivo, banquete y fiesta, con artistas y producción coordinados con tranquilidad."
    path="/bodas-menorca"
    image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=86"
    imageAlt="Celebración de boda al aire libre"
    problemTitle="Cada momento pide una energía diferente."
    problemBody={["La música de una boda no es una lista de actuaciones: es una secuencia que acompaña a las personas durante todo el día.", "Ayudamos a escoger grupos para bodas en Menorca, solistas, acústicos o DJ y coordinamos el sonido para bodas con el resto de proveedores."]}
    benefits={[
      { title: "Ceremonia", description: "Música pensada para acompañar un momento íntimo y significativo." },
      { title: "Aperitivo", description: "Directos o acústicos que crean ambiente sin dominar la conversación." },
      { title: "Banquete", description: "Momentos musicales integrados con el ritmo de la celebración." },
      { title: "Fiesta y DJ", description: "Una propuesta dinámica para cerrar el día con la energía adecuada." },
      { title: "Sonido e iluminación", description: "Producción coordinada para evitar soluciones fragmentadas." },
      { title: "Coordinación", description: "Un único interlocutor para música, horarios y necesidades técnicas." },
    ]}
    process={["Escuchamos cómo imagináis el día y qué momentos queréis acompañar.", "Proponemos estilos y formatos realistas para cada espacio.", "Coordinamos artistas, horarios, wedding planner y técnica.", "Revisamos el plan antes de la boda para que todos compartan la misma información."]}
    faqs={[
      { question: "¿Podéis organizar toda la música de la boda?", answer: "Sí. Podemos coordinar ceremonia, aperitivo, directo, DJ, fiesta y producción técnica dentro de una propuesta global." },
      { question: "¿Hay grupos y solistas para diferentes estilos?", answer: "El roster se organiza por categorías y formatos. También podemos orientar la búsqueda según el ambiente que queráis." },
      { question: "¿Con cuánta antelación conviene reservar?", answer: "En temporada alta conviene consultar cuanto antes. La disponibilidad siempre se confirma para una fecha concreta." },
    ]}
    formType="wedding"
    ctaLabel="Contarnos cómo será vuestra boda"
  />;
}
