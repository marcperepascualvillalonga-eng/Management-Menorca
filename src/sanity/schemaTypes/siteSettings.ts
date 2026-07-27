import { defineArrayMember, defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Configuració del lloc",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nom del lloc",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descripció",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "contactEmail",
      title: "Correu de contacte",
      type: "string",
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: "contactPhone",
      title: "Telèfon de contacte",
      type: "string",
    }),
    defineField({
      name: "socialLinks",
      title: "Xarxes socials",
      type: "array",
      of: [
        defineArrayMember({
          name: "socialLink",
          title: "Enllaç social",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Nom",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (rule) =>
                rule
                  .uri({ scheme: ["http", "https"] })
                  .required(),
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "url",
            },
          },
        }),
      ],
    }),
  ],
});
