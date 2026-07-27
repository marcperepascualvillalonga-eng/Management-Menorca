import Link from "next/link";

export function ContactCta({ whatsapp }: { whatsapp?: string }) {
  const cleanWhatsapp = whatsapp?.replace(/\D/g, "");

  return (
    <section className="contact-cta">
      <div className="container contact-cta-inner">
        <p className="eyebrow light">Empecemos por una conversación</p>
        <h2>Cuéntanos qué tienes en mente.</h2>
        <p>
          Te ayudamos a encontrar el artista, el formato y la producción que
          mejor encajan con tu evento.
        </p>
        <div className="hero-actions">
          <Link className="button button-accent" href="/contacto">Solicitar propuesta</Link>
          {cleanWhatsapp ? (
            <a className="button button-ghost" href={`https://wa.me/${cleanWhatsapp}`} target="_blank" rel="noopener noreferrer">
              Hablar por WhatsApp
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
