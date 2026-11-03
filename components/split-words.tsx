import type { CSSProperties } from "react";

/**
 * Parte un titular en palabras para que se enfoquen una detras de otra (ver
 * `.split` y `.split-load` en globals.css). Cada palabra es un `<span>` con su
 * indice en `--i`; los espacios quedan como texto entre ellas, asi que el
 * titular se copia y se lee en voz alta igual que antes.
 *
 * `from` continua la cuenta cuando un titular viene en trozos, como el de la
 * llamada de la home, que lleva una parte en `whitespace-nowrap`.
 */
export function SplitWords({ text, from = 0 }: { text: string; from?: number }) {
  let i = from;
  return text.split(/(\s+)/).map((part, k) =>
    part === "" || /^\s+$/.test(part) ? (
      part
    ) : (
      <span key={k} className="w" style={{ "--i": i++ } as CSSProperties}>
        {part}
      </span>
    ),
  );
}

/** Cuantas palabras ocupa un trozo, para pasarlo como `from` al siguiente. */
export function wordCount(text: string) {
  return text.split(/\s+/).filter(Boolean).length;
}
