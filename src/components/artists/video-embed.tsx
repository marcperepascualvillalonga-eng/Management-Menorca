"use client";

import { useMemo, useState } from "react";

function getEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }
    if (parsed.hostname === "youtu.be") {
      return `https://www.youtube-nocookie.com/embed/${parsed.pathname.slice(1)}`;
    }
    if (parsed.hostname.includes("vimeo.com")) {
      const id = parsed.pathname.split("/").filter(Boolean).at(-1);
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }
  } catch {
    return null;
  }
  return null;
}

export function VideoEmbed({ url, title }: { url: string; title: string }) {
  const embedUrl = useMemo(() => getEmbedUrl(url), [url]);
  const [consented, setConsented] = useState(false);

  if (!embedUrl) return <a className="text-link" href={url} target="_blank" rel="noopener noreferrer">Ver vídeo externo <span>↗</span></a>;

  return (
    <div className="video-embed">
      {consented ? (
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <div className="video-consent">
          <p>Este vídeo se carga desde un servicio externo y puede utilizar cookies.</p>
          <button className="button button-dark" type="button" onClick={() => setConsented(true)}>Cargar vídeo</button>
        </div>
      )}
    </div>
  );
}
