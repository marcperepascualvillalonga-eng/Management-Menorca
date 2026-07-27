import { defineArrayMember, defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Configuración general",
  type: "document",
  fields: [
    defineField({ name: "businessName", title: "Nombre comercial", type: "string", initialValue: "Management Menorca", validation: (rule) => rule.required() }),
    defineField({ name: "shortName", title: "Nombre corto", type: "string" }),
    defineField({ name: "tagline", title: "Eslogan", type: "string" }),
    defineField({ name: "shortDescription", title: "Descripción corta", type: "text", rows: 3 }),
    defineField({ name: "logo", title: "Logotipo", type: "image" }),
    defineField({ name: "favicon", title: "Favicon", type: "image" }),
    defineField({ name: "defaultSeoTitle", title: "Título SEO predeterminado", type: "string", validation: (rule) => rule.max(60) }),
    defineField({ name: "defaultSeoDescription", title: "Descripción SEO predeterminada", type: "text", rows: 3, validation: (rule) => rule.max(160) }),
    defineField({ name: "defaultShareImage", title: "Imagen social predeterminada", type: "image", options: { hotspot: true } }),
    defineField({ name: "email", title: "Correo", type: "string", validation: (rule) => rule.email() }),
    defineField({ name: "phone", title: "Teléfono", type: "string" }),
    defineField({ name: "whatsapp", title: "WhatsApp (formato internacional)", type: "string" }),
    defineField({ name: "address", title: "Dirección", type: "string" }),
    defineField({ name: "locality", title: "Localidad", type: "string" }),
    defineField({ name: "postalCode", title: "Código postal", type: "string" }),
    defineField({ name: "region", title: "Región", type: "string", initialValue: "Illes Balears" }),
    defineField({ name: "country", title: "País", type: "string", initialValue: "España" }),
    defineField({ name: "latitude", title: "Latitud", type: "number" }),
    defineField({ name: "longitude", title: "Longitud", type: "number" }),
    defineField({ name: "openingHours", title: "Horario de atención", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({
      name: "socialLinks",
      title: "Redes sociales",
      type: "array",
      of: [defineArrayMember({
        type: "object",
        fields: [
          defineField({ name: "label", title: "Red", type: "string", validation: (rule) => rule.required() }),
          defineField({ name: "url", title: "URL", type: "url", validation: (rule) => rule.uri({ scheme: ["http", "https"] }).required() }),
        ],
      })],
    }),
    defineField({ name: "facturillaUrl", title: "URL de Facturilla", type: "url", initialValue: "https://www.facturilla.es/" }),
    defineField({ name: "primaryNavigation", title: "Navegación principal", type: "array", of: [defineArrayMember({ type: "navigationItem" })] }),
    defineField({ name: "footerNavigation", title: "Navegación del pie", type: "array", of: [defineArrayMember({ type: "navigationItem" })] }),
    defineField({ name: "legalData", title: "Datos legales", type: "text", rows: 6, description: "Completar con datos legales verificados antes de publicar." }),
    defineField({
      name: "colorSettings",
      title: "Colores de marca",
      type: "object",
      fields: [
        defineField({ name: "accent", title: "Color de acento (hex)", type: "string" }),
        defineField({ name: "dark", title: "Color oscuro (hex)", type: "string" }),
      ],
    }),
    defineField({ name: "contactRecipients", title: "Destinatarios de formularios", type: "array", of: [defineArrayMember({ type: "string" })], description: "Solo direcciones de correo. No incluyas claves ni secretos." }),
  ],
  preview: {
    prepare: () => ({ title: "Configuración general", subtitle: "Datos, navegación y SEO del sitio" }),
  },
});
