import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export function LegalPage({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: title }]} />
          <p className="eyebrow">Información legal</p>
          <h1>{title}</h1>
          <p className="page-hero-description">{description}</p>
        </div>
      </section>
      <section className="section">
        <div className="container editorial-grid">
          <h2>Información pendiente de validación.</h2>
          <div className="prose legal-placeholder">
            <p><strong>Importante:</strong> este contenido es provisional. Debe revisarse y completarse con datos reales y asesoramiento adecuado antes del lanzamiento público.</p>
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}
