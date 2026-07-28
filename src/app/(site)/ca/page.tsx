import Link from "next/link";

import { ArtistHero } from "@/components/artists/artist-hero";
import { ArtistMarquee } from "@/components/artists/artist-marquee";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeading } from "@/components/ui/section-heading";
import { safeSanityFetch } from "@/sanity/lib/fetch";
import { artistsQuery } from "@/sanity/queries/content";
import type { Artist } from "@/types/content";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Artistes, booking, so, il·luminació i casaments a Menorca",
  description:
    "Catàleg i booking d’artistes, so i il·luminació professional i producció musical per a casaments i esdeveniments a Menorca.",
  path: "/ca",
});

export default async function CatalanHome() {
  const artists = await safeSanityFetch<Artist[]>(artistsQuery, []);
  return (
    <main id="main-content">
      <ArtistHero artists={artists} locale="ca" />
      <section className="section section-sea artist-showcase">
        <div className="container">
          <SectionHeading eyebrow="Catàleg" title="Els nostres artistes" description="Descobreix els perfils publicats i consulta disponibilitat per a la teva data." />
        </div>
        {artists.length ? <ArtistMarquee artists={artists} /> : (
          <div className="container"><EmptyState title="El catàleg s’està preparant." description="Els artistes apareixeran aquí quan es publiquin des de Sanity." /></div>
        )}
      </section>
      <section className="section focus-intro">
        <div className="container">
          <p className="eyebrow">Tres verticals · Un equip a Menorca</p>
          <div className="focus-intro-grid"><h2>Tot comença aquí.</h2><p>Tria l’àrea que necessites i descobreix els serveis, el procés i les respostes de cada especialitat.</p></div>
          <div className="vertical-card-grid">
            <Link className="vertical-card" href="/ca/artistes"><span>01 · Artistes i booking</span><h3>El nostre catàleg d’artistes a Menorca</h3><p>Solistes, grups, DJ i música en directe per al teu esdeveniment.</p><strong>Descobrir artistes <i>↗</i></strong></Link>
            <Link className="vertical-card vertical-card-dark" href="/ca/so-illuminacio-menorca"><span>02 · Producció tècnica</span><h3>So i il·luminació professional a Menorca</h3><p>Àudio, llum, vídeo, pantalles LED i streaming per a tota mena d’esdeveniments.</p><strong>Veure solucions <i>↗</i></strong></Link>
            <Link className="vertical-card vertical-card-wedding" href="/ca/casaments-menorca"><span>03 · Casaments</span><h3>Música i producció per a casaments a Menorca</h3><p>Cerimònia, artistes, DJ, il·luminació, fotomaton i coordinació.</p><strong>Preparar el casament <i>↗</i></strong></Link>
          </div>
        </div>
      </section>
      <section className="section home-contact"><div className="container editorial-grid"><div><p className="eyebrow">Contacta’ns</p><h2>Conta’ns què tens en ment.</h2><p className="prose">Data, municipi i tipus d’esdeveniment són un bon punt de partida.</p></div><InquiryForm locale="ca" /></div></section>
    </main>
  );
}
