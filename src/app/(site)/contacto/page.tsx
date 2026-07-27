import { InquiryForm } from "@/components/forms/inquiry-form";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { safeSanityFetch } from "@/sanity/lib/fetch";
import { siteSettingsQuery } from "@/sanity/queries/content";
import type { SiteSettings } from "@/types/content";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Contacto y solicitud de propuesta",
  description: "Cuéntanos qué evento estás organizando en Menorca y prepararemos una propuesta de artistas, música y producción.",
  path: "/contacto",
});

export default async function ContactPage() {
  const settings = await safeSanityFetch<SiteSettings | null>(siteSettingsQuery, null);
  const whatsapp = settings?.whatsapp?.replace(/\D/g, "");
  return <main id="main-content">
    <section className="page-hero"><div className="container">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />
      <p className="eyebrow">Solicitar propuesta</p><h1>Cuéntanos qué tienes en mente.</h1>
      <p className="page-hero-description">Fecha, espacio, tipo de evento y atmósfera deseada son un buen punto de partida. No necesitas tenerlo todo decidido.</p>
    </div></section>
    <section className="section"><div className="container editorial-grid"><div>
      <p className="eyebrow">Canales de contacto</p><h2 className="display-title" style={{fontSize:"clamp(2.8rem,5vw,5rem)",lineHeight:".98",margin:0}}>Hablemos de tu evento.</h2>
      <div className="prose">
        {settings?.email ? <p><a className="text-link" href={`mailto:${settings.email}`}>{settings.email}</a></p> : <p>Correo pendiente de configurar en Sanity.</p>}
        {settings?.phone ? <p><a className="text-link" href={`tel:${settings.phone}`}>{settings.phone}</a></p> : null}
        {whatsapp ? <p><a className="text-link" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer">Abrir WhatsApp ↗</a></p> : <p>WhatsApp pendiente de configurar en Sanity.</p>}
      </div>
    </div><InquiryForm /></div></section>
  </main>;
}
