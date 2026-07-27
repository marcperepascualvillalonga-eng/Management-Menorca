import { EventList } from "@/components/events/event-list";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EmptyState } from "@/components/ui/empty-state";
import { safeSanityFetch } from "@/sanity/lib/fetch";
import { upcomingEventsQuery } from "@/sanity/queries/content";
import type { EventItem } from "@/types/content";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Agenda de conciertos y eventos en Menorca",
  description: "Próximas actuaciones y eventos musicales públicos publicados por Management Menorca.",
  path: "/agenda",
});

export default async function AgendaPage() {
  const events = await safeSanityFetch<EventItem[]>(upcomingEventsQuery, []);
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Agenda" }]} />
          <p className="eyebrow">Próximas fechas</p>
          <h1>Música en directo en Menorca.</h1>
          <p className="page-hero-description">Solo mostramos eventos públicos confirmados y publicados desde Sanity. Los eventos privados nunca aparecen en esta agenda.</p>
        </div>
      </section>
      <section className="section"><div className="container">
        {events.length ? <EventList events={events} /> : <EmptyState title="No hay eventos públicos publicados." description="La agenda se actualizará cuando existan nuevas fechas confirmadas." />}
      </div></section>
    </main>
  );
}
