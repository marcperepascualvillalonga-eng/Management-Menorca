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
  const languagePairs: Record<string, string> = {
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
  const alternatePath = languagePairs[path];
  const isCatalan = path === "/ca" || path.startsWith("/ca/");
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: alternatePath
        ? {
            [isCatalan ? "ca" : "es"]: url,
            [isCatalan ? "es" : "ca"]: new URL(alternatePath, siteUrl),
            "x-default": new URL(isCatalan ? alternatePath : path, siteUrl),
          }
        : undefined,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Management Menorca",
      locale: isCatalan ? "ca_ES" : "es_ES",
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
