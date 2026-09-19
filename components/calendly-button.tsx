"use client";

import Script from "next/script";
import posthog from "posthog-js";

const CALENDLY_URL = "https://calendly.com/emmvi/30min";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (options: { url: string }) => void };
  }
}

/**
 * Boton que abre Calendly en popup.
 *
 * Es un <a> de verdad al enlace de Calendly, no el `<a href="" onclick>` del
 * snippet oficial: si el script no ha cargado, esta bloqueado o el visitante no
 * tiene JS, el clic sigue llevando a la reserva en una pestana nueva en vez de
 * no hacer nada. Cuando el script si esta, se intercepta y abre el popup.
 *
 * El script solo carga cuando la pagina ya es interactiva, y Calendly no
 * inyecta nada hasta que se pulsa: a diferencia del embebido inline, aqui no
 * hay iframe de terceros en la carga inicial.
 */
const variants = {
  /** Tinta llena, sobre fondo claro. */
  primary: "bg-ink text-paper hover:bg-ink-black focus-visible:outline-violet",
  /** Blanco, sobre panel oscuro. */
  light:
    "bg-paper text-ink hover:bg-[#e9e9e9] focus-visible:outline-violet-light",
} as const;

export function CalendlyButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          const calendly = typeof window !== "undefined" ? window.Calendly : undefined;
          if (
            process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
            process.env.NEXT_PUBLIC_POSTHOG_HOST
          ) {
            posthog.capture("calendly_booking_started", {
              booking_method: calendly ? "popup" : "new_tab",
            });
          }
          if (calendly) {
            e.preventDefault();
            calendly.initPopupWidget({ url: CALENDLY_URL });
          }
        }}
        className={
          "inline-flex h-12 items-center justify-center gap-2.5 rounded-sm px-6 " +
          "text-[1rem] font-medium leading-6 transition-colors duration-150 " +
          "focus-visible:outline-[3px] focus-visible:outline-offset-[3px] " +
          `${variants[variant]} ${className}`
        }
      >
        {children}
      </a>
    </>
  );
}
