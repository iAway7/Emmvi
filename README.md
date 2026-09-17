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
- **Un proyecto pausado devuelve 404 en todos sus dominios**, aunque el
  despliegue esté READY y correctamente aliaseado. Pausar "bloquea el
  Production Deployment activo", así que el síntoma no se parece en nada a la
  causa. Se ve en *Settings* del proyecto.

## Pendiente antes de publicar la home

- Las dos capturas de la sección "Two things, done properly" son placeholders.
- `/for/installers` está enlazada desde la home y el footer pero no existe. El
  contenido está escrito en `emmvi-for-installers.html`.
- `/privacy-policy`, `/legal-notice` y `/cookies` están enlazadas y no existen.
- Calendly deja cookies de terceros al abrir el popup: para clientes en la UE
  hace falta la página de preferencias de cookies.
