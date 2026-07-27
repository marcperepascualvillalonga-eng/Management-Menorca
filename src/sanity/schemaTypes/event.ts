import { defineArrayMember, defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Esdeveniment",
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
      name: "eventType",
      title: "Tipus d'esdeveniment",
      type: "reference",
      to: [{ type: "eventType" }],
    }),
    defineField({
      name: "startDate",
      title: "Data d'inici",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "Data de finalització",
      type: "datetime",
      validation: (rule) =>
        rule.min(rule.valueOfField("startDate")).warning(
          "La data de finalització ha de ser posterior a la d'inici.",
        ),
    }),
    defineField({
      name: "venue",
      title: "Espai",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Ubicació",
      type: "string",
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
      name: "published",
      title: "Publicat",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "startDate",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle
          ? new Intl.DateTimeFormat("ca-ES", {
              dateStyle: "medium",
              timeStyle: "short",
            }).format(new Date(subtitle))
          : "Sense data",
        media,
      };
    },
  },
});
