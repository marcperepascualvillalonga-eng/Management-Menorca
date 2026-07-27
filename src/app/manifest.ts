import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Management Menorca",
    short_name: "Management Menorca",
    description: "Artistas, producción y experiencias musicales en Menorca.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f2eb",
    theme_color: "#0b1b20",
    lang: "es",
  };
}
