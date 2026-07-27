# Management Menorca

Web de management artístic i producció d'esdeveniments a Menorca.

Aquest repositori conté la base tècnica de l'aplicació web de Management Menorca.

## Tecnologies

- Next.js amb App Router
- React i TypeScript
- Tailwind CSS
- ESLint
- Sanity CMS
- npm

El codi de l'aplicació es troba dins de `src/`. Sanity Studio està integrat a
la ruta `/studio`. Aquesta inicialització encara no inclou el desenvolupament
de la web final.

## Requisits

- Node.js 20.9 o superior
- npm

## Posada en marxa

Instal·la les dependències:

```bash
npm install
```

Inicia el servidor de desenvolupament:

```bash
npm run dev
```

Obre [http://localhost:3000](http://localhost:3000) al navegador.

## Configuració de Sanity

Copia el fitxer d'exemple per crear la configuració local:

```bash
Copy-Item .env.example .env.local
```

En sistemes Unix:

```bash
cp .env.example .env.local
```

Les variables públiques necessàries són:

```dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID=3cioei5t
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-07-27
```

Aquestes dades identifiquen el projecte i el dataset, però no són tokens
secrets. No afegeixis tokens d'accés als fitxers versionats.

Amb el servidor de desenvolupament actiu, obre
[http://localhost:3000/studio](http://localhost:3000/studio) per accedir a
Sanity Studio. El teu compte de Sanity ha de tenir accés al projecte.

Si el navegador bloqueja les peticions, afegeix `http://localhost:3000` als
orígens CORS del projecte des de la configuració de Sanity.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

- `dev`: inicia l'entorn de desenvolupament.
- `lint`: comprova la qualitat del codi amb ESLint.
- `build`: genera la versió de producció.
- `start`: serveix una compilació de producció.
