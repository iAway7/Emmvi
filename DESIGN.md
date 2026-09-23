# Design

## El nombre

**Siempre `emmvi`, nunca `Emmvi`.** Va en minúscula incluso al empezar una
frase, un título de pestaña o una etiqueta accesible. No es un descuido de
capitalización: es el logotipo, que es un wordmark en caja baja.

Alcanza a todo lo que ve alguien, incluidos los sitios donde es fácil
olvidarlo: `<title>` y su plantilla (`%s · emmvi`), `SITE_NAME` en
`lib/site.ts`, los `aria-label` del header, el pie y el mapa, el `alt` de la
tarjeta de Open Graph, el JSON-LD de organización, el aviso de marca del pie y
el `<title>` del SVG de BIMI.

Los comentarios del código también lo escriben en minúscula. No es cosmética:
varios citan literalmente la plantilla del título, y si ahí pone `Emmvi`
describen algo que el código ya no hace.

Para comprobarlo de una vez:

```
grep -rn "Emmvi" --include="*.tsx" --include="*.ts" --include="*.css" \
  --include="*.svg" app components lib content public
```

Sin resultados es lo correcto. La única excepción viva está fuera del
repositorio: la OEPM registró el distintivo escrito `Emmvi`, así que un
documento legal que cite el registro puede llevarlo en alta.

## Theme

Claro. El lector abre esto en el móvil, a plena luz, entre trabajos o al final
del día — no en un despacho a oscuras. Papel blanco, tinta casi negra, y un solo
violeta que carga todo el acento. Sin modo oscuro: no existe variante oscura en
Figma y la marca no la necesita.

Estrategia de color: **restrained** — neutros sin tintar y un acento por debajo
del 10% de la superficie. La voz no la lleva el color, la lleva el texto. Los
paneles oscuros (`--night`) son la única excepción, y aparecen dos veces: donde
la página demuestra algo en vez de afirmarlo.

## Color

| Token | Valor | Uso |
|---|---|---|
| `--color-paper` | `#ffffff` | fondo base |
| `--color-paper-alt` | `#f8f8f8` | bandas de sección |
| `--color-paper-panel` | `#f9fafd` | paneles grandes, radius 32 |
| `--color-ink` | `#171717` | títulos y texto primario |
| `--color-ink-soft` | `#666666` | cuerpo |
| `--color-ink-black` | `#000000` | nav activo |
| `--color-line` | `#eaeaea` | bordes y reglas |
| `--color-violet` | `#423af4` | acento único, de la marca |
| `--color-pink` | `#ff5d92` | borde del badge de Email Marketing |
| `--color-pink-ink` | `#d81b60` | su texto: el rosa de marca da 2.78:1 y falla AA |
| `--color-pink-wash` | `#fff8fc` | relleno de ese badge |
| `--dusk` | `linear-gradient(90deg,#242428,#16151e 50%,#080714)` | paneles oscuros de Email Marketing |
| `--night` | `linear-gradient(180deg,#171717,#000 62%,#2e2e2e)` | paneles de demostración |

Restricción medida, y ya no la hay en claro: el violeta rinde 6.68:1 sobre
blanco, 6.29:1 sobre `#f8f8f8` y 6.40:1 sobre el panel — AA de texto chico en
las tres. El violeta anterior (`#635dff`) se quedaba en 4.36:1 sobre la banda
gris y obligaba a la variante oscurecida; ese límite desapareció.

**Donde sí aprieta ahora es en oscuro.** El violeta nuevo es más oscuro, así que
sobre el degradado radial de la página de espera cae a 2.61:1 y no llega ni al
3:1 de texto grande, cuando el anterior daba 3.76:1 y pasaba. Sobre fondo oscuro
va `--color-violet-light`.

## Typography

**DM Sans** en una sola familia, con el contraste puesto en el peso (400 cuerpo
→ 800 display). Elección del usuario, mantenida del borrador. El Figma original
usa Roboto; DM Sans lo reemplazó y se conserva.

Escala fluida con `clamp()`. El borrador tenía `h1` clavado en 64px sin override
móvil — desbordaba. Los extremos de cada `clamp()` respetan el valor del Figma.

| Token | Tamaño | Alto de línea | Tracking | Peso |
|---|---|---|---|---|
| `text-display` | 36 → 64px | 1.06 | −0.025em | 800 |
| `text-h2` | 32 → 51px | 1.1 | −0.02em | 800 |
| `text-h3` | 24px | 1.3 | −0.021em | 700 |
| `text-lede` | 20 → 24px | 1.417 | −0.008em | 400 |
| `text-body` | 18px | 1.611 | — | 400 |
| `text-copy` | 16px | 1.625 (26px) | — | — |
| `text-ui` | 16px | 1.5 (24px) | — | — |
| `text-small` | 14px | 1.43 | — | 400 |

**Dos densidades del mismo cuerpo de 16px.** La escala tenía un solo
interlineado por tamaño, y las páginas necesitaban los dos: se habían resuelto
con **72 `text-[1rem]` sueltos repartidos en 29 archivos**, 38 con 26px de
interlineado y 34 con 24px. No era un tamaño que faltara, eran dos densidades.

- `text-copy` (16/26) — texto de lectura en tarjetas y párrafos cortos.
- `text-ui` (16/24) — nav, botones, etiquetas, chips, enlaces del pie.

Ninguno fija peso, para que compongan con `font-medium` / `font-semibold`.
`text-eyebrow` tiene las mismas métricas que `text-ui` pero lleva el peso 500
dentro; se conserva por semántica, pero para 16px normal va `text-ui`.

Quedan cinco `text-[1rem]` sueltos y son correctos: interlineados únicos de 22,
28 y 32px, y el glifo `+` del acordeón.

`text-wrap: balance` en h1–h3, `pretty` en prosa larga. Cuerpo tope 65–75ch.

### El gradiente `--night`

Acababa en `#7d7d7d`. El blanco se quedaba en **4.12:1** al final del recorrido
y el blanco al 80% fallaba desde el 92%, así que las secciones oscuras tenían
que reservar el tramo claro como aire y dos sitios lo esquivaban a mano
(`reply-proof.tsx` con su propio degradado, y la sección "In the box" de
GoHighLevel con `bg-ink` sólido).

Con el punto negro al 62% y la cola en `#2e2e2e`, el peor punto da **13.58:1**
con blanco y **9.25:1** con blanco al 80%. Los dos rodeos siguen en pie porque
ya funcionan, pero pasan a ser preferencia y no necesidad; sus comentarios lo
dicen.

### El mapa de "Meet Emmvi"

`components/meet-map.tsx`. Mapa de puntos con Spain y Argentina marcadas en el
violeta de marca: enseña de dónde trabaja Emmvi en vez de solo decirlo.

Va **inline y no como `<img>`** porque los puntos cambian de grosor con el
ancho — 2.6 → 6px, y las etiquetas 19 → 34px — para sobrevivir a la escala
cuando el mapa se sirve de borde a borde en móvil. Desde fuera no se puede
alcanzar el interior de una imagen. Las reglas viven en `globals.css`.

Lleva `role="img"` con `aria-label`, así que un lector de pantalla lo anuncia
como una sola imagen y no recita "Spain" y "Argentina" sueltos. Los colores
salen de los tokens, no del `#635DFF` literal del borrador.

## Layout

Ancho de contenido 1296px (`--container-wrap`), canal 52px en desktop y 24px en
móvil. Ritmo variado a propósito: el hero y el cierre respiran, el bloque de
exclusiones va apretado.

Estructura de la home (de `emmvi-home.html`, el diseño que eligió el usuario):
hero centrado → "Does this sound familiar?" (4 objeciones en 2×2, banda gris) →
"Two things, done properly" (2 tarjetas con captura) → "Meet Emmvi" (panel
`--night`) → "Why work with us" (2×2) → "How it works" (3 pasos, banda gris) →
"Who we work with" (filas con regla) → testimonios → FAQ → panel de contacto
(radius 32) → footer de 4 columnas.

## Motion

La home no lleva animación de entrada: el diseño elegido no la pide. Solo
transiciones de color en hover (150ms) y el acordeón nativo del FAQ.

`ReplyProof` (el panel de mensajes que se completa solo) queda en
`components/` sin usar en la home, reservado para `/for/installers`. Con
`prefers-reduced-motion: reduce` aparece ya entregado.

## Components

- `Wordmark` — logotipo inline con `currentColor`. Usa la versión de
  `emmvi-home.html`, que trae el punto de la "i" corregido (ápice en y=0.4481).
- `SiteHeader` — sticky 88px, wordmark + nav + CTA. Por debajo de 900px la nav
  y el CTA se ocultan y pasan al menú móvil: los tres no caben a 375px.

  Las anclas de la nav son **absolutas** (`/#services`), no relativas: el header
  ya no vive solo en la home — `/contact` lo monta también — y ahí `#services`
  no lleva a ninguna parte. Desde la home siguen siendo navegación dentro del
  documento, así que el scroll suave no cambia. El CTA sí se queda en
  `#contact`, porque las dos páginas que montan este header tienen una sección
  con ese id.

  **El CTA no se ocultaba en móvil.** Llevaba `hidden min-[900px]:inline-flex`
  y se veía igual a 375px, aplastando al wordmark contra el botón de menú —
  justo lo que el comentario decía evitar. Tailwind 4 emite las utilidades de
  display **por orden alfabético**, así que `.inline-flex` cae después de
  `.hidden` y el `inline-flex` de la cadena base de `CtaLink` ganaba por orden
  de hoja. Es el mismo fallo que el de `border-transparent` documentado abajo, y
  la misma lección: lo que la cadena base fija no se puede deshacer desde fuera
  con otra utilidad plana. Ahora va `max-[899px]:hidden`, que al estar dentro de
  una media query se emite después de todas ellas.
- `MobileMenu` — `<dialog>` nativo en modal. El focus trap y el cierre con
  Escape son del navegador; el bloqueo de scroll de fondo **no** lo es (se
  comprobó que la página seguía desplazándose detrás) y se resuelve con
  `html:has(dialog[open]){overflow:hidden}` en globals.css.
- `CtaLink` — variantes `primary` (tinta), `ghost` (borde `#eaeaea`), `outline`
  (borde negro) y `light` (sobre panel oscuro), altura 48, radius 8. Los dos
  secundarios no son el mismo botón: el Figma dibuja el "Learn More" de
  website-design con borde `#ebebeb` y el "Let's Talk" de las tarjetas de SEO
  con borde negro. Medido sobre los dos renders, no deducido de uno.

  **El borde iba en la cadena base y anulaba el de las variantes.** `border` y
  `border-transparent` estaban juntos en `base`, y Tailwind emite
  `.border-transparent` después de `.border-line` con la misma especificidad:
  ganaba el orden de la hoja y `ghost` **nunca** llegó a pintar su borde —
  salía como texto suelto. Ahora `base` solo pone el ancho y cada variante su
  color, incluidas las dos que lo quieren transparente.
- `CalendlyButton` — botón "Schedule a call" bajo los tres pasos, que abre
  Calendly en popup (`initPopupWidget`). Es un `<a>` real al enlace de Calendly,
  no el `<a href="" onclick>` del snippet oficial: si el script no cargó, está
  bloqueado o no hay JS, el clic sigue llevando a la reserva en pestaña nueva.
  Frente al embebido inline que había antes, **no hay iframe de terceros en la
  carga inicial**: Calendly no inyecta nada hasta que se pulsa, lo que acota el
  problema de consentimiento a quien decide reservar.
- `ContactForm` — Server Action (`app/actions/contact.ts`), así que envía
  también sin JS. Valida y normaliza con los mismos límites que el endpoint del
  portfolio, rate limit de 5 envíos por IP cada 10 min, campo honeypot y envío
  por Resend. Sin `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` y `CONTACT_TO_EMAIL`
  valida igual, devuelve un error legible conservando lo escrito, y registra la
  causa en el log del servidor. Ver `.env.example`.
- `SiteFooter` — 4 columnas.
- `ReplyProof` — sin usar en la home; reservado para `/for/installers`.

## How it works

Tres pasos en fila horizontal (`md:grid-cols-3`), como tarjetas con borde y
radius, igual que "Why work with us" y los testimonios.

**El numeral es propio, no prestado.** `01/02/03` en DM Sans 800 a 32px en el
violeta de marca, con una regla violeta corta debajo que lo separa del título.
Es el único sitio de la página donde el acento aparece a tamaño, lo que lo hace
deliberado. Contrasta 6.68:1 sobre papel — como texto grande necesita 3:1.

Descartado: el numeral en mono apagado, que es la convención de Turnozo y no la
de esta marca.

Los **chips** sí conservan el mono (`--font-mono`, stack del sistema, sin
petición extra), porque representan datos reales: duración, lo que traes, lo que
se construye, lo que queda funcionando. Nunca métricas inventadas. Esa es la
regla: mono para datos, DM Sans para estructura.

La llamada es de **30 minutos**, alineada con el evento de Calendly
(`/30min`); antes el copy decía quince y la reserva treinta.

## Coming soon

`app/coming-soon/page.tsx`, para mientras emmvi.com siga caído con 503.

Composición **centrada sobre oscuro**, siguiendo la referencia que eligió el
usuario: wordmark en blanco, eyebrow corto en versalitas espaciadas, titular en
mayúsculas, divisor de regla–rombo–regla, mensaje breve y contacto. El violeta
de marca ocupa el lugar que en esa referencia ocupaba el dorado.

Fondo: `radial-gradient(ellipse at 50% 38%, #1a1a1a, #000 70%)`. Contrastes
medidos sobre el degradado, no estimados:

| Elemento | Ratio | Necesita |
|---|---|---|
| Eyebrow, `--color-violet-light` 14px | 5.28:1 | 4.5 |
| Titular, `--color-violet-light` 56px | 5.28:1 | 3 (texto grande) |
| Cuerpo, blanco 70% | 9.49:1 | 3 |
| Enlace de correo, blanco 70% | 9.84:1 | 4.5 |
| Botón, ink sobre blanco | 17.93:1 | 4.5 |

El violeta de marca **no vale aquí, ni siquiera para el titular**: se queda en
2.61:1 sobre el centro iluminado, por debajo del 3:1 que pide el texto grande.
De ahí que el titular, el eyebrow y el divisor lleven los tres
`--color-violet-light` (#847ff8, 5.28:1 en el centro y 6.37:1 en el borde). Con
el violeta anterior el titular sí pasaba, y por eso iba en el de marca: sobre
oscuro había dos violetas y ahora hay uno.

No es un "volvemos pronto": la promesa de Emmvi es que toda consulta se
contesta en menos de un minuto, así que la página **mantiene reserva de llamada
y correo**. Y no promete fecha de lanzamiento, porque no hay ninguna que se
pueda cumplir.

`app/page.tsx` la sirve en la raíz cuando `COMING_SOON=1`: la URL sigue siendo
`emmvi.com/`, así que al quitar la variable aparece la home sin que nadie tenga
una `/coming-soon` guardada ni indexada. Comprobado en build de producción en
los dos sentidos.

Se hacía con `middleware.ts` y **fallaba en Vercel**: Next 16 lo emite con
sintaxis ESM y Vercel lo carga como CommonJS sin `"type": "module"`, dando
`MIDDLEWARE_INVOCATION_FAILED`. Para un flag estático el middleware sobraba —
resolverlo en build evita una invocación serverless por petición.

El `title` y la `description` describen Emmvi, no el estado del sitio, con
`title: { absolute: ... }` porque la plantilla `%s · Emmvi` del layout sí se
aplica a segmentos hijos (a la home no) y el título salía duplicado.

## Contact

`app/contact/page.tsx`. Página del **sitio vivo**, no del Figma: el archivo
tiene un frame "Contact Us" (`165:3157`) que es el del posicionamiento viejo, y
esta página habla el nuevo. Es la primera del sitio vivo aparte de la home.

Estructura: hero centrado ("Talk to us") → panel de contacto radius 32 a dos
columnas → "What happens after you send it" (3 pasos, banda gris) → "Worth
knowing before we talk" (3 filas con regla) → footer.

El panel es la pieza: **las dos vías a la misma llamada, una al lado de la
otra**. Izquierda, la reserva directa de Calendly; derecha, el mismo
`<ContactForm>` de la home, así que va contra la misma Server Action y hereda
validación, honeypot y rate limit.

El panel se quedó en eso a base de quitar. Fuera "Who you are writing to" (quién
contesta), fuera "Or send a message" con su párrafo sobre qué contar, y fuera el
correo directo: **dos opciones, sin instrucciones y sin tercera vía**. Los campos
del formulario se explican solos, así que la columna derecha va sin encabezado.
`sales@emmvi.com` ya no aparece aquí; sigue en la página de espera y en el
mensaje de error del formulario.

**El "OR" del medio es lo que quedó de aquel encabezado.** La retícula pasó a
`1fr auto 1fr` con una columna divisoria: regla vertical a toda la altura en
desktop, horizontal entre los dos bloques en móvil, y el "or" en versalitas
espaciadas sobre un chip con el fondo del panel, que corta la línea por detrás
en vez de cruzarla. Dice lo mismo que decía la instrucción, sin pedir que se
lea. La columna de la reserva va centrada en vertical (`self-center`) para que
las dos vías se lean como una bifurcación y no como un bloque corto encima de
un hueco.

La regla son dos `<span>` con `aria-hidden`; el "or" **no** lo lleva, porque en
lectura lineal esa palabra es justo lo que separa un camino del otro. Comprobado que
el envío funciona desde esta ruta (`POST /contact`), incluida la rama sin claves
de Resend, que devuelve el error legible conservando lo escrito.

Lleva `id="contact"` a propósito: el CTA del header y el del menú móvil apuntan
a `#contact`, así que siguen resolviendo dentro de la página en vez de saltar a
la home. Con `scroll-mt-24`, que libra los 88px del header sticky.

**Sin ReplyProof.** Ese panel demuestra la respuesta en menos de un minuto que
Emmvi *construye para el cliente*; junto a este formulario se leería como una
promesa sobre la propia bandeja de Emmvi, que no está automatizada. Sigue
reservado para `/for/installers`.

**Sin tiempo de respuesta prometido.** Lo que se afirma es que *lo lee alguien
y mira tu sitio antes de contestar*, y que la vía rápida de verdad es la
reserva, que cae en el calendario sola. Añadir "contestamos el mismo día
laborable" es una decisión del usuario, no una de diseño.

**El panel no dice quién contesta.** Tenía un bloque "Who you are writing to"
que presentaba a Emmvi como dos personas; se quitó por indicación del usuario,
y con él todas las menciones al tamaño del equipo que había en el sitio (la
home y el FAQ). **Emmvi se comunica como empresa**: se pueden nombrar personas
y ciudades, nunca cuántos son.

Las tres filas de "Worth knowing before we talk" son el principio 3 de
PRODUCT.md aplicado al final del embudo: lo que **no** se hace (ads, SEO,
social), que el precio no está en el sitio y sale después de la llamada, y que
el cliente se lleva todo si se va. Decir el límite antes de la llamada es lo que
hace creíble el resto.

## Imagery

Tres ilustraciones del propio Figma, no de stock, entregadas por el usuario ya
limpias: `design.svg`, `launch.svg` y `coding.svg` en `public/illustrations/`.
Line-art isométrico negro sobre transparente, servidas con `next/image` y
`loading="lazy"` dentro de un panel `--color-paper-panel`.

Importante: el export del frame de Figma trae **el fondo de la tarjeta horneado
dentro** (un rect `#F5F5F5` y un borde `#EAEAEA`), que se duplica con el panel
que ya pone el CSS. Las versiones buenas son las exportadas del nodo de la
ilustración sola.

Son tres y "Why work with us" tiene cuatro ideas, así que **"You own
everything" cierra la sección a ancho completo**, sin ilustración, en vez de
forzar una cuarta que no existe.

## Services — Website Design

`/services/website-design`. Réplica del frame homónimo del Figma
(`0niWGidrfk5rCNfWgb3L3z`, nodo `165:831`, 1400×13516). El resultado mide 13543
px de alto a 1400 de ancho: 27 px de diferencia sobre el original.

**Es el posicionamiento viejo, y se reconstruye a propósito.** Esta pantalla es
una de las cuatro páginas de servicio que `PRODUCT.md` lista como
anti-referencia — el menú de servicios que el relanzamiento abandona. Se
reconstruye por decisión explícita, no por descuido. No está enlazada desde la
home ni desde `SiteHeader`.

Por eso las páginas de servicio traen su propio shell, en
`components/services/` (`header.tsx`, `footer.tsx`, `sales-form.tsx`), en vez de
reutilizar `SiteHeader` y `SiteFooter`: la nav del Figma
tiene cuatro entradas y un desplegable de servicios, y el footer tiene otras
columnas. Mezclarlos habría contaminado el sitio vivo.

### Prueba social: la del Figma no, la real sí

El frame trae tres piezas de prueba social que no son atribuibles. Ninguna se
porta; dos se sustituyen por la versión real y una queda como hueco visible:

| En el Figma | Aquí | Por qué |
|---|---|---|
| Trust band con ShapeShift, Cameo y Bounce | Los nueve clientes reales | No son clientes |
| Testimonios de David P., Jessica R. y Sarah T. con caras de stock | Los tres reales, con su foto | Son de relleno |
| Cita firmada con el logo de "huskky" | Panel de placeholder | Cliente sin verificar |

**Trust band.** Nueve logos en `public/clients/`: InstallPros, BetterBacklinks,
AgencyHub, VoipVirtual, SteadyContent, aFax, KuroKink, JBZ Beats y TC Tails. La
altura va **por logo**, no una para todos: un wordmark ancho a 48 px pesa mucho
más que una chapa circular a 48 px, así que las dos chapas suben y los wordmarks
bajan hasta que ópticamente miden lo mismo.

Es una **cinta que corre sola** hacia la izquierda, sin dots ni flechas. Todo
CSS, cero JS: dos copias de la lista y un `translateX(-50%)`, de forma que al
terminar la copia 2 está exactamente donde arrancaba la 1 y la vuelta no se ve.
La copia 2 va `aria-hidden`, o un lector de pantalla leería los nueve clientes
dos veces. El hueco entre logos va como `padding-right` de cada lista y **no**
como `gap` del carril: con gap en el carril el −50 % cae a mitad de hueco y la
costura salta. Un ciclo dura 45 s (≈33 px/s), y los bordes se desvanecen con
`mask-image` en vez de cortarse en seco.

Las medidas intrínsecas de cada archivo van en el atributo `width`/`height`
aunque el tamaño lo mande el CSS: sin eso el carril mide cero hasta que cargan
las imágenes y la cinta arranca dando un salto.

`steady-content.svg` es un **recoloreado local**: el original (`SC-svg.svg`) es
el lockup para fondo oscuro, con "STEADY" en blanco, y sobre el papel del trust
band solo se leía "CONTENT". Aquí esa mitad va en `#171717`. Si SteadyContent
tiene versión oficial para fondo claro, sustituir el archivo.

**Testimonios.** Los tres llevan imagen real en `public/testimonials/`. La de
Jared White viene de una foto de 1000 px recortada a 160, centrada en la cara —
un `object-cover` al centro del original le cortaba por la mejilla.

**Alicia Ryz no es una cara: es la marca de su tienda**, un disco negro con el
monograma en blanco, 238 px con las esquinas transparentes. Entra bien en la
caja de 40 px con `rounded-full`, porque el disco está inscrito en el cuadrado
y el recorte circular cae justo encima. Sobre la tarjeta oscura de Email
Marketing (`#222226`) el negro del disco queda cerca del fondo, pero el borde
se distingue y el monograma es blanco: se lee. Si alguna vez deja de leerse,
la solución es un aro claro en el avatar, no recolorear la marca.

La de Adriana Patania sigue siendo el avatar de 64 px que entregó el usuario: a
40 px de caja queda algo blanda en pantalla retina, que pide 80. Es límite del
original, no del código.

El avatar de iniciales se queda en el componente como estado por defecto para
cualquier testimonio que se añada sin foto.

Una corrección de una palabra: el Figma escribe **"Reponsive Design"**. Aquí va
`Responsive`. Es errata, no decisión de diseño, y se vería en producción.

El buscador de la barra superior se dibuja pero va `disabled`: no hay búsqueda
detrás, y un campo que acepta texto y no busca nada miente más que uno apagado.

### Timeline de cinco semanas

La pieza que justifica la pantalla. Raíl central de 1 px en `--color-line` con
los primeros 186 px en violeta, nodos de 32 px cada 598 px y burbujas de 411 px
que alternan lado, con la etiqueta de semana siempre enfrente. El halo mide 350
y el disco interior 270, así que el padding es `(350−270)/2/350` = 11.43 %.

En móvil el raíl se va a la izquierda y las burbujas se apilan: un círculo de
350 px no cabe en 375 px de viewport.

El chip "Meeting with Client" aparece solo en las semanas 1, 2 y 5, como el
original.

**La línea sigue al scroll.** El tramo violeta deja de ser fijo: crece con el
scroll y su punta se queda clavada en el centro del viewport, y cada nodo y cada
etiqueta de semana pasan a violeta al cruzar ese mismo centro. Medido: la punta
cae a 0 px del centro en todo el recorrido, con los 16 px de los extremos que
son el `top-4`/`bottom-4` del raíl.

Va con `animation-timeline: view()`, sin una línea de JS — lo resuelve el
navegador. La línea usa el rango `cover` recortado 50 vh por cada punta, que es
justo lo que pone su recorrido a la altura del centro; los nodos conmutan al
50 % de su propio `cover`, que es el mismo punto.

**Dónde no corre, no se rompe.** Todo el bloque va dentro de
`@supports (animation-timeline: view())` y `prefers-reduced-motion:
no-preference`. Sin soporte o con movimiento reducido queda el estado del Figma
tal cual: tramo violeta fijo de 186 px y solo el primer nodo en violeta, que es
lo que ponen las clases de Tailwind en el JSX. Comprobado inyectando las
declaraciones del bloque reducido: la línea vuelve a 186 px y la cinta a la
retícula centrada de una sola copia.

### Formulario de ventas

Va contra la misma Server Action que la home (`app/actions/contact.ts`), que
ahora acepta cuatro campos opcionales — apellido y las tres preguntas de
calificación — y los añade al correo. La home no los envía, así que llegan
vacíos y no cambia nada de su comportamiento.

**Trampa de React con los `<select>` no controlados.** Cuando la acción
devuelve, React vuelve a aplicar `defaultValue` en un `<input>` pero **no** en
un `<select>`: el atributo `selected` se fijó en el montaje y el reset del
formulario lo devuelve a la primera opción. Se detectó enviando con presupuesto
`$3.000 - $5.000` y volviendo con `Less than $1.000` — el peor sitio posible
para perder el dato. Se resuelve con una `key` que incluye el valor devuelto,
que fuerza el remontaje del select.

Las escalas de los desplegables de páginas y presupuesto son **inventadas**: el
Figma solo enseña la opción seleccionada (`1-5`, `Less than $1.000`). Están en
constantes al principio de `sales-form.tsx`. El precio sigue siendo una decisión
de negocio sin cerrar.

### Assets

`public/figma/website-design/`. Lo que entregó el usuario en vectorial pesa poco
y es exacto; lo demás sigue recortado del render del propio frame.

| Pieza | Origen |
|---|---|
| `hero.svg` | del usuario, vectorial |
| `icons/` (11 SVG, 44 KB) | del usuario, vectorial |
| `mockups.png` (1580×1557), `work/` (15 a 836×670) | del usuario, raster |
| `preview.jpg` | recorte del render |
| Ilustraciones de "Project Kickoff" | ya estaban en `public/illustrations/` |

El showcase es de **3 × 5**, no seis filas. Los archivos llevan el nombre del
cliente y de ahí sale el `alt`: el Figma no rotula las capturas y aquí tampoco,
pero para quien no ve la imagen "proyecto 7 del portfolio" no dice nada y
"AgencyHub" sí. Los nombres de archivo van en kebab-case, sin espacios — una URL
con espacios funciona escapada, pero es una fuente de fallos que no hace falta
correr.

**Los once iconos son el chip completo de 56 px**, no el glifo: el SVG trae la
caja, su borde y el dibujo. Por eso el markup ya no lleva el `<span>` que hacía
de caja — sería pintarla dos veces. De paso corrigen un error: el borde de los
cinco violeta es el violeta de marca (`#635DFF`), no el lila claro que se había
muestreado del render, que era un píxel del antialias.

En `components/services/icons.tsx` quedan solo los que el Figma no dio: los
cinco del timeline, el check de Email Marketing y los de interfaz (chevron y
redes). Esos sí van dibujados a mano, a un trazo de 1.6 px y con `currentColor`.

### Contrastes medidos

| Par | Ratio | Veredicto |
|---|---|---|
| `--color-violet-ink` sobre `#f8f8ff` (badge) | 6.32:1 | AA texto |
| `--color-violet-ink` sobre `#f0edff` (iconos, iniciales) | 5.81:1 | AA texto |
| `--color-ink` sobre `#f0edff` (título de burbuja) | 15.59:1 | AA texto |
| `--color-violet` sobre papel (WEEK 1, 14px bold) | 6.68:1 | AA texto |
| `#8f8f8f` sobre papel (numeral 01, 32px) | 3.23:1 | AA texto grande |

El numeral es el único por debajo de 4.5, y va `aria-hidden`: el título que
lleva debajo es el que nombra el paso.


## Services — Email Marketing

`/services/email-marketing`. Réplica del frame homónimo del Figma (nodo
`165:1596`, 1400×8332). El resultado mide 8166 px a 1400 de ancho: 166 px menos
que el original, un 2 %.

Comparte shell con `/services/website-design` — header, footer y formulario de
ventas viven en `components/services/`, que antes se llamaba
`components/website-design/` y se renombró al aparecer la segunda página.

### Qué no se publica

| En el Figma | Aquí | Por qué |
|---|---|---|
| Banda de cifras: 75+ clientes, 32,3 M€ generados, 6,7X de ROI, 4,9/5 | Panel con las etiquetas y el hueco del número | Métricas sin medir |
| Testimonios de Sarah D., Michael S. y Sandra P. con caras de stock | Los tres reales | Son de relleno |
| Cita firmada del panel de contacto | Panel de placeholder | Cliente sin verificar |

Lo de las cifras es especialmente claro ahora: el trust band de la otra pantalla
lleva **nueve** clientes reales, así que "75+ Trusted Clients" no se sostiene.

**Siete respuestas del FAQ no existen.** El Figma escribe las ocho preguntas
pero solo desarrolla la primera, la que dibuja abierta. Las otras siete van
marcadas como pendientes en vez de inventadas: describir de qué se compone el
servicio es una afirmación de negocio, no una decisión de maquetación.

### Dos desviaciones del original

**La banda de plataformas lleva etiqueta.** El Figma pone Klaviyo, SendGrid,
Mailchimp y ActiveCampaign sin texto, en el mismo sitio donde la otra pantalla
pone logos de clientes. Sin etiqueta se leen como clientes, que sería falso. Va
un "Platforms we work with" encima.

**El diagrama de flujos se desplaza en móvil.** Es un solo asset de 1110 px con
etiquetas de 14 px: encajado en 375 px caen a ~4 px, ilegibles. Por debajo de
900 px se desplaza en horizontal con un ancho mínimo de 860, que las deja a
~11 px. Encogerlo hasta no servir contradice el principio de móvil primero.

### Assets

Los entregó el usuario y sustituyen a los que se sacaron del render del frame:
el hero, los logos de plataforma (`public/tools/`) y las cuatro ilustraciones de
las tarjetas son **SVG**, nítidos a cualquier tamaño. La excepción es
GoHighLevel, que llegó en PNG: se queda así porque `next/image` lo sirve en WebP
y convertirlo a mano no daría nada.

La banda son **cinco plataformas**, no las cuatro del Figma: GoHighLevel se
añadió después y es de las que PRODUCT.md ya nombra como herramienta real.

De la página solo quedan dos rasters, y los dos por buen motivo: `retention.png`
y `flow.png`. El segundo vino a 2220×2204 y es un diagrama compuesto, así que no
hay vectorial que sacar.

Van con `next/image` como el resto del proyecto. **Next 16 sirve los SVG locales
directos, sin pasar por `/_next/image`**, así que no hace falta
`dangerouslyAllowSVG` ni bajar a `<img>`: se comprobó que
`/illustrations/design.svg` se pide por su propia URL. La única excepción es la
cinta de logos de la otra pantalla, que sí usa `<img>`, y por otro motivo — ahí
el carril se mide en píxeles.

El diagrama de flujos vino a **2220×2204**, el doble del que se había exportado.
Sigue siendo raster porque es un asset compuesto, pero ya es nítido en retina.

Los tres retratos de Sarah D., Michael S. y Sandra P. que venían con el lote
**no se usan**: son las caras de los testimonios de relleno, y las tarjetas
llevan los tres clientes reales con su foto. Si esos tres fueran clientes de
verdad con una cita atribuible, entran sin tocar el diseño.

### Contrastes medidos

| Par | Ratio | Veredicto |
|---|---|---|
| `--color-pink-ink` sobre `--color-pink-wash` (badge) | 4.73:1 | AA texto |
| `--color-pink` sobre `--color-pink-wash` (borde) | 2.78:1 | solo decorativo |
| Blanco sobre `--dusk` en su extremo claro | 15.46:1 | AA texto |
| Cita al 80 % sobre la tarjeta oscura | 10.6:1 | AA texto |
| `--color-violet-light` sobre la tarjeta oscura (rol) | 4.78:1 | AA texto |
| Etiquetas de cifras, blanco 70 % sobre `--dusk` | 8.24:1 | AA texto |

El rosa del Figma **no vale para texto**: 2.78:1 sobre el relleno del badge. De
ahí `--color-pink-ink`, igual que en su día `--color-violet-ink`. El rosa
original se queda en el borde, que no lleva información.


## Services — SEO Services

`/services/seo`. Réplica del frame homónimo (nodo `165:2291`, 1400×7371). Mide
6799 px: un 8 % menos que el original, casi todo por la retícula de servicios
(ver abajo). Tercera pantalla del posicionamiento viejo; comparte shell con las
otras dos.

### Dos cosas que no se copian tal cual

**La retícula de servicios dibuja seis tarjetas, pero solo hay tres servicios.**
"Comprehensive SEO Audit" y "Local SEO" salen dos veces cada una para llenar la
segunda fila. Eso es un copia-pega, no un servicio. Aquí van las tres distintas
en una fila y el "Can't find what you need?" cierra a ancho completo, que es el
mismo recurso que usa la home cuando "Why work with us" tiene cuatro ideas y
solo hay tres ilustraciones.

**El testimonio lo firma Jared White, que es cliente real, con una cita escrita
para el Figma.** Poner palabras en boca de alguien que existe es peor que
inventarse a un cliente, así que va la que dijo de verdad — la misma que la home
y las otras dos pantallas.

### Contenido que falta en el archivo

Como en Email Marketing, el Figma escribe los títulos y desarrolla solo el
primero: **tres de las cuatro pestañas** del paquete SEO y **cuatro de las cinco
preguntas** del FAQ no tienen cuerpo. Van marcadas, no inventadas.

### Pestañas del paquete

`components/services/package-tabs.tsx`. Lista numerada a la izquierda, panel a
la derecha — con roles de pestaña de verdad: flechas para moverse, Home/End a
los extremos, `aria-controls` al panel y `tabIndex` móvil, así que el tabulador
entra una vez y las flechas recorren. Con un `<details>` por ítem no habría
panel único a la derecha, que es lo que dibuja el Figma.

El numeral es **texto vivo, no el SVG de 32 px** que trae el lote de assets:
ese es el glifo de Roboto vectorizado, y la tipografía del proyecto es DM Sans.
Como imagen tampoco heredaría el color ni lo leería nadie. Va al tamaño del
original: los dígitos del SVG miden 17,3 px, que en DM Sans 800 son 24 px de
cuerpo (antes iba a 18 px, que se quedaba corto).

### Colores nuevos

El badge del hero reutiliza el rosa de Email Marketing. El de "SEO Package" trae
un teal propio, y este sí pasa AA de sobra sin variante oscurecida:

| Par | Ratio | Veredicto |
|---|---|---|
| `--color-teal-ink` sobre `--color-teal-wash` | 7.23:1 | AA texto |
| Numeral blanco sobre `--dusk` (extremo claro) | 15.46:1 | AA texto |
| Paso al 85 % sobre `--dusk` | 11.5:1 | AA texto |
| `--color-violet-ink` sobre el panel del testimonio | 5.87:1 | AA texto |

La etiqueta de la banda de herramientas va en `--color-ink-soft` sobre papel,
que ya está medido en PRODUCT.md: 5.74:1.

### Assets

Los entregó el usuario en vectorial y sustituyen a los recortes del render del
frame con los que se montó la página. Renombrados a kebab-case, sin espacios ni
mayúsculas, como el resto de `public/`.

| Pieza | Archivo | Origen |
|---|---|---|
| Hero | `figma/seo/hero.svg` (642×470, 62 KB) | "Fueling startup" |
| Tarjetas | `figma/seo/card-{audit,local,backlinks}.svg` (256×256) | "Business-Analysis", "Local SEO" y "Backlink" |
| Logos de la banda | `tools/seo/*.svg` (seis) | todos del usuario, versión oficial para fondo claro |
| Testimonio | `figma/seo/testimonial.png` (824×824) | rasterizado del `testimonials.svg` entregado |

**El testimonio es el único raster, y por medida.** El SVG entregado trae la
ilustración en 532 trazados — 1,29 MB en disco, 469 KB comprimidos — porque el
degradado de la pantalla viene descompuesto en cientos de rellenos azules casi
iguales. Next **no** optimiza SVG, así que serían 469 KB de descarga para una
ilustración decorativa que está a media página. Rasterizado a 824 px (2× la caja
de 412 del Figma) ocupa 156 KB en el repo y `next/image` lo sirve en 100 KB de
WebP a 2×, bastante menos a 1×. El vectorial se re-exporta del Figma si hiciera
falta; no se guarda en `public/`, que es todo lo que se publica.

**La banda va a la medida de cada logo, no todos a la misma altura.** El Figma
los reparte con huecos iguales y cada uno a su tamaño: ahrefs 123×30, Google
Analytics 139×54 (es un lockup apilado, no una sola línea), Semrush 272×36 y Moz
106×30. Igualar alturas —como estaba, con los recortes del render— encogía el
lockup de Analytics y estiraba el wordmark de Semrush. Es la misma regla que el
trust band de website-design. Por debajo de 900 px se envuelven y se centran; el
más ancho es Search Console con 244 px y cabe en los 327 de contenido de un móvil
de 375.

### La banda va sobre papel, son seis y lleva etiqueta

Tres desviaciones deliberadas del frame.

**Lleva etiqueta: "Tools we work with".** El Figma pone los logos sueltos justo
debajo del hero, que es exactamente donde website-design pone los de sus
clientes. Sin texto se leen como clientes o partners, y eso sería falso.

**Son seis, no cuatro.** El usuario añadió Google Search Console y Google
Business Profile como herramientas que usa de verdad — mismo criterio que
GoHighLevel en Email Marketing. Con seis los cuatro del Figma vuelven a caber a
su medida exacta en una fila de 1192 (930 px de logos y 52 de hueco).

**Va sobre papel, no sobre tinta**, por decisión del usuario. Es el cambio con
más cola de los tres, porque **los logos del Figma son las versiones blancas**:
quitar el fondo negro sin más los borra a todos. Se recolorearon a mano y
después el usuario entregó la **versión oficial de cada marca para fondo claro**,
que es la que está ahora. No queda nada recoloreado en esta banda.

| Logo | Archivo | Medidas |
|---|---|---|
| Ahrefs | Azul `#054ADA` con la "a" naranja | 127×33 |
| Google Analytics | Gris `#5F6368` con las barras naranjas | 139×54 |
| Semrush | `#181E15`, lockup de dos líneas | 183×44 (nativo 150×36) |
| Moz | Cian `#4DBDEB` | 103×30 |
| Google Search Console | Gris `#5F6368` con la marca de colores | 244×36 |
| Google Business Profile | Chapa azul con la G en blanco | 46×40 |

Dos cosas que dejó el cambio de archivos:

**Semrush ya no es solo el wordmark: ahora firma "An Adobe Company".** Es el
lockup oficial vigente, y son dos líneas en 150×36, así que a su tamaño nativo
se lee más pequeño que el resto de la fila. Sube a 183×44 para pesar lo mismo.
Es la única medida de la banda que no es la intrínseca del archivo.

**Moz es el más pálido de la fila.** Su cian rinde 2.14:1 sobre papel. Es el
color de su marca y es un logo —contenido no textual, con `alt`—, así que no
incumple nada, pero ópticamente pesa menos que los otros cinco. Si alguna vez
molesta, la salida es quitarlo, no repintarlo.

**Ojo si algún día hay que recolorear un SVG de Figma**: el blanco no siempre es
tinta. En los cuatro archivos blancos había un `fill="white"` dentro de un
`<clipPath>` o un `<mask>`, y ahí el blanco es la propia máscara — cambiarlo
rompe el recorte y el logo desaparece entero.

La chapa de Business Profile va a 40 px frente a los 30–36 de los wordmarks: a
la misma altura pesa menos ópticamente. Y la banda **ya no lleva padding
propio**: sin fondo que la delimite, los 80 px que pone el hero por arriba y los
104 de Services por abajo son todo el aire que necesita. Con su `pb` original
quedaban 184 abajo contra 80 arriba, que sobre papel blanco se lee como un
agujero en vez de como un ritmo.

**Dos del lote no entran.** `01-Alternative.svg` … `04-Alternative.svg` son los
numerales de las pestañas vectorizados, y esos van en texto (arriba).
`Jared White.png` es el avatar de 60 px del Figma, y es una cara de stock: el
testimonio lo firma un cliente real y lleva su foto, la de 160 px que ya estaba
en `public/testimonials/`.


## Services — PPC

`/services/ppc`. Réplica del frame homónimo (nodo `165:3225`, **1440**×8865).
Mide 8774 px: 91 px menos que el original, un 1 %. Cuarta y última pantalla de
servicio del posicionamiento viejo; comparte shell con las otras tres.

**Es el único frame de 1440**, no de 1400. El contenido sigue en 1296 con canal
de 72, así que lo que cambia es el margen exterior, que en un layout fluido no
se replica. `--container-wrap` vale igual que en las otras tres.

### Los titulares grandes no son del tamaño de h2

Cuatro de los titulares de esta pantalla miden **64 px, como el h1**, no los
51 px del `text-h2` de las otras: "Need a Paid Ads Agency to Boost ROI?",
"Skilled Paid Ads Control…", "What Is Paid Advertising…" y "The Benefits of
Paid Online Advertising With Emmvi". Los dos que sí van a 51 son el FAQ y
"Talk to our Sales team".

Medido sobre el render, no deducido: altura de mayúscula de 48 px con ascendente
y sin descendente en "Need a Paid Ads" (48/0.75 = 64) contra 38 px en "Talk to
our Sales team" (38/0.75 ≈ 51), que es el h2 conocido de las otras pantallas.
Cuadra con los interlineados del archivo: 77 px (64 × 1.2) y 60 px (51 × 1.17).
Se usa `text-display` en un `<h2>`, que es un token de tamaño, no de jerarquía.

### Qué no se publica

| En el Figma | Aquí | Por qué |
|---|---|---|
| Banda "Brands we work with": Google Premier Partner, Amazon Ads, Bing Ads, Meta Business Partners | Banda de las cinco plataformas más usadas, etiquetada | Dos son sellos de acreditación; Amazon no es de este cliente |
| Banda de cifras: −28 %, +30 %, +40 %, −35 % | Panel con las etiquetas y el hueco del número | Métricas sin medir |
| "…boosting conversions by 311% on average" | El punto sin la cifra | La misma métrica, en línea de texto |
| Cita del panel de contacto, firmada con el logo de TC Tails | Panel de placeholder | La cita no es suya |

**La banda es el cambio con más cola.** Google *Premier* Partner y Meta Business
Partners no son logos de plataforma: son **sellos de acreditación**. Publicarlos
afirma un partnership certificado que nadie ha verificado, que es justo lo que
`PRODUCT.md` prohíbe cuando dice "sin logos sin permiso". Amazon Ads y Bing Ads
además son dos canales que la página no vuelve a mencionar en ningún sitio.

Lo que queda, por decisión del usuario: **Google Ads, Facebook, Instagram,
TikTok y LinkedIn**. La etiqueta "Platforms we run ads on" es la misma
corrección que llevan las bandas de Email Marketing y SEO.

**Microsoft Advertising llegó a estar y se quitó.** Es de las cinco más usadas
y entraba con el mismo criterio que GoHighLevel en Email Marketing, pero el
único archivo disponible es el wordmark **"Bing ads", nombre retirado en 2019**,
y en una página que vende PPC ese detalle lo nota cualquiera del gremio — el
mismo caso que el logo de Google My Business en la página de SEO. El SVG queda
sin usar en `microsoft-advertising.svg` y vuelve a entrar cuando haya el lockup
actual. Como wordmark entre marcas compactas iba a 30 px de alto, no a 48: a la
misma altura mide 174 de ancho y se come la fila.

**Amazon Ads se queda fuera aunque el archivo lo dibuje.** Por facturación es de
las mayores del mundo —por encima de TikTok y LinkedIn—, pero es *retail media*:
solo sirve a quien vende producto en Amazon, que no es el cliente de esta casa.
El SVG está en `logo-amazon-ads.svg` por si algún día entra un ecommerce, y
entonces desplaza a LinkedIn.

**Meta va como Facebook e Instagram, y en dos logos sueltos.** El lector no es
técnico: dice "Facebook", no "Meta". Son dos sitios distintos para quien lee,
aunque se compren en la misma cuenta, y la tarjeta de servicio de más abajo se
llama "Facebook and Instagram Ads", así que el lockup de Meta obligaría a
traducir. "Meta Ads" sería lo coherente solo si la banda listara sistemas de
compra en vez de sitios donde sale el anuncio.

**Los dos iconos sueltos venían inclinados y hubo que enderezarlos**: 19,3° el
de Facebook y 10,2° el de Instagram, cada uno con su ángulo porque en el Figma
eran decoración esparcida. La rotación **no está en un `transform`, está
horneada en las coordenadas** de los trazados y de la máscara, así que no vale
con quitar un atributo: se gira el contenido el ángulo contrario sobre el centro
y se recorta el `viewBox` al icono. Los dos resultan ser cuadrados de 40×40
dentro de una caja mayor (51 y 47). Inclinados no valían para una banda: junto a
la marca plana de Google Ads se leen como un error de maquetación.

**El Facebook de la banda no es el mismo dibujo que el de la tarjeta.** El icono
suelto es el cuadrado azul apagado (`#4460A0`) del estilo de app antiguo; el
lockup de la tarjeta trae el círculo con degradado, que es el vigente. Son los
dos archivos que hay en el Figma. Si molesta, la salida es pedir el icono
circular actual, no repintar el cuadrado.

**La cita del panel de contacto la firma TC Tails, que sí es cliente real.** Es
peor caso que el de las otras pantallas, no mejor: el texto es el de Email
Marketing repetido, así que publicarlo pondría palabras ajenas en boca de
alguien que existe. Va el mismo placeholder visible.

Dos erratas del archivo se corrigen, como "Reponsive Design" en su día:
el tercer punto del hero dice "Visually fun data reports ‍real-time data reports
on KPIs" —repite "data reports" porque une dos fragmentos con un ZWJ— y el
párrafo de "Skilled Paid Ads Control" escribe "matters most- whether", con guion
corto pegado.

**Un titular se acorta.** El Figma escribe "The Benefits of Paid Online
Advertising With Emmvi", que a 64 px son **cuatro líneas** en su columna — el
archivo lo dibuja en tres porque Roboto es más estrecho que DM Sans. Queda "Why
Run Your Ads With Us", que cae en dos y adopta la forma de pregunta de los otros
dos titulares de la pantalla. Medido en la columna real, no estimado.

El párrafo que lo acompaña sigue siendo el del Figma y **arrastra el titular
viejo**: "let's explore the advantages of leveraging our PPC management
services". Es lenguaje de consultora del que PRODUCT.md nombra como
anti-referencia, pero es copy del archivo y no se ha tocado sin pedirlo.

**Siete preguntas del FAQ, una respuesta.** Igual que en Email Marketing y SEO.
"How does PPC work?" va primera porque es la que el archivo dibuja abierta,
aunque en el orden de capas esté al final.

### El botón del panel oscuro cambia de variante

El Figma pone el botón negro (`#000000`) sobre el panel `--dusk` de "What Is
Paid Advertising": el borde del botón contra el panel da **1.3:1** y el botón
desaparece como objeto. WCAG 2.2 SC 1.4.11 pide 3:1 para el contorno de un
control. Va la variante `light` —papel sobre tinta—, la misma que el panel
`--night` de la home. El texto del botón no era el problema; el contorno sí.

### Las chapas de "Types of Paid Ads"

Cinco chapas inclinadas que flotan sobre el panel siguiendo una curva. El SVG
trae el círculo blanco, su borde `#eaeaea` y la inclinación **horneados**, así
que no son los logos planos de las tarjetas: son archivos distintos del mismo
lote y no se pueden intercambiar.

Van `aria-hidden`: son decoración y los cuatro canales ya están nombrados en
texto más arriba. Las posiciones son porcentajes de la caja del panel (1296×670
en el Figma), de forma que la curva se mantiene a cualquier ancho.

**La posición va en custom properties, no en `style` suelto.** Con `left`, `top`
y `width` en el atributo `style` el ancho en porcentaje se aplicaba también en
móvil, donde el `li` no está posicionado y es un ítem flex: los cinco se
encogían a **17 px**. Ahora el `style` solo declara `--chip-x/y/w` y las clases
los consumen a partir de 900px; por debajo, las chapas caen en una fila centrada
de 56 px bajo la lista.

La regla bajo el titular son **dos tramos**, no uno: 3 px de violeta de marca
(264 px) y una prolongación de 1 px más clara, hoy el propio token al 60 %. Es decorativa.

### Assets

`public/figma/ppc/`, 224 KB, **todo vectorial**. El usuario entregó ocho
archivos y faltaban ocho; los que faltaban se exportaron del Figma con
`get_design_context`, que devuelve el SVG real. Renombrados a kebab-case, sin
espacios ni mayúsculas, como el resto de `public/`.

| Pieza | Archivo | Origen |
|---|---|---|
| Hero | `hero.svg` (642×483) | del usuario |
| Imán de "Boost ROI" | `boost-roi.svg` (665×484) | exportado, nodo `165:3369` |
| Engranaje y monedas | `money-making.svg` (409×409) | exportado, nodo `165:3386` |
| Logos de tarjeta | `card-{google-ads,facebook-instagram-ads,tiktok-ads,linkedin-ads}.svg` | TikTok del usuario; los otros tres exportados |
| Iconos de beneficio | `benefit-{diversified,expertise,customized,transparency}.svg` (133×133) | Transparency del usuario; los otros tres exportados |
| Chapas | `chip-{google,facebook,instagram,linkedin,tiktok}.svg` | del usuario |
| Facebook e Instagram sueltos | `logo-{facebook,instagram}.svg` (40×40 tras enderezar) | del usuario |

Sin usar, en la carpeta y entregados por el usuario:
`badge-google-partner.svg` y `badge-meta-business-partners.svg` (los dos sellos
que no se publican), `logo-amazon-ads.svg` y `microsoft-advertising.svg`. Los
cuatro están ahí porque cada uno vuelve a entrar en cuanto cambie su motivo:
una certificación que se consiga, un cliente de ecommerce, o el lockup vigente
de Microsoft.

El lockup `card-facebook-instagram-ads.svg` **sigue en uso**: es el icono de la
tarjeta de servicio "Facebook and Instagram Ads". Lo que cambió es solo la
banda.

**El logo de Facebook + Instagram vino en cuatro trozos.** El nodo `165:3458` no
exporta como un archivo: son la burbuja de Facebook, dos degradados de Instagram
superpuestos y el glifo blanco de la cámara, cada uno con su máscara y su
posición. Se compusieron en un solo SVG de 108×48 con `<svg>` anidados a las
coordenadas del original. Los ids de degradado no chocaban entre trozos, así que
no hizo falta prefijarlos — si alguna vez se recompone otro, conviene mirarlo.

A los exportados se les quitan `preserveAspectRatio="none"`, `overflow="visible"`
y `style="display: block;"`, que son hints del render de Figma: el primero
**deforma el dibujo** en cuanto la caja no respeta la proporción exacta.

**`self-start` en los logos de tarjeta no es decorativo.** En una columna flex
el `align-items: stretch` por defecto estira un `w-auto` hasta el ancho de la
tarjeta: los cuatro logos salían en una caja de 470 px y el SVG se centraba
dentro en vez de quedar pegado a la izquierda. Se veía como un logo centrado,
no como un logo roto, que es lo que lo hacía fácil de pasar por alto.

Lo que no se porta del frame: las curvas decorativas de fondo (`Line-7` en el
panel de cifras y en el de "Types of Paid Ads", `line2` en el de beneficios).
Son trazos casi invisibles sobre el fondo y no hay asset entregado.

### Contrastes medidos

| Par | Ratio | Veredicto |
|---|---|---|
| `--color-pink-ink` sobre `--color-pink-wash` (badge PPC) | 4.73:1 | AA texto |
| Blanco sobre `--dusk` en su extremo claro | 15.46:1 | AA texto |
| Cuerpo al 85 % sobre `--dusk` | 11.5:1 | AA texto |
| Etiquetas de cifras, blanco 70 % sobre `--dusk` | 8.24:1 | AA texto |
| `--color-violet` (check de la lista) sobre papel | 6.68:1 | decorativo, el texto va aparte |
| Botón `light` sobre `--dusk` | 15.46:1 | AA, y 3:1 de contorno |

La paleta no crece: el badge reutiliza el rosa de Email Marketing y los dos
paneles oscuros son `--dusk`, medido sobre el render (`#232328 → #16151e →
#080714`). El verde `#20d662` de las cifras del Figma **no entra como token**,
porque las cifras no se publican.


## Services — About Us

`/about-us`. Réplica del frame "Services - About Us" (nodo `165:2085`,
1400×6122). Mide 6034 px a 1400 de ancho: 88 px menos que el original, un 1,4 %.

**Es la primera de las cinco que no es una página de servicio**, y la única que
ya estaba enlazada desde su propio shell: "About Us" en la nav del header y "Our
Team" en el footer apuntaban a `/about-us` desde que se construyó
website-design, así que hasta ahora los dos enlaces daban 404. El `current` del
header pasa a mirar también las entradas de primer nivel, no solo el
desplegable de servicios, para que la nav marque la página en la que se está.

El frame **no tiene hero aparte**: la primera sección, la de la chapa "Our
Mission", lo es. Su titular va a 64 px —`text-display` en un `<h1>`— y es el
único de la pantalla a ese tamaño; los otros cuatro son `text-h2` a 51.

### Las tres bandas de texto

Tres secciones seguidas con la misma estructura —antetítulo en versalitas,
regla corta y un párrafo de 30 px— y una sola diferencia: la primera va a
sangre sobre `--color-ink`, la segunda sobre papel con regla inferior, y la
tercera añade un titular entre la regla y el párrafo.

El párrafo de 30 px con tracking −1 px y línea de 45 **no es ningún token de la
escala**: es el cuerpo grande de esta pantalla y solo de esta. Baja a 24/36 por
debajo de `lg`, que es donde 30 px empieza a comerse el ancho del móvil.

En el archivo las tres miden 674 px con 197, 242 y 281 px de contenido: 238, 216
y 196 px de aire arriba y abajo. Son tres valores para lo mismo, así que aquí
comparten uno de 200.

**El divisor es la pieza que más se copia y menos se ve.** "Divider 3" son dos
líneas superpuestas en 83 px: un filete de 1 px de punta a punta y los primeros
41,5 px a 3 px de grosor. Va en violeta de marca en las dos primeras bandas y en
tinta bajo el titular de la tercera. Se dibuja con dos `<span>`, no con un SVG:
son dos rectángulos de color plano.

### Las tarjetas de valores

Tres columnas de 380 px con 78 de hueco a 1296 de ancho, que aquí van en
porcentaje (6 %) para que la proporción aguante a cualquier ancho.

**El Figma las centra verticalmente en una caja de 232 px y aquí van alineadas
arriba.** Con los textos de una, dos y tres líneas que tienen, centrarlas deja
los tres iconos a tres alturas distintas —32, 45 y 19 px desde el borde—, que en
una fila de tres iguales se lee como un error de montaje, no como una decisión.

Los tres iconos son **el chip completo de 56 px**, con su relleno `#f9fafd` y su
borde `#eaeaea` horneados en el SVG, igual que los once de website-design: el
markup no vuelve a pintar la caja.

### La retícula del equipo

Cuatro columnas de 191 px con 177 de hueco, también en porcentaje (13,66 %).
Siete personas en dos filas; la octava celda queda vacía, como en el archivo,
que ahí dibuja una copia oculta de Camila.

**Foto, nombre y cargo van en `subgrid`.** "Nicolas Mastromarino" mide 205 px en
DM Sans a 20 px y se parte en dos líneas — en la Roboto del Figma entraba en
una. Sin subgrid su cargo bajaba una línea respecto a los otros tres de la fila.
Donde no hay soporte queda ese desajuste, que es el apilado normal.

**El `gap-y` del grid padre se hereda dentro de cada tarjeta**, y ahí no pinta
nada: los 40 px que separan las dos filas se colaban también entre foto, nombre
y cargo, y las siete fichas salían desparramadas. La tarjeta lleva su propio
`gap-y-0`, que es el valor que el subgrid sí puede sobrescribir, y las medidas
del archivo las ponen los márgenes: 16 px de la foto al nombre y 0 del nombre al
cargo. Los 40 px entre filas siguen siendo los del padre.

El filete vertical de 105 px entre el párrafo y la retícula (nodo `165:2185`) es
un `#4e5a74` que no está en la paleta y no entra como token: aparece una vez,
es decorativo y va `aria-hidden`.

### Assets

`public/figma/about-us/`, 465 KB. Renombrados a kebab-case, sin espacios ni
mayúsculas, como el resto de `public/`.

| Pieza | Archivo | Origen |
|---|---|---|
| Iconos de valores | `expertise.svg`, `client-centric.svg`, `transparency-and-integrity.svg` (56×56) | del usuario |
| Seis retratos | `gustavo-polin.png`, `ezequiel-cenicola.png`, `camila-garcia.png`, `facundo-palombo.png`, `araceli-villalba.png`, `lucas-burgos.png` (191×191) | del usuario |
| Séptimo retrato | `nicolas-mastromarino.png` (191×191) | exportado del nodo `165:2191` |

**El de Nicolas no venía en la entrega.** Se exportó del propio Figma, que es de
donde salieron los otros seis, y se reescaló de los 200 px del render a los 191
de los demás. Si el usuario tiene el original, sustituirlo.

### Prueba social

La pantalla no tiene sección de testimonios. La cita del panel de contacto es en
el archivo la de Email Marketing repetida y firmada con un logo de cliente sin
verificar, como en PPC — pero aquí, sin testimonios más arriba, el placeholder
de las otras tres pantallas dejaría la página entera sin una sola voz de
cliente. Va la de **Adriana Patania**, que es real y habla del trabajo de Nico,
que es de quien va esta página.

Lo que sí se conserva del archivo, sin tocar: "Founded in 2017", "8+ years of
experience" y los siete cargos. Son afirmaciones sobre el propio equipo, no
prueba social prestada — mismo criterio que "A team of certified paid
advertising experts" en PPC. Quedan señaladas en el README para confirmarlas.

### Contrastes medidos

| Par | Ratio | Veredicto |
|---|---|---|
| Blanco 30px sobre la banda `--color-ink` | 17.93:1 | AA texto |
| `--color-violet-ink` sobre `#f8f8ff` (chapa) | 6.32:1 | AA texto |
| `--color-ink-soft` 30px sobre papel | 5.74:1 | AA texto |
| `--color-ink-soft` sobre `--color-paper-panel` | 5.50:1 | AA texto |
| `--color-violet-light` del divisor sobre la banda | 5.44:1 | decorativo |
| `#4e5a74` del filete vertical sobre papel | 6.91:1 | decorativo |
