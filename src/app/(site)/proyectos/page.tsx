import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EmptyState } from "@/components/ui/empty-state";
import { safeSanityFetch } from "@/sanity/lib/fetch";
import { projectsQuery } from "@/sanity/queries/content";
import type { Project } from "@/types/content";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Proyectos musicales y producción en Menorca",
  description: "Casos y proyectos reales publicados con autorización por Management Menorca.",
  path: "/proyectos",
});

export default async function ProjectsPage() {
  const projects = await safeSanityFetch<Project[]>(projectsQuery, []);
  return (
    <main id="main-content">
      <section className="page-hero"><div className="container">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Proyectos" }]} />
        <p className="eyebrow">Trabajo publicado</p><h1>Proyectos que toman forma.</h1>
        <p className="page-hero-description">No inventamos clientes, resultados ni testimonios. Esta sección solo muestra proyectos reales publicados desde el CMS.</p>
      </div></section>
      <section className="section section-sea"><div className="container">
        {projects.length ? <div className="artist-grid">{projects.map((project) => <article className="artist-card" key={project._id}><Link href={`/proyectos/${project.slug}`}><div className="artist-card-image"><div className="image-placeholder"><span>{project.title.charAt(0)}</span></div></div><div className="artist-card-copy"><h3>{project.title}</h3><p>{project.clientVisibility && project.clientName ? project.clientName : project.projectType ?? "Proyecto"}</p></div></Link></article>)}</div>
        : <EmptyState title="Los primeros proyectos se publicarán aquí." description="La sección permanece vacía hasta disponer de casos reales y autorización para mostrarlos." />}</div></section>
    </main>
  );
}
