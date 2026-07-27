import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { safeSanityFetch } from "@/sanity/lib/fetch";
import { projectBySlugQuery, projectSlugsQuery } from "@/sanity/queries/content";
import type { Project } from "@/types/content";
import { createMetadata } from "@/utils/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return safeSanityFetch<{ slug: string }[]>(projectSlugsQuery, []);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await safeSanityFetch<Project | null>(projectBySlugQuery, null, { slug });
  return project ? createMetadata({ title: project.title, description: project.summary ?? "Proyecto de Management Menorca.", path: `/proyectos/${slug}` }) : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await safeSanityFetch<Project | null>(projectBySlugQuery, null, { slug });
  if (!project) notFound();
  return <main id="main-content">
    <section className="page-hero"><div className="container">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Proyectos", href: "/proyectos" }, { label: project.title }]} />
      <p className="eyebrow">{project.projectType ?? "Proyecto"}</p><h1>{project.title}</h1>
      {project.summary ? <p className="page-hero-description">{project.summary}</p> : null}
    </div></section>
    <section className="section"><div className="container editorial-grid"><h2>El proyecto</h2><div className="prose">
      {project.clientVisibility && project.clientName ? <p><strong>Cliente:</strong> {project.clientName}</p> : null}
      {project.locality ? <p><strong>Localidad:</strong> {project.locality}</p> : null}
      <p>La información detallada aparecerá aquí cuando se publique desde Sanity.</p>
    </div></div></section>
  </main>;
}
