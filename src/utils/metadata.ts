import type { Metadata } from "next";

import { siteUrl } from "@/config/site";

export function createMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = new URL(path, siteUrl);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Management Menorca",
      locale: "es_ES",
      type: "website",
      images: [{ url: "/og.png", width: 1792, height: 896, alt: "Management Menorca — Artistas, producción y experiencias musicales." }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}
