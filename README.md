# Luis Pozo · Fractional CTO

Prototipo estático construido con Astro, TypeScript y contenido Markdown.

## Desarrollo local

```sh
npm install
npm run dev
```

Abre la dirección local que muestra Astro, normalmente `http://localhost:4321/`. Para comprobar tipos y generar la web estática:

```sh
npm run check
npm run build
npm run preview
```

## Contenido y rutas

Las colecciones están en `src/content/projects/` y `src/content/decisions/`. El archivo de trabajo muestra los cuatro proyectos iniciales; FIBA tiene un caso profundo y una decisión relacionada. Las fichas breves no generan páginas de detalle.

El documento de trabajo `docs/internal/` es interno, está excluido del control de versiones y no es una colección ni un directorio público. Antes de publicar el sitio hay que revisar permisos, atribuciones, contenido, activos y la salida del build. La métrica de recurrencia pendiente de validación no forma parte de la web.

El formulario de la homepage sigue siendo provisional: prepara un texto, pero no envía solicitudes. No desplegar a producción hasta resolver el canal y revisar los contenidos.
