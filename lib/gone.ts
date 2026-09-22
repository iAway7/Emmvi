/**
 * Respuesta 410 Gone para las URLs del WordPress anterior que se retiran a
 * proposito.
 *
 * **No es lo mismo que un 404.** Un 404 dice "no lo encuentro", que para un
 * buscador puede ser un fallo temporal: Google reintenta durante meses antes
 * de soltar la URL. Un 410 dice "existia y se ha ido para siempre", y es la
 * senal que hace que la retire en dias.
 *
 * Va como Route Handler y no por `notFound()` porque el App Router solo sabe
 * devolver 404: no hay un `gone()`. Tampoco por middleware — Next 16 lo emite
 * en ESM y Vercel lo carga como CommonJS, que es el fallo que ya se documenta
 * en el README.
 *
 * Lleva cuerpo HTML en vez de ir vacio porque durante unas semanas todavia
 * llegara gente desde el buscador, y una pagina en blanco es un callejon sin
 * salida. Va con estilos en linea y tipografia del sistema: es una respuesta
 * suelta, fuera del layout del sitio, y no tiene acceso a sus tokens.
 */
/**
 * @param title  Lo que ya no esta, en minusculas. Encaja en "We stopped
 *   offering ...".
 * @param explicacion  Sustituye a esa frase cuando no aplica. /cookie-preference/
 *   no es un servicio retirado: es una pagina que se convirtio en un panel, y
 *   decirle a alguien que "dejamos de ofrecer preferencias de cookies" seria
 *   absurdo y ademas lo dejaria sin saber donde estan ahora.
 */
export function gone(title: string, explicacion?: string) {
  const razon =
    explicacion ??
    `We stopped offering ${title}. The page was removed rather than left to rot, which is why you are seeing this instead of an error.`;

  const body = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${title}, no longer available · Emmvi</title>
<style>
  :root { color-scheme: light }
  body {
    margin: 0; min-height: 100dvh; display: flex; align-items: center;
    justify-content: center; padding: 24px; background: #fff; color: #171717;
    font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
    line-height: 1.6;
  }
  main { max-width: 42ch }
  h1 { font-size: 1.75rem; line-height: 1.2; letter-spacing: -0.02em; margin: 0 0 1rem }
  p { color: #666; margin: 0 0 1.5rem }
  a { color: #171717; text-decoration-thickness: 1px; text-underline-offset: 3px }
  a:hover { color: #423af4 }
</style>
</head>
<body>
  <main>
    <h1>This page is no longer here</h1>
    <p>${razon}</p>
    <p><a href="/">Go to the homepage</a> &nbsp;·&nbsp; <a href="/contact-us/">Tell us what you need</a></p>
  </main>
</body>
</html>`;

  return new Response(body, {
    status: 410,
    headers: {
      "content-type": "text/html; charset=utf-8",
      // Por si algun rastreador lee la cabecera antes que el <meta>.
      "x-robots-tag": "noindex",
    },
  });
}
