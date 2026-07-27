import { defineArrayMember, defineField, defineType } from "sanity";

export const navigationItemType = defineType({
  name: "navigationItem",
  title: "Elemento de navegación",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Texto", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "href", title: "Enlace", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "external", title: "Enlace externo", type: "boolean", initialValue: false }),
  ],
});

export const ctaType = defineType({
  name: "cta",
  title: "Llamada a la acción",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Texto", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "href", title: "Enlace", type: "string", validation: (rule) => rule.required() }),
  ],
});

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Título SEO", type: "string", validation: (rule) => rule.max(60) }),
    defineField({ name: "description", title: "Descripción SEO", type: "text", rows: 3, validation: (rule) => rule.max(160) }),
    defineField({ name: "shareImage", title: "Imagen social", type: "image", options: { hotspot: true } }),
  ],
});

export const faqType = defineType({
  name: "faq",
  title: "Pregunta frecuente",
  type: "object",
  fields: [
    defineField({ name: "question", title: "Pregunta", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "answer",
      title: "Respuesta",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
      validation: (rule) => rule.required(),
    }),
  ],
});

export const contentSectionType = defineType({
  name: "contentSection",
  title: "Sección de contenido",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Antetítulo", type: "string" }),
    defineField({ name: "title", title: "Título", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "body",
      title: "Contenido",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({ name: "image", title: "Imagen", type: "image", options: { hotspot: true } }),
    defineField({ name: "imageAlt", title: "Texto alternativo", type: "string" }),
    defineField({ name: "primaryCta", title: "CTA", type: "cta" }),
  ],
});
