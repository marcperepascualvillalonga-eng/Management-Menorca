import { EventList } from "@/components/events/event-list";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EmptyState } from "@/components/ui/empty-state";
import { safeSanityFetch } from "@/sanity/lib/fetch";
import { upcomingEventsQuery } from "@/sanity/queries/content";
import type { EventItem } from "@/types/content";
import { createMetadata } from "@/utils/metadata";
import { siteUrl } from "@/config/site";

export const metadata = createMetadata({
  title: "Agenda de conciertos y eventos en Menorca",
  description: "Próximas actuaciones y eventos musicales públicos publicados por Management Menorca.",
  path: "/agenda",
});

export default async function AgendaPage() {
  const events = await safeSanityFetch<EventItem[]>(upcomingEventsQuery, []);
  return (
    <main id="main-content">
      {events.length ? <JsonLd data={events.map((event) => ({
        "@context": "https://schema.org",
        "@type": "MusicEvent",
        name: event.title,
        startDate: event.startDate,
        endDate: event.endDate,
        eventStatus: event.eventStatus === "cancelled"
          ? "https://schema.org/EventCancelled"
          : "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: event.venue ? {
          "@type": "Place",
          name: event.venue,
          address: event.locality ? { "@type": "PostalAddress", addressLocality: event.locality, addressRegion: "Menorca" } : undefined,
        } : undefined,
        performer: event.artist ? { "@type": "PerformingGroup", name: event.artist.name } : undefined,
        organizer: { "@type": "Organization", name: "Management Menorca", url: siteUrl },
      }))} /> : null}
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
