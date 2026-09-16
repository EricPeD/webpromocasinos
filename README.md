# Web Promo Casinos

Sitio web de promociones de casinos online, bilingüe (ES/EN), construido con **Astro 5** + **Tailwind CSS v4**. Publicado en **Surge.sh** en `https://triskis.surge.sh`.

## Tecnologías

- **Astro 5** — generación de sitio estático (SSG)
- **Tailwind CSS v4** — estilos (integrado vía `@tailwindcss/vite`)
- **TypeScript** — tipado en ficheros de datos y componentes

## Estructura del proyecto

```
├── astro.config.mjs          # Config de Astro (site URL + plugin Tailwind Vite)
├── deploy.sh                 # Script: build + deploy a Surge.sh
├── public/
│   └── favicon.svg           # Favicon SVG con emoji 🎰
└── src/
    ├── styles/
    │   └── global.css        # Import de Tailwind + theme + base + componentes
    ├── layouts/
    │   └── Layout.astro      # Shell HTML (head, meta, fuentes, slot)
    ├── data/
    │   ├── casinos.ts        # Datos de los casinos (bonos, ratings, URLs de afiliado)
    │   └── links.ts          # Redes sociales (Discord, Kick, YouTube ×2)
    ├── components/
    │   ├── Header.astro      # Header sticky con marca, iconos sociales y toggle idioma
    │   ├── LanguageToggle.astro  # Selector ES | EN
    │   ├── SocialLinks.astro     # Iconos SVG (variantes compact y large)
    │   ├── CasinoCard.astro      # Card de casino (rating, bonus, CTA animado)
    │   └── CommunitySection.astro# Sección "Únete a nuestra comunidad"
    └── pages/
        ├── index.astro       # Home en español (/)
        └── en/
            └── index.astro   # Home en inglés (/en/)
```

## Puesta en marcha

Requisitos: **Node.js 18+**.

```bash
# Instalar dependencias
npm install

# Desarrollo con recarga en vivo
npm run dev

# Build de producción → dist/
npm run build

# Vista previa del build local
npm run preview
```

## Internacionalización

El sitio tiene dos idiomas sin librería externa:

- **Español** → ruta raíz `/`
- **Inglés** → `/en/`

Los textos se gestionan mediante:

- Objetos `{ es, en }` en `src/data/` (bonos, descripciones, etiquetas de links)
- Mapas `{ es, en }` en plantillas (`CommunitySection.astro`)
- `LanguageToggle.astro` alterna entre ambas rutas

Las URLs canónicas se resuelven con `Astro.site` (`https://triskis.surge.sh`).

## Añadir un casino

Edita `src/data/casinos.ts` y añade una entrada al array `casinos` siguiendo la interfaz `Casino`:

```ts
{
  id: 'NombreDelCasino',
  name: 'Nombre del casino',
  logo: '🎰',                      // emoji usado como logo
  bonus: { es: '...', en: '...' }, // texto del bono
  description: { es: '...', en: '...' },
  referralUrl: 'https://...',       // enlace de afiliado
  rating: 4.5,                      // de 0 a 5 (media estrella automática vía CSS)
  flags: { es: ['...'], en: ['...'] },
}
```

Las estrellas se renderizan recortando una fila de 5 `★` según el porcentaje `rating/5`, lo que elimina desalineaciones del carácter `½`.

> Usa una constante para la URL de afiliado, igual que `ABETPANDA_REFERRAL` y `MELBET_REFERRAL`, para evitar duplicados.

## Añadir una red social

Edita `src/data/links.ts` y añade una entrada a `socialLinks`. Si la red no existe en `icons` (`src/components/SocialLinks.astro`), añade su path SVG. La propiedad `color` indica el color de marca del icono.

## Diseño

- Tema oscuro violeta definido en `src/styles/global.css` (`@theme` con tokens: `bg`, `bg-card`, `primary`, `accent`, `gold`, `green`, etc.)
- Tipografía **Inter** (Google Fonts)
- Header glassmorphism con `backdrop-blur`
- Botones CTA con gradiente animado, glow y efecto shimmer (`btn-shimmer`)
- Layout responsive con CSS Grid y `clamp()` para títulos

## Despliegue

Publicación en Surge.sh:

```bash
./deploy.sh
```

El script ejecuta `npm run build` y publica `dist/` en `triskis.surge.sh`.

Alternativa manual:

```bash
npm run build
surge ./dist triskis.surge.sh
```

## Licencia

Uso privado. Los enlaces de afiliados y las marcas de casinos/plataformas pertenecen a sus respectivos propietarios.