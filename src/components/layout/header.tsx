"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type { NavigationItem } from "@/types/content";

type HeaderProps = {
  name: string;
  navigation: NavigationItem[];
};

export function Header({ name, navigation }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/" aria-label={`${name}, inicio`}>
          <span>{name}</span>
          <small>Menorca · Música · Producción</small>
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="button button-dark header-cta" href="/contacto">
          Solicitar propuesta
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
      <div
        id="mobile-navigation"
        className={`mobile-nav ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Navegación móvil">
          {navigation.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
          <Link className="button button-accent" href="/contacto" onClick={() => setOpen(false)}>
            Solicitar propuesta
          </Link>
        </nav>
      </div>
    </header>
  );
}
