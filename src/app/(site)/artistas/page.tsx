import { ArtistGrid } from "@/components/artists/artist-grid";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EmptyState } from "@/components/ui/empty-state";
import { safeSanityFetch } from "@/sanity/lib/fetch";
import { artistsQuery } from "@/sanity/queries/content";
import type { Artist } from "@/types/content";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Artistas y grupos de música en Menorca",
  description: "Descubre artistas, bandas, solistas, DJ y formatos de música en directo para hoteles, bodas y eventos en Menorca.",
  path: "/artistas",
});

export default async function ArtistsPage() {
  const artists = await safeSanityFetch<Artist[]>(artistsQuery, []);

  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Artistas" }]} />
          <p className="eyebrow">Roster</p>
          <h1>Talento para dar forma a cada momento.</h1>
          <p className="page-hero-description">Explora el roster por nombre, estilo o categoría. Cada perfil publicado corresponde a información gestionada desde Sanity.</p>
        </div>
      </section>
      <section className="section section-sea">
        <div className="container">
          {artists.length ? <ArtistGrid artists={artists} /> : (
            <EmptyState
              title="El roster todavía no tiene perfiles publicados."
              description="No mostramos artistas ficticios. Publica el primer perfil desde Sanity Studio o solicita una propuesta personalizada."
              action={{ label: "Solicitar propuesta", href: "/contacto" }}
            />
          )}
        </div>
      </section>
    </main>
  );
}
