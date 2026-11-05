# Web personal y archivo editorial — diseño aprobado

**Estado:** arquitectura acordada; contenido y composiciones específicas pendientes de revisión.

## Objetivo

Evolucionar la homepage comercial de Luis Pozo hacia una web personal estática que ayude a founders a evaluar su criterio y liderazgo técnico, preserve la identidad editorial existente y facilite conversaciones cualificadas.

## Alcance y dirección

- Astro, TypeScript y Markdown; salida estática, sin aplicación compleja, CMS ni base de datos por defecto.
- Rutas objetivo: `/`, `/work`, `/work/[slug]`, `/decisions`, `/decisions/[slug]`, `/approach`, `/services`, `/about` y `/contact`.
- Navegación: Trabajo, Decisiones, Servicios, Sobre mí y Hablemos. Approach se enlaza desde servicios, sobre mí y contextos pertinentes.
- Mantener la homepage, su identidad editorial, su función comercial y sus anclajes actuales durante la migración.
- El archivo soporta tres niveles: casos profundos, fichas públicas resumidas e inventario privado. Los proyectos y las decisiones mantienen una relación de muchos a muchos.
- El primer recorrido de validación es FIBA — Hoops for Schools y la decisión sobre la evolución de estadísticas hacia indicadores operativos para el seguimiento de escuelas con poca actividad. La autoría distingue la responsabilidad transversal de Luis en producto, arquitectura, prioridades, ingeniería y delivery de las contribuciones del equipo y del cliente.
- Existe una métrica de recurrencia comunicada cuya fuente, definición y periodo comparable aún deben verificarse. Hasta entonces no se publicará ni se incorporará a metadatos públicos, capturas, fixtures o ejemplos.
- DiveLife, Hyundai y SwishVerse son candidatos posteriores, no contenido autorizado automáticamente.
- Las nuevas páginas amplían el lenguaje visual con cronologías, capturas, comparaciones, diagramas y métricas solo cuando representen información real y autorizada. No reproducir un catálogo de agencia ni disfrazar de caso un registro técnico.
- El maestro de proyectos y el registro de evidencia son privados. Solo copias explícitamente revisadas y autorizadas entran en el repositorio y la compilación de despliegue; los 35 registros no generan páginas automáticamente.
- Retirar el maestro del repositorio destinado al despliegue y corregir la extensión duplicada durante la reorganización privada, antes de generar contenido público. La ubicación y los permisos del destino privado se confirmarán antes de moverlo.
- La solicitud de conversación debe funcionar antes de publicar; Netlify Forms es la opción preferida si el hosting se confirma en Netlify. No configurar cuentas, publicar ni enviar comunicaciones durante la elaboración de este plan.

## Fuentes y límites

La documentación interna es insumo de análisis, no copy público. La confirmación de un hecho y la autorización para publicarlo son decisiones separadas, registradas por afirmación; el permiso para un nombre, imagen o fuente no autoriza automáticamente otras partes del proyecto. No inventar decisiones, alternativas, resultados, métricas ni atribuciones. Los huecos pueden permanecer omitidos o marcados en borradores no publicables. El stack de una fase solo se describe cuando se ha reconciliado con su periodo.

## Experiencia de lectura

La homepage conduce desde reconocimiento del founder hasta experiencia y conversación. `/work` combina una entrada editorial, filtros progresivos y formatos de lista y caso destacado; sin JavaScript, todo el contenido público es accesible. Los casos explican contexto, alcance, responsabilidad, decisiones relacionadas y evidencia disponible. `/decisions` presenta criterio y trade-offs sin obligar a crear proyectos o casos extensos ficticios.
