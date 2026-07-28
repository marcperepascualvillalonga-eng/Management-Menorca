import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";
import type { Artist } from "@/types/content";

function MarqueeItems({
  artists,
  duplicate = false,
}: {
  artists: Artist[];
  duplicate?: boolean;
}) {
  return (
    <div className="artist-marquee-set" aria-hidden={duplicate || undefined}>
      {artists.map((artist) => (
        <Link
          className="marquee-artist"
          href={`/artistas/${artist.slug}`}
          key={`${duplicate ? "copy-" : ""}${artist._id}`}
          tabIndex={duplicate ? -1 : undefined}
        >
          <div className="marquee-artist-image">
            {artist.mainImage?.asset ? (
              <Image
                src={
                  artist.mainImage.asset.url ??
                  urlFor(artist.mainImage).width(720).height(900).url()
                }
                alt={duplicate ? "" : artist.mainImage.alt ?? artist.name}
                fill
                sizes="(max-width: 720px) 70vw, 28vw"
              />
            ) : (
              <div className="image-placeholder" aria-hidden="true">
                <span>{artist.name.charAt(0)}</span>
              </div>
            )}
          </div>
          <div className="marquee-artist-copy">
            <h3>{artist.name}</h3>
            <p>
              {[
                ...(artist.relationshipType ?? []),
                ...(artist.musicGenres ?? []),
              ]
                .slice(0, 2)
                .join(" · ") || "Artista"}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function ArtistMarquee({ artists }: { artists: Artist[] }) {
  return (
    <div
      className="artist-marquee"
      role="region"
      aria-label="Catálogo de artistas"
    >
      <div className="artist-marquee-track">
        <MarqueeItems artists={artists} />
        <MarqueeItems artists={artists} duplicate />
      </div>
    </div>
  );
}
