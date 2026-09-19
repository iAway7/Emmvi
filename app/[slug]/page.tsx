import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaLink } from "@/components/cta-link";
import { PostBody } from "@/components/post-body";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { findPost, postSlugs } from "@/lib/posts";
import { pageMetadata } from "@/lib/site";

/**
 * Los articulos del blog, **en la raiz y no bajo /blog/**, porque asi los tenia
 * el WordPress anterior y son esas URLs las que estan indexadas:
 * emmvi.com/top-5-best-ai-tools-for-images, no /blog/top-5-...
 *
 * Una ruta dinamica en la raiz da miedo con razon: `[slug]` podria tragarse
 * todo el sitio. No lo hace, por dos motivos que conviene no tocar:
 *
 *  1. En el App Router un segmento estatico gana siempre al dinamico, asi que
 *     /contact, /about-us, /blog y /coming-soon siguen resolviendo a su propia
 *     pagina. /services/seo tampoco entra: `[slug]` es un solo segmento.
 *  2. `dynamicParams = false` hace que cualquier slug que no salga de
 *     `generateStaticParams` devuelva 404 en vez de intentar renderizarse.
 *
 * Sin el punto 2, una URL inventada como /cualquier-cosa entraria aqui y se
 * caeria dentro del componente en vez de dar un 404 limpio.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return {};

  return pageMetadata({
    path: `/${slug}`,
    title: post.title,
    description: post.description,
  });
}

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = findPost(slug);
  // Inalcanzable con `dynamicParams = false`, pero es lo que le dice a
  // TypeScript que abajo `post` ya no es undefined.
  if (!post) notFound();

  return (
    <>
      <SiteHeader />

      <main className={`${wrap} py-16 lg:py-24`}>
        <article>
          <Link
            href="/blog"
            className="inline-flex min-h-[44px] items-center rounded-sm text-small text-ink-soft transition-colors hover:text-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
          >
            ← All articles
          </Link>

          <h1 className="mt-4 max-w-[20em] text-h2 text-balance text-ink">
            {post.title}
          </h1>

          <p className="mt-6 max-w-[44ch] text-lede text-pretty text-ink-soft">
            {post.lede}
          </p>

          {/* En mono, como el resto de artefactos reales del sitio. */}
          <p className="mt-6 font-mono text-small text-ink-soft">
            {new Date(post.published).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <hr className="mt-10 border-line" />

          <div className="mt-10">
            <PostBody blocks={post.body} />
          </div>
        </article>

        {/* Todo articulo acaba en el mismo sitio: la llamada. Sin esto el blog
            es trafico que entra y se va. */}
        <aside className="mt-16 max-w-[68ch] rounded-lg bg-paper-panel p-8 lg:p-12">
          <h2 className="text-h3 text-balance text-ink">
            Want this handled for you?
          </h2>
          <p className="mt-4 text-body text-pretty text-ink-soft">
            We build the website and the system behind it, so the work that
            happens after someone fills in a form does not depend on anyone
            remembering.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CtaLink href="/contact">Get in touch</CtaLink>
            <CtaLink href="/blog" variant="ghost">
              Read more articles
            </CtaLink>
          </div>
        </aside>
      </main>

      <SiteFooter />
    </>
  );
}
