import { defineArrayMember, defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Proyecto",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "projectType", title: "Tipo de proyecto", type: "string" }),
    defineField({ name: "clientName", title: "Cliente", type: "string" }),
    defineField({ name: "clientVisibility", title: "Mostrar cliente", type: "boolean", initialValue: false }),
    defineField({ name: "locality", title: "Localidad", type: "string" }),
    defineField({ name: "date", title: "Fecha", type: "date" }),
    defineField({ name: "summary", title: "Resumen", type: "text", rows: 3 }),
    defineField({ name: "challenge", title: "El reto", type: "array", of: [defineArrayMember({ type: "block" })] }),
    defineField({ name: "solution", title: "La solución", type: "array", of: [defineArrayMember({ type: "block" })] }),
    defineField({ name: "services", title: "Servicios", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "service" }] })] }),
    defineField({ name: "artists", title: "Artistas", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "artist" }] })] }),
    defineField({ name: "gallery", title: "Galería", type: "array", of: [defineArrayMember({ type: "image", options: { hotspot: true } })] }),
    defineField({ name: "videoUrl", title: "Vídeo", type: "url" }),
    defineField({
      name: "testimonial",
      title: "Testimonio verificado",
      type: "object",
      fields: [
        defineField({ name: "quote", title: "Texto", type: "text", rows: 3 }),
        defineField({ name: "author", title: "Autor", type: "string" }),
        defineField({ name: "role", title: "Cargo", type: "string" }),
      ],
      description: "Añadir solo con permiso y datos reales.",
    }),
    defineField({ name: "featured", title: "Destacado", type: "boolean", initialValue: false }),
    defineField({ name: "seoTitle", title: "Título SEO", type: "string", validation: (rule) => rule.max(60) }),
    defineField({ name: "seoDescription", title: "Descripción SEO", type: "text", rows: 3, validation: (rule) => rule.max(160) }),
  ],
  preview: {
    select: { title: "title", client: "clientName", showClient: "clientVisibility", date: "date", media: "gallery.0" },
    prepare({ title, client, showClient, date, media }) {
      return { title, media, subtitle: [showClient ? client : null, date].filter(Boolean).join(" · ") };
    },
  },
});
