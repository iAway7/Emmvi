# Emmvi

Sitio de [emmvi.com](https://emmvi.com). Next.js 16 · React 19 · Tailwind 4 · TypeScript.

El contexto del proyecto está en dos archivos que conviene leer antes de tocar nada:

- **[PRODUCT.md](PRODUCT.md)** — qué es Emmvi, a quién le habla, qué promete y qué
  no. Incluye la regla de escritura: *prometemos lo que podemos cumplir*.
- **[DESIGN.md](DESIGN.md)** — tokens, tipografía, componentes y los contrastes
  medidos de la paleta.

## Desarrollo

```bash
npm install
npm run dev
```

`npm run build` para el build de producción, `npm run lint` para ESLint.

## Variables de entorno

Copiar `.env.example` a `.env.local` y rellenar. Ninguna es obligatoria para que
el sitio arranque.

| Variable | Para qué |
|---|---|
| `RESEND_API_KEY` | Envío del formulario de contacto |
| `CONTACT_FROM_EMAIL` | Remitente verificado en Resend |
| `CONTACT_TO_EMAIL` | Destinatario interno de las consultas |
| `COMING_SOON` | `1` sirve la página de espera en la raíz |

Sin las tres de Resend, el formulario valida y responde igual: devuelve un error
legible, conserva lo escrito y registra la causa en el log del servidor.

## Página de espera

Con `COMING_SOON=1`, la raíz sirve la página de espera en vez de la home. La URL
sigue siendo `emmvi.com/`, así que nadie se queda con una `/coming-soon`
guardada ni indexada. La ruta `/coming-soon` existe igualmente, para
previsualizarla con la home todavía servida en la raíz.

**La variable se lee en build**, así que cambiarla exige volver a desplegar.

Esto se resolvía antes con `middleware.ts`, pero Next 16 emite el middleware con
sintaxis ESM y Vercel lo carga como CommonJS sin `"type": "module"` en
package.json: reventaba con `MIDDLEWARE_INVOCATION_FAILED`. Para un flag
estático el middleware sobraba de todos modos — así no hay invocación serverless
por petición y la raíz sigue siendo estática.

## Despliegue

Vercel, conectado a `main` de este repo: cada push despliega.

Dos cosas que ya han mordido una vez:

- **`COMING_SOON` se lee en build.** Cambiarla en el panel no basta: hay que
  volver a desplegar (*Deployments* → el último → *Redeploy*) o empujar un
  commit.
- **El Framework Preset del proyecto tiene que ser Next.js.** Si está en
  *Other*, Vercel publica solo `public/` como sitio estático: las imágenes
  responden 200 y todas las páginas dan 404, con el despliegue en READY y los
  dominios bien asignados. El síntoma no se parece a la causa. Está en
  *Settings* → *Build and Deployment* → *Framework Settings*.

  Prueba rápida para reconocerlo: si `/emmvi-mark.svg` responde y `/` no, es
  esto.

## Página 404

`app/not-found.tsx` captura cualquier ruta que no exista y sustituye a la
pantalla por defecto de Next. Devuelve 404 de verdad, no un 200 disfrazado, y
va con `robots: noindex`.

No es un callejón sin salida: además de volver a la home ofrece contacto, con
el mismo criterio que la página de espera.

La ilustración (`public/figma/404.svg`) es line-art en la paleta del sitio, así
que entra sin recolorear. Va con `alt=""` porque el h1 ya dice en palabras lo
que el dibujo cuenta.

## Buscador y enlaces compartidos

Todo lo que decide qué ve Google y qué se ve al pegar un enlace está en
`lib/site.ts`, y de ahí lo leen `app/robots.ts`, `app/sitemap.ts`,
`app/opengraph-image.tsx` y las siete páginas.

**El sitio está abierto al buscador incluso con la página de espera puesta**,
y es a propósito. `COMING_SOON` decide qué se sirve en la raíz; no toca el
`robots.txt`, ni el sitemap, ni el `noindex`.

Una primera versión de esto cerraba el sitio entero mientras durase la espera,
partiendo de que el dominio era nuevo y no había nada indexado. Era falso: el
WordPress anterior dejó 18 URLs en el índice de Google, rastreadas hasta
mediados de septiembre de 2026. Con un índice vivo, cerrar el rastreo hace lo
contrario de lo que se busca — ver *Migración del WordPress*, abajo.

`noindex` queda solo en `/coming-soon` (duplicado exacto de la raíz) y en el
404. El resto se indexa.

**Las cinco pantallas del Figma viejo** (`/about-us` y las cuatro de
`/services/`) entran hoy en el sitemap como cualquier otra. Son el
posicionamiento que el relanzamiento abandona, así que la decisión de dejarlas
o no en el buscador está aplazada hasta que la home nueva esté publicada.
Cuando toque, se cambia `indexLegacyPages` en `lib/site.ts`: ese booleano las
saca del sitemap y les pone `noindex` a la vez. Siguen accesibles para quien
tenga el enlace.

`pageMetadata()` arma título, descripción, canónica y Open Graph de cada
página. El Open Graph se escribe entero en cada una en vez de heredarlo del
layout porque **Next fusiona la metadata en superficie**: una página que declare
`openGraph` sustituye al del padre completo, y el `siteName` heredado se
perdería sin avisar.

La canónica hace falta aunque hoy no haya parámetros: en cuanto se envíe
tráfico con `?utm_source=` desde el outreach, cada campaña crea una URL distinta
con el mismo contenido.

### Migración del WordPress

El sitio vivía en WordPress hasta septiembre de 2026, cuando se perdió el
hosting. Al reconstruirlo en Next cambiaron las rutas, así que **las URLs que
Google tiene indexadas devolvían 404**: `/seo/`, `/ppc/`, `/website-design/`,
`/email-marketing/`, `/contact-us/` y una docena más.

**El sitio sirve con barra final** (`trailingSlash: true`), porque WordPress
usaba `/%postname%/` y las 31 URLs están indexadas con ella. Sin eso, Next la
quitaba y *cada* URL indexada respondía con un 308 antes de servir la página
—incluidas `/about-us/` y `/privacy-policy/`, que existen. Hoy 21 de las 31
sirven directas, sin ningún salto.

Dos cosas que hay que mantener en pie con la barra activada:

- **El sitemap la escribe a mano** (`app/sitemap.ts`). Next añade la barra a
  las canónicas por su cuenta, pero el sitemap lo generamos nosotros: si las
  dos formas no coinciden, el mapa contradice a la canónica.
- **Los destinos de los redirects la llevan.** Sin ella se encadena un segundo
  308 detrás del primero y la cadena pasa a dos saltos.

`next.config.ts` redirige con 308 las cinco páginas que se movieron de sitio.
`/about-us/` no necesita regla: la ruta nueva se llama igual.

**La página de contacto vive en `/contact-us/`**, que es la URL que WordPress
tenía indexada, no en `/contact`. Es una página que sobrevive al relanzamiento,
así que usar la que Google ya conoce le ahorra el salto para siempre. `/contact`
queda redirigida por si alguien la guardó durante las horas que existió.

**Los enlaces internos se escriben con barra final.** Con `trailingSlash: true`,
un `href="/about-us"` provoca un 308 al pulsarlo — y el pie usa `<a>`, no
`<Link>`, así que sería una recarga completa.

Dos reglas que conviene no romper:

- **No bloquear el rastreo.** Un `Disallow` impide que Google lea los 301, y
  sin leerlos no traslada nada. El 301 solo sirve si se puede rastrear.
- **No redirigir a la home lo que no tiene equivalente.** Google trata un
  redirect a una página no relacionada como *soft 404* —la descarta igual— y
  encima deja al visitante donde no quería ir.

El Wayback Machine solo archivó la home (mayo de 2024, título "Emmvi — Digital
Marketing Agency"): 25 capturas del dominio y ninguna de una página interior.

**Pero el backup sí las tiene.** Esta sección decía antes que el contenido viejo
no se recuperaba de ningún sitio, y era falso: el `.wpress` lleva las diecinueve
páginas del WordPress en la tabla `posts`, con el cuerpo entero —`seo` son 49 811
caracteres, `ppc` 26 899— además de los diecisiete artículos. Se dio por perdido
porque el Wayback no las tenía y nadie abrió esa tabla buscando páginas. Ver
*Lo que salió del backup*, abajo.

Sin destino todavía, y todas indexadas:

| URL vieja | Qué falta |
|---|---|
| `/cookie-preference/` | No existe. **El footer apunta a `/cookies`**: conviene usar la URL vieja, que ya está indexada, en vez de estrenar una. |

`/web-hosting/` y `/ux-ui-audits/` **se retiran a propósito**, porque son
servicios que el posicionamiento nuevo no ofrece.
`/full-stack-development-services/` estuvo retirada unas horas y volvió: es la
única de las tres cuyo servicio se sigue vendiendo.

`/cookie-preference/` se retira por otro motivo: las preferencias son ahora el
panel de CookieYes, que abre el botón del pie. No es un servicio retirado sino
una página que dejó de ser página, así que su 410 lleva explicación propia —
`gone()` la acepta como segundo argumento— y le dice al visitante dónde están
ahora en vez de que "dejamos de ofrecerlas".

Van con **410 Gone**, no con 404. La diferencia importa: un 404 dice "no lo
encuentro", que para un buscador puede ser un fallo pasajero, y Google
reintenta durante meses antes de soltar la URL. Un 410 dice "existía y se ha
ido", y la retira en días.

Se hace con un Route Handler (`app/web-hosting/route.ts`) y no con
`notFound()`, porque el App Router solo sabe devolver 404 — no hay un `gone()`.
Tampoco con middleware, por el fallo de ESM/CommonJS ya documentado arriba. Un
segmento estático gana a `app/[slug]`, así que responde antes que la ruta de
los artículos.

La forma con barra final, que es la que Google tiene indexada, entra por el 308
de normalización de Next y termina en el 410. Verificado: un salto.

Llevan cuerpo HTML en vez de ir vacías porque durante unas semanas seguirá
llegando gente desde el buscador.

`/privacy-policy/` ya está hecha. Ver *Política de privacidad*, abajo.

### Lo que salió del backup

El `.wpress` (`emmvi-com-20260826-011835`, 557 MB, en *Downloads/Backup SG*) no
solo trae los artículos: trae **las diecinueve páginas del WordPress con su
contenido**. El texto vive en `posts.post_content` como HTML ya renderizado por
Elementor, y el marcado de origen en `postmeta._elementor_data` como JSON.

Esto importa porque **el Figma reutilizaba el copy del sitio vivo**. Los textos
que las réplicas tenían marcados como pendientes —el Figma solo desarrolla el
primer elemento de cada bloque— estaban escritos enteros en el backup, palabra
por palabra. De ahí salieron:

| Dónde faltaba | Qué se recuperó |
|---|---|
| `/services/seo` | Los tres cuerpos de pestaña (Keyword Research, On-page, Off-page) y las cuatro respuestas del FAQ |
| `/services/ppc` | Las seis respuestas del FAQ |
| `/services/ppc` | El giro de las chapas al hacer scroll (ver abajo) |

Texto intacto, mismo criterio que con los artículos: no se ha reescrito nada.

En `/services/seo`, *"Do you guarantee the #1 position in search results?"*
responde que **no** se puede garantizar. Es de las pocas líneas del
posicionamiento viejo que pasa el filtro de PRODUCT.md tal cual, y por eso entra
sin tocarla.

**El `_elementor_data` guarda también los efectos de movimiento**, que es como se
recuperó el giro de las chapas de PPC. Las cinco llevaban
`motion_fx_rotateZ_effect` atado al scroll, y tres de ellas —Google, Instagram y
Facebook— con `motion_fx_rotateZ_direction: "negative"`. Está reconstruido con
`animation-timeline: view()`, el mismo mecanismo sin JavaScript que el timeline
de website-design, con una amplitud corta (±11°).

Hay dos cosas más en el backup que no se han tocado y conviene saber que están:
una página **Pricing** en borrador (92 KB) y una **get-more-customers** en la
papelera (86 KB). Si alguna vez hace falta saber qué se cobraba o cómo se
vendía, están ahí.

#### El scroll y `overflow: hidden`

Las chapas no giraban al principio, y la causa no se parecía al síntoma: el
panel que las contiene llevaba `overflow-hidden`, y **eso lo convierte en
contenedor de scroll**. El `view()` de cada chapa se anclaba a ese panel en vez
de a la página; como el panel no se desplaza, su rango de scroll es cero, el
ViewTimeline no resolvía (`currentTime` a `null`) y el `transform` se quedaba en
`none` — sin ningún error en consola.

Se arregla con `overflow-clip`, que recorta igual, radio incluido, sin crear
contenedor de scroll. **Si alguna animación de scroll deja de funcionar, esto es
lo primero que hay que mirar**, porque falla en silencio.

### El blog

**Diecisiete artículos, recuperados del backup del WordPress**, no reescritos.
`/blog/` y los diecisiete están en el sitemap con **los slugs intactos**: la URL
es lo único que tenía valor y cambiarla tira el ejercicio entero.

El backup (`.wpress` de All-in-One WP Migration, agosto de 2026) llevaba dentro
`database.sql`, y de ahí salieron los textos íntegros, las fechas de
publicación originales y las meta descriptions que había escrito RankMath.

**Search Console solo enseñaba ocho.** Los otros nueve aparecieron al abrir la
base de datos. Es el motivo de trabajar del backup y no del panel: el panel
enseña lo que tuvo tráfico, no lo que existe.

Del marcado Gutenberg a los bloques hay un paso de conversión. **Está
verificado contra el backup, frase a frase: no falta ni una.** El ≥95% que
decía antes esta línea era una estimación; la medición real da el 100% de las
791 frases de los diecisiete, y las entradillas salen de las
`rank_math_description` que había en `postmeta` (16 de 17 las tienen).

#### Lo que sí se perdió: la separación

El conversor se comió **los espacios alrededor de los 345 `<strong>` y los 44
enlaces, y los 27 `<br>`**. El texto llegó entero, pero se leía pegado:

> usingWordPress · Tools likeFigma,InVision, andMarvelare commonly used · Start
> a Blog:Regularly publish · Let's Build Smarter TogetherIf you're serious

**Ciento veintiséis uniones así**, repartidas por los diecisiete. Hoy son cero.

Se arregla en `components/post-body.tsx` y no en los datos, porque los
artículos son contenido restaurado que no se toca y el defecto es del paso de
conversión, no del texto. La regla mira los dos lados: el fragmento siguiente
tiene que empezar por letra o cifra —así `$5.45` seguido de `/month` no se
parte— y el anterior puede acabar en letra, cifra o en un signo de cierre,
porque el caso más repetido del blog es `<strong>Start a Blog:</strong>` pegado
a su frase. Una primera versión solo aceptaba letra o cifra a la izquierda y
dejaba 73 de las 126 sin tocar.

**Dos `<br>` no los ve el renderizador**, porque se perdieron *dentro* de un
fragmento y para él son una sola cadena. Esos dos se arreglaron en los datos:
el precio de Bluehost, que quedaba "monthBluehost", y el "Let's Build Smarter
Together" de Zapier, que era un titulillo con `<br>` detrás y ahora vuelve a
ser su propio bloque.

La comprobación completa es de tres direcciones y conviene repetirla si alguien
reconvierte: que no queden uniones pegadas, que ninguna frase del original falte
en la página, y que ninguna frase de la página falte en el original. Lo único reescrito son los enlaces internos:
apuntaban a rutas viejas y van al destino actual —`/seo` → `/services/seo`— en vez de encadenar una redirección. Los que
llevaban a una página retirada se quedan en texto llano, porque un enlace a un
410 desde dentro de un artículo es un callejón.

#### La página de artículo

Reconstruida desde "Single Post" del backup (`elementor_library` ID 2652, la que
llevaba la condición `include/singular/post`; las otras dos plantillas con
nombre parecido son contenedores sueltos, no la activa).

Del original vuelven cuatro piezas que no estaban:

- **La portada centrada.** Titular a 4rem con peso 800 sobre 970px, que es
  exactamente el token `text-display`, con la entradilla y la fecha debajo.
- **La imagen destacada**, recortada a 16/9.
- **El índice de contenidos** en columna, pegajoso en escritorio.
- **"Share the post"** con X y LinkedIn, y **dos artículos relacionados**.

**El índice se calcula en build, no en el navegador.** El widget de Elementor
leía el DOM ya pintado; aquí los encabezados son datos, así que `lib/toc.ts`
saca los h2 y `PostBody` escribe los `id` a partir de la *misma* función. Vive
en un solo sitio a propósito: si las dos reglas divergen, el índice apunta a
anclas que no existen y falla en silencio. Solo entran los h2 — con h3 el
artículo de hosting sacaba un índice más largo que la sección que resume — y los
encabezados repetidos (varios artículos abren cada apartado con "Fix:") se
desempatan con un sufijo que se calcula igual en las dos direcciones.

**Los botones de compartir son enlaces, no el widget de nadie.** El original
usaba el `share-buttons` de Elementor, que carga el SDK de cada red y por tanto
ve a todo el que abre el artículo, lo pulse o no, y habría que declararlo en la
política de privacidad. Con un `<a>` a la URL de compartir no se conecta nada
hasta que alguien pulsa. Los iconos van inline por lo mismo.

**Los relacionados son tres**, elegidos por categoría y rellenando con los más
recientes. El original mostraba dos, pero a dos cada tarjeta ocupa media
pantalla y la imagen crece con ella: el bloque acababa pesando más que el final
del artículo que lo precede. Tres llenan la fila sin dejar huecos.

**La llamada va debajo de "Share the post", no al final de la página.** Ese es
el momento en que alguien acaba de leer; después de una fila de "sigue leyendo"
ya se ha ido a otro sitio. Vive dentro de la columna del texto, así que hereda
su ancho en vez de cruzar la página por debajo del índice.

Misma retícula de tres columnas que el índice del blog.

Tres cosas del original no vuelven: el **bloque de suscripción** (no hay lista),
el **autor** en la cabecera —firmar diecisiete piezas con un nombre propio
empieza a decir cuánta gente hay, ver PRODUCT.md— y el **"Load More"** de los
relacionados.

#### Palabras partidas en los enlaces

El conversor no solo se comió espacios: **partió palabras**. "Bluehost" llegó
como tres fragmentos —`Blue`, `h`, `ost`— los tres con el mismo `href`,
seguramente por un `<span>` suelto dentro del enlace en el editor.

Eso no se notaba hasta que se añadió la separación automática, que entonces lo
leía como tres palabras pegadas y publicaba **"Blue h ost"**. `PostBody` une
ahora los fragmentos contiguos que comparten formato antes de pintarlos, que es
lo correcto por sí solo: tres enlaces seguidos al mismo destino son un enlace, y
como tres son tres paradas del teclado para una palabra.

#### Las imágenes

**Los diecisiete tienen imagen destacada, y están recuperadas.** Se dieron por
inexistentes durante un tiempo —`app/blog/page.tsx` llegó a decir "no hay
ninguna que sea de Emmvi"— porque nadie buscó `_thumbnail_id` en `postmeta`.
Están las diecisiete, en `public/blog/<slug>.<ext>`, y cada artículo la declara
en su propio archivo.

**No son trabajo de Emmvi**, y conviene tenerlo claro antes de defenderlas: son
ilustraciones de banco, plantillas de Canva y arte generado con IA, que es lo
que el WordPress publicaba. No son prueba social prestada —no afirman nada
sobre Emmvi ni sobre sus clientes, que es lo que PRODUCT.md prohíbe— pero
tampoco son una señal de calidad. Vienen en cinco proporciones distintas, de
750×401 a 1066×1600, ninguna comparte paleta con el sitio y alguna lleva su
propio titular quemado dentro, que en una tarjeta queda dicho dos veces.

Van con `alt=""` a propósito: la imagen vive dentro del enlace, pegada al
titular que ya dice lo mismo, y describir una ilustración genérica ahí solo
añade ruido a un lector de pantalla.

Dos pesaban 2,5 MB y 1,6 MB en PNG. Reescaladas a 1600px y pasadas a JPEG, las
diecisiete ocupan 1,9 MB.

**Las de dentro de los artículos son otra historia.** El de Webflow vs Wix
referenciaba cinco, y **cuatro no están en el backup**: se borraron de la
biblioteca después de insertarlas, así que ya estaban rotas en el sitio vivo.
Sus bloques se quitaron. Las que hoy usa el artículo están en `public/blog/` y
llevan texto alternativo escrito a mano, porque el original las tenía con `alt`
vacío. Ningún otro artículo lleva imágenes en el cuerpo.

##### La retícula del índice

`/blog` reconstruye la plantilla "Blog" del WordPress (`elementor_library`
ID 2632, skin `archive_cards`): tarjeta con borde, imagen arriba, titular,
extracto y enlace de lectura. Del archivo salen también las medidas —titular a
24px sobre 36 de línea, extracto a 16 sobre 24, 32px entre tarjetas, 16 bajo el
titular—, expresadas aquí con los tokens del sitio en vez de a pelo.

El hueco de la imagen es fijo y recorta (`aspect-[16/9]` con `object-cover`)
porque las destacadas vienen en cinco proporciones: sin eso la retícula se
descuadra sola.

**El badge de categoría también es del original** (el skin traía
`archive_cards_badge_typography_font_weight`), y las categorías salen del
WordPress: `terms` más `term_relationships`. Las trece existían de verdad;
ninguna se ha inventado.

Va **una sola por artículo**, aunque varios llevaban dos o tres: un badge con
tres etiquetas deja de ser una señal y pasa a ser una lista. Donde había varias
se eligió la que más le dice a quien lee —`streamline-scale-succeed` tenía
GoHighLevel, Automation y Zapier, y se queda en Automation, que es de lo que
va— y "Uncategorized" se descarta, que es el relleno de WordPress.

**Va sobre el titular, no encima de la imagen.** El skin del WordPress lo ponía
flotando sobre la foto, y ahí tapa lo que haya debajo: las destacadas llevan su
propia composición y un badge en la esquina se come justo un trozo de ella.
Sobre papel no molesta a nada y además deja de depender del contraste de cada
imagen.

**La retícula se queda en tres columnas.** Hubo una versión a cuatro y se
revirtió: con títulos de nueve palabras como el de GoHighLevel, a cuatro la
tarjeta se estrecha tanto que el titular ocupa seis líneas y empuja el resto
fuera de la vista.

Si alguna vez se vuelve a intentar, el breakpoint tiene truco:
`min-[1200px]:grid-cols-4` **no funciona**. Tailwind emite las variantes con
nombre en su orden canónico y las arbitrarias antes, así que `lg:grid-cols-3`
cae después en la hoja y gana desde 1024px. Hay que usar `xl:`. Es el mismo
fallo de orden que ya documentan `site-header.tsx` y `cta-link.tsx`.

**No es un enlace**, porque no hay página de categoría. Inventar una para que
liste dos artículos es maquinaria sin lector; si algún día el blog crece, el
dato ya está en cada artículo.

Tres cosas del original no se reconstruyen, y no es por falta de datos:

- **El radio de 20px.** DESIGN.md tiene 8, 12 y 32; una cuarta medida suelta
  solo para esta página es deuda. Va con 12.
- **El formulario de suscripción** ("Get Updates every Week!", un campo y un
  botón Submit al 35% de ancho). No hay lista de correo ni nada que recoja esas
  direcciones: sería pedir un email para no mandar nada.
- **"Load More" con scroll infinito.** Diecisiete artículos caben de una vez.

El h1 del WordPress era *"Mastering the Digital Sphere: Our Blog's Knowledge
Repository"*, que es el lenguaje de consultora que PRODUCT.md lista como
anti-referencia. Se queda el titular corto.

### Sin guiones largos

**No hay ni un em dash ni un en dash en el texto que ve el visitante.** Eran
123, la mayoría en los artículos recuperados. Se quitaron porque hoy ese guión
lee como escritura de máquina, que es justo lo contrario de lo que este sitio
quiere parecer.

No hay una sustitución mecánica que valga: un guión largo puede abrir una
aposición, contraponer dos frases, introducir una lista o marcar un rango, y
cada uso pide un signo distinto. Se clasificaron los 123 por función y se
sustituyeron en consecuencia:

| Lo que hacía | Pasa a ser | Ejemplo |
|---|---|---|
| Etiqueta y su glosa | dos puntos | *Smart Scheduling: AI-driven appointment scheduling…* |
| Contraponer dos frases | punto y mayúscula | *…another marketing tool. It's a comprehensive solution…* |
| Conector detrás (*and*, *but*, *or*) | coma | *…not the subject matter, and where it does not…* |
| Inciso cerrado entre dos guiones | paréntesis | *…in 2025 (performance, uptime, pricing and features) to choose…* |
| Rango numérico | *to* | *(2 to 3 main colors)* |
| Resto | coma | |

**Los comentarios del código se quedan como están**: ahí el guión no lo lee
ningún visitante.

Dos cosas que hubo que repasar a mano después, y que conviene mirar si alguien
vuelve a pasar una sustitución masiva: los incisos cerrados dejaban **dos** dos
puntos en la misma frase, y una coma detrás de un `</a>` en JSX sale con espacio
delante (*"Resend , delivers"*), porque el salto de línea del código cuenta.

### Reescrituras

`content/rewrites/` guarda ocho artículos escritos **antes** de recuperar el
backup, cuando se daba por perdido el original. No se publican. Son la primera
tanda de reescritura: sustituir un original es cambiar su `body` sin tocar
`slug`, `title` ni `published`.

**`figma-vs-adobe-xd` ya no está publicado.** El original era de abril de 2025 y
comparaba Figma con Adobe XD como si fueran dos rivales vivos; Adobe dejó XD en
mantenimiento en 2023, tras caerse la compra de Figma, así que el artículo
recomendaba elegir entre dos herramientas de las que uno ya no se desarrolla.

Se retira con **410**, como `/web-hosting/` y `/ux-ui-audits/`, no con un borrado
a secas: la URL lleva indexada desde 2025, un 404 la deja en el índice meses
mientras Google reintenta, y un redirect a la home sería un *soft 404* que
además deja al visitante donde no quería ir. El explicativo es propio y dice
por qué se cayó.

**La reescritura de `content/rewrites/` sigue ahí y cuenta bien lo de XD.** Si
se publica, la ruta `app/figma-vs-adobe-xd-…/route.ts` desaparece y el artículo
vuelve con la URL intacta, que es lo único que esa URL tenía de valor.

#### La ruta

Viven en `content/posts/*.ts` como bloques tipados, no como MDX: así el cuerpo
usa los mismos tokens tipográficos que el resto del sitio sin meter tres
dependencias. `components/post-body.tsx` los pinta.

**Están en la raíz, no bajo `/blog/`**, porque así los tenía WordPress. Eso
obliga a una ruta dinámica en la raíz (`app/[slug]/page.tsx`), que da miedo con
razón. No se traga el sitio por dos motivos que conviene no tocar: en el App
Router un segmento estático gana siempre al dinámico, y `dynamicParams = false`
hace que cualquier slug que no salga de `generateStaticParams` devuelva 404.
Verificado en `prerender-manifest.json`: `fallback: false`.

Efecto lateral de esa ruta: ESLint pasó a resolver rutas de un solo segmento
como páginas reales, y destapó siete `<a>` internos que debían ser `<Link>`.
Están convertidos.

### Política de privacidad

`app/privacy-policy/page.tsx`, en esa URL porque es la que WordPress dejó
indexada. La enlazan siete sitios, incluido el texto de consentimiento del
formulario de contacto, así que hasta ahora ese consentimiento apuntaba a un
404.

**No es una plantilla.** Cada afirmación sale de leer el código, y si el código
cambia la página miente:

| Lo que dice | De dónde sale |
|---|---|
| El formulario no guarda nada, manda un email | `app/actions/contact.ts` |
| Las IPs viven 10 min en memoria, máx. 5 envíos | `lib/contact.ts` |
| El sitio no pone cookies propias | No hay estado de sesión ni preferencias; las de terceros son de GTM y Calendly |
| Las tipografías no llaman a Google | `next/font` las descarga en build |
| Calendly ve tu IP sin que pulses nada | `components/calendly-button.tsx` carga su script solo |
| Google recibe IP y navegador al cargar | El contenedor de GTM, en `app/layout.tsx` |
| PostHog en la nube europea, sin transferencia | Pendiente de instalar; ver más abajo |

Los datos del responsable ya están puestos. **Es una persona física, no una
sociedad**: Emmvi es nombre comercial y quien responde es el titular, de ahí que
el texto diga *"trading name of"* y no *"a company registered in"*.

El mecanismo del hueco sigue montado por si vuelve a hacer falta: mientras
`controller.legalName` o `controller.registeredAddress` estén a `null`, la
página muestra un aviso visible de borrador en la cabecera. No se puede
publicar en silencio con el dato a medias.

**Falta el código postal** de la dirección. No se pone a ojo: un dato
identificativo mal puesto es peor que uno incompleto.

La página **describe GA4 y PostHog como si ya estuvieran corriendo**, y hoy solo
está GTM. Es el sentido seguro del desfase —declara más de lo que pasa, no
menos— pero si se decide no instalar alguno, hay que quitar su párrafo.

#### Promesas, no descripciones

Estos valores y ajustes son compromisos con el visitante. Si la configuración
real no coincide, la página promete algo que no se cumple:

| Promesa | Dónde se cumple |
|---|---|
| `ENQUIRY_RETENTION_MONTHS` = 12 | En la bandeja: hay que borrar de verdad |
| `GA4_RETENTION_MONTHS` = 14 | GA4 → Administrar → Conservación de datos |
| `SESSION_RECORDING_RETENTION_DAYS` = 30 | PostHog, según plan |
| "lo que tecleas se enmascara antes de salir del navegador" | `maskAllInputs` de PostHog, activado por defecto. **Desactivarlo mete nombres, correos y mensajes en la grabación** |
| "la analítica no sale de la UE" | Inicializar PostHog contra `eu.i.posthog.com`, no el host de EE. UU. |
| "nada conectado a publicidad" | No activar Google Signals ni enlazar GA4 con Google Ads |
| `LAST_UPDATED` | Subirla al publicar cambios de fondo |

### Google Tag Manager

Contenedor `GTM-M2BGFZRC`, en `app/layout.tsx`. Dos diferencias obligadas
respecto al fragmento que da Google:

- Va por `next/script` en vez de un `<script>` suelto en el `<head>`: el App
  Router no deja escribir ahí a mano. La estrategia es `afterInteractive`, que
  es la que Next recomienda para GTM — carga en cuanto la página es
  interactiva, algo más tarde que en el `<head>`, y a cambio no bloquea el
  primer pintado.
- El `<iframe>` del `<noscript>` lleva `title`. El fragmento de Google no lo
  trae y sin él es un elemento sin nombre para un lector de pantalla.

**Configurando GA4 dentro del contenedor, el disparador tiene que incluir
*History Change*.** Esto es una SPA: al navegar entre páginas no hay recarga,
así que un disparador de solo *All Pages* registraría la primera página de cada
visita y nada más. Comprobado en el navegador: una navegación cliente real
mantiene `window` vivo, cambia la URL y emite `gtm.historyChange-v2`, así que
con ese disparador la medición es correcta sin tocar código.

Los despliegues de vista previa de Vercel cargan el mismo contenedor. Si eso
ensucia los datos, se filtra por nombre de host dentro de GTM, no quitando el
script.

**GTM obliga a revisar la política de privacidad.** La primera versión decía
"no analytics, no other measurement tool" y quedó falsa el día que se instaló.
Cualquier script de terceros nuevo pasa por `app/privacy-policy/page.tsx`.

Pendiente: consentimiento. Hoy el contenedor carga antes de que nadie acepte
nada, que es lo que un gestor de cookies tiene que resolver — ver la nota sobre
Calendly en *Política de privacidad*.

### Aviso legal

`app/legal-notice/page.tsx`. Lo enlazaba el pie desde las veinticuatro páginas
y devolvía 404. **No existía tampoco en el WordPress anterior**, así que no es
una URL recuperada: es un hueco que ya estaba abierto antes de la migración.

Es otra cosa que la política de privacidad, aunque se confundan. La de
privacidad cuenta qué se hace con los datos (RGPD); esta identifica a quien
responde del sitio y fija las condiciones de uso, que es lo que pide la LSSI-CE
a un sitio con actividad comercial en España. Se solapan solo en la
identificación, y por eso las dos leen el mismo `controller` de `lib/site.ts`
— una identidad legal que diverja entre dos páginas del mismo sitio es peor
problema que la duplicación.

Nada está inventado: no hay teléfono porque no hay uno publicado, y no hay
datos de registro mercantil porque el titular es persona física. Donde la LSSI
pediría un dato que no existe, el hueco se queda vacío.

El apartado *"The blog is opinion, not advice"* no es relleno. Los diecisiete
artículos recomiendan proveedores de hosting y herramientas concretas, y
conviene decir que son opiniones antes de que alguien contrate algo por
leerlas.

### La miniatura

`app/opengraph-image.tsx` dibuja en build la tarjeta de 1200x630 que sale al
pegar un enlace en WhatsApp, LinkedIn, Slack o X. Es una sola para las siete
páginas: el título y la descripción del enlace sí cambian por página, la imagen
no. Si alguna llega a necesitar la suya, basta un `opengraph-image.tsx` en su
carpeta llamando a `renderOgCard` con otro titular.

Lleva `og:image` incluso con la espera activa. El `robots.txt` frena al
buscador, pero no a WhatsApp ni a LinkedIn, que son justo por donde llega el
enlace del outreach mientras tanto.

DM Sans va dos veces en el repo, y no es un descuido: `next/font/google` deja
woff2 en `.next/static` para el sitio, y satori —lo que dibuja la tarjeta— no
lee woff2. Por eso `assets/fonts/` tiene los TTF de 400 y 800. Se usan solo al
generar la imagen; no se sirven al navegador. Licencia en `assets/fonts/OFL.txt`.

El wordmark sale de `WORDMARK_PATHS` (`components/wordmark.tsx`) y no de una
copia: satori no resuelve `currentColor`, así que necesita los trazados sueltos,
pero la geometría sigue siendo una sola. Ya se corrigió una vez el punto de la
"i"; con dos copias, la segunda se habría quedado sin corregir.

### Iconos

`app/icon.svg` cubre la pestaña del navegador y el favicon que Google enseña en
los resultados de móvil. `app/apple-icon.tsx` lo redibuja en PNG de 180x180
para iOS, que no usa un SVG al guardar la página en la pantalla de inicio:
sin él, Safari pone una captura de la página. Se genera a partir del propio
`icon.svg`, así que corregir el icono los arregla los dos.

## Cabecera y pie

**Todas las páginas montan `SiteHeader` y `SiteFooter`**, salvo la de espera,
que va sin ninguna de las dos a propósito.

Antes había dos juegos: el del sitio vivo y una réplica del Figma
(`components/services/header.tsx` y `footer.tsx`) que usaban las cuatro páginas
de servicio y about-us. La réplica traía una barra de utilidades con un buscador
desactivado, y una nav que enlazaba entre las páginas de servicio.

Como esa nav era **lo único** que enlazaba a esas cinco páginas, la columna
"Services" del footer pasa a enlazarlas —antes repetía dos veces el mismo ancla
`/#services`— y "About" apunta a `/about-us` en vez de al ancla de la home.

Dos consecuencias de las que conviene acordarse:

- `components/services/header.tsx` y `components/services/footer.tsx` **ya no
  los usa nadie**. Se dejan por si hace falta volver atrás; si no, se borran.
- Con ellos desaparecen los **enlaces a redes sociales** (LinkedIn, X e
  Instagram, todos `/emmvi`), que solo vivían en ese footer. No se han llevado
  al `SiteFooter` porque no está comprobado que esas cuentas existan.

## Fotos de los testimonios

En `public/testimonials/`. Jared y Adriana son retratos reales; **el de Alicia
Ryz es el logo de Kurokink, no una foto suya** — es lo único que hay. Se ve bien
porque el archivo ya es un círculo negro, pero si algún día ella facilita un
retrato, sustituirlo.

Adriana usa `adriana-patania-1.png`, el retrato. El otro archivo,
`adriana-patania.png`, es un avatar ilustrado y ya no se usa en ninguna parte.

## Pendiente antes de publicar la home

Quitar `COMING_SOON` publica la home.

**Lo que bloqueaba ya no bloquea** (2026-09-21):

- Las dos capturas de "Two things, done properly" ya son imágenes reales:
  `public/home/jbz-beats.jpg` (jbzbeats.com, cliente nuestro y el mismo Jared
  White que firma el primer testimonio de `/services/website-design`) y
  `public/home/automation-flow.png`. El texto `[Screenshot of a site you
  built]`, que se renderizaba literalmente, ya no existe.
- `/for/installers/` **sigue sin existir**, pero ya no la enlaza nadie: fuera
  el enlace de la home y fuera la entrada del pie. El contenido sigue escrito
  en `emmvi-for-installers.html` para cuando se monte; mientras tanto, la
  frase de la home termina en "This is the one we have gone deepest on."
- Las tres cajas de línea discontinua de `/services/website-design`,
  `/services/email-marketing` y `/services/ppc` **decían "Placeholder. The
  Figma signs this quote with a client logo we cannot verify"** a la vista del
  visitante: el razonamiento interno, publicado. Fuera las tres, y en su hueco
  `components/services/after-you-send.tsx`.

**Queda uno, y este sí rompe algo que no se ve:**

- **El formulario no tiene a dónde enviar.** `app/actions/contact.ts` necesita
  `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` y `CONTACT_TO_EMAIL`. Sin las tres,
  cada consulta muere en el `console.error` y el visitante lee "Something went
  wrong sending that. Email us at sales@emmvi.com instead." En local no están
  puestas; en Vercel no se ha podido comprobar desde aquí (el token no tiene
  permiso para listar variables de entorno). **Comprobarlo antes de quitar
  `COMING_SOON`**, y mandar una consulta de prueba desde la web publicada.

**Conviene, pero no bloquea:**

- ~~Las descripciones de las cinco páginas del Figma~~ **Hecho el 2026-09-22.**
  Ver *Títulos y descripciones* más abajo.
- ~~Los títulos de esas páginas son finos~~ **Hecho el 2026-09-22.**
- **Los `h1` siguen siendo los del posicionamiento viejo**, y pesan más que la
  descripción: `/services/seo` abre con "Fueling Startup Growth with SEO" y
  `/about-us` con "Streamlining Entrepreneurial Journeys". Ninguno contiene lo
  que alguien teclea en el buscador. Cambiarlos toca texto visible de páginas
  que son réplicas del Figma, así que no se ha hecho sin decidirlo.
- Decidir `indexLegacyPages` (ver *Buscador y enlaces compartidos*).
- Dar de alta el dominio en Search Console y enviar el sitemap. **Esto ya se
  puede hacer**: el robots está abierto y el sitemap lleva 28 URLs aunque la
  espera siga puesta.

**Decisión tomada, anotada aquí para que no se relea como pendiente:**

- PostHog arranca y empieza a grabar antes de que el visitante toque el banner
  de CookieYes. GA4 sí lo respeta, porque CookieYes le habla por Consent Mode;
  PostHog no está en GTM y nunca se entera. Se deja así a propósito. Si algún
  día se quiere gatear, es `opt_out_capturing_by_default` en
  `instrumentation-client.ts` más un `opt_in_capturing()` cuando CookieYes
  conceda la categoría de analítica.

## /services/gohighlevel-automation

> **Sale como borrador** (2026-09-21, decisión del usuario: "quitemos del menú
> GHL por el momento"). La página existe y se despliega, pero:
>
> - no está en el desplegable "Services" de la nav ni en la columna del pie,
> - no está en `currentRoutes` de `lib/site.ts`, así que no entra en el sitemap,
> - lleva `robots: { index: false, follow: false }` en su propio `metadata`.
>
> Se puede revisar en vivo entrando por la URL. Los tres artículos del blog que
> la enlazan **mantienen el enlace**: el destino responde 200 y son las URLs con
> historial, así que cuando se publique ya llegan enlazadas.
>
> Para publicarla: quitar `robots`, devolver la ruta a `currentRoutes` y volver
> a ponerla en `services` de `site-header.tsx` y en el pie. Lo que falta está
> en *Pendiente*, más abajo.

Página del posicionamiento nuevo, no una réplica del Figma: monta el shell del
sitio vivo y reusa los patrones de la home, no los de `/services/seo`.

Existe para una búsqueda concreta —"GoHighLevel automation", "GHL workflows"— y
para el outreach a quien ya paga la licencia y no la usa. El lector sigue
siendo el de PRODUCT.md.

**No rompe "una oferta, no un menú".** No vende la automatización como pieza
suelta: es la misma oferta entrada por la puerta de quien ya tiene la
herramienta, y por eso la sección "And what it is connected to" devuelve a la
home en vez de dejarla como servicio independiente.

Cuelga de `/services/` como las cuatro del Figma **pero no es legacy**: es del
posicionamiento nuevo, así que cuando se publique entra en `currentRoutes` y no
pasa por `indexLegacyPages`. Iba primera en el desplegable de la nav y en la
columna del pie —el único sitio donde se nota que las otras cinco son el
posicionamiento viejo— y ahí vuelve cuando deje de ser borrador.

### Lo que la página no dice, y es deliberado

- **Ninguna certificación.** HighLevel tiene programa propio y Emmvi no lo ha
  hecho. El FAQ lo dice con todas las letras en vez de callarlo: es el
  principio 3 de DESIGN.md, y en este término concreto es lo que más separa a
  Emmvi del resto de resultados, que venden el sello.
- **Ninguna cifra sin medir.** Nada de "entrega en 48 h" ni "60% menos de
  admin", que es de lo que vive la competencia de esta búsqueda.
- **Ningún porcentaje de facturación**, por la regla de PRODUCT.md.

### El catálogo de GoHighLevel, y qué se hace con él

La sección "In the box" lista las **52 funciones del catálogo de HighLevel**, en
su propia taxonomía (Capture / Nurture / Close / Evangelize / Reactivate) y con
sus nombres de producto, sobre fondo negro. De ellas, **15 van marcadas: las que
Emmvi monta.** Debajo, en papel, las nueve cosas que hacemos, en verbos.

El volumen es el argumento, no relleno: enseña de un vistazo la distancia entre
lo que se paga y lo que está encendido. Por eso la lista no se comprime, no va
detrás de un "ver más" y no se convierte en cinco tarjetas.

**Las dos cifras se calculan, no se escriben.** `platformCount` y `oursCount`
salen del array, así que "All 52" y "The 15 ticked" no pueden quedar desfasadas
si alguien toca la lista. Escribir "over fifty" a mano era garantizar que la
frase mintiera en la primera edición.

El resaltado **no es solo color**: cada marcada lleva una marca de verificación
delante y un texto solo para lectores de pantalla ("We build this: "). Sin eso,
las 52 suenan iguales en un lector de pantalla y el argumento entero se pierde.
Las apagadas van a `white/55`, que sobre `#171717` da 6.4:1 — apagadas, no
inaccesibles. El fondo es `bg-ink` sólido y no `bg-night`: el gradiente aclara
hasta `#7d7d7d` al final y aquí hay cincuenta líneas de texto llegando abajo.

**El catálogo es una afirmación sobre el producto de otro, así que envejece
solo.** Las pestañas Capture y Nurture se verificaron contra gohighlevel.com
palabra por palabra —incluido su "CalendarsText Snippets", que son dos funciones
que su maquetación junta y aquí van separadas—; las otras tres salen de capturas
del mismo sitio. Si HighLevel cambia su catálogo, esto miente: conviene repasarlo
al tocar la página.

**"Websites, Funnels & Landing Pages" se queda sin marcar a propósito**, y el
cierre de la sección explica por qué: GoHighLevel trae constructor de webs y
Emmvi no lo usa para eso. Es la única de las 37 que merece explicación, porque
es la que un lector podría esperar marcada.

**Sin precio.** GoHighLevel cuesta hoy $97/mes el plan Starter y $297 el
Unlimited, y no entra en la página: cambia, y este sitio no lleva precios
propios. "You already pay for it every month" hace el trabajo sin caducar.

### El aviso de marca

El pie de la página dice que GoHighLevel es marca de GoHighLevel Inc. y que
Emmvi no está afiliada ni certificada. No es un trámite: la página usa el
nombre de un producto ajeno en el título, en la URL y en todo el cuerpo, y sin
esa línea "GoHighLevel automation" en un `h1` se lee como acreditación.

**La entidad es GoHighLevel Inc., no "HighLevel, Inc."**, que es lo que decía
la primera versión. El pie de gohighlevel.com lo dice así: *"HighLevel LLC, a
subsidiary of GoHighLevel Inc."* — la filial se llama HighLevel y la matriz
GoHighLevel, al revés de lo que sugiere el nombre del producto. Verificado en su
sitio, no deducido.

Va **sin el símbolo ®**: que la empresa sea la titular es público, pero el
estado exacto del registro no se ha comprobado en ninguna oficina de marcas. Si
alguien lo verifica, el símbolo entra.

### Enlaces desde el blog

Tres de los diecisiete artículos llevan GoHighLevel en el slug y están
indexados desde el WordPress. Los tres enlazan ahora a esta página desde la
mención que ya tenían en el cierre: es la vía de llegada interna con más valor
que hay, porque son URLs con historial.

**No se ha cambiado una palabra del texto recuperado.** En `turn-leads` la
mención ya estaba en negrita y solo se le añadió el destino; en
`streamline-scale-succeed` el párrafo era una cadena suelta y se partió en
fragmentos con el texto idéntico carácter a carácter, "TogetherIf" incluido.

### Pendiente

- **Solo hay una captura real**, `public/home/automation-flow.png`, y la
  comparte con la tarjeta de la home. La sección "What we build inside it" son
  seis bloques de texto donde encajarían capturas del pipeline, de la secuencia
  de seguimiento y del panel de reporting. Es lo que más subiría la página: el
  principio 1 de DESIGN.md es que lo que se promete se demuestre.
- **El testimonio es el de Adriana Patania**, que es real y es de
  automatización, pero no de GoHighLevel ni de un instalador. Se presenta como
  lo que es, sin adornarlo.
- Decidir si la página entra también en la home. Hoy se llega por la nav, el
  pie y los tres artículos; la home no la enlaza.

## Títulos y descripciones

Repaso del 2026-09-22. Las cinco páginas del Figma llevaban las descripciones
del posicionamiento viejo, que es **el texto que Google enseña debajo del
título** en las URLs que conservan historial:

> *"Celebrate startup growth with our SEO expertise. Discover how we can fuel
> your success and propel your brand to new heights."*

Ahora cada una dice lo que la página entrega, comprobado contra su propio
contenido antes de escribirlo: la de PPC nombra Google, Meta, TikTok y LinkedIn
porque son los cinco logos de su banda; la de SEO nombra Local SEO, auditorías y
link building porque son sus tarjetas de servicio. Una descripción que promete
algo que la página no cumple sube el rebote y acaba costando posiciones.

Los títulos pasan de 11–23 caracteres a 46–57, dentro de los ~60 que Google
muestra. `/about-us` va con `absoluteTitle` porque "About Emmvi" más la
plantilla daría "About Emmvi · Emmvi".

**El blog no se toca.** Las diecisiete descripciones son las del WordPress
original, ya indexadas, y están en rango salvo tres que pasan de 160 y se
truncan. Reescribirlas es tocar lo que ya funciona sin saber si mejora.

**Lo que no se ha tocado y es el siguiente escalón: los `h1`.** Ver la lista de
pendientes de arriba.

## Marcado de artículo

Los diecisiete posts no declaraban nada. Ahora llevan `BlogPosting`
(`components/article-schema.tsx`) y su Open Graph es `article` con fecha, no
`website`.

`author` y `publisher` apuntan al `@id` de `OrganizationSchema` en vez de
repetir sus datos: los dos marcados quedan en el mismo grafo y los artículos los
firma Emmvi, que es lo que corresponde a textos recuperados sin autor
atribuible.

`dateModified` es igual a `datePublished` a propósito. La única fecha que se
conoce es la de publicación de esta versión; inventar una modificación reciente
para parecer fresco es la clase de afirmación sin respaldo que este sitio no
hace. `image` solo sale en el artículo que de verdad tiene una —uno de los
diecisiete—, porque Google comprueba que exista.

## Pendiente en /contact

Página del sitio vivo, no réplica del Figma. Enlazada desde la columna "Company"
del footer. Ver DESIGN.md.

- **El correo directo no está en la página.** Se quitó junto con los otros dos
  bloques del panel: quedan dos vías, la reserva y el formulario. Sigue
  pendiente confirmar `sales@emmvi.com`, que aparece en la página de espera y
  en el mensaje de error del formulario, y que salió de la configuración de
  Calendly y no de una decisión del usuario.
- **No promete tiempo de respuesta**, a propósito: lo que se afirma es que
  alguien lee el mensaje y mira tu sitio antes de contestar. Si Emmvi quiere
  comprometerse a "el mismo día laborable", entra en el paso 01 de "What
  happens after you send it" y en ningún otro sitio.
- **El tamaño del equipo no se comunica.** El panel tenía un bloque "Who you
  are writing to" que presentaba Emmvi como dos personas; se quitó, y con él
  las menciones que había en la home y en el FAQ. Emmvi se presenta como
  empresa: se pueden nombrar personas y ciudades, nunca cuántos son.
- **`COMING_SOON` no la apaga.** Con la variable a 1 la raíz sirve la página de
  espera, pero `/contact` sigue viva y accesible, igual que `/about-us` y las
  cuatro de servicio. Si el sitio tiene que quedar cerrado del todo, esto hay
  que decidirlo aparte.
- **"Contact" no está en la nav del header**, solo en el footer y en el CTA
  "Schedule a call" (que apunta al panel de la propia página). Añadirlo a la nav
  es una línea en `site-header.tsx`, pero cambia la IA de la home: decisión del
  usuario.
- El enlace a `/privacy-policy` del formulario sigue sin destino, igual que en
  la home.

## Sustituir una imagen en sitio

Si reemplazas un archivo de `public/` conservando el nombre, **el servidor de
desarrollo sigue sirviendo la versión vieja optimizada**. El fichero suelto sí
se actualiza; lo que no se entera es `/_next/image`.

```bash
rm -rf .next/dev/cache/images
```

Ojo con la ruta: en Next 16 con Turbopack la caché está en `.next/dev/cache/images`,
**no** en `.next/cache/images`, que es donde estaba antes y donde uno mira primero.

Y el navegador tiene la suya: después de borrar la de Next, la pestaña puede
seguir enseñando la versión vieja sin ni siquiera revalidar. Comprobar con
`curl` qué devuelve de verdad el servidor antes de dar por buena una imagen
—o por mala— desde el navegador.

Y si la imagen nueva tiene otras medidas, hay que cambiar `width`/`height` en el
`<Image>`: son las que reservan el hueco antes de cargar, y las que deciden qué
tamaños entran en el `srcset`.

## Pendiente en /services/email-marketing

**El FAQ ya está completo.** El Figma solo escribía la primera respuesta y
`FaqAccordion` filtra las que no tienen, así que la página publicaba un FAQ de
una sola pregunta con el hueco debajo — que es como se veía en pantalla. Las
siete que faltaban están escritas en el registro de PRODUCT.md, no en el del
frame, porque son afirmaciones sobre el servicio y hay que poder defenderlas en
una llamada. Tres decisiones que conviene no deshacer sin pensarlo:

- **"What kind of results can I expect?" no lleva cifra**, y explica por qué no
  la lleva. Es la pregunta donde la regla de no prometer porcentajes de
  facturación se juega entera, y el Figma la dibuja esperando justo ese número.
  Lo que sí se compromete es verificable: los flujos montados y probados, las
  campañas saliendo, el informe mensual — y que si eso no se mueve a los pocos
  meses, la conversación la empieza Emmvi.
- **"Have you worked with brands in my niche?" nombra a los tres clientes
  reales** —la tienda, el gimnasio y el productor musical— y admite que eso es
  variedad, no especialidad. Es lo único verificable que hay, y estirar un caso
  para que encaje se descubre en la primera llamada.
- Cada respuesta larga cierra en el mecanismo o en el límite, no en el
  beneficio.

**La primera respuesta sigue siendo la del Figma**, y es la única del bloque en
el registro viejo: promete *"the perfect solution for you"*, que es el lenguaje
de consultora que PRODUCT.md lista como anti-referencia. Se dejó porque es
contenido del archivo y no un hueco. Reescribirla es un cambio de tono
deliberado, no una corrección — pendiente de decidir.

**El backup tenía las ocho respuestas originales, y aquí no se usan.** Se
descubrió después de escribir las siete, al abrir el `.wpress` para SEO y PPC —
donde sí se usan, porque allí no había nada. La diferencia es que estas chocan
de frente con PRODUCT.md: la original de *"What kind of results can I expect?"*
dice *"we typically achieve around 30% of revenue being generated through email
marketing"*, que es exactamente el porcentaje de facturación que la regla de
escritura prohíbe, y la de *"Have you worked with brands in my niche?"* contesta
*"numerous brands across various niches"*, que no es verificable.

Una cosa sí merece rescatarse de las originales: decían que los informes se
entregan **por Slack cada mes, con el histórico en un Drive compartido**. Es
concreto y comprobable, que es justo lo que pide la regla. Si se sigue
trabajando así, ese detalle debería entrar en la respuesta de reporting. El
texto completo del original está en el backup, no en el repo.
- **La banda de cifras ya no está.** Las cuatro del Figma (75+, 32.3M€, 6.7X,
  4.9/5) no están medidas. Las etiquetas quedan anotadas en el código para
  cuando haya números con respaldo.
- La cita firmada del panel de contacto no era atribuible y **se ha retirado**.
  En su hueco va `<AfterYouSend />`. No lleva el testimonio de Adriana, que es
  el único que habla de correo, porque `DarkTestimonials` ya la muestra más
  arriba en esta misma página: saldría dos veces.

## Pendiente en /services/seo

- **Faltan tres cuerpos de pestaña** del paquete SEO y **cuatro respuestas** del
  FAQ. El Figma solo desarrolla la primera de cada uno. Ni las pestañas sin
  cuerpo ni las preguntas sin respuesta se pintan ya: antes decían "Copy
  pending" y "Answer pending" en la página publicada. La pestaña sigue
  existiendo con su título; la pregunta, solo en el código.
- La retícula del Figma repite dos tarjetas para llenar la fila. Aquí van las
  tres distintas: si hay dos servicios más que escribir, entran ahí.
- **El logo de Google Business Profile es el viejo.** El archivo que hay es el de
  *Google My Business*, que es como se llamaba el producto hasta 2021. Se ve en
  una página que vende Local SEO, así que conviene cambiarlo por el actual.
- El logo de Semrush trae el endoso "An Adobe Company". Es el lockup oficial
  vigente; si en algún momento se prefiere solo el wordmark, hay que pedir ese
  archivo, no recortar este.

## Pendiente en /services/ppc

- **Faltan seis respuestas del FAQ.** El Figma solo escribe la primera. Las
  otras seis ya no se pintan, por lo mismo que en Email Marketing. El FAQ sale
  con una sola pregunta, que es honesto: la entradilla ya dice "si tu pregunta
  no está, reserva una llamada".
- **La banda de cifras ya no está** (las cuatro del Figma están inventadas), y
  el "311% on average" del hero se publica sin la cifra.
- **La banda de logos no es la del Figma.** El archivo pone Google Premier
  Partner, Amazon Ads, Bing Ads y Meta Business Partners; los dos primeros son
  sellos de acreditación. Ahora van Google, Facebook, Instagram, TikTok y
  LinkedIn. Si Emmvi consigue alguna de esas certificaciones y puede
  demostrarlo, el sello entra: los dos SVG están sin usar en
  `public/figma/ppc/badge-*.svg`.
- **Falta Microsoft Advertising, y es de las cinco más usadas.** Se quitó porque
  el único archivo que hay dice "Bing ads", nombre **retirado en 2019**, y en
  una página que vende PPC ese detalle se nota — mismo caso que el logo de
  Google My Business en la página de SEO. Con el lockup actual vuelve a entrar:
  es añadir una línea a `platforms` y poner el wordmark a 30px de alto.
- **El Facebook de la banda no es el mismo dibujo que el de la tarjeta.** El
  suelto es el cuadrado azul apagado del estilo de app antiguo; el de la tarjeta
  es el círculo con degradado, que es el vigente. Los dos salen del Figma. Se
  arregla pidiendo el icono circular actual.
- **La banda afirma que se corre en las cinco.** Si alguna todavía no se ha
  tocado, la salida limpia es cambiar la etiqueta a "Platforms we work with",
  que es la que usan Email Marketing y SEO, en vez de quitar el logo.
- **"A team of certified paid advertising experts" sigue tal cual.** Es una
  afirmación sobre el propio equipo, no prueba social prestada, así que no se ha
  tocado — pero conviene confirmar que se puede defender en una llamada.
- La cita del panel de contacto **se ha retirado**: el Figma repite la de Email
  Marketing y la firma con el logo de TC Tails, que sí es cliente real, así que
  publicarla le pone en la boca palabras que no dijo. En su hueco va
  `<AfterYouSend />`.
- **Es la única de las cuatro sin prueba social**, y a propósito: ninguno de los
  tres testimonios reales habla de anuncios de pago. Cuando haya uno que sí,
  este es su sitio.

## Pendiente en /services/website-design

Réplica del frame de Figma del posicionamiento viejo. No está enlazada desde la
home, así que nada de esto bloquea publicarla. Ver DESIGN.md.

- El shell enlaza a `/blog`, que no existe. Las cuatro páginas de servicio y
  `/about-us` ya sí. El único frame que falta del archivo de Figma es Contact
  Us, y su formulario ya vive en las cinco páginas.
- La cita firmada con logo de cliente **se ha retirado**: la del Figma no es
  atribuible. En su hueco va `<AfterYouSend />`. El trust band ya lleva los
  nueve clientes reales, y la sección "Real-Life Experiences" de más arriba,
  los tres testimonios verificados.
- `public/clients/steady-content.svg` es un recoloreado local del logo que
  entregó el cliente, que venía para fondo oscuro. Si hay versión oficial para
  fondo claro, sustituir el archivo.
- Los tramos de "How many pages" y "What's your budget" están inventados; el
  Figma solo enseña la opción seleccionada. Están en `sales-form.tsx`.
- El buscador de la barra superior va `disabled`: no hay búsqueda detrás.
- El copyright dice 2024, como el Figma.

## Pendiente en /about-us

Réplica del frame "Services - About Us". Comparte shell con las cuatro páginas
de servicio, y es la primera que **sí estaba enlazada** desde ese shell: "About
Us" en la nav y "Our Team" en el footer daban 404 hasta ahora.

- **Hay tres afirmaciones sobre el propio equipo que no se han tocado**, porque
  no son prueba social prestada sino cosas que Emmvi dice de sí misma — mismo
  criterio que "A team of certified paid advertising experts" en PPC. Conviene
  confirmar que se pueden defender en una llamada:
  - "Founded in 2017"
  - "over 8+ years of experience"
  - los siete cargos, que son los del posicionamiento viejo (Gustavo sale como
    *UI Designer*, no como fundador)
- **Falta el retrato de Nicolas Mastromarino.** La entrega traía seis de siete;
  el suyo se exportó del propio Figma y se reescaló a los 191 px de los demás.
  Si existe el original, sustituir `public/figma/about-us/nicolas-mastromarino.png`.
- **"Explore Opportunities" no tiene destino.** El Figma no lo enlaza y no hay
  página de empleo: de momento lleva al formulario de contacto.
- La cita del panel de contacto **sí es real** (Adriana Patania). El Figma repite
  ahí la de Email Marketing firmada con un logo sin verificar, y esta pantalla no
  tiene sección de testimonios donde compensarlo.
- El copyright del footer dice 2024, como en las otras cuatro.
