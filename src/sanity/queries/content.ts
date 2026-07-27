import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`*[_type == "siteSettings"][0]{
  businessName, shortName, tagline, shortDescription, email, phone, whatsapp,
  address, locality, postalCode, region, country, facturillaUrl,
  primaryNavigation[]{label, href, external},
  footerNavigation[]{label, href, external},
  socialLinks[]{label, "href": url, "external": true},
  defaultSeoTitle, defaultSeoDescription
}`);

export const heroSlidesQuery = defineQuery(`*[_type == "heroSlide" && enabled == true] | order(order asc)[0...4]{
  _id, eyebrow, title, description, image,
  primaryCta{label, href}, secondaryCta{label, href}
}`);

export const artistsQuery = defineQuery(`*[_type == "artist" && status == "published"] | order(featuredOrder asc, name asc){
  _id, name, "slug": slug.current, shortDescription, mainImage, relationshipType,
  "categories": artistCategories[]->{title, "slug": slug.current},
  musicGenres, availableFormats, featured, hotelSuitable, weddingSuitable, corporateSuitable
}`);

export const featuredArtistsQuery = defineQuery(`*[_type == "artist" && status == "published" && featured == true] | order(featuredOrder asc)[0...8]{
  _id, name, "slug": slug.current, shortDescription, mainImage, relationshipType,
  "categories": artistCategories[]->{title, "slug": slug.current}, musicGenres
}`);

export const artistBySlugQuery = defineQuery(`*[_type == "artist" && status == "published" && slug.current == $slug][0]{
  _id, name, artistKind, "slug": slug.current, shortDescription, biography, mainImage, gallery,
  relationshipType, "categories": artistCategories[]->{title, "slug": slug.current},
  musicGenres, "eventTypes": eventTypes[]->{title, "slug": slug.current},
  availableFormats, languages, territory, videoUrl, spotifyUrl,
  socialLinks[]{label, "href": href, external}, "pressKitUrl": pressKit.asset->url,
  "technicalRiderUrl": technicalRider.asset->url, featured, hotelSuitable,
  weddingSuitable, corporateSuitable, seoTitle, seoDescription,
  "relatedArtists": relatedArtists[]->{_id, name, "slug": slug.current, shortDescription, mainImage, relationshipType}
}`);

export const artistSlugsQuery = defineQuery(`*[_type == "artist" && status == "published" && defined(slug.current)]{"slug": slug.current}`);

export const upcomingEventsQuery = defineQuery(`*[_type == "event" && publicEvent == true && startDate >= now()] | order(startDate asc)[0...12]{
  _id, title, "slug": slug.current, startDate, endDate, venue, locality, eventStatus,
  ticketStatus, ticketUrl, externalInfoUrl, image,
  "artist": artist->{name, "slug": slug.current}
}`);

export const featuredProjectsQuery = defineQuery(`*[_type == "project" && featured == true] | order(date desc)[0...6]{
  _id, title, "slug": slug.current, projectType, clientName, clientVisibility,
  locality, date, summary, gallery
}`);

export const projectsQuery = defineQuery(`*[_type == "project"] | order(date desc){
  _id, title, "slug": slug.current, projectType, clientName, clientVisibility,
  locality, date, summary, gallery
}`);

export const projectBySlugQuery = defineQuery(`*[_type == "project" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, projectType, clientName, clientVisibility,
  locality, date, summary, challenge, solution, gallery, videoUrl,
  services[]->{title, "slug": slug.current},
  artists[]->{name, "slug": slug.current}
}`);

export const projectSlugsQuery = defineQuery(`*[_type == "project" && defined(slug.current)]{"slug": slug.current}`);

export const faqItemsQuery = defineQuery(`*[_type == "faqItem"] | order(order asc){_id, question, answer, category}`);
