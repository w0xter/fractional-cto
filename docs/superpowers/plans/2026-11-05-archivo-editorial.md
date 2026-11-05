# Archivo editorial de proyectos y decisiones — plan de implementación

> **Para la ejecución:** usar el flujo de implementación elegido después de aprobar este plan. Los pasos marcados son trabajo futuro; este documento no implica que se haya ejecutado ninguno.

**Objetivo:** validar un sistema editorial estático con un proyecto y una decisión reales y, después, ampliar la web conservando su identidad y su capacidad comercial.

**Arquitectura:** Astro genera HTML estático a partir de colecciones Markdown públicas validadas. El maestro y el registro de evidencias permanecen fuera del repositorio y del contexto de compilación; las relaciones se definen desde decisiones hacia proyectos y se derivan en sentido inverso. La homepage se migra por equivalencia antes de ampliar el archivo.

**Stack propuesto:** Astro, TypeScript, Markdown, CSS propio y herramientas de verificación accesible; Netlify Forms si se confirma Netlify como hosting.

**Diseño aprobado:** [2026-11-05-archivo-editorial-design.md](../specs/2026-11-05-archivo-editorial-design.md).

## Restricciones globales

- Sin contenido interno ni métricas pendientes en el repositorio público, sus snapshots, fixtures, índices, metadatos, assets o salida generada. No trasladar cifras pendientes al plan público.
- Ningún despliegue ni prueba que envíe datos externos sin la autorización correspondiente. Este plan no autoriza a conectar cuentas, activar integraciones o enviar mensajes.
- No tratar estados editoriales, prioridades del inventario o presencia de una fuente como permiso de publicación. Revisión factual y autorización de publicación son pasos independientes.
- Conservar identidad, copy comercial y anclajes existentes en la primera migración; no imponer reescrituras, nuevas afirmaciones ni rediseño general.
- FIBA es el primer caso y la decisión de indicadores operativos la primera historia. El estado público de ambos depende de la revisión de cada afirmación y permiso.
- Caso profundo y ficha resumida son niveles de una misma entidad proyecto; la decisión es una entidad separada. No generar 35 páginas automáticamente.

## Decisiones técnicas y de publicación

**Rutas:** `/`, `/work`, `/work/[slug]`, `/decisions`, `/decisions/[slug]`, `/approach`, `/services`, `/about`, `/contact`. El HTML de las rutas públicas se prerenderiza. Los detalles se generan solo a partir de entradas aprobadas.

**Datos:** cada proyecto tiene `id`, `slug`, `kind` (`deep` o `summary`), `status` editorial (`draft` o `published`), nombre aprobado, resumen, etapa real, periodo opcional, capacidades, responsabilidad personal, contribución del equipo, cuerpo y resultados aprobados. Cada decisión tiene `id`, `slug`, `status`, resumen, contexto, restricciones, alternativas verificadas, decisión, responsabilidad personal, trade-offs y consecuencias opcionales. Las referencias `projectIds` viven únicamente en la decisión; la relación inversa se deriva. Los borradores pueden carecer de información, pero no se renderizan en producción. El nivel `summary` no obliga a fabricar una historia extensa ni una ruta de detalle; si carece de detalle, se muestra en `/work` sin enlace a `/work/[slug]`.

**Regla de publicación:** únicamente los archivos situados en las colecciones públicas explícitas pueden entrar en la compilación; `status: published` es condición necesaria, no prueba de autorización. El registro privado debe acreditar revisión factual y permiso por afirmación y activo. El pipeline comprueba una lista explícita de aprobaciones públicas que no incluya fuentes privadas. Slugs duplicados, relaciones públicas a entradas ausentes/no publicadas, archivos no aprobados o metadatos obligatorios ausentes bloquean el build.

**Contacto:** si el sitio se aloja en Netlify, preferir un formulario HTML prerenderizado con `name`, `method="POST"`, `data-netlify="true"`, campos con `name`, honeypot y página de confirmación. Activar detección y notificación en el sitio, validar español y texto no vacío, comprobar spam y recepción con un envío de prueba autorizado. Netlify detecta formularios en HTML durante el despliegue; la notificación por email requiere un miembro activo del equipo. Confirmar condiciones del plan, protección de datos, retención y destinatario antes de activar. Fuentes: [configuración](https://docs.netlify.com/manage/forms/setup/), [notificaciones](https://docs.netlify.com/manage/forms/notifications/), [uso y facturación](https://docs.netlify.com/manage/forms/usage-and-billing/). Si no se usa Netlify, evaluar proveedor externo o endpoint específico antes de publicar; no simular un envío.

## Mapa de archivos previsto

- `docs/superpowers/specs/2026-11-05-archivo-editorial-design.md`: decisiones aprobadas.
- Destino privado fuera del repositorio y fuera del contexto de build: `nomu-projects-master.md` y `evidence/` (ubicación, permisos y copia de seguridad a confirmar antes de mover).
- `src/pages/`: rutas Astro, incluyendo `work/[slug].astro` y `decisions/[slug].astro`.
- `src/layouts/`: estructura editorial y lectura compartida.
- `src/components/`: navegación, pie, bloques actuales de homepage, panorama, entradas de archivo, caso y formulario.
- `src/styles/`: tokens y estilos extraídos de `styles.css` sin cambiar la primera versión visual.
- `src/content.config.ts` y `src/content/{projects,decisions}/`: esquemas y copias públicas revisadas; no cargar `docs/internal/` ni directorios privados.
- `src/lib/content/`: selección de contenido publicable y relaciones inversas.
- `scripts/check-public-output.*`: comprobaciones de artefactos, lista explícita y referencias.
- `tests/`: validación de esquemas, privacidad, relaciones, enlaces, formulario y recorridos en navegador.

Los nombres son propuestas concretas para el primer incremento; el diseño visual definitivo de `/work` y del caso se resuelve con Impeccable antes de construirlos.

## Riesgos que deben tener pruebas propias

1. Una pieza `draft` o un archivo privado accesible durante la compilación no debe aparecer en HTML, JSON, rutas, sitemap, feeds, source maps ni assets (incrementos 1 y 3).
2. Una decisión publicada con proyectos múltiples debe enlazar solo a entradas publicadas; referencias ausentes o privadas deben bloquear el build sin filtrar identificadores en el resultado público (incremento 3).
3. Las responsabilidades y métricas de una fase no deben atribuirse a otra persona o periodo; una métrica pendiente debe bloquearse aunque aparezca en una captura, fixture o metadato (incrementos 2 y 5).
4. El visitante debe poder recorrer la homepage y los archivos sin JavaScript, con teclado y a 200 % de zoom, conservando los anclajes históricos (incrementos 4 y 6).
5. El formulario debe distinguir validación, entrega real, error y confirmación sin perder datos; una prueba local no demuestra recepción en Netlify (incremento 7).

## Incremento 1 — Aislamiento privado y línea base

**Archivos:** inventariar `docs/internal/nomu-projects-master.md.md`, `.gitignore`, entradas de Git y configuración de publicación; preparar destino privado externo y reglas de exclusión sin copiar la fuente a `public/` ni a colecciones.

- [ ] Determinar con Luis la ubicación privada, quién puede leerla, copia de seguridad y alcance del repositorio remoto y de su historial. No imprimir ni publicar el contenido.
- [ ] Verificar con `git ls-files`, historial y configuración del proveedor si el maestro o derivados ya se rastrean o han sido publicados; si hubo exposición, detenerse y acordar la mitigación antes de continuar. No reescribir historial por defecto.
- [ ] Copiar al destino privado como `nomu-projects-master.md`, verificar integridad mediante hash y lectura; solo después retirar la copia del repositorio de despliegue según el procedimiento aprobado. No eliminar el original hasta verificar la copia. Mantener el registro de evidencias junto a la fuente privada.
- [ ] Excluir por lista permitida el contenido de despliegue e ignorar futuras carpetas internas, sin considerar `.gitignore` una frontera de seguridad. Revisar que la copia no esté bajo `public/`, en el contexto del proveedor o en un remoto público.
- [ ] Capturar la homepage vigente a 1440, 1024 y 390 px y guardar un inventario de anclajes y comportamiento del formulario; no incluir datos sensibles en las capturas.

**Aceptación:** existe una copia privada íntegra con nombre corregido; ninguna copia interna se rastrea ni se envía al contexto del build de despliegue; se ha revisado el historial y existe una línea base visual/funcional. No se importa aún contenido público.

## Incremento 2 — Evidencia y selección FIBA

**Archivos:** registro de evidencia en el destino privado; futuras copias públicas en `src/content/` solo después de revisión.

- [ ] Preparar matriz privada por afirmación: enunciado, fuente, periodo, sujeto atribuible, nivel de evidencia, sensibilidad, estado factual, permiso de publicación y revisor/fecha.
- [ ] Contrastar la historia de indicadores operativos y alternativas reales; documentar la responsabilidad transversal de Luis y distinguir aportaciones de equipo y cliente. Registrar incógnitas sin completarlas por inferencia.
- [ ] Marcar la métrica de recurrencia como pendiente: validar fuente primaria, definición, población, periodo comparable y atribución antes de considerarla publicable. No incluir sus valores en ninguna copia o salida pública hasta aprobarlos.
- [ ] Resolver las fotografías de stack por fase y los permisos de marcas, capturas y enlaces. Evitar imágenes o nombres cuando no haya autorización.
- [ ] Redactar una ficha pública y una historia de decisión como borradores separados, sin campos sensibles y sin métricas pendientes; registrar aprobación explícita antes de pasar a `published`.

**Aceptación:** existe un par editorial verificable para probar el modelo; cada afirmación tiene evidencia y permiso registrados de manera privada; los hechos que falten se omiten o permanecen en el borrador privado. FIBA solo se publica cuando revisión y autorización estén completas.

## Incremento 3 — Base Astro y contratos de contenido

**Archivos:** `package.json`, `astro.config.mjs`, `tsconfig.json`, `src/content.config.ts`, `src/content/{projects,decisions}/`, `src/lib/content/`, `tests/content/`, `scripts/check-public-output.*`.

- [ ] Crear el proyecto en una ubicación de trabajo aislada sin alterar la homepage existente; fijar versiones compatibles al ejecutarlo y registrar comandos `dev`, `build`, `preview`, `check` y `test`.
- [ ] Definir las dos colecciones y los tipos indicados arriba. Las colecciones solo leen directorios públicos explícitos; los slugs son únicos por colección y estables.
- [ ] Escribir pruebas negativas antes de las reglas: borrador no genera ruta; proyecto resumen sin detalle no genera detalle; decisión publicada con referencia ausente o a borrador falla; relaciones múltiples se muestran en ambos sentidos; dos slugs iguales fallan.
- [ ] Implementar selección de entradas aprobadas y relación inversa sin cargar ni copiar el maestro o el registro privado. Probar con contenido sintético sin datos internos y observar que las pruebas pasan.
- [ ] Añadir inspección de salida que compruebe todos los tipos de archivo generados y use marcadores sintéticos de fuga. Comprobar que un marcador en un borrador o fuente no permitida nunca aparece en la salida, y que un marcador simulado en un archivo público no autorizado hace fallar la verificación. Revisar también rutas y enlaces generados.

**Aceptación:** build estático y pruebas pasan; los controles detectan fixtures de fuga deliberada; ninguna ruta o activo se genera a partir de contenido privado o borrador. La privacidad no depende exclusivamente de flags.

## Incremento 4 — Migración equivalente de la homepage

**Archivos:** `src/pages/index.astro`, layouts, componentes de navegación/pie y homepage, `src/styles/`, assets existentes; pruebas visuales y de enlaces.

- [ ] Trasladar el HTML y estilos por partes, manteniendo copy actual, composición, retrato aprobado y comportamiento. Extraer estilos repetidos sin reinterpretar el diseño.
- [ ] Mantener `/#inicio`, `/#situaciones`, `/#experiencia`, `/#servicios`, `/#sobre-mi` y `/#contacto`; comprobar los enlaces actuales y que la navegación funciona sin JavaScript.
- [ ] Comparar capturas a 1440, 1024 y 390 px contra la línea base, incluyendo la primera pantalla; comprobar foco, orden de lectura, desbordamiento, imágenes y formulario provisional.
- [ ] No cambiar todavía los destinos comerciales ni etiquetar el formulario como funcional.

**Aceptación:** homepage visual y funcionalmente equivalente en los tamaños revisados, sin enlaces rotos y con anclajes conservados; cualquier diferencia material se revisa con Luis antes de seguir.

## Incremento 5 — Diseño y primera pareja editorial

**Archivos:** `src/pages/work/[slug].astro`, `src/pages/decisions/[slug].astro`, componentes de lectura y casos, copias públicas revisadas y pruebas de navegador.

- [ ] Usar Impeccable para explorar la composición de un caso profundo y una decisión dentro de la identidad existente; revisar vistas desktop/móvil antes de implementar la composición elegida. No usar datos reales no autorizados en maquetas.
- [ ] Implementar la ficha profunda FIBA y su decisión de indicadores operativos a partir de las copias aprobadas del incremento 2. La contribución de Luis se expresa con el alcance verificado y se distingue del trabajo colectivo.
- [ ] Incorporar cronología, imágenes, comparación de alternativas o diagrama solo si hay información y permisos específicos; cada recurso tiene texto alternativo y procedencia comprobada. La plantilla funciona sin ellos.
- [ ] Probar una decisión con dos proyectos sintéticos y un proyecto con varias decisiones sintéticas; no publicar los fixtures. Probar que una decisión sin resultado cuantitativo sigue siendo válida y que la métrica pendiente no aparece en ningún artefacto.
- [ ] Revisar nombres, atribuciones, periodos, estado real, enlaces y activos con Luis antes de pasar el contenido a publicado.

**Aceptación:** un proyecto y una decisión recorren el modelo completo y se ven en desktop/móvil; los vínculos son coherentes, el contenido está aprobado y no hay métricas ni materiales pendientes en el build público. Sin aprobación editorial, el par permanece como borrador y no genera rutas públicas.

## Incremento 6 — Archivos y navegación

**Archivos:** `src/pages/work/index.astro`, `src/pages/decisions/index.astro`, navegación y componentes de listado/filtros, pruebas de enlaces y accesibilidad.

- [ ] Diseñar `/work` como archivo editorial con jerarquía variable; soportar casos profundos y fichas resumidas sin tres tarjetas idénticas obligatorias. Una ficha sin detalle no debe fingir un enlace.
- [ ] Implementar `/decisions` con categorías útiles y relaciones visibles; con cero o una entrada pública, mostrar un estado honesto y no exponer borradores ni rutas sin contenido.
- [ ] Hacer que la lista completa funcione sin JavaScript; si se añaden filtros, usar controles etiquetados, selección accesible y estado sin resultados con forma de limpiar filtros.
- [ ] Implementar navegación Trabajo · Decisiones · Servicios · Sobre mí · Hablemos. Enlazar `/approach` desde servicios, sobre mí y otras páginas relevantes; conservar anclajes históricos.
- [ ] Recorrer el sitio con teclado, móvil, 200 % de zoom y carga sin JS; comprobar rutas directas y ausencia de scroll horizontal accidental.

**Aceptación:** los dos archivos muestran solo contenido aprobado, soportan varios proyectos y decisiones sin límite artificial, conservan accesibilidad sin JS y no publican páginas vacías.

## Incremento 7 — Servicios, forma de trabajo y contacto real

**Archivos:** `src/pages/{services,approach,about,contact}.astro`, formulario y página de confirmación, pruebas de validación y navegación.

- [ ] Trasladar el contenido existente a rutas dedicadas manteniendo enlaces y anclajes de la homepage; evitar prometer disponibilidad o condiciones no confirmadas.
- [ ] Confirmar hosting, destinatario, notificaciones, privacidad y alternativa de contacto. Si se usa Netlify, activar detección en el sitio de pruebas y redeploy de prueba; no realizar aún cambios de producción.
- [ ] Sustituir la preparación de texto por envío HTML real con campos mínimos y etiquetas, validación que rechace espacios y mensajes de error/éxito en español. Incluir política de tratamiento y vía alternativa aprobadas; no solicitar archivos.
- [ ] Probar validación y navegación sin JS localmente. En despliegue de prueba, con autorización para el envío, verificar que la solicitud llega al destino, que se recibe notificación, que la confirmación corresponde al envío real y que se contempla la bandeja de spam. Probar fallo y recuperación sin perder texto.

**Aceptación:** el canal funciona de extremo a extremo en el entorno de prueba y existe un responsable de recepción; si no hay proveedor/destinatario, el lanzamiento queda bloqueado y la UI no afirma haber enviado nada.

## Incremento 8 — Revisión editorial y preparación de lanzamiento

- [ ] Evaluar DiveLife, Hyundai y SwishVerse con la misma matriz; publicar solo las fichas o casos para los que haya evidencia y permiso. No usar una cuota fija ni generar el resto del inventario.
- [ ] Revisar contenido, navegación y coherencia visual en escritorio, tablet y móvil; comprobar accesibilidad, rendimiento y errores de consola.
- [ ] Ejecutar `check`, `test`, `build` y la inspección de todos los artefactos públicos; revisar también sitemap, metadatos, JSON, assets, mapas de fuente y rutas. Comprobar fuentes y licencias de imágenes y tipografías.
- [ ] Revisar la historia de Git, visibilidad del repositorio y configuración del proveedor para confirmar que ninguna fuente privada forme parte del código, contexto de build o artefacto.
- [ ] Presentar a Luis el resultado y pedir autorización específica antes de cualquier despliegue público. El commit y la publicación de este plan no autorizan publicar el sitio.

**Aceptación:** build y comprobaciones documentadas pasan; contenido y medios tienen aprobación; no se ha detectado contenido privado; el formulario está operativo; Luis puede revisar el resultado antes de aprobar su publicación.

## Dependencias y decisiones pendientes

- Destino privado y permisos para trasladar el maestro; no se presupone que una carpeta fuera del repositorio tenga copia de seguridad.
- Fuente, definición y comparabilidad de la métrica pendiente; sin validación, se omite.
- Revisión y permiso de publicación de las afirmaciones y activos de FIBA; un caso puede quedar en borrador hasta resolverlos.
- Hosting final, cuenta, destinatario del formulario, privacidad y costes de su plan.
- Navegación definitiva de las páginas nuevas y composición de `/work` y los casos: aprobación visual antes de implementación.

## Referencias técnicas

- [Colecciones de contenido y referencias de Astro](https://docs.astro.build/en/guides/content-collections/).
- [Rutas y generación estática de Astro](https://docs.astro.build/en/guides/routing/).
- [Renderizado prerenderizado y bajo demanda](https://docs.astro.build/en/guides/on-demand-rendering/).
- [Detección de formularios de Netlify](https://docs.netlify.com/manage/forms/setup/) y [notificaciones](https://docs.netlify.com/manage/forms/notifications/).
