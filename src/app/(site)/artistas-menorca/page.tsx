import { ServiceLanding } from "@/components/sections/service-landing";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Contratación de artistas en Menorca",
  description: "Booking de artistas, grupos de música, solistas y DJ para hoteles, bodas, conciertos y eventos en Menorca.",
  path: "/artistas-menorca",
});

export default function BookingPage() {
  return <ServiceLanding
    eyebrow="Artistas y booking"
    title="Artistas en Menorca para cada tipo de evento."
    intro="Te ayudamos a descubrir, seleccionar y contratar artistas con un formato adecuado al espacio, el público y la atmósfera que quieres crear."
    path="/artistas-menorca"
    image="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1800&q=86"
    imageAlt="Artista actuando en directo"
    problemTitle="No se trata de elegir un nombre, sino el formato adecuado."
    problemBody={["Una propuesta artística funciona cuando encaja con el momento, la acústica, el público y la logística.", "Acompañamos la selección y coordinamos disponibilidad, contratación y necesidades técnicas para reducir incertidumbre."]}
    benefits={[
      { title: "Música en directo", description: "Solistas, dúos, bandas y formatos acústicos según disponibilidad real." },
      { title: "DJ", description: "Sesiones adaptadas al espacio, horario y perfil del público." },
      { title: "Hoteles", description: "Artistas preparados para programaciones recurrentes y ambientes diversos." },
      { title: "Bodas", description: "Propuestas para ceremonia, aperitivo, banquete y fiesta." },
      { title: "Corporativo", description: "Formatos profesionales para presentaciones y encuentros de empresa." },
      { title: "Booking", description: "Disponibilidad, condiciones y coordinación centralizadas." },
    ]}
    process={["Cuéntanos fecha, lugar, público y atmósfera deseada.", "Seleccionamos perfiles y formatos que puedan encajar.", "Confirmamos disponibilidad y alcance de la propuesta.", "Coordinamos contratación y necesidades previas al evento."]}
    faqs={[
      { question: "¿Cómo se solicita disponibilidad de un artista?", answer: "Envíanos fecha, municipio, tipo de evento y formato aproximado. Consultaremos disponibilidad antes de confirmar nada." },
      { question: "¿Puedo contratar un artista que no aparece en la web?", answer: "Puedes explicarnos qué buscas. Estudiaremos opciones sin presentar como propio un roster que no esté publicado." },
      { question: "¿Incluís necesidades técnicas?", answer: "Podemos coordinar la propuesta artística con el servicio de sonido e iluminación cuando sea necesario." },
    ]}
    formType="artist"
  />;
}
