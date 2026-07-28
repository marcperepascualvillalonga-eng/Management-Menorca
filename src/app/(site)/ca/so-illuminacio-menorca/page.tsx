import { ServiceLanding } from "@/components/sections/service-landing";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({ title: "So i il·luminació professional a Menorca", description: "So, il·luminació, pantalles LED, vídeo i streaming per a concerts, corporatius i esdeveniments a Menorca.", path: "/ca/so-illuminacio-menorca" });

export default function SoundCaPage() {
  return <ServiceLanding locale="ca" eyebrow="Producció tècnica i audiovisual" title="So i il·luminació professional per a esdeveniments a Menorca." intro="Producció tècnica per a concerts, corporatius, celebracions i actes públics: so, llum, vídeo, pantalles LED i streaming coordinats per un mateix equip." path="/ca/so-illuminacio-menorca" image="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=86" imageAlt="Producció de so i il·luminació en un esdeveniment" problemTitle="Cada esdeveniment necessita una solució tècnica diferent." problemBody={["Partim de l’espai, el contingut, el públic i el desenvolupament previst.", "Dissenyam la proposta i coordinam muntatge, proves, operació tècnica i desmuntatge."]} benefits={[
    {title:"So professional",description:"Sistemes, microfonia i operació adaptats a l’espai i al públic."},
    {title:"Il·luminació",description:"Llum escènica, ambiental i corporativa."},
    {title:"Concerts i directes",description:"Sonorització, monitors, llum i coordinació de riders."},
    {title:"Esdeveniments corporatius",description:"Presentacions, conferències, gales i activacions."},
    {title:"Pantalles LED i vídeo",description:"Continguts, presentacions i suport visual."},
    {title:"Streaming",description:"Emissió d’esdeveniments presencials, en línia o híbrids."},
  ]} process={["Recollim la informació de l’esdeveniment.","Preparam una proposta tècnica adequada.","Coordinam accessos, muntatge i proves.","Operam el servei i gestionam el desmuntatge."]} faqs={[
    {question:"Oferiu pantalles LED i streaming?",answer:"Sí, es poden integrar dins la proposta audiovisual segons l’espai, els continguts i la connectivitat."},
    {question:"Treballau en concerts i corporatius?",answer:"Sí. Adaptam la producció a concerts, presentacions, conferències, gales i actes públics."},
    {question:"Inclou personal tècnic?",answer:"Les proves, l’operació i l’assistència necessàries es detallen a cada proposta."},
  ]} formType="technical" ctaLabel="Sol·licitar proposta tècnica" />;
}
