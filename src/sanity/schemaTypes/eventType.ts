import { defineField, defineType } from "sanity";

export const eventTypeType = defineType({
  name: "eventType",
  title: "Tipus d'esdeveniment",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nom",
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
      name: "description",
      title: "Descripció",
      type: "text",
      rows: 3,
    }),
  ],
});
