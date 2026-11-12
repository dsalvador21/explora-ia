# ExploraIA

Plataforma educativa de inteligencia artificial para estudiantes de 7° básico, construida con React, TypeScript, Tailwind CSS y Vite.

## Desarrollo

```sh
npm install
npm run dev
```

## Rutas

- `/`: página de inicio.
- `/clases`: listado de las clases visibles (2 a 5).
- `/clases/introduccion-a-la-inteligencia-artificial`: clase 1.
- `/clases/planificacion-y-requerimientos`: clase 2.
- `/clases/diseno-de-sitios-web-con-ia`: clase 3.
- `/clases/implementacion-i`: clase 4.
- `/clases/testing-y-cierre`: clase 5.

La clase 1 está oculta en el catálogo actual y su ruta muestra la página no encontrada.

Los enlaces usan navegación nativa del navegador, sin una dependencia de enrutamiento. Las rutas desconocidas muestran una página de ayuda para volver al listado.

## Organización

- `src/data/lessons.ts`: metadatos y contenido de ejemplo de las clases.
- `src/components/`: iconos y tarjetas compartidas entre inicio y listado.
- `src/pages/`: inicio, listado, plantilla de clase y página no encontrada.
- `src/App.tsx`: selección de página y estructura común de navegación y pie.

Las clases 2 a 5 tienen páginas propias que reutilizan encabezados, tarjetas de prompts copiables y enlaces a herramientas. La Clase 5 incluye continuidad del proyecto, cambio de IA, testing, cierre del taller y recuperación de archivos en Drive.

## Verificación

```sh
npm run build
npm test
```

Las pruebas comprueban las rutas, los enlaces de las tarjetas, el contenido de cada clase, las barras finales y las rutas desconocidas.

## Publicación

El resultado de `npm run build` se genera en `dist/`. Configura el alojamiento para servir `index.html` cuando una ruta no corresponda a un archivo estático (fallback de SPA). Esto permite abrir o recargar directamente `/clases` y `/clases/:slug`. Vite ya ofrece ese comportamiento en desarrollo y con `npm run preview`.
