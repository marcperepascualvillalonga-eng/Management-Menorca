"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { urlFor } from "@/sanity/lib/image";
import type { Artist } from "@/types/content";

export function ArtistHero({
  artists,
  locale = "es",
}: {
  artists: Artist[];
  locale?: "es" | "ca";
}) {
  const slides = useMemo(
    () => artists.filter((artist) => artist.mainImage?.asset).slice(0, 10),
    [artists],
  );
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2 || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      5200,
    );
    return () => window.clearInterval(interval);
  }, [slides.length]);

  const ca = locale === "ca";
  const paths = ca
    ? ["/ca/artistes", "/ca/so-illuminacio-menorca", "/ca/casaments-menorca"]
    : ["/artistas", "/sonido-iluminacion-menorca", "/bodas-menorca"];
  const verticals = ca
    ? ["Artistes i booking", "So i il·luminació", "Casaments"]
    : ["Artistas y booking", "Sonido e iluminación", "Bodas"];

  return (
    <section className="artist-hero" aria-label={ca ? "Artistes destacats" : "Artistas destacados"}>
      <div className="artist-hero-stage">
        {slides.map((artist, index) => (
          <article
            className={`artist-hero-slide ${index === active ? "is-active" : ""}`}
            aria-hidden={index !== active}
            key={artist._id}
          >
            <Image
              src={urlFor(artist.mainImage!).width(2000).height(1150).url()}
              alt={artist.mainImage?.alt ?? artist.name}
              fill
              priority={index === 0}
              sizes="100vw"
            />
            <div className="artist-hero-overlay" />
            <div className="container artist-hero-content">
              <p className="eyebrow light">
                {ca ? "Artistes · Booking · Producció · Menorca" : "Artistas · Booking · Producción · Menorca"}
              </p>
              <h1>
                {ca
                  ? "Artistes, so i moments que es recorden."
                  : "Artistas, sonido y momentos que se recuerdan."}
              </h1>
              <p>
                {ca
                  ? "Booking d’artistes, producció tècnica professional i música per a casaments a Menorca."
                  : "Booking de artistas, producción técnica profesional y música para bodas en Menorca."}
              </p>
              <div className="hero-actions">
                <Link className="button button-accent" href={ca ? "/ca/contacte" : "/contacto"}>
                  {ca ? "Contacta’ns" : "Contáctanos"}
                </Link>
                <Link className="button button-ghost" href={paths[0]}>
                  {ca ? "Veure artistes" : "Ver artistas"}
                </Link>
              </div>
              <span className="artist-hero-credit">{artist.name}</span>
            </div>
          </article>
        ))}
        {!slides.length ? (
          <div className="artist-hero-empty">
            <div className="container artist-hero-content">
              <p className="eyebrow light">Management Menorca</p>
              <h1>{ca ? "Artistes, so i casaments a Menorca." : "Artistas, sonido y bodas en Menorca."}</h1>
              <Link className="button button-accent" href={ca ? "/ca/contacte" : "/contacto"}>
                {ca ? "Contacta’ns" : "Contáctanos"}
              </Link>
            </div>
          </div>
        ) : null}
      </div>
      <nav className="hero-verticals" aria-label={ca ? "Àrees de servei" : "Áreas de servicio"}>
        {verticals.map((label, index) => (
          <Link href={paths[index]} key={label}>
            <span>0{index + 1}</span>
            <strong>{label}</strong>
            <i aria-hidden="true">↗</i>
          </Link>
        ))}
      </nav>
    </section>
  );
}
