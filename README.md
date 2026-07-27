# Management Menorca

Base tècnica de l'aplicació web de Management Menorca.

## Tecnologies

- Next.js amb App Router
- React i TypeScript
- Tailwind CSS
- ESLint
- npm

El codi de l'aplicació es troba dins de `src/`. Aquesta inicialització no inclou
encara la integració amb Sanity ni el desenvolupament de la web final.

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
