# Design

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
| `--color-violet` | `#635dff` | acento único, de la marca |
| `--night` | `linear-gradient(180deg,#171717,#000 48%,#7d7d7d)` | paneles de demostración |

Restricción medida: el violeta rinde 4.63:1 sobre blanco (AA texto) pero 4.36:1
sobre `#f8f8f8`. Sobre banda gris, solo texto ≥18px o superficies.

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
| `text-small` | 14px | 1.43 | — | 400 |

`text-wrap: balance` en h1–h3, `pretty` en prosa larga. Cuerpo tope 65–75ch.

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
- `MobileMenu` — `<dialog>` nativo en modal. El focus trap y el cierre con
  Escape son del navegador; el bloqueo de scroll de fondo **no** lo es (se
  comprobó que la página seguía desplazándose detrás) y se resuelve con
  `html:has(dialog[open]){overflow:hidden}` en globals.css.
- `CtaLink` — variantes `primary` (tinta), `ghost` (borde) y `light` (sobre
  panel oscuro), altura 48, radius 8.
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
deliberado. Contrasta 4.63:1 sobre papel — como texto grande necesita 3:1.

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
| Eyebrow, `--color-violet-light` 14px | 5.69:1 | 4.5 |
| Titular, `--color-violet` 56px | 3.88:1 | 3 (texto grande) |
| Cuerpo, blanco 70% | 9.49:1 | 3 |
| Enlace de correo, blanco 70% | 9.84:1 | 4.5 |
| Botón, ink sobre blanco | 17.93:1 | 4.5 |

El violeta de marca **no vale para texto chico aquí**: se queda en 3.76:1 sobre
el centro iluminado. De ahí `--color-violet-light` (#827dff) para el eyebrow.

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
