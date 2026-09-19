"use client";

import { DM_Sans } from "next/font/google";
import posthog from "posthog-js";
import { useEffect, useRef } from "react";

import "./globals.css";

/**
 * Pantalla de error cuando revienta el propio layout raiz. La escribio el
 * asistente de PostHog para capturar la excepcion, y la captura se conserva
 * tal cual; lo que se le anadio es el diseño del sitio.
 *
 * Venia en HTML pelado, sin hoja de estilos ni tipografia, porque este archivo
 * sustituye al layout raiz entero: no hereda nada. Con un 404 tan cuidado como
 * el que ya hay, un 500 en Times New Roman desentona — y esta es justo la
 * pantalla en la que el visitante ya esta molesto.
 *
 * Sigue siendo deliberadamente simple: es lo ultimo que queda en pie cuando
 * todo lo demas ha fallado, asi que no monta cabecera, pie ni imagenes.
 */
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "800"],
  display: "swap",
});

export default function GlobalError({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  const reportedError = useRef<Error | null>(null);

  useEffect(() => {
    if (
      reportedError.current !== error &&
      process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
      process.env.NEXT_PUBLIC_POSTHOG_HOST
    ) {
      posthog.captureException(error);
      reportedError.current = error;
    }
  }, [error]);

  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        <main className="mx-auto flex min-h-dvh max-w-[42rem] flex-col justify-center px-6 py-16">
          <h1 className="text-h2 text-balance text-ink">
            Something went wrong on our side
          </h1>
          <p className="mt-6 max-w-[44ch] text-lede text-pretty text-ink-soft">
            Not something you did. The page failed to load, and we have been
            told about it automatically.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={reset}
              className="inline-flex h-12 items-center justify-center rounded-sm bg-ink px-6 text-[1rem] font-medium leading-6 text-paper transition-colors duration-150 hover:bg-ink-black focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
            >
              Try again
            </button>
            {/* <a> y no <Link>, a proposito: el enrutador del cliente es parte
                de lo que puede haber fallado para llegar hasta aqui, asi que
                una navegacion de cliente podria no ir a ninguna parte. Esto
                fuerza una carga limpia de la pagina. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-line px-6 text-[1rem] font-medium leading-6 text-ink transition-colors duration-150 hover:border-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
            >
              Go to the homepage
            </a>
          </div>

          <p className="mt-8 text-small text-ink-soft">
            If you were trying to reach us, email{" "}
            <a
              href="mailto:sales@emmvi.com"
              className="text-ink underline underline-offset-[3px] hover:text-violet"
            >
              sales@emmvi.com
            </a>{" "}
            and we will pick it up there.
          </p>
        </main>
      </body>
    </html>
  );
}
