import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Evento",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "artist", title: "Artista", type: "reference", to: [{ type: "artist" }] }),
    defineField({ name: "startDate", title: "Inicio", type: "datetime", validation: (rule) => rule.required() }),
    defineField({ name: "endDate", title: "Final", type: "datetime", validation: (rule) => rule.min(rule.valueOfField("startDate")) }),
    defineField({ name: "venue", title: "Espacio", type: "string" }),
    defineField({ name: "locality", title: "Municipio", type: "string" }),
    defineField({ name: "island", title: "Isla", type: "string", initialValue: "Menorca" }),
    defineField({ name: "address", title: "Dirección", type: "string" }),
    defineField({ name: "publicEvent", title: "Evento público", type: "boolean", initialValue: false }),
    defineField({ name: "eventStatus", title: "Estado del evento", type: "string", options: { list: [{ title: "Programado", value: "scheduled" }, { title: "Pospuesto", value: "postponed" }, { title: "Cancelado", value: "cancelled" }] }, initialValue: "scheduled" }),
    defineField({ name: "ticketStatus", title: "Entradas", type: "string", options: { list: ["Disponible", "Entradas", "Agotado", "Gratuito", "Información"] } }),
    defineField({ name: "ticketUrl", title: "URL de entradas", type: "url" }),
    defineField({ name: "externalInfoUrl", title: "URL de información", type: "url" }),
    defineField({ name: "image", title: "Imagen", type: "image", options: { hotspot: true }, fields: [defineField({ name: "alt", title: "Texto alternativo", type: "string" })] }),
    defineField({ name: "description", title: "Descripción", type: "text", rows: 4 }),
    defineField({ name: "featured", title: "Destacado", type: "boolean", initialValue: false }),
    defineField({ name: "seoTitle", title: "Título SEO", type: "string", validation: (rule) => rule.max(60) }),
    defineField({ name: "seoDescription", title: "Descripción SEO", type: "text", rows: 3, validation: (rule) => rule.max(160) }),
  ],
  preview: {
    select: { title: "title", date: "startDate", publicEvent: "publicEvent", media: "image" },
    prepare({ title, date, publicEvent, media }) {
      return { title, media, subtitle: `${date ? new Date(date).toLocaleDateString("es-ES") : "Sin fecha"} · ${publicEvent ? "Público" : "Privado"}` };
    },
  },
});
