import { ArtistGrid } from "@/components/artists/artist-grid";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EmptyState } from "@/components/ui/empty-state";
import { safeSanityFetch } from "@/sanity/lib/fetch";
import { artistsQuery, siteSettingsQuery } from "@/sanity/queries/content";
import type { Artist, SiteSettings } from "@/types/content";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Catálogo de artistas en Menorca",
  description:
    "Descubre artistas, bandas, solistas, DJ y formatos de música en directo para bodas, conciertos y eventos en Menorca.",
  path: "/artistas",
});

export default async function ArtistsPage() {
  const [artists, settings] = await Promise.all([
    safeSanityFetch<Artist[]>(artistsQuery, []),
    safeSanityFetch<SiteSettings | null>(siteSettingsQuery, null),
  ]);

  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs
            items={[{ label: "Inicio", href: "/" }, { label: "Artistas" }]}
          />
          <p className="eyebrow">Catálogo de artistas</p>
          <h1>Encuentra la música que encaja con tu evento.</h1>
          <p className="page-hero-description">
            Busca por nombre, estilo o categoría y consulta la disponibilidad
            del formato que más te interesa.
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
    </main>
  );
}
