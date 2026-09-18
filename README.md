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

## Fotos de los testimonios

En `public/testimonials/`. Jared y Adriana son retratos reales; **el de Alicia
Ryz es el logo de Kurokink, no una foto suya** — es lo único que hay. Se ve bien
porque el archivo ya es un círculo negro, pero si algún día ella facilita un
retrato, sustituirlo.

Adriana usa `adriana-patania-1.png`, el retrato. El otro archivo,
`adriana-patania.png`, es un avatar ilustrado y ya no se usa en ninguna parte.

## Pendiente antes de publicar la home

- Las dos capturas de la sección "Two things, done properly" son placeholders.
- `/for/installers` está enlazada desde la home y el footer pero no existe. El
  contenido está escrito en `emmvi-for-installers.html`.
- `/privacy-policy`, `/legal-notice` y `/cookies` están enlazadas y no existen.
- Calendly deja cookies de terceros al abrir el popup: para clientes en la UE
  hace falta la página de preferencias de cookies.

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

- **Faltan siete respuestas del FAQ.** El Figma solo escribe la primera; las
  otras siete salen marcadas como pendientes en la página.
- Las cuatro cifras de la banda oscura son placeholders: las del Figma no están
  medidas.
- La cita firmada del panel de contacto sigue sin ser atribuible.

## Pendiente en /services/seo

- **Faltan tres cuerpos de pestaña** del paquete SEO y **cuatro respuestas** del
  FAQ. El Figma solo desarrolla la primera de cada uno; salen marcadas.
- La retícula del Figma repite dos tarjetas para llenar la fila. Aquí van las
  tres distintas: si hay dos servicios más que escribir, entran ahí.
- **El logo de Google Business Profile es el viejo.** El archivo que hay es el de
  *Google My Business*, que es como se llamaba el producto hasta 2021. Se ve en
  una página que vende Local SEO, así que conviene cambiarlo por el actual.
- El logo de Semrush trae el endoso "An Adobe Company". Es el lockup oficial
  vigente; si en algún momento se prefiere solo el wordmark, hay que pedir ese
  archivo, no recortar este.

## Pendiente en /services/ppc

- **Faltan seis respuestas del FAQ.** El Figma solo escribe la primera; las otras
  seis salen marcadas como pendientes en la página.
- Las cuatro cifras de la banda oscura son placeholders, y el "311% on average"
  del hero se publica sin la cifra: ninguna de las dos está medida.
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
- La cita del panel de contacto es un placeholder: el Figma repite la de Email
  Marketing y la firma con el logo de TC Tails, que sí es cliente real.

## Pendiente en /services/website-design

Réplica del frame de Figma del posicionamiento viejo. No está enlazada desde la
home, así que nada de esto bloquea publicarla. Ver DESIGN.md.

- El shell enlaza a `/blog`, que no existe. Las cuatro páginas de servicio y
  `/about-us` ya sí. El único frame que falta del archivo de Figma es Contact
  Us, y su formulario ya vive en las cinco páginas.
- La cita firmada con logo de cliente sigue siendo un placeholder visible: la
  del Figma no es atribuible. El trust band ya lleva los nueve clientes reales.
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
