import { defineArrayMember, defineField, defineType } from "sanity";

export const faqItemType = defineType({
  name: "faqItem",
  title: "Pregunta frecuente",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Pregunta", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "answer", title: "Respuesta", type: "array", of: [defineArrayMember({ type: "block" })], validation: (rule) => rule.required() }),
    defineField({ name: "category", title: "Categoría", type: "string" }),
    defineField({ name: "order", title: "Orden", type: "number", validation: (rule) => rule.integer().min(0) }),
  ],
  orderings: [{ title: "Orden", name: "order", by: [{ field: "order", direction: "asc" }] }],
});
