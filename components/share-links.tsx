/**
 * "Share the Post" de la plantilla del WordPress, que llevaba X y LinkedIn.
 *
 * **Son enlaces, no el widget de nadie.** El original usaba el `share-buttons`
 * de Elementor, que carga los SDK de cada red; esto es un `<a>` a la URL de
 * compartir de toda la vida. La diferencia no es de peso: un SDK de terceros
 * ve a cada visitante del articulo lo pulse o no, y habria que declararlo en la
 * politica de privacidad. Asi no se conecta nada hasta que alguien pulsa, y
 * entonces es una navegacion suya.
 *
 * Los iconos van inline por lo mismo: pedirlos a un CDN es contarle a ese CDN
 * quien lee el blog.
 *
 * Sin contador de veces compartido. No hay forma de saberlo sin la API de cada
 * red, y un cero al lado de un boton es peor que no poner nada.
 */

const enlace =
  "inline-flex size-11 items-center justify-center rounded-sm border border-line text-ink transition-colors hover:border-ink hover:text-violet focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet";

export function ShareLinks({ url, title }: { url: string; title: string }) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  const redes = [
    {
      nombre: "X",
      href: `https://x.com/intent/post?url=${u}&text=${t}`,
      // Logo de X. 1200x1227 es el viewBox del trazado oficial.
      path: "M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z",
      viewBox: "0 0 1200 1227",
    },
    {
      nombre: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
      path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
      viewBox: "0 0 24 24",
    },
  ];

  return (
    <ul className="flex list-none items-center gap-2">
      {redes.map((r) => (
        <li key={r.nombre}>
          <a
            href={r.href}
            className={enlace}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Share on {r.nombre}</span>
            <svg
              aria-hidden="true"
              viewBox={r.viewBox}
              className="size-[18px] fill-current"
            >
              <path d={r.path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
