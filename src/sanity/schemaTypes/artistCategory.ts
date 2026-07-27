import { defineField, defineType } from "sanity";

export const artistCategoryType = defineType({
  name: "artistCategory",
  title: "Categoría de artista",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Nombre", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Descripción", type: "text", rows: 3 }),
    defineField({ name: "order", title: "Orden", type: "number", validation: (rule) => rule.integer().min(0) }),
  ],
  orderings: [{ title: "Orden", name: "order", by: [{ field: "order", direction: "asc" }] }],
});
