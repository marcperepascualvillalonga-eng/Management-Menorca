"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavigationItem, SiteSettings } from "@/types/content";

type FooterProps = {
  settings: SiteSettings | null;
  navigation: NavigationItem[];
};

export function Footer({ settings, navigation }: FooterProps) {
  const pathname = usePathname();
  const ca = pathname === "/ca" || pathname.startsWith("/ca/");
  const name = settings?.businessName ?? "Management Menorca";
  const links = ca
    ? [
        { label: "Artistes", href: "/ca/artistes" },
        { label: "So i il·luminació", href: "/ca/so-illuminacio-menorca" },
        { label: "Casaments", href: "/ca/casaments-menorca" },
      ]
    : navigation;
  const contactPath = ca ? "/ca/contacte" : "/contacto";

  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <p className="eyebrow">Menorca · Illes Balears</p>
          <h2>{name}</h2>
          <p className="footer-intro">
            {ca
              ? "Artistes, producció i experiències musicals a Menorca."
              : "Artistas, producción y experiencias musicales en Menorca."}
          </p>
        </div>
        <div className="footer-links">
          <div>
            <p className="footer-label">{ca ? "Explorar" : "Explorar"}</p>
            {links.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>
          <div>
            <p className="footer-label">{ca ? "Contacte" : "Contacto"}</p>
            {settings?.email ? <a href={`mailto:${settings.email}`}>{settings.email}</a> : <Link href={contactPath}>{ca ? "Formulari de contacte" : "Formulario de contacto"}</Link>}
            {settings?.phone ? <a href={`tel:${settings.phone}`}>{settings.phone}</a> : null}
            <Link href={contactPath}>{ca ? "Sol·licitar proposta" : "Solicitar propuesta"}</Link>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {name}</p>
        <div>
          <Link href="/privacidad">{ca ? "Privacitat" : "Privacidad"}</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/aviso-legal">{ca ? "Avís legal" : "Aviso legal"}</Link>
        </div>
      </div>
    </footer>
  );
}
