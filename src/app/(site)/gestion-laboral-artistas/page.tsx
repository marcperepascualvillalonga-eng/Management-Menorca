import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { safeSanityFetch } from "@/sanity/lib/fetch";
import { siteSettingsQuery } from "@/sanity/queries/content";
import type { SiteSettings } from "@/types/content";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Gestión laboral para artistas",
  description: "Información para gestionar altas, bajas, contratos, nóminas y documentación de actuaciones puntuales mediante Facturilla.",
  path: "/gestion-laboral-artistas",
});

export default async function ArtistAdminPage() {
  const settings = await safeSanityFetch<SiteSettings | null>(siteSettingsQuery, null);
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Gestión laboral" }]} />
          <p className="eyebrow">Para artistas</p>
          <h1>Gestiona tu actuación sin perderte en el papeleo.</h1>
          <p className="page-hero-description">La tramitación laboral y administrativa de actuaciones puntuales se realiza mediante Facturilla.</p>
          <div className="hero-actions">
            <a className="button button-dark" href={settings?.facturillaUrl ?? "https://www.facturilla.es/"} target="_blank" rel="noopener noreferrer">Gestionar mi alta con Facturilla</a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container editorial-grid">
          <h2>Una derivación clara al servicio especializado.</h2>
          <div className="prose">
            <p>Facturilla centraliza la gestión administrativa asociada a actuaciones puntuales. Desde allí puedes consultar el proceso para altas y bajas en la Seguridad Social, contrato, nómina y documentación.</p>
            <p>Management Menorca no sustituye el asesoramiento de Facturilla ni realiza afirmaciones legales específicas desde esta página.</p>
            <h3>¿Buscas contratación o producción?</h3>
            <p>Si además necesitas artistas, booking, sonido o coordinación para un evento, podemos ayudarte desde Management Menorca.</p>
            <Link className="text-link" href="/contacto">Hablar sobre un evento <span>↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
