import { defineArrayMember, defineField, defineType } from "sanity";

export const artistType = defineType({
  name: "artist",
  title: "Artista",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortBio",
      title: "Biografia breu",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "biography",
      title: "Biografia",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "image",
      title: "Imatge principal",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Text alternatiu",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "genres",
      title: "Gèneres",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    defineField({
      name: "active",
      title: "Actiu",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      active: "active",
    },
    prepare({ title, media, active }) {
      return {
        title,
        subtitle: active === false ? "Inactiu" : "Actiu",
        media,
      };
    },
  },
});
