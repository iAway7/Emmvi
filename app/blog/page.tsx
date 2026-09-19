import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { posts } from "@/lib/posts";
import { pageMetadata } from "@/lib/site";

/**
 * Indice del blog. Otra URL que el WordPress anterior dejo indexada.
 *
 * Existe sobre todo para que los seis articulos no queden huerfanos: una
 * pagina a la que no enlaza nadie desde dentro del sitio se rastrea peor y
 * pesa menos, por buena que sea. Desde aqui y desde el footer, cada articulo
 * tiene al menos dos vias de entrada.
 *
 * Los articulos no llevan imagen. No hay ninguna que sea de Emmvi, y poner
 * fotos de banco seria la misma prueba prestada que PRODUCT.md prohibe en los
 * testimonios.
 */
export const metadata: Metadata = pageMetadata({
  path: "/blog",
  title: "Blog",
  description:
    "Notes on websites, follow-up and the tools behind them, for people who run the business rather than the marketing.",
});

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";

export default function BlogIndex() {
  return (
    <>
      <SiteHeader />

      <main className={`${wrap} py-16 lg:py-24`}>
        <h1 className="max-w-[16em] text-display text-balance text-ink">
          Blog
        </h1>
        <p className="mt-6 max-w-[44ch] text-lede text-pretty text-ink-soft">
          Notes on websites, follow-up and the tools behind them. Written for
          people who run the business rather than the marketing.
        </p>

        <ul className="mt-14 flex flex-col border-t border-line">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-line">
              <Link
                href={`/${post.slug}`}
                className="group block py-8 focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
              >
                <h2 className="max-w-[22em] text-h3 text-balance text-ink group-hover:text-violet">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-[60ch] text-body text-pretty text-ink-soft">
                  {post.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <SiteFooter />
    </>
  );
}
