import { defineField, defineType } from "sanity";

export const heroSlideType = defineType({
  name: "heroSlide",
  title: "Slide de portada",
  type: "document",
  fields: [
    defineField({ name: "internalName", title: "Nombre interno", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "eyebrow", title: "Antetítulo", type: "string" }),
    defineField({ name: "title", title: "Título", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Descripción", type: "text", rows: 3 }),
    defineField({ name: "image", title: "Imagen", type: "image", options: { hotspot: true } }),
    defineField({ name: "imageAlt", title: "Texto alternativo", type: "string" }),
    defineField({ name: "video", title: "Vídeo", type: "file", options: { accept: "video/*" } }),
    defineField({ name: "primaryCta", title: "CTA principal", type: "cta" }),
    defineField({ name: "secondaryCta", title: "CTA secundario", type: "cta" }),
    defineField({ name: "order", title: "Orden", type: "number", validation: (rule) => rule.integer().min(0) }),
    defineField({ name: "enabled", title: "Activo", type: "boolean", initialValue: true }),
  ],
  orderings: [{ title: "Orden", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "internalName", subtitle: "title", media: "image" } },
});
