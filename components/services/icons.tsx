/**
 * Iconos del frame "Services - Website Design" (Figma 165:831), redibujados
 * como SVG inline en vez de exportados: son line-art de 1.6px a un solo trazo,
 * asi que heredan currentColor y pesan cero peticiones.
 *
 * Quedan solo los que no vinieron del Figma: los cinco del timeline, el check
 * de Email Marketing y los de interfaz. Los once de "What's Included" y de
 * hosting se borraron al recibir los SVG originales, que traen la caja de 56px
 * entera y viven en `public/figma/website-design/icons/`.
 */

type IconProps = { className?: string };

function Svg({
  children,
  className = "",
  strokeWidth = 1.6,
}: {
  children: React.ReactNode;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {children}
    </svg>
  );
}

/* --- timeline ----------------------------------------------------------- */

export function SearchIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m15.8 15.8 4.2 4.2" />
    </Svg>
  );
}

/** Glifo de Figma: cinco modulos de 6px. El copy de la seccion nombra la
 *  herramienta ("Design Phase in Figma"), asi que el icono la nombra tambien. */
export function FigmaIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M8.5 2.5h3.5v5H8.5a2.5 2.5 0 0 1 0-5Z" />
      <path d="M12 2.5h3.5a2.5 2.5 0 0 1 0 5H12v-5Z" />
      <path d="M12 7.5h3.5a2.5 2.5 0 0 1 0 5H12v-5Z" />
      <path d="M8.5 7.5H12v5H8.5a2.5 2.5 0 0 1 0-5Z" />
      <path d="M8.5 12.5H12v2.5a2.5 2.5 0 1 1-3.5-2.5Z" />
    </svg>
  );
}

export function ChipIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9.5 3v3M14.5 3v3M9.5 18v3M14.5 18v3M3 9.5h3M3 14.5h3M18 9.5h3M18 14.5h3" />
    </Svg>
  );
}

export function WrenchIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M15.4 3.5a5.2 5.2 0 0 0-5.9 6.7L3.7 16a2 2 0 0 0 2.8 2.8l5.8-5.8a5.2 5.2 0 0 0 6.7-5.9l-2.9 2.9-2.7-.7-.7-2.7 2.7-3.1Z" />
    </Svg>
  );
}

export function PowerIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 3v9" />
      <path d="M17.3 6.3a7.5 7.5 0 1 1-10.6 0" />
    </Svg>
  );
}

/** Check de la lista de /services/email-marketing. */
export function CheckIcon({ className }: IconProps) {
  return (
    <Svg className={className} strokeWidth={2}>
      <path d="m4.5 12.5 5 5 10-11" />
    </Svg>
  );
}

/* --- interfaz ------------------------------------------------------------ */

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <Svg className={className} strokeWidth={2}>
      <path d="m5.5 9 6.5 6.5L18.5 9" />
    </Svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      <path d="M6.94 5.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.9h3.5V21H3.2V8.9Zm5.7 0h3.35v1.65h.05c.47-.85 1.6-1.75 3.3-1.75 3.53 0 4.18 2.2 4.18 5.06V21h-3.5v-5.42c0-1.3-.02-2.96-1.85-2.96-1.85 0-2.13 1.4-2.13 2.86V21H8.9V8.9Z" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      <path d="M17.2 3h3.3l-7.2 8.2L21.8 21h-6.6l-5.2-6.7L4.1 21H.8l7.7-8.8L.4 3H7l4.7 6.2L17.2 3Zm-1.16 16h1.83L6.06 4.9H4.1L16.04 19Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" focusable="false" className={className}>
      <rect x="2.8" y="2.8" width="18.4" height="18.4" rx="5.2" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}
