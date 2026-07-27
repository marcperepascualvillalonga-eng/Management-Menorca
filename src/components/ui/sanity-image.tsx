import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import type { SanityImageValue } from "@/types/content";

type SanityImageProps = {
  image?: SanityImageValue;
  alt?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export function SanityImage({
  image,
  alt,
  fill,
  width = 1200,
  height = 800,
  sizes,
  priority,
  className,
}: SanityImageProps) {
  if (!image?.asset) return null;

  const src = image.asset.url ?? urlFor(image).width(width).height(height).url();

  return (
    <Image
      src={src}
      alt={alt ?? image.alt ?? ""}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
