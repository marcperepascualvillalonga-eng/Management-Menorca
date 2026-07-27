import Image from "next/image";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContactCta } from "@/components/sections/contact-cta";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Sobre Management Menorca",
  description: "Conectamos artistas, espacios y personas para coordinar música y producción de eventos en Menorca.",
  path: "/nosotros",
});

export default function AboutPage() {
  return <main id="main-content">
    <section className="page-hero"><div className="container">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Nosotros" }]} />
      <p className="eyebrow">Management Menorca</p><h1>Conectamos artistas, espacios y personas.</h1>
      <p className="page-hero-description">Una forma sencilla de coordinar música, producción y gestión para eventos en Menorca.</p>
    </div></section>
    <section className="split-feature"><div className="split-media"><Image src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=86" alt="Público disfrutando de música en directo" fill sizes="(max-width:720px) 100vw, 50vw" /></div>
      <div className="split-copy"><p className="eyebrow">Cómo entendemos el trabajo</p><h2>Una mirada global, una coordinación cercana.</h2><p>El objetivo no es sumar proveedores, sino hacer que artistas, técnica, espacio y horarios funcionen como un conjunto.</p><p>El nombre, eslogan y descripción corporativa son provisionales y editables desde Sanity mientras el negocio define su identidad definitiva.</p></div>
    </section>
    <ContactCta />
  </main>;
}
