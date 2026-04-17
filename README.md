# Landing institucional - AlturaSur Facility

Sitio web estático (HTML + CSS + JS) para una empresa argentina de limpieza de edificios, mantenimiento edilicio y reparaciones.

## Estructura

- `index.html`: contenido principal y secciones comerciales.
- `styles.css`: estilos base, componentes y responsive.
- `script.js`: menú mobile + año automático en footer.
- `assets/logo/logo-alturasur.svg`: logo editable en SVG.
- `assets/images/`: imágenes provistas por el repositorio.

## Cómo ejecutar

Abrí `index.html` en tu navegador o servilo con un servidor estático:

```bash
python -m http.server 8080
```

Luego visitar `http://localhost:8080`.

## Edición rápida

- **Textos**: editar `index.html`.
- **Colores y tipografía**: editar variables en `:root` dentro de `styles.css`.
- **Logo**: reemplazar o editar `assets/logo/logo-alturasur.svg`.
- **Imágenes**: reemplazar archivos en `assets/images/` manteniendo nombres o actualizando rutas en `index.html`.

## Nota de assets

Todas las imágenes utilizadas en la galería y secciones visuales provienen del repositorio local (`assets/images/*`).
No se incorporaron imágenes externas.
