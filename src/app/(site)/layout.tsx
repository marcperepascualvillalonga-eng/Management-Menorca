import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { defaultNavigation } from "@/config/site";
import { safeSanityFetch } from "@/sanity/lib/fetch";
import { siteSettingsQuery } from "@/sanity/queries/content";
import type { SiteSettings } from "@/types/content";

export default async function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const settings = await safeSanityFetch<SiteSettings | null>(
    siteSettingsQuery,
    null,
  );
  const navigation = defaultNavigation;

  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <Header
        name={settings?.shortName ?? settings?.businessName ?? "Management Menorca"}
        navigation={navigation}
      />
      {children}
      <Footer settings={settings} navigation={navigation} />
    </>
  );
}
