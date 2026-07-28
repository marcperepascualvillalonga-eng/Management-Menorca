import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { siteUrl } from "@/config/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Management Menorca | Artistas, producción y música",
    template: "%s | Management Menorca",
  },
  description:
    "Artistas, sonido, iluminación, audiovisuales y servicios para bodas y eventos en Menorca.",
  applicationName: "Management Menorca",
  manifest: "/manifest.webmanifest",
  openGraph: {
    images: [{ url: "/og.png", width: 1792, height: 896, alt: "Management Menorca — Artistas, producción y experiencias musicales." }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
