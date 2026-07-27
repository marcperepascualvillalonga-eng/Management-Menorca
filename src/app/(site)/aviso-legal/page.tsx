import { LegalPage } from "@/components/sections/legal-page";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({ title: "Aviso legal", description: "Información legal provisional de Management Menorca.", path: "/aviso-legal" });

export default function LegalNoticePage() {
  return <LegalPage title="Aviso legal" description="Titularidad, condiciones de uso y datos identificativos del sitio.">
    <h3>Datos identificativos</h3><p>[PENDIENTE: titular legal, NIF/CIF, domicilio, contacto y datos registrales].</p>
    <h3>Condiciones de uso</h3><p>[PENDIENTE: texto validado sobre uso del sitio, propiedad intelectual, responsabilidades y legislación aplicable].</p>
  </LegalPage>;
}
