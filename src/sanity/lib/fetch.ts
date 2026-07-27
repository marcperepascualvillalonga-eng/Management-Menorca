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
    console.error("Sanity fetch failed", error);
    return fallback;
  }
}
