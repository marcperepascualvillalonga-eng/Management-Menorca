import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";
import type { Artist } from "@/types/content";

export function ArtistCard({ artist, priority = false }: { artist: Artist; priority?: boolean }) {
  const tags = [
    ...(artist.relationshipType ?? []),
    ...(artist.categories?.map((category) => category.title) ?? []),
  ].slice(0, 3);

  return (
    <article className="artist-card">
      <Link href={`/artistas/${artist.slug}`} aria-label={`Ver ficha de ${artist.name}`}>
        <div className="artist-card-image">
          {artist.mainImage?.asset ? (
            <Image
              src={artist.mainImage.asset.url ?? urlFor(artist.mainImage).width(900).height(1125).url()}
              alt={artist.mainImage.alt ?? `Retrato de ${artist.name}`}
              fill
              sizes="(max-width: 680px) 88vw, (max-width: 1100px) 45vw, 28vw"
              priority={priority}
            />
          ) : (
            <div className="image-placeholder" aria-hidden="true">
              <span>{artist.name.charAt(0)}</span>
            </div>
          )}
          <span className="artist-card-arrow" aria-hidden="true">↗</span>
        </div>
        <div className="artist-card-copy">
          <h3>{artist.name}</h3>
          {tags.length ? <p>{tags.join(" · ")}</p> : <p>Perfil artístico</p>}
        </div>
      </Link>
    </article>
  );
}
