# Product

## Register

brand

## Users

Dueños de negocios pequeños que todavía leen personalmente las consultas que
entran. El terreno más profundo son **instaladores y servicios a domicilio**
(placas solares, cargadores EV, climatización, fontanería, reformas), sin ser el
único: también clínicas y agencias que necesitan quien construya.

Contexto de uso: el visitante llega desde outreach en frío, casi siempre en el
móvil, muchas veces entre trabajos o al final del día. No es técnico. No busca
una agencia: busca dejar de perder trabajos que ya tenía ganados. Su pregunta
real es "¿esto me va a dar más problemas de los que me quita?".

Trabajo a resolver: dejar de perder presupuestos por no contestar a tiempo y no
hacer seguimiento.

Mercado: inglés, clientes en Europa y América. El equipo son dos personas, una
en España y una en Argentina, lo que cubre ambas jornadas laborales.

## Product Purpose

Emmvi vende **una sola cosa**: el sitio que capta la consulta y las
automatizaciones que impiden que se pierda — CRM, respuestas automáticas,
seguimiento de presupuestos, solicitud de reseñas y reporting. Diseño y
automatización no se venden por separado.

El sitio existe para conseguir una llamada de 30 minutos. No vende en la página,
y no lleva precio: el precio se habla en la llamada.

Éxito: un instalador que llega desde un email en frío entiende en un scroll qué
hace Emmvi, se cree que es cumplible, y reserva la llamada.

## Brand Personality

Tres palabras: **directo, llano, responsable.**

La regla de escritura es la frase del About: *"prometemos lo que podemos
cumplir"*. No es un valor decorativo, es el filtro de cada línea de la web. Si
una frase no se puede defender en una llamada, no va.

Se promete lo verificable: toda consulta contestada en menos de un minuto, todo
presupuesto con seguimiento, todo en un sitio, y el cliente dueño de su web y de
sus datos. No se prometen porcentajes de aumento de facturación.

Emoción objetivo: alivio con escepticismo satisfecho. No entusiasmo.

## Anti-references

- **El propio sitio actual de Emmvi** (emmvi.com, hoy caído) y el Figma
  "Emmvi - Website Redesign": hero "Get More Customers Without Doing More Work",
  sub "Identify usability issues, optimize user experiences, and increase your
  conversions", tabs de Website Design / Email Marketing / SEO / PPC. Es la
  agencia genérica que este relanzamiento abandona.
- **Lenguaje de consultora**: "Business Growth", "Digital Strategy",
  "Multifaceted Expertise", "We help real businesses grow". Humo indefendible.
- **Prueba social prestada**: el trust band actual usa logos de ShapeShift,
  Cameo, PrettyLittleThing, ZOC y Bounce, que no son clientes. Los testimonios
  con caras de stock del sitio viejo son del mismo tipo. Nada de eso se porta.
- **Ilustración isométrica de stock**: el cohete, el portátil y el navegador en
  line-art del Figma. Template.
- **La retícula de tarjetas idénticas** como respuesta a toda sección.

## Design Principles

1. **Lo que se promete se demuestra en la página.** La promesa central es la
   respuesta en menos de un minuto; el sitio la enseña funcionando (el demo de
   SMS) en vez de afirmarla.
2. **Una oferta, no un menú.** Nada de tabs de servicios. Si la página deja
   elegir entre piezas, se rompe el posicionamiento.
3. **El escepticismo es el visitante por defecto.** Cada afirmación fuerte va
   seguida de su mecanismo o de su límite. Decir lo que no se hace vende más que
   decir lo que sí.
4. **Honestidad sobre el estado real.** Sin cifras inventadas, sin logos sin
   permiso, sin testimonios de relleno. Los tres testimonios reales son de web y
   automatización, no de instaladores — y se presentan como lo que son.
5. **Móvil primero de verdad.** El lector está en una obra con una mano libre.

## Accessibility & Inclusion

WCAG 2.2 AA. Texto de cuerpo ≥4.5:1, texto grande ≥3:1, foco visible en todo
elemento interactivo, navegación completa por teclado y alternativa real para
`prefers-reduced-motion`.

Tamaño de objetivo: WCAG 2.2 AA pide 24×24 px (SC 2.5.8 Target Size Minimum);
los 44×44 son AAA (SC 2.5.5). Aquí se aplican **44px** igualmente, porque el
lector está en el móvil con una mano ocupada — es decisión nuestra, no del
estándar.

Contrastes medidos de la paleta (no estimados):

| Par | Ratio | Veredicto |
|---|---|---|
| `#171717` ink sobre `#ffffff` | 17.93:1 | AA texto |
| `#666666` ink-soft sobre `#ffffff` | 5.74:1 | AA texto |
| `#666666` ink-soft sobre `#f8f8f8` | 5.41:1 | AA texto |
| `#635dff` violeta sobre `#ffffff` | 4.63:1 | AA texto |
| `#ffffff` sobre `#635dff` violeta | 4.63:1 | AA texto (botones) |
| `#635dff` violeta sobre `#f8f8f8` | 4.36:1 | **solo texto grande** |

La única restricción real: el violeta sobre la banda gris `#f8f8f8` se queda en
4.36:1. Ahí se usa solo en texto ≥18px o en superficies, nunca en texto chico.
