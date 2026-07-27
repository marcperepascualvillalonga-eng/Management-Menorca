import { LegalPage } from "@/components/sections/legal-page";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({ title: "Política de cookies", description: "Información provisional sobre cookies y servicios externos.", path: "/cookies" });

export default function CookiesPage() {
  return <LegalPage title="Política de cookies" description="Servicios esenciales y externos utilizados por esta web.">
    <h3>Estado actual</h3><p>La primera versión no carga analítica ni identificadores publicitarios. Los vídeos externos no se cargan hasta que la persona usuaria los activa expresamente.</p>
    <h3>Configuración pendiente</h3><p>Si se activa GA4, Google Tag Manager u otro proveedor, deberá implantarse un gestor de consentimiento real y actualizar esta política con finalidades, duración y proveedores.</p>
  </LegalPage>;
}
