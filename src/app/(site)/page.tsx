import Image from "next/image";
import Link from "next/link";

import { ArtistMarquee } from "@/components/artists/artist-marquee";
import { JsonLd } from "@/components/seo/json-ld";
import { ContactCta } from "@/components/sections/contact-cta";
import { HeroCarousel } from "@/components/sections/hero-carousel";
import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeading } from "@/components/ui/section-heading";
import { defaultHeroSlides, serviceLinks, siteUrl } from "@/config/site";
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
  title: "Artistas, sonido, iluminación y bodas en Menorca",
  description:
    "Catálogo de artistas y servicios de sonido, iluminación, audiovisuales y bodas para eventos en Menorca.",
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
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: settings?.businessName ?? "Management Menorca",
            url: siteUrl,
            inLanguage: "es",
          },
        ]}
      />

      <HeroCarousel
        slides={focusedSlides.length === 3 ? focusedSlides : defaultHeroSlides}
      />

      <section className="section focus-intro">
        <div className="container">
          <p className="eyebrow">Todo lo que necesita tu evento</p>
          <div className="focus-intro-grid">
            <h2>Artistas. Técnica. Bodas.</h2>
            <p>
              Tres áreas claras y un mismo objetivo: que la música, el sonido y
              la experiencia funcionen de principio a fin en cualquier evento
              de Menorca.
            </p>
          </div>
          <div className="service-list focus-service-list">
            {serviceLinks.map((service) => (
              <Link className="service-row" href={service.href} key={service.href}>
                <span>{service.index}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

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

      <section className="split-feature section-dark">
        <div className="split-copy">
          <p className="eyebrow light">Eventos en Menorca</p>
          <h2>Sonido, iluminación y soluciones audiovisuales.</h2>
          <p>
            Producción técnica para conciertos, eventos corporativos,
            presentaciones, celebraciones y actos públicos, adaptada al espacio
            y al formato.
          </p>
          <ul className="feature-list">
            <li>Sonido profesional</li>
            <li>Iluminación escénica y ambiental</li>
            <li>Pantallas LED y vídeo</li>
            <li>Streaming y realización</li>
            <li>Conciertos y música ambiente</li>
            <li>Eventos corporativos</li>
            <li>Montaje y operación técnica</li>
            <li>Coordinación audiovisual</li>
          </ul>
          <Link className="button button-accent" href="/sonido-iluminacion-menorca">
            Ver soluciones técnicas
          </Link>
        </div>
        <div className="split-media">
          <Image
            src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=86"
            alt="Producción de sonido e iluminación en un evento"
            fill
            sizes="(max-width: 720px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="split-feature wedding-focus">
        <div className="split-media">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=86"
            alt="Celebración de boda al aire libre"
            fill
            sizes="(max-width: 720px) 100vw, 50vw"
          />
        </div>
        <div className="split-copy">
          <p className="eyebrow">Bodas en Menorca</p>
          <h2>Un solo equipo para acompañar toda la boda.</h2>
          <p>
            Sonido e iluminación desde la ceremonia hasta la fiesta, con
            artistas, DJ, música ambiente y servicios que completan la
            celebración.
          </p>
          <ul className="feature-list">
            <li>Sonido para ceremonia</li>
            <li>Iluminación ambiental</li>
            <li>Artistas en directo</li>
            <li>DJ y pista de baile</li>
            <li>Música para aperitivo y banquete</li>
            <li>Fotomatón</li>
            <li>Microfonía para discursos</li>
            <li>Coordinación técnica completa</li>
          </ul>
          <Link className="button button-dark" href="/bodas-menorca">
            Preparar nuestra boda
          </Link>
        </div>
      </section>

      <ContactCta whatsapp={settings?.whatsapp} />
    </main>
  );
}
