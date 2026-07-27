"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { urlFor } from "@/sanity/lib/image";
import type { HeroSlide } from "@/types/content";

const fallbackImages = [
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=2200&q=88",
  "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=2200&q=88",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2200&q=88",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=88",
];

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const visibleSlides = useMemo(() => slides.slice(0, 4), [slides]);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || visibleSlides.length < 2) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const interval = window.setInterval(
      () => setActive((current) => (current + 1) % visibleSlides.length),
      8000,
    );
    return () => window.clearInterval(interval);
  }, [paused, visibleSlides.length]);

  const selectSlide = (index: number) => {
    setPaused(true);
    setActive(index);
  };

  return (
    <section
      className="hero-carousel"
      aria-roledescription="carrusel"
      aria-label="Servicios destacados"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
    >
      {visibleSlides.map((slide, index) => {
        const imageUrl = slide.image?.asset
          ? urlFor(slide.image).width(2200).height(1400).url()
          : fallbackImages[index];
        const isActive = index === active;

        return (
          <article
            key={slide._id}
            className={`hero-slide ${isActive ? "is-active" : ""}`}
            aria-hidden={!isActive}
          >
            <Image
              src={imageUrl}
              alt={slide.image?.alt ?? ""}
              fill
              priority={index === 0}
              sizes="100vw"
              className="hero-image"
            />
            <div className="hero-overlay" />
            <div className="container hero-content">
              <p className="eyebrow light">{slide.eyebrow}</p>
              {index === 0 ? <h1>{slide.title}</h1> : <h2>{slide.title}</h2>}
              {slide.description ? <p className="hero-description">{slide.description}</p> : null}
              <div className="hero-actions">
                {slide.primaryCta ? <Link className="button button-accent" href={slide.primaryCta.href}>{slide.primaryCta.label}</Link> : null}
                {slide.secondaryCta ? <Link className="button button-ghost" href={slide.secondaryCta.href}>{slide.secondaryCta.label}</Link> : null}
              </div>
            </div>
          </article>
        );
      })}
      <div className="container hero-controls">
        <div className="hero-indicators" role="tablist" aria-label="Seleccionar slide">
          {visibleSlides.map((slide, index) => (
            <button
              key={slide._id}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Mostrar slide ${index + 1}: ${slide.title}`}
              onClick={() => selectSlide(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <i />
            </button>
          ))}
        </div>
        <button className="pause-button" type="button" onClick={() => setPaused((value) => !value)}>
          {paused ? "Reanudar" : "Pausar"}
        </button>
      </div>
    </section>
  );
}
