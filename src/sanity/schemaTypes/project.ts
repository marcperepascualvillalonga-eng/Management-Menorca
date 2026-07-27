import { defineArrayMember, defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Projecte",
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
      title: "Imatge principal",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "year",
      title: "Any",
      type: "number",
      validation: (rule) => rule.integer().min(1900),
    }),
    defineField({
      name: "services",
      title: "Serveis",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "service" }],
        }),
      ],
    }),
    defineField({
      name: "artists",
      title: "Artistes",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "artist" }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "year",
      media: "image",
    },
  },
});
