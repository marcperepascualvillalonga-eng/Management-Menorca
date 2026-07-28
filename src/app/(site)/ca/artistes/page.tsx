import { ArtistGrid } from "@/components/artists/artist-grid";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EmptyState } from "@/components/ui/empty-state";
import { safeSanityFetch } from "@/sanity/lib/fetch";
import { artistsQuery } from "@/sanity/queries/content";
import type { Artist } from "@/types/content";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({ title: "Catàleg d’artistes i booking a Menorca", description: "Artistes, grups, solistes, DJ i música en directe per a casaments, concerts i esdeveniments a Menorca.", path: "/ca/artistes" });

export default async function ArtistsCaPage() {
  const artists = await safeSanityFetch<Artist[]>(artistsQuery, []);
  return <main id="main-content">
    <section className="page-hero"><div className="container"><Breadcrumbs items={[{label:"Inici",href:"/ca"},{label:"Artistes"}]} /><p className="eyebrow">Catàleg d’artistes</p><h1>Artistes i booking per a esdeveniments a Menorca.</h1><p className="page-hero-description">Descobreix solistes, grups, DJ i música en directe i consulta disponibilitat per a la teva data.</p></div></section>
    <section className="section section-sea"><div className="container">{artists.length ? <ArtistGrid artists={artists} /> : <EmptyState title="Encara no hi ha perfils publicats." description="Els artistes apareixeran aquí quan es publiquin des de Sanity." />}</div></section>
    <section className="section"><div className="container editorial-grid"><div><p className="eyebrow">Booking a Menorca</p><h2>De la selecció a l’escenari.</h2><p className="prose">Coordinam disponibilitat, contractació, horaris i necessitats tècniques amb l’espai i l’organització.</p></div><InquiryForm formType="artist" locale="ca" /></div></section>
  </main>;
}
