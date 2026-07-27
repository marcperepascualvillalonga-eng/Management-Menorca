import type { MetadataRoute } from "next";

import { siteUrl } from "@/config/site";
import { safeSanityFetch } from "@/sanity/lib/fetch";
import { artistSlugsQuery, projectSlugsQuery } from "@/sanity/queries/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "", "/artistas", "/servicios", "/sonido-iluminacion-menorca",
    "/artistas-menorca", "/showbusiness-hoteles-menorca", "/bodas-menorca",
    "/eventos-corporativos-menorca", "/gestion-laboral-artistas", "/agenda",
    "/proyectos", "/nosotros", "/contacto", "/privacidad", "/cookies", "/aviso-legal",
  ];
  const [artists, projects] = await Promise.all([
    safeSanityFetch<{ slug: string }[]>(artistSlugsQuery, []),
    safeSanityFetch<{ slug: string }[]>(projectSlugsQuery, []),
  ]);
  return [
    ...staticRoutes.map((path) => ({ url: new URL(path, siteUrl).toString(), changeFrequency: "weekly" as const, priority: path === "" ? 1 : .7 })),
    ...artists.map(({ slug }) => ({ url: new URL(`/artistas/${slug}`, siteUrl).toString(), changeFrequency: "weekly" as const, priority: .8 })),
    ...projects.map(({ slug }) => ({ url: new URL(`/proyectos/${slug}`, siteUrl).toString(), changeFrequency: "monthly" as const, priority: .6 })),
  ];
}
