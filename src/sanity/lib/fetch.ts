import type { QueryParams } from "next-sanity";

import { client } from "./client";

export async function safeSanityFetch<T>(
  query: string,
  fallback: T,
  params: QueryParams = {},
): Promise<T> {
  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate: 60 },
    });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "Sanity no está disponible; se muestra el contenido de reserva.",
        error instanceof Error ? error.message : "",
      );
    }
    return fallback;
  }
}
