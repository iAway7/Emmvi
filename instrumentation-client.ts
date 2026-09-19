import posthog from "posthog-js";

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

if (!projectToken) {
  if (process.env.NODE_ENV === "development") {
    throw new Error(
      "NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN is configured",
    );
  }
} else if (!host) {
  if (process.env.NODE_ENV === "development") {
    throw new Error(
      "NEXT_PUBLIC_POSTHOG_HOST variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once NEXT_PUBLIC_POSTHOG_HOST is configured",
    );
  }
} else {
  posthog.init(projectToken, {
    api_host: host,
    defaults: "2026-01-30",
    capture_exceptions: true,
    debug: process.env.NODE_ENV === "development",

    /**
     * Grabacion de sesion.
     *
     * El interruptor que decide si se graba o no **no esta aqui**: vive en los
     * ajustes del proyecto en PostHog. Esto solo manda sobre el como.
     *
     * `maskAllInputs` viene activado por defecto, y aun asi se escribe: la
     * pagina de privacidad promete, en negrita, que lo que se teclea en un
     * formulario se sustituye antes de que la grabacion salga del navegador.
     * Una promesa publicada no deberia depender de que un valor por defecto de
     * una dependencia no cambie nunca. Quien lo ponga a false tiene que ver
     * este comentario y saber que esta tocando una afirmacion publicada.
     *
     * El texto de la pagina **no** se enmascara, y es deliberado: es contenido
     * nuestro, no del visitante. Lo que se oculta es lo que la persona escribe
     * — nombre, correo y mensaje del formulario de contacto.
     */
    session_recording: {
      maskAllInputs: true,
    },
  });
}
