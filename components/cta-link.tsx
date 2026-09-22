import Link from "next/link";

type Variant = "primary" | "ghost" | "outline" | "light";

/**
 * El borde solo pone el ancho aquí. El color lo pone cada variante, y las que
 * no llevan borde visible ponen `border-transparent` ellas mismas.
 *
 * Antes `border-transparent` estaba en esta cadena base, y **se comía el color
 * de las variantes**: Tailwind emite las dos como `border-color` con la misma
 * especificidad, y `.border-transparent` va después en la hoja, así que ganaba
 * el orden. El resultado es que `ghost` nunca dibujó su borde — el "Learn More"
 * de website-design y el "Let's Talk" de SEO salían como texto suelto.
 */
const base =
  "inline-flex h-12 items-center justify-center gap-2.5 rounded-sm border px-6 " +
  "text-ui font-medium transition-colors duration-150 " +
  "focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet";

/**
 * `ghost` y `outline` son los dos secundarios que dibuja el Figma, y no son el
 * mismo: el "Learn More" de website-design lleva borde #ebebeb y el "Let's
 * Talk" de las tarjetas de SEO lo lleva negro. Medido sobre los dos renders del
 * archivo, no deducido de uno.
 */
const variants: Record<Variant, string> = {
  primary: "border-transparent bg-ink text-paper hover:bg-ink-black",
  ghost: "border-line bg-paper text-ink hover:border-ink",
  outline: "border-ink-black bg-paper text-ink hover:bg-paper-alt",
  light:
    "border-transparent bg-paper text-ink hover:bg-[#e9e9e9] focus-visible:outline-paper",
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
