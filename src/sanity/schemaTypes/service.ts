import { defineArrayMember, defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Servicio",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "shortDescription", title: "Descripción corta", type: "text", rows: 3 }),
    defineField({ name: "heroTitle", title: "Título de cabecera", type: "string" }),
    defineField({ name: "heroDescription", title: "Descripción de cabecera", type: "text", rows: 3 }),
    defineField({ name: "heroImage", title: "Imagen de cabecera", type: "image", options: { hotspot: true }, fields: [defineField({ name: "alt", title: "Texto alternativo", type: "string" })] }),
    defineField({ name: "sections", title: "Secciones", type: "array", of: [defineArrayMember({ type: "contentSection" })] }),
    defineField({ name: "benefits", title: "Beneficios", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "relatedArtists", title: "Artistas relacionados", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "artist" }] })] }),
    defineField({ name: "gallery", title: "Galería", type: "array", of: [defineArrayMember({ type: "image", options: { hotspot: true } })] }),
    defineField({ name: "faq", title: "Preguntas frecuentes", type: "array", of: [defineArrayMember({ type: "faq" })] }),
    defineField({ name: "primaryCta", title: "CTA principal", type: "cta" }),
    defineField({ name: "secondaryCta", title: "CTA secundario", type: "cta" }),
    defineField({ name: "featured", title: "Destacado", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Orden", type: "number", validation: (rule) => rule.integer().min(0) }),
    defineField({ name: "seoTitle", title: "Título SEO", type: "string", validation: (rule) => rule.max(60) }),
    defineField({ name: "seoDescription", title: "Descripción SEO", type: "text", rows: 3, validation: (rule) => rule.max(160) }),
    defineField({ name: "shareImage", title: "Imagen social", type: "image", options: { hotspot: true } }),
  ],
  orderings: [{ title: "Orden", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "shortDescription", media: "heroImage" } },
});
