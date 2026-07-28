import Link from "next/link";

import { ArtistMarquee } from "@/components/artists/artist-marquee";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { JsonLd } from "@/components/seo/json-ld";
import { HeroCarousel } from "@/components/sections/hero-carousel";
import { EmptyState } from "@/components/ui/empty-state";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  defaultHeroSlides,
  fallbackFaqs,
  serviceLinks,
  siteUrl,
} from "@/config/site";
import { safeSanityFetch } from "@/sanity/lib/fetch";
import {
  artistsQuery,
  heroSlidesQuery,
  siteSettingsQuery,
} from "@/sanity/queries/content";
import type {
  Artist,
  HeroSlide,
  SiteSettings,
} from "@/types/content";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Artistas, booking, sonido, iluminación y bodas en Menorca",
  description:
    "Catálogo y booking de artistas, sonido e iluminación profesional y producción musical para bodas y eventos en Menorca.",
  path: "/",
});

export default async function Home() {
  const [slides, artists, settings] = await Promise.all([
    safeSanityFetch<HeroSlide[]>(heroSlidesQuery, []),
    safeSanityFetch<Artist[]>(artistsQuery, []),
    safeSanityFetch<SiteSettings | null>(siteSettingsQuery, null),
  ]);

  const focusedSlides = slides
    .filter((slide) => {
      const content = `${slide.title} ${slide.eyebrow ?? ""} ${
        slide.primaryCta?.href ?? ""
      }`.toLowerCase();
      return !content.includes("hotel");
    })
    .slice(0, 3);

  return (
    <main id="main-content">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: settings?.businessName ?? "Management Menorca",
            url: siteUrl,
            description:
              settings?.shortDescription ??
              "Artistas, sonido, iluminación y servicios para bodas y eventos en Menorca.",
            email: settings?.email,
            telephone: settings?.phone,
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Menorca",
            },
            knowsAbout: [
              "Booking de artistas en Menorca",
              "Sonido e iluminación profesional",
              "Música y producción para bodas en Menorca",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: settings?.businessName ?? "Management Menorca",
            url: siteUrl,
            inLanguage: "es",
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Servicios de Management Menorca",
            itemListElement: serviceLinks.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Service",
                name: service.title,
                description: service.description,
                url: new URL(service.href, siteUrl).toString(),
                areaServed: "Menorca",
              },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: fallbackFaqs.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
        ]}
      />

      <HeroCarousel
        slides={focusedSlides.length === 3 ? focusedSlides : defaultHeroSlides}
      />

      <section className="section section-sea artist-showcase">
        <div className="container">
          <SectionHeading
            eyebrow="Catálogo"
            title="Nuestros artistas"
            description="Descubre todos los perfiles publicados y consulta disponibilidad para tu fecha."
          />
        </div>
        {artists.length ? (
          <>
            <ArtistMarquee artists={artists} />
            <div className="container artist-showcase-actions">
              <Link className="button button-dark" href="/artistas">
                Ver catálogo completo
              </Link>
              <Link className="text-link" href="/contacto">
                Consultar disponibilidad <span>↗</span>
              </Link>
            </div>
          </>
        ) : (
          <div className="container">
            <EmptyState
              title="El catálogo se está preparando."
              description="No mostramos perfiles ficticios. Los artistas aparecerán aquí en cuanto se publiquen desde Sanity."
              action={{ label: "Consultar opciones", href: "/contacto" }}
            />
          </div>
        )}
        <div className="container artist-admin-note">
          <div>
            <p className="eyebrow">Servicio para artistas</p>
            <h3>¿Necesitas tramitar el alta de una actuación?</h3>
          </div>
          <p>
            Las altas, bajas, contratos y documentación laboral se gestionan
            mediante Facturilla.
          </p>
          <a
            className="text-link"
            href={settings?.facturillaUrl ?? "https://www.facturilla.es/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir a Facturilla <span>↗</span>
          </a>
        </div>
      </section>

      <section className="section focus-intro" aria-labelledby="verticals-title">
        <div className="container">
          <p className="eyebrow">Tres verticales · Un equipo en Menorca</p>
          <div className="focus-intro-grid">
            <h2 id="verticals-title">Todo empieza aquí.</h2>
            <p>
              Elige el área que necesitas. Dentro encontrarás servicios,
              proceso, preguntas frecuentes y un formulario específico para
              preparar una propuesta útil.
            </p>
          </div>
          <div className="vertical-card-grid">
            <Link className="vertical-card" href="/artistas">
              <span>01 · Artistas y booking</span>
              <h3>Nuestro catálogo de artistas en Menorca</h3>
              <p>
                Solistas, grupos, DJ y música en directo. Consulta perfiles,
                estilos, formatos y disponibilidad para tu fecha.
              </p>
              <strong>Descubrir artistas <i aria-hidden="true">↗</i></strong>
            </Link>
            <Link
              className="vertical-card vertical-card-dark"
              href="/sonido-iluminacion-menorca"
            >
              <span>02 · Producción técnica</span>
              <h3>Sonido e iluminación profesional en Menorca</h3>
              <p>
                Audio, luz, vídeo, pantallas LED y streaming para conciertos,
                corporativos, celebraciones y eventos públicos.
              </p>
              <strong>Ver soluciones técnicas <i aria-hidden="true">↗</i></strong>
            </Link>
            <Link className="vertical-card vertical-card-wedding" href="/bodas-menorca">
              <span>03 · Bodas</span>
              <h3>Música, sonido e iluminación para bodas en Menorca</h3>
              <p>
                Ceremonia, aperitivo, artistas, DJ, iluminación, fotomatón y
                coordinación técnica para toda la celebración.
              </p>
              <strong>Preparar nuestra boda <i aria-hidden="true">↗</i></strong>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-dark trust-section">
        <div className="container">
          <SectionHeading
            eyebrow="Una producción más sencilla"
            title="Un solo punto de contacto. Tres especialidades conectadas."
            description="La propuesta se construye alrededor de la fecha, el espacio y el objetivo real del evento."
          />
          <div className="trust-grid">
            <article>
              <span>01</span>
              <h3>Conocimiento local</h3>
              <p>Servicio planteado para espacios, proveedores y eventos en Menorca.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Propuesta a medida</h3>
              <p>Sin paquetes ficticios: confirmamos artistas, alcance técnico y disponibilidad para cada proyecto.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Coordinación integral</h3>
              <p>Booking, producción y tiempos conectados para reducir interlocutores y evitar fricciones.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Información clara</h3>
              <p>Necesidades, proceso y límites del servicio definidos antes de llegar al evento.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-sea">
        <div className="container editorial-grid">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Respuestas antes de empezar"
            description="Información directa sobre artistas, producción técnica y bodas en Menorca."
          />
          <FaqAccordion items={fallbackFaqs} />
        </div>
      </section>

      <section className="section home-contact" id="contacto">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">Cuéntanos tu idea</p>
            <h2>Empecemos por lo esencial.</h2>
            <p className="prose">
              Indica qué vertical necesitas, la fecha aproximada, el municipio
              y el tipo de evento. Te ayudaremos a concretar el resto.
            </p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
