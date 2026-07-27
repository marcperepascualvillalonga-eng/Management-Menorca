import Link from "next/link";

import type { EventItem } from "@/types/content";

export function EventList({ events }: { events: EventItem[] }) {
  return (
    <div className="event-list">
      {events.map((event) => {
        const date = new Date(event.startDate);
        const href = event.ticketUrl ?? event.externalInfoUrl;
        return (
          <article className="event-row" key={event._id}>
            <time dateTime={event.startDate}>
              <strong>{date.toLocaleDateString("es-ES", { day: "2-digit" })}</strong>
              <span>{date.toLocaleDateString("es-ES", { month: "short" })}</span>
            </time>
            <div>
              <p className="event-artist">{event.artist?.name ?? event.title}</p>
              <p>{[event.venue, event.locality].filter(Boolean).join(" · ")}</p>
            </div>
            <p className="event-time">{date.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}</p>
            <span className="event-status">{event.eventStatus === "cancelled" ? "Cancelado" : event.ticketStatus ?? "Información"}</span>
            {href ? <a className="event-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={`Información sobre ${event.title}`}>↗</a> : <Link className="event-link" href="/contacto" aria-label={`Consultar ${event.title}`}>↗</Link>}
          </article>
        );
      })}
    </div>
  );
}
