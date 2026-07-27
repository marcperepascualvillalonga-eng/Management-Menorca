import Link from "next/link";

import type { NavigationItem, SiteSettings } from "@/types/content";

type FooterProps = {
  settings: SiteSettings | null;
  navigation: NavigationItem[];
};

export function Footer({ settings, navigation }: FooterProps) {
  const name = settings?.businessName ?? "Management Menorca";

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <p className="eyebrow">Menorca · Illes Balears</p>
          <h2>{name}</h2>
          <p className="footer-intro">
            Artistas, producción y experiencias musicales en Menorca.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <p className="footer-label">Explorar</p>
            {navigation.slice(0, 6).map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>
          <div>
            <p className="footer-label">Contacto</p>
            {settings?.email ? <a href={`mailto:${settings.email}`}>{settings.email}</a> : <Link href="/contacto">Formulario de contacto</Link>}
            {settings?.phone ? <a href={`tel:${settings.phone}`}>{settings.phone}</a> : null}
            <Link href="/contacto">Solicitar propuesta</Link>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {name}</p>
        <div>
          <Link href="/privacidad">Privacidad</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/aviso-legal">Aviso legal</Link>
        </div>
      </div>
    </footer>
  );
}
