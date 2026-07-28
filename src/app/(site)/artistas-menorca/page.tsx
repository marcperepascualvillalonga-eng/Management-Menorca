import { permanentRedirect } from "next/navigation";

export default function LegacyArtistsPage() {
  permanentRedirect("/artistas");
}
