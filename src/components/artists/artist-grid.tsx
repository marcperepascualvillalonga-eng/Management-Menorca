"use client";

import { useMemo, useState } from "react";

import type { Artist } from "@/types/content";
import { ArtistCard } from "./artist-card";

export function ArtistGrid({ artists }: { artists: Artist[] }) {
  const categories = useMemo(
    () => [
      "Todos",
      ...Array.from(
        new Set(
          artists.flatMap((artist) => [
            ...(artist.relationshipType ?? []),
            ...(artist.categories?.map((category) => category.title) ?? []),
            ...(artist.musicGenres ?? []),
          ]),
        ),
      ).sort(),
    ],
    [artists],
  );
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("Todos");

  const filtered = artists.filter((artist) => {
    const terms = [
      artist.name,
      ...(artist.relationshipType ?? []),
      ...(artist.categories?.map((category) => category.title) ?? []),
      ...(artist.musicGenres ?? []),
    ];
    return (
      terms.join(" ").toLowerCase().includes(query.toLowerCase()) &&
      (filter === "Todos" || terms.includes(filter))
    );
  });

  return (
    <div>
      <div className="artist-tools">
        <label className="search-field">
          <span className="sr-only">Buscar artista por nombre</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por nombre o estilo"
          />
          <span aria-hidden="true">⌕</span>
        </label>
        <div className="filter-list" aria-label="Filtrar artistas">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={filter === category ? "is-active" : ""}
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {filtered.length ? (
        <div className="artist-grid">
          {filtered.map((artist, index) => <ArtistCard key={artist._id} artist={artist} priority={index < 3} />)}
        </div>
      ) : (
        <div className="empty-state">
          <span aria-hidden="true">—</span>
          <h3>No encontramos artistas con estos filtros.</h3>
          <p>Prueba otra búsqueda o cuéntanos qué formato necesitas.</p>
          <button className="text-link" type="button" onClick={() => { setFilter("Todos"); setQuery(""); }}>Limpiar filtros</button>
        </div>
      )}
    </div>
  );
}
