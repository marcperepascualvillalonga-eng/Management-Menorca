# Management Menorca

Primera versió professional de la web de Management Menorca, centrada en tres
àrees: catàleg d'artistes, so i il·luminació per a esdeveniments, i serveis
complets per a bodes a Menorca.

La web pública està en castellà. L'arquitectura permet afegir català i anglès
més endavant sense traduccions automàtiques.

## Tecnologies

- Next.js 16 amb App Router i TypeScript estricte
- React i Tailwind CSS 4
- Sanity CMS i Sanity Studio integrat a `/studio`
- ESLint
- npm

## Arquitectura

```text
src/
  app/                 Rutes, metadata, sitemap, robots i API
  components/          Layout, seccions, artistes, esdeveniments, formularis i UI
  config/              Navegació i contingut de reserva
  sanity/
    lib/               Client, imatges i fetch resilient
    queries/           Consultes GROQ centralitzades
    schemaTypes/       Esquemes de contingut
  types/               Tipus de contingut compartits
  utils/               Utilitats de metadata
docs/
  content-guide.md     Guia d'edició no tècnica
```

Les pàgines públiques utilitzen Server Components per defecte. Els components
interactius —menú mòbil, carrusel, filtres, FAQs, vídeo i formularis— són Client
Components aïllats.

## Posada en marxa

Requisits: Node.js 20.9 o superior i npm.

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

En Unix:

```bash
cp .env.example .env.local
```

Obre:

- Web: [http://localhost:3000](http://localhost:3000)
- Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

## Variables d'entorn

```dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID=3cioei5t
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-07-27
NEXT_PUBLIC_SITE_URL=https://managementmenorca.com
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTM_ID=
```

Les variables de Sanity anteriors són identificadors públics, no tokens.
`.env.local` està ignorat per Git. No s'han d'afegir tokens de Sanity ni claus
de proveïdors al client.

`NEXT_PUBLIC_SITE_URL` s'ha d'ajustar al domini definitiu abans de publicar.
Els IDs de GA4 i GTM estan preparats però no s'utilitzen: cal implantar
consentiment abans de carregar analítica.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Edició amb Sanity

### Afegir i publicar un artista

1. Entra a `/studio`.
2. Obre **Artistas** i crea un document.
3. Completa nom, slug, descripció, fotografia i text alternatiu.
4. Selecciona `Publicado` al camp d'estat.
5. Activa `Destacado` i assigna un ordre si ha d'aparèixer a portada.
6. Publica el document.

### Editar portada i contacte

- **Hero** gestiona fins a quatre slides actius i ordenats.
- **Configuración** és un únic document amb nom, eslògan, SEO, correu,
  WhatsApp, navegació i enllaç de Facturilla.
- **FAQs** permet editar preguntes i respostes.
- **Proyectos** només s'ha de publicar amb dades reals i autorització.

Consulta [docs/content-guide.md](docs/content-guide.md) per a la guia completa.

## Formularis

La interfície, validació accessible, consentiment i honeypot estan preparats.
L'API respon de manera honesta que l'enviament no està configurat; mai simula
un èxit. Cal escollir Resend, Brevo, un CRM o un webhook segur i afegir les
seves credencials només a l'entorn del servidor de Hostinger.

Pendent:

- escollir proveïdor;
- definir remitents i destinataris;
- completar política de privacitat;
- implementar enviament i registres d'error;
- afegir protecció antispam addicional si el volum ho requereix.

## SEO i analítica

El projecte inclou metadata única, canonical, Open Graph, Twitter cards,
JSON-LD, `sitemap.xml`, `robots.txt`, manifest i breadcrumbs. Per validar:

1. executa `npm run build`;
2. revisa `/sitemap.xml` i `/robots.txt`;
3. prova les dades estructurades amb les eines de Google;
4. configura Google Search Console i Google Business Profile amb dades reals.

GA4 i GTM no es carreguen. Abans d'activar-los cal un sistema de consentiment
real i actualitzar la política de cookies.

## Dades i decisions pendents

- nom i identitat definitiva de marca;
- correu, telèfon, WhatsApp, adreça i horari;
- roster real amb fotografies, permisos i textos;
- projectes i testimonis autoritzats;
- dades legals verificades;
- domini definitiu;
- proveïdor de formularis;
- IDs d'analítica, només després del consentiment;
- traduccions professionals a català i anglès.

## Desplegament amb Hostinger

Hostinger està connectat al repositori GitHub i desplega automàticament des de
`main`. El flux recomanat és:

1. treballar en una branca;
2. executar lint i build;
3. obrir una pull request cap a `main`;
4. revisar els canvis;
5. fusionar només quan estiguin aprovats.

Aquest repositori no incorpora configuració nova que substitueixi la integració
existent amb Hostinger.
