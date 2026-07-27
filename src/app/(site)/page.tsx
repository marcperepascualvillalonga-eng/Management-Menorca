import Image from "next/image";
import Link from "next/link";

import { ArtistCard } from "@/components/artists/artist-card";
import { EventList } from "@/components/events/event-list";
import { ContactCta } from "@/components/sections/contact-cta";
import { HeroCarousel } from "@/components/sections/hero-carousel";
import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeading } from "@/components/ui/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { defaultHeroSlides, serviceLinks, siteUrl } from "@/config/site";
import { safeSanityFetch } from "@/sanity/lib/fetch";
import {
  featuredArtistsQuery,
  featuredProjectsQuery,
  heroSlidesQuery,
  siteSettingsQuery,
  upcomingEventsQuery,
} from "@/sanity/queries/content";
import type {
  Artist,
  EventItem,
  HeroSlide,
  Project,
  SiteSettings,
} from "@/types/content";

export default async function Home() {
  const [slides, artists, events, projects, settings] = await Promise.all([
    safeSanityFetch<HeroSlide[]>(heroSlidesQuery, []),
    safeSanityFetch<Artist[]>(featuredArtistsQuery, []),
    safeSanityFetch<EventItem[]>(upcomingEventsQuery, []),
    safeSanityFetch<Project[]>(featuredProjectsQuery, []),
    safeSanityFetch<SiteSettings | null>(siteSettingsQuery, null),
  ]);

  const needs = [
    ["Un concierto o evento público", "/artistas-menorca"],
    ["Una boda o celebración privada", "/bodas-menorca"],
    ["Un evento corporativo", "/eventos-corporativos-menorca"],
    ["Programación musical para un hotel", "/showbusiness-hoteles-menorca"],
    ["Sonido e iluminación", "/sonido-iluminacion-menorca"],
    ["Contratar un artista", "/artistas"],
  ];

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
              "Artistas, producción y experiencias musicales en Menorca.",
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
      <HeroCarousel slides={slides.length ? slides : defaultHeroSlides} />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Encuentra tu punto de partida"
            title="¿Qué estás organizando?"
            description="Una respuesta clara para cada tipo de evento, con la música y la producción coordinadas desde un solo equipo."
          />
          <div className="need-grid">
            {needs.map(([label, href], index) => (
              <Link href={href} key={href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{label}</strong>
                <i aria-hidden="true">↗</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-sea">
        <div className="container">
          <SectionHeading
            eyebrow="Roster"
            title="Artistas"
            description="Talento, personalidad y propuestas para cada tipo de evento."
          />
          {artists.length ? (
            <>
              <div className="artist-grid">
                {artists.map((artist, index) => (
                  <ArtistCard key={artist._id} artist={artist} priority={index < 3} />
                ))}
              </div>
              <div style={{ marginTop: "3rem" }}>
                <Link className="button button-outline" href="/artistas">Ver todo el roster</Link>
              </div>
            </>
          ) : (
            <EmptyState
              title="El roster se está preparando."
              description="Los perfiles aparecerán aquí en cuanto se publiquen desde Sanity. Mientras tanto, cuéntanos qué estilo o formato buscas."
              action={{ label: "Consultar opciones", href: "/contacto" }}
            />
          )}
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeading
            eyebrow="Una solución integral"
            title="Música, producción y gestión."
            description="Servicios que se combinan según el espacio, el público y el objetivo de cada evento."
          />
          <div className="service-list">
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

      <section className="split-feature">
        <div className="split-media">
          <Image
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1600&q=86"
            alt="Músico actuando en directo en un ambiente íntimo"
            fill
            sizes="(max-width: 720px) 100vw, 50vw"
          />
        </div>
        <div className="split-copy">
          <p className="eyebrow">Hoteles y agroturismos</p>
          <h2>Programación musical para hoteles con identidad.</h2>
          <p>Diseñamos una propuesta coherente con el espacio y gestionamos el día a día para que el equipo del hotel tenga un único interlocutor.</p>
          <ul className="feature-list">
            <li>Programación semanal</li><li>Sunsets y acústicos</li>
            <li>DJ y música en directo</li><li>Coordinación artística</li>
            <li>Producción técnica</li><li>Sustituciones y operativa</li>
          </ul>
          <Link className="text-link" href="/showbusiness-hoteles-menorca">Crear una programación musical <span>↗</span></Link>
        </div>
      </section>

      <section className="split-feature section-dark">
        <div className="split-copy">
          <p className="eyebrow light">Producción técnica</p>
          <h2>Sonido e iluminación al servicio de la experiencia.</h2>
          <p>Coordinamos las necesidades técnicas de artistas y espacios para que cada evento tenga claridad, presencia y un desarrollo fluido.</p>
          <ul className="feature-list">
            <li>Sonido profesional</li><li>Iluminación</li>
            <li>Montaje y desmontaje</li><li>Asistencia técnica</li>
            <li>Coordinación con artistas</li><li>Producción integral</li>
          </ul>
          <Link className="text-link" href="/sonido-iluminacion-menorca">Solicitar presupuesto técnico <span>↗</span></Link>
        </div>
        <div className="split-media">
          <Image
            src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=86"
            alt="Iluminación escénica durante un concierto"
            fill
            sizes="(max-width: 720px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="split-feature">
        <div className="split-media">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=86"
            alt="Celebración de boda al aire libre"
            fill
            sizes="(max-width: 720px) 100vw, 50vw"
          />
        </div>
        <div className="split-copy">
          <p className="eyebrow">Bodas en Menorca</p>
          <h2>La música acompaña cada momento.</h2>
          <p>Desde la ceremonia hasta la fiesta, planteamos una experiencia musical coherente, personal y coordinada sin complicaciones.</p>
          <ul className="feature-list">
            <li>Ceremonia</li><li>Aperitivo</li><li>Música en directo</li>
            <li>DJ y fiesta</li><li>Sonido e iluminación</li><li>Coordinación completa</li>
          </ul>
          <Link className="text-link" href="/bodas-menorca">Cuéntanos cómo será vuestra boda <span>↗</span></Link>
        </div>
      </section>

      <section className="section-compact section-sea">
        <div className="container editorial-grid">
          <h2>¿Eres artista y necesitas darte de alta?</h2>
          <div className="prose">
            <p>Las altas, bajas, contratos, nóminas y documentación para actuaciones puntuales se gestionan a través de Facturilla.</p>
            <a className="button button-dark" href={settings?.facturillaUrl ?? "https://www.facturilla.es/"} target="_blank" rel="noopener noreferrer">
              Gestionar mi alta con Facturilla
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Próximas fechas" title="Agenda" description="Conciertos y eventos públicos programados en Menorca." />
          {events.length ? <EventList events={events.slice(0, 5)} /> : (
            <EmptyState title="Próximamente publicaremos nuevas fechas." description="La agenda solo muestra eventos públicos confirmados." />
          )}
          {events.length ? <div style={{ marginTop: "2.5rem" }}><Link className="text-link" href="/agenda">Ver agenda completa <span>↗</span></Link></div> : null}
        </div>
      </section>

      {projects.length ? (
        <section className="section section-sea">
          <div className="container">
            <SectionHeading eyebrow="Trabajo real" title="Proyectos" description="Una selección de proyectos publicados y autorizados." />
            <div className="artist-grid">
              {projects.map((project) => (
                <article className="artist-card" key={project._id}>
                  <Link href={`/proyectos/${project.slug}`}>
                    <div className="artist-card-image">
                      <div className="image-placeholder"><span>{project.title.charAt(0)}</span></div>
                    </div>
                    <div className="artist-card-copy">
                      <h3>{project.title}</h3>
                      <p>{project.projectType ?? project.locality ?? "Proyecto"}</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ContactCta whatsapp={settings?.whatsapp} />
    </main>
  );
}
