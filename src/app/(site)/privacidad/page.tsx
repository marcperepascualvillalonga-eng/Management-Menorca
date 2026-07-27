import { LegalPage } from "@/components/sections/legal-page";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({ title: "Política de privacidad", description: "Información provisional sobre privacidad y tratamiento de datos.", path: "/privacidad" });

export default function PrivacyPage() {
  return <LegalPage title="Política de privacidad" description="Cómo se tratarán los datos enviados a través de la web.">
    <h3>Responsable del tratamiento</h3><p>[PENDIENTE: razón social, NIF y domicilio fiscal verificados].</p>
    <h3>Datos y finalidad</h3><p>Los formularios solicitan únicamente información necesaria para responder consultas sobre artistas, eventos y producción. El envío automático no está activo hasta configurar un proveedor y completar esta política.</p>
    <h3>Conservación y derechos</h3><p>[PENDIENTE: plazos, base jurídica, destinatarios y canal para ejercer derechos].</p>
  </LegalPage>;
}
