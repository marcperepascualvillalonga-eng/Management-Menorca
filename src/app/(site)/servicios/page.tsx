import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceLinks } from "@/config/site";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Servicios musicales y producción de eventos",
  description: "Artistas, programación para hoteles, bodas, eventos corporativos, sonido e iluminación y gestión laboral en Menorca.",
  path: "/servicios",
});

export default function ServicesPage() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]} />
          <p className="eyebrow">Qué hacemos</p>
          <h1>Una solución integral para cada evento.</h1>
          <p className="page-hero-description">Conectamos artistas, espacios y personas. Coordinamos la música, la producción y la gestión necesaria para que todo funcione.</p>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container">
          <SectionHeading eyebrow="Áreas de trabajo" title="Servicios que se combinan." />
          <div className="service-list">
            {serviceLinks.map((service) => (
              <Link className="service-row" href={service.href} key={service.href}>
                <span>{service.index}</span><h3>{service.title}</h3><p>{service.description}</p><i>↗</i>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
