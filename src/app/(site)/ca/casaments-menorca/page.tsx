import { ServiceLanding } from "@/components/sections/service-landing";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({ title: "Música, so i il·luminació per a casaments a Menorca", description: "So, il·luminació, artistes, DJ, música ambient, fotomaton i coordinació tècnica per a tot el casament a Menorca.", path: "/ca/casaments-menorca" });

export default function WeddingsCaPage() {
  return <ServiceLanding locale="ca" eyebrow="Casaments a Menorca" title="So, il·luminació i música per a tot el vostre casament." intro="Un únic equip per coordinar cerimònia, aperitiu, banquet i festa: so, llum, artistes, DJ, música ambient i fotomaton." path="/ca/casaments-menorca" image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=86" imageAlt="Celebració d’un casament a l’aire lliure" problemTitle="El casament comença molt abans de la pista de ball." problemBody={["La cerimònia necessita claredat; l’aperitiu, ambient; els discursos, bona microfonia; i la festa, energia.", "Dissenyam la cobertura tècnica de tota la jornada i la coordinam amb artistes, DJ i espais."]} benefits={[
    {title:"Cerimònia",description:"Microfonia, reproducció musical i suport a artistes."},
    {title:"Aperitiu i banquet",description:"Música ambient i actuacions en directe."},
    {title:"Artistes",description:"Solistes, acústics i grups segons estil i disponibilitat."},
    {title:"DJ i festa",description:"So i il·luminació per a la pista de ball."},
    {title:"Il·luminació ambiental",description:"Llum decorativa i funcional per a cada espai."},
    {title:"Fotomaton",description:"Una experiència participativa per als convidats."},
  ]} process={["Repassam espais, horaris i moments.","Definim música, tècnica, artistes i serveis.","Coordinam finca, càtering i wedding planner.","Executam cada canvi d’espai segons la planificació."]} faqs={[
    {question:"Podeu cobrir el so de tot el casament?",answer:"Sí, des de la cerimònia fins a la festa, amb microfonia, música ambient, artistes, DJ i il·luminació."},
    {question:"Hi ha artistes de diferents estils?",answer:"El catàleg inclou categories i formats diferents, sempre subjectes a disponibilitat."},
    {question:"Oferiu fotomaton?",answer:"Es pot incorporar com a servei complementari segons disponibilitat i condicions de l’espai."},
  ]} formType="wedding" ctaLabel="Contar-nos com serà el casament" />;
}
