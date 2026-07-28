import { InquiryForm } from "@/components/forms/inquiry-form";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({ title: "Contacte", description: "Conta’ns quin esdeveniment organitzes a Menorca i prepararem una proposta d’artistes, música o producció.", path: "/ca/contacte" });

export default function ContactCaPage() {
  return <main id="main-content"><section className="page-hero"><div className="container"><Breadcrumbs items={[{label:"Inici",href:"/ca"},{label:"Contacte"}]} /><p className="eyebrow">Sol·licitar proposta</p><h1>Conta’ns què tens en ment.</h1><p className="page-hero-description">Data, espai, tipus d’esdeveniment i ambient desitjat són un bon punt de partida.</p></div></section><section className="section"><div className="container editorial-grid"><div><p className="eyebrow">Management Menorca</p><h2>Parlem del teu esdeveniment.</h2></div><InquiryForm locale="ca" /></div></section></main>;
}
