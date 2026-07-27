import { defineArrayMember, defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  title: "Página",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({
      name: "hero",
      title: "Cabecera",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Antetítulo", type: "string" }),
        defineField({ name: "title", title: "Título", type: "string" }),
        defineField({ name: "description", title: "Descripción", type: "text", rows: 3 }),
        defineField({ name: "image", title: "Imagen", type: "image", options: { hotspot: true } }),
      ],
    }),
    defineField({ name: "modularContent", title: "Contenido", type: "array", of: [defineArrayMember({ type: "contentSection" })] }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
});
