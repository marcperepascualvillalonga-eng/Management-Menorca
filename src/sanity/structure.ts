import type { StructureResolver } from "sanity/structure";

const singletonTypes = new Set(["siteSettings"]);

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Contenido")
    .items([
      S.listItem()
        .title("Configuración")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings"),
        ),
      S.divider(),
      S.documentTypeListItem("artist").title("Artistas"),
      S.documentTypeListItem("artistCategory").title("Categorías de artistas"),
      S.documentTypeListItem("event").title("Agenda"),
      S.documentTypeListItem("eventType").title("Tipos de evento"),
      S.documentTypeListItem("service").title("Servicios"),
      S.documentTypeListItem("project").title("Proyectos"),
      S.documentTypeListItem("page").title("Páginas"),
      S.documentTypeListItem("faqItem").title("FAQs"),
      S.documentTypeListItem("heroSlide").title("Hero"),
    ]);

export const singletonActions = (
  actions: string[],
  context: { schemaType: string },
) =>
  singletonTypes.has(context.schemaType)
    ? actions.filter((action) => ["publish", "discardChanges", "restore"].includes(action))
    : actions;
