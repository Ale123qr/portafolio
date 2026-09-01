# Portafolio — Sitio web personal

Sitio bilingüe (ES / EN): **NYX**, **HostHelix**, **Empleado Digital** (MVP) y herramientas de telecom.

Publicado: https://ale123qr.github.io/portafolio/

## Requisitos

- [Node.js 20+](https://nodejs.org/)

## Desarrollo local

```powershell
cd "C:\Users\alexm\Documents\Portafolio"
npm install
npm run dev
```

Abre la URL que muestra Vite (normalmente `http://localhost:5173`).

## Build para producción

```powershell
npm run build
```

Los archivos estáticos quedan en la carpeta `dist/`. Puedes previsualizarlos con:

```powershell
npm run preview
```

## Publicar en internet

### Opción 1: Vercel (recomendado)

1. Sube la carpeta a un repositorio en GitHub (puede ser privado).
2. Ve a [vercel.com](https://vercel.com) → **Add New Project**.
3. Importa el repo. Vercel detecta Vite automáticamente.
4. Deploy. Obtienes una URL como `tu-portafolio.vercel.app`.

### Opción 2: Netlify

1. Sube a GitHub o arrastra la carpeta `dist/` en [netlify.com/drop](https://app.netlify.com/drop).
2. Build command: `npm run build`
3. Publish directory: `dist`

### Opción 3: GitHub Pages

1. En `vite.config.ts`, cambia `base: "./"` por `base: "/nombre-repo/"`.
2. Build y sube `dist/` a la rama `gh-pages`, o usa GitHub Actions.

## Personalizar

Edita **`src/i18n/translations.ts`**:

| Campo | Qué cambiar |
|-------|-------------|
| `hero.name` | Tu nombre |
| `about.p1`, `p2`, `p3` | Tu bio |
| `contact.email` | Tu email |
| `contact.github` | Tu GitHub |
| `contact.linkedin` | Tu LinkedIn |
| `projectsData` | Textos de NYX y Empleado Digital |

El idioma se guarda en `localStorage` y también detecta el idioma del navegador.

## Estructura

```
Portafolio/
├── index.html
├── package.json
├── vite.config.ts
├── public/
│   └── favicon.svg
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── index.css
    ├── i18n/
    │   ├── index.tsx          # Provider + hook useI18n
    │   └── translations.ts    # Textos ES + EN
    └── components/
        ├── Header.tsx         # Nav + selector ES/EN
        ├── Hero.tsx
        ├── About.tsx
        ├── Projects.tsx       # Cards NYX + SaaS
        ├── ProjectModal.tsx   # Detalle de cada proyecto
        ├── Skills.tsx
        ├── Contact.tsx
        └── Footer.tsx
```

## Licencia

Privado — uso personal.
