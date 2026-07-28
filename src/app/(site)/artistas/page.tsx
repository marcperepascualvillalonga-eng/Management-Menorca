import { ArtistGrid } from "@/components/artists/artist-grid";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EmptyState } from "@/components/ui/empty-state";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteUrl } from "@/config/site";
import { safeSanityFetch } from "@/sanity/lib/fetch";
import { artistsQuery, siteSettingsQuery } from "@/sanity/queries/content";
import type { Artist, SiteSettings } from "@/types/content";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Catálogo de artistas y booking en Menorca",
  description:
    "Catálogo y booking de artistas, bandas, solistas, DJ y música en directo para bodas, conciertos y eventos en Menorca.",
  path: "/artistas",
});

const artistFaqs = [
  {
    question: "¿Cómo contratar un artista en Menorca?",
    answer:
      "Indica la fecha, el lugar, el tipo de evento y el formato que buscas. Confirmamos disponibilidad y preparamos una propuesta ajustada al evento.",
  },
  {
    question: "¿Qué estilos y formatos hay disponibles?",
    answer:
      "El catálogo reúne perfiles y formatos diferentes. Puedes buscar por nombre, categoría o estilo y consultar alternativas si todavía no tienes una elección cerrada.",
  },
  {
    question: "¿El booking puede incluir sonido e iluminación?",
    answer:
      "Sí. Podemos coordinar la contratación artística con las necesidades de sonido, iluminación, horarios y montaje del evento.",
  },
  {
    question: "¿Trabajáis en toda Menorca?",
    answer:
      "El servicio está orientado a eventos en toda Menorca. La disponibilidad y la viabilidad se confirman para cada fecha y localización.",
  },
];

export default async function ArtistsPage() {
  const [artists, settings] = await Promise.all([
    safeSanityFetch<Artist[]>(artistsQuery, []),
    safeSanityFetch<SiteSettings | null>(siteSettingsQuery, null),
  ]);

  return (
    <main id="main-content">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Catálogo de artistas y booking en Menorca",
            description:
              "Selección, contratación y coordinación de artistas para bodas, conciertos y eventos en Menorca.",
            provider: {
              "@type": "Organization",
              name: settings?.businessName ?? "Management Menorca",
              url: siteUrl,
            },
            areaServed: "Menorca",
            url: new URL("/artistas", siteUrl).toString(),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: artistFaqs.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
        ]}
      />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs
            items={[{ label: "Inicio", href: "/" }, { label: "Artistas" }]}
          />
          <p className="eyebrow">Catálogo de artistas</p>
          <h1>Artistas y booking para eventos en Menorca.</h1>
          <p className="page-hero-description">
            Descubre solistas, grupos, DJ y propuestas de música en directo.
            Busca por nombre, estilo o categoría y consulta disponibilidad para
            tu fecha.
          </p>
        </div>
      </section>
      <section className="section section-sea">
        <div className="container">
          {artists.length ? (
            <ArtistGrid artists={artists} />
          ) : (
            <EmptyState
              title="El catálogo todavía no tiene perfiles publicados."
              description="No mostramos artistas ficticios. Publica el primer perfil desde Sanity Studio o solicita una propuesta personalizada."
              action={{ label: "Solicitar propuesta", href: "/contacto" }}
            />
          )}
          <aside className="artist-admin-note artist-page-note">
            <div>
              <p className="eyebrow">Para artistas</p>
              <h3>Altas y documentación laboral</h3>
            </div>
            <p>
              Si necesitas tramitar el alta para una actuación, puedes gestionar
              altas, bajas, contratos y documentación mediante Facturilla.
            </p>
            <a
              className="text-link"
              href={settings?.facturillaUrl ?? "https://www.facturilla.es/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a Facturilla <span>↗</span>
            </a>
          </aside>
        </div>
      </section>
      <section className="section">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">Booking en Menorca</p>
            <h2>Del primer perfil al momento de subir al escenario.</h2>
          </div>
          <div className="prose">
            <p>
              Elegir un artista no consiste solo en escoger un estilo.
              Revisamos el tipo de público, el espacio, el momento del evento,
              la duración y el formato que mejor puede funcionar.
            </p>
            <p>
              Después coordinamos disponibilidad, contratación, horarios y
              necesidades técnicas. Si el evento lo requiere, el booking puede
              integrarse con nuestro servicio de sonido e iluminación.
            </p>
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container">
          <SectionHeading
            eyebrow="Cómo funciona"
            title="Una contratación clara y coordinada."
          />
          <div className="trust-grid">
            <article><span>01</span><h3>Cuéntanos el evento</h3><p>Fecha, espacio, público, horarios y ambiente que quieres conseguir.</p></article>
            <article><span>02</span><h3>Explora propuestas</h3><p>Revisa perfiles y recibe orientación sobre estilos y formatos adecuados.</p></article>
            <article><span>03</span><h3>Confirmamos</h3><p>Comprobamos disponibilidad y concretamos condiciones y necesidades técnicas.</p></article>
            <article><span>04</span><h3>Coordinamos</h3><p>Alineamos artista, organización, espacio y producción antes de la actuación.</p></article>
          </div>
        </div>
      </section>
      <section className="section section-sea">
        <div className="container editorial-grid">
          <SectionHeading eyebrow="Preguntas frecuentes" title="Antes de contratar" />
          <FaqAccordion items={artistFaqs} />
        </div>
      </section>
      <section className="section" id="consulta">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">Consultar disponibilidad</p>
            <h2>¿Qué música imaginas para tu evento?</h2>
            <p className="prose">
              Si todavía no sabes qué artista elegir, describe el ambiente y el
              momento. Te ayudaremos a acotar la búsqueda.
            </p>
          </div>
          <InquiryForm formType="artist" />
        </div>
      </section>
    </main>
  );
}
