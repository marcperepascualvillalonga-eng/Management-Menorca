import type { PortableTextBlock } from "next-sanity";

export type SanityImageValue = {
  asset?: { _ref?: string; url?: string };
  alt?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
};

export type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type SiteSettings = {
  businessName?: string;
  shortName?: string;
  tagline?: string;
  shortDescription?: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
  address?: string;
  locality?: string;
  postalCode?: string;
  region?: string;
  country?: string;
  facturillaUrl?: string;
  primaryNavigation?: NavigationItem[];
  footerNavigation?: NavigationItem[];
  socialLinks?: NavigationItem[];
  defaultSeoTitle?: string;
  defaultSeoDescription?: string;
};

export type Artist = {
  _id: string;
  name: string;
  slug: string;
  shortDescription?: string;
  biography?: PortableTextBlock[];
  mainImage?: SanityImageValue;
  gallery?: SanityImageValue[];
  relationshipType?: string[];
  categories?: { title: string; slug: string }[];
  musicGenres?: string[];
  eventTypes?: { title: string; slug: string }[];
  availableFormats?: string[];
  languages?: string[];
  territory?: string;
  videoUrl?: string;
  spotifyUrl?: string;
  socialLinks?: NavigationItem[];
  pressKitUrl?: string;
  technicalRiderUrl?: string;
  featured?: boolean;
  hotelSuitable?: boolean;
  weddingSuitable?: boolean;
  corporateSuitable?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  relatedArtists?: Artist[];
};

export type HeroSlide = {
  _id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  image?: SanityImageValue;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export type EventItem = {
  _id: string;
  title: string;
  slug: string;
  artist?: { name: string; slug: string };
  startDate: string;
  endDate?: string;
  venue?: string;
  locality?: string;
  eventStatus?: string;
  ticketStatus?: string;
  ticketUrl?: string;
  externalInfoUrl?: string;
  image?: SanityImageValue;
};

export type Project = {
  _id: string;
  title: string;
  slug: string;
  projectType?: string;
  clientName?: string;
  clientVisibility?: boolean;
  locality?: string;
  date?: string;
  summary?: string;
  gallery?: SanityImageValue[];
};

export type FaqItem = {
  _id?: string;
  question: string;
  answer: PortableTextBlock[] | string;
};
