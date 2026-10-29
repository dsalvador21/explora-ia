# ExploraIA

Plataforma educativa de inteligencia artificial para estudiantes de 7° básico, construida con React, TypeScript, Tailwind CSS y Vite.

## Desarrollo

```sh
npm install
npm run dev
```

## Rutas

- `/`: página de inicio.
- `/clases`: listado de las tres clases.
- `/clases/introduccion-a-la-inteligencia-artificial`: clase 1.
- `/clases/planificacion-y-requerimientos`: clase 2.
- `/clases/diseno-de-sitios-web-con-ia`: clase 3.

Los enlaces usan navegación nativa del navegador, sin una dependencia de enrutamiento. Las rutas desconocidas muestran una página de ayuda para volver al listado.

## Organización

- `src/data/lessons.ts`: metadatos y contenido de ejemplo de las clases.
- `src/components/`: iconos y tarjetas compartidas entre inicio y listado.
- `src/pages/`: inicio, listado, plantilla de clase y página no encontrada.
- `src/App.tsx`: selección de página y estructura común de navegación y pie.

El contenido de las clases es breve y de ejemplo. Cada clase comparte una plantilla con título, objetivo, actividades y materiales.

## Verificación

```sh
npm run build
npm test
```

Las pruebas comprueban las rutas, los enlaces de las tarjetas, el contenido de cada clase, las barras finales y las rutas desconocidas.

## Publicación

El resultado de `npm run build` se genera en `dist/`. Configura el alojamiento para servir `index.html` cuando una ruta no corresponda a un archivo estático (fallback de SPA). Esto permite abrir o recargar directamente `/clases` y `/clases/:slug`. Vite ya ofrece ese comportamiento en desarrollo y con `npm run preview`.
