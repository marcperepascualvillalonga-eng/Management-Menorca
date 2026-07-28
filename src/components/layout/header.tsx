"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import type { NavigationItem } from "@/types/content";

type HeaderProps = {
  name: string;
  navigation: NavigationItem[];
};

export function Header({ name, navigation }: HeaderProps) {
  const pathname = usePathname();
  const isCatalan = pathname === "/ca" || pathname.startsWith("/ca/");
  const localizedNavigation = isCatalan
    ? [
        { label: "Artistes", href: "/ca/artistes" },
        { label: "So i il·luminació", href: "/ca/so-illuminacio-menorca" },
        { label: "Casaments", href: "/ca/casaments-menorca" },
      ]
    : navigation;
  const translatedPaths: Record<string, string> = {
    "/": "/ca",
    "/artistas": "/ca/artistes",
    "/sonido-iluminacion-menorca": "/ca/so-illuminacio-menorca",
    "/bodas-menorca": "/ca/casaments-menorca",
    "/contacto": "/ca/contacte",
    "/ca": "/",
    "/ca/artistes": "/artistas",
    "/ca/so-illuminacio-menorca": "/sonido-iluminacion-menorca",
    "/ca/casaments-menorca": "/bodas-menorca",
    "/ca/contacte": "/contacto",
  };
  const languageHref = translatedPaths[pathname] ?? (isCatalan ? "/" : "/ca");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.lang = isCatalan ? "ca" : "es";
  }, [isCatalan]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
      if (event.key === "Tab" && open && mobileNavRef.current) {
        const focusable = Array.from(
          mobileNavRef.current.querySelectorAll<HTMLElement>("a, button"),
        );
        const first = focusable[0];
        const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      mobileNavRef.current?.querySelector<HTMLElement>("a")?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Link className="wordmark" href={isCatalan ? "/ca" : "/"} aria-label={`${name}, ${isCatalan ? "inici" : "inicio"}`}>
          <span>{name}</span>
          <small>{isCatalan ? "Menorca · Música · Producció" : "Menorca · Música · Producción"}</small>
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {localizedNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="language-switch" href={languageHref} hrefLang={isCatalan ? "es" : "ca"} lang={isCatalan ? "es" : "ca"}>
          {isCatalan ? "ES" : "CA"}
        </Link>
        <Link className="button button-dark header-cta" href={isCatalan ? "/ca/contacte" : "/contacto"}>
          {isCatalan ? "Contacta’ns" : "Contáctanos"}
        </Link>
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? (isCatalan ? "Tancar menú" : "Cerrar menú") : (isCatalan ? "Obrir menú" : "Abrir menú")}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
      <div
        ref={mobileNavRef}
        id="mobile-navigation"
        className={`mobile-nav ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Navegación móvil">
          {localizedNavigation.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
          <Link className="mobile-language-switch" href={languageHref} onClick={() => setOpen(false)}>
            {isCatalan ? "Cambiar a castellano" : "Canviar a català"}
          </Link>
          <Link className="button button-accent" href={isCatalan ? "/ca/contacte" : "/contacto"} onClick={() => setOpen(false)}>
            {isCatalan ? "Contacta’ns" : "Contáctanos"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
