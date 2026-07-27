import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArtistCard } from "@/components/artists/artist-card";
import { VideoEmbed } from "@/components/artists/video-embed";
import { ContactCta } from "@/components/sections/contact-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { urlFor } from "@/sanity/lib/image";
import { safeSanityFetch } from "@/sanity/lib/fetch";
import { artistBySlugQuery, artistSlugsQuery } from "@/sanity/queries/content";
import type { Artist } from "@/types/content";
import { createMetadata } from "@/utils/metadata";
import { siteUrl } from "@/config/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return safeSanityFetch<{ slug: string }[]>(artistSlugsQuery, []);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artist = await safeSanityFetch<Artist | null>(artistBySlugQuery, null, { slug });
  if (!artist) return {};
  return createMetadata({
    title: artist.seoTitle ?? `${artist.name} | Artista en Menorca`,
    description: artist.seoDescription ?? artist.shortDescription ?? `Información y contratación de ${artist.name}.`,
    path: `/artistas/${slug}`,
  });
}

export default async function ArtistPage({ params }: Props) {
  const { slug } = await params;
  const artist = await safeSanityFetch<Artist | null>(artistBySlugQuery, null, { slug });
  if (!artist) notFound();

  const tags = [...(artist.relationshipType ?? []), ...(artist.musicGenres ?? [])];

  return (
    <main id="main-content">
      {artist.artistKind === "person" || artist.artistKind === "musicGroup" ? (
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": artist.artistKind === "person" ? "Person" : "MusicGroup",
          name: artist.name,
          description: artist.shortDescription,
          url: new URL(`/artistas/${slug}`, siteUrl).toString(),
          genre: artist.musicGenres,
        }} />
      ) : null}
      <section className="artist-profile-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Artistas", href: "/artistas" }, { label: artist.name }]} />
          <div className="artist-profile-grid">
            <div className="artist-profile-image">
              {artist.mainImage?.asset ? (
                <Image src={artist.mainImage.asset.url ?? urlFor(artist.mainImage).width(1200).height(1500).url()} alt={artist.mainImage.alt ?? artist.name} fill sizes="(max-width: 800px) 100vw, 48vw" priority />
              ) : <div className="image-placeholder"><span>{artist.name.charAt(0)}</span></div>}
            </div>
            <div className="artist-profile-copy">
              <p className="eyebrow">{tags.slice(0, 3).join(" · ") || "Artista"}</p>
              <h1>{artist.name}</h1>
              {artist.shortDescription ? <p>{artist.shortDescription}</p> : null}
              <div className="hero-actions">
                <Link className="button button-dark" href={`/contacto?artista=${encodeURIComponent(artist.name)}`}>Consultar disponibilidad</Link>
                <Link className="button button-outline" href="/contacto">Solicitar contratación</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          <h2>Sobre {artist.name}</h2>
          <div className="prose">
            {artist.biography?.length ? <PortableText value={artist.biography} /> : <p>La biografía se publicará próximamente.</p>}
            {artist.availableFormats?.length ? <><h3>Formatos disponibles</h3><p>{artist.availableFormats.join(" · ")}</p></> : null}
            {artist.languages?.length ? <><h3>Idiomas</h3><p>{artist.languages.join(" · ")}</p></> : null}
            {artist.territory ? <><h3>Ámbito geográfico</h3><p>{artist.territory}</p></> : null}
            <div className="artist-downloads">
              {artist.pressKitUrl ? <a className="text-link" href={artist.pressKitUrl} target="_blank" rel="noopener noreferrer">Descargar dossier <span>↗</span></a> : null}
              {artist.technicalRiderUrl ? <a className="text-link" href={artist.technicalRiderUrl} target="_blank" rel="noopener noreferrer">Rider técnico <span>↗</span></a> : null}
            </div>
          </div>
        </div>
      </section>

      {artist.videoUrl ? <section className="section section-dark"><div className="container"><VideoEmbed url={artist.videoUrl} title={`Vídeo de ${artist.name}`} /></div></section> : null}

      {artist.relatedArtists?.length ? (
        <section className="section section-sea">
          <div className="container">
            <p className="eyebrow">También puede encajar</p>
            <h2 className="display-title related-title">Artistas relacionados</h2>
            <div className="artist-grid">{artist.relatedArtists.map((related) => <ArtistCard key={related._id} artist={related} />)}</div>
          </div>
        </section>
      ) : null}
      <ContactCta />
    </main>
  );
}
