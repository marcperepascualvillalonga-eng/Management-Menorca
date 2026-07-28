import Image from "next/image";
import Link from "next/link";

import { InquiryForm } from "@/components/forms/inquiry-form";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteUrl } from "@/config/site";
import type { FaqItem } from "@/types/content";

type ServiceLandingProps = {
  eyebrow: string;
  title: string;
  intro: string;
  path: string;
  image: string;
  imageAlt: string;
  problemTitle: string;
  problemBody: string[];
  benefits: { title: string; description: string }[];
  process: string[];
  faqs: FaqItem[];
  formType: "general" | "artist" | "wedding" | "corporate" | "technical";
  ctaLabel?: string;
  locale?: "es" | "ca";
};

export function ServiceLanding({
  eyebrow,
  title,
  intro,
  path,
  image,
  imageAlt,
  problemTitle,
  problemBody,
  benefits,
  process,
  faqs,
  formType,
  ctaLabel = "Solicitar propuesta",
  locale = "es",
}: ServiceLandingProps) {
  const absoluteUrl = new URL(path, siteUrl).toString();
  const ca = locale === "ca";

  return (
    <main id="main-content">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: title,
            description: intro,
            areaServed: "Menorca",
            provider: { "@type": "Organization", name: "Management Menorca", url: siteUrl },
            url: absoluteUrl,
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
              { "@type": "ListItem", position: 2, name: title, item: absoluteUrl },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs
              .filter((item) => typeof item.answer === "string")
              .map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
          },
        ]}
      />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: ca ? "Inici" : "Inicio", href: ca ? "/ca" : "/" }, { label: title }]} />
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero-description">{intro}</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="#consulta">{ctaLabel}</Link>
            <Link className="button button-outline" href={ca ? "/ca/artistes" : "/artistas"}>{ca ? "Veure artistes" : "Ver artistas"}</Link>
          </div>
        </div>
      </section>

      <section className="split-feature">
        <div className="split-media">
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 720px) 100vw, 50vw" priority />
        </div>
        <div className="split-copy">
          <p className="eyebrow">{ca ? "El punt de partida" : "El punto de partida"}</p>
          <h2>{problemTitle}</h2>
          {problemBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeading
            eyebrow={ca ? "Què podem coordinar" : "Qué podemos coordinar"}
            title={ca ? "Una proposta que encaixa amb el context." : "Una propuesta que encaja con el contexto."}
            description={ca ? "Seleccionam i combinam només el necessari perquè l’experiència sigui coherent i operativament senzilla." : "Seleccionamos y combinamos solo lo necesario para que la experiencia sea coherente y operativamente sencilla."}
          />
          <div className="need-grid">
            {benefits.map((benefit, index) => (
              <article key={benefit.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{benefit.title}</strong>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">{ca ? "Com treballam" : "Cómo trabajamos"}</p>
            <h2>{ca ? "Un procés clar, de la idea a l’esdeveniment." : "Un proceso claro, de la idea al evento."}</h2>
          </div>
          <ol className="process-list">
            {process.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-sea">
        <div className="container editorial-grid">
          <SectionHeading eyebrow={ca ? "Preguntes freqüents" : "Preguntas frecuentes"} title={ca ? "Abans de començar" : "Antes de empezar"} />
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="section" id="consulta">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">{ca ? "Conta’ns l’essencial" : "Cuéntanos lo esencial"}</p>
            <h2 className="display-title" style={{ fontSize: "clamp(2.8rem,5vw,5rem)", lineHeight: ".98", margin: 0 }}>
              {ca ? "Preparam una proposta a mida." : "Preparamos una propuesta a medida."}
            </h2>
            <p className="prose">{ca ? "Si l’enviament automàtic encara no està configurat, veuràs alternatives de contacte clares." : "Si el envío automático todavía no está configurado, verás alternativas de contacto claras. Nunca simulamos un envío correcto."}</p>
          </div>
          <InquiryForm formType={formType} locale={locale} />
        </div>
      </section>
    </main>
  );
}
