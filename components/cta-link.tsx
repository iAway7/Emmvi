import Link from "next/link";

type Variant = "primary" | "ghost" | "light";

const base =
  "inline-flex h-12 items-center justify-center gap-2.5 rounded-sm border border-transparent px-6 " +
  "text-[1rem] font-medium leading-6 transition-colors duration-150 " +
  "focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-ink-black",
  ghost: "border-line bg-paper text-ink hover:border-ink",
  light: "bg-paper text-ink hover:bg-[#e9e9e9] focus-visible:outline-paper",
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
