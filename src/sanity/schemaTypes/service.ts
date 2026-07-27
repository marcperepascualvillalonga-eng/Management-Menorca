import { defineArrayMember, defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Servei",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Títol",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Resum",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "description",
      title: "Descripció",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "image",
      title: "Imatge",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Ordre",
      type: "number",
      validation: (rule) => rule.integer().min(0),
    }),
  ],
  orderings: [
    {
      title: "Ordre manual",
      name: "manualOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
