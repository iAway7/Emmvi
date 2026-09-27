import { postToMarkdown } from "@/lib/markdown";
import { findPost, postSlugs } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

/**
 * El Markdown de cada articulo.
 *
 * **La URL publica es `/<slug>.md`**, no esta. La reescritura de
 * next.config.ts la trae aqui, porque el App Router no sabe poner una
 * extension detras de un segmento dinamico: `app/[slug].md/` no es una carpeta
 * que Next entienda. La ruta interna existe solo para tener donde aterrizar.
 *
 * `.md` y no `/markdown/` porque es la forma que se ha asentado para esto
 * —docs de Anthropic, Mintlify, llmstxt.org— y la que alguien prueba a mano
 * antes de buscar el enlace.
 *
 * **Canonica por cabecera.** La reescritura deja dos caminos a los mismos
 * bytes, este y `/md/<slug>/`, y ademas el `.md` es una segunda representacion
 * del articulo que ya vive en `/<slug>/`. En un recurso que no es HTML no hay
 * `<link rel=canonical>` donde meterlo, asi que va en la cabecera `Link`, que
 * es para lo que existe.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export async function GET(
  _peticion: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const post = findPost(slug);

  // Inalcanzable con `dynamicParams = false`; es lo que le dice a TypeScript
  // que abajo `post` ya no es undefined.
  if (!post) {
    return new Response("Not found\n", { status: 404 });
  }

  return new Response(postToMarkdown(post), {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      link: `<${SITE_URL}/${post.slug}/>; rel="canonical"`,
    },
  });
}
