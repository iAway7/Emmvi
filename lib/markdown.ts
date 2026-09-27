import type { Block, Inline, Post, Rich } from "@/lib/posts";
import { ASIDE_LABELS } from "@/lib/posts";
import { posts } from "@/lib/posts";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";

/**
 * Los articulos en Markdown, para quien los lee con una maquina.
 *
 * Es la unica pieza del blog escrita para un lector que no es una persona: un
 * modelo de lenguaje al que alguien pega el enlace, un agente que rastrea el
 * sitio, o el propio visitante que quiere el texto sin la maqueta. Para todos
 * ellos, el HTML de `app/[slug]/page.tsx` es ruido —cabecera, indice, tarjetas
 * de relacionados, CTA— alrededor de lo unico que buscan, que es el cuerpo.
 *
 * **Sale de `Block[]`, no de raspar el HTML.** Los articulos ya estan tipados
 * en `content/posts/`, asi que esto es una funcion pura sobre datos que existen:
 * ni dependencia nueva, ni segunda copia del texto que se pueda desincronizar.
 * Mismo planteamiento que `lib/toc.ts` y `readingTime`, que tambien recorren
 * `body`.
 *
 * **Lo que no hace: mandar a nadie a una IA.** Se valoro el patron de los
 * botones "resume esto en ChatGPT" que llevan algunos blogs. Se descarto por
 * dos motivos: los deep-link con el prompt en la query hacen que Claude reciba
 * al lector con un aviso de contenido potencialmente malicioso, y el boton cae
 * justo donde `app/[slug]/page.tsx` pone su llamada a la accion, que es el
 * momento en que alguien acaba de leer. Servir el Markdown resuelve el mismo
 * problema —que una IA lea bien el articulo— sin sacar a nadie de la pagina.
 */

/* --------------------------------------------------------------------------
   Escapado
   -------------------------------------------------------------------------- */

/**
 * Escapa lo que cambiaria la **estructura** del documento, y nada mas.
 *
 * No se escapa todo el repertorio de Markdown a proposito. Estos textos son
 * prosa recuperada de WordPress, llena de comillas, guiones y cifras; pasar
 * cada `_` o cada `.` a `\_` y `\.` produce un fichero correcto y a la vez
 * ilegible, y el destinatario de esto es alguien —o algo— que va a leerlo.
 *
 * Se escapa lo que de verdad rompe: los caracteres que abren enfasis, codigo o
 * enlace en mitad de una linea. El caso de inicio de linea (`#`, `>`, `-`, un
 * numero con punto) lo trata `bloqueDeLinea`, porque ahi el riesgo es que un
 * parrafo se convierta en titular o en lista.
 */
function escapar(texto: string): string {
  return texto.replace(/([\\`*_[\]])/g, "\\$1");
}

/**
 * Un parrafo que empieza por sintaxis de bloque se convertiria en titular, cita
 * o lista al volver a leerlo. Solo pasa al principio de la linea, asi que se
 * arregla ahi y no en todo el texto.
 */
function bloqueDeLinea(texto: string): string {
  return texto.replace(/^(\s*)([#>+-]|\d+\.)(\s)/, "$1\\$2$3");
}

/* --------------------------------------------------------------------------
   Fragmentos
   -------------------------------------------------------------------------- */

/**
 * Una URL absoluta. Los enlaces internos de los articulos van relativos
 * (`/contact-us/`), y en un fichero que alguien se lleva fuera del sitio un
 * enlace relativo no lleva a ningun sitio.
 */
function absoluta(href: string): string {
  return href.startsWith("/") ? `${SITE_URL}${href}` : href;
}

function fragmento(f: Inline): string {
  if (typeof f === "string") return escapar(f);

  const texto = f.bold ? `**${escapar(f.text)}**` : escapar(f.text);
  return f.href ? `[${texto}](${absoluta(f.href)})` : texto;
}

function rico(r: Rich): string {
  const texto = typeof r === "string" ? escapar(r) : r.map(fragmento).join("");
  return bloqueDeLinea(texto);
}

/* --------------------------------------------------------------------------
   Bloques
   -------------------------------------------------------------------------- */

function bloque(b: Block): string {
  switch (b.kind) {
    case "h2":
      return `## ${escapar(b.text)}`;
    case "h3":
      return `### ${escapar(b.text)}`;
    case "p":
      return rico(b.text);
    case "list":
      // El numero se escribe siempre "1.": Markdown renumera solo, y asi
      // insertar una linea en medio no obliga a recorrer el resto.
      return b.items
        .map((item) => `${b.ordered ? "1." : "-"} ${rico(item)}`)
        .join("\n");
    case "aside": {
      // Cita. En el sitio es una nota al margen —un limite, un ejemplo de
      // mensaje—, y el blockquote es lo que mas se le parece en Markdown.
      //
      // Si lleva tono, la etiqueta va dentro de la cita y en negrita. No se
      // usa la sintaxis `> [!TIP]` de GitHub: fuera de GitHub se lee como un
      // corchete suelto, y esto lo consume sobre todo un modelo, para el que
      // "**Important**" dice lo mismo en cualquier sitio.
      const cuerpo = rico(b.text);
      const etiqueta = b.tone ? (b.label ?? ASIDE_LABELS[b.tone]) : undefined;
      const texto = etiqueta
        ? `**${escapar(etiqueta)}**\n\n${cuerpo}`
        : cuerpo;

      return texto
        .split("\n")
        .map((linea) => (linea ? `> ${linea}` : ">"))
        .join("\n");
    }
    case "image":
      return `![${escapar(b.alt)}](${absoluta(b.src)})`;
  }
}

/* --------------------------------------------------------------------------
   El documento
   -------------------------------------------------------------------------- */

/** Valor YAML entre comillas. Los titulos llevan `:` y romperian el bloque. */
function yaml(valor: string): string {
  return `"${valor.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

/**
 * El articulo entero: front matter, titular, entradilla y cuerpo.
 *
 * El front matter va porque es lo que convierte un texto suelto en algo
 * atribuible: quien lo lea fuera del sitio se lleva de donde salio y de cuando
 * es. `source` es la canonica con barra final, la misma forma que sirve el
 * sitio y que declara `ArticleSchema`.
 */
export function postToMarkdown(post: Post): string {
  const frontMatter = [
    "---",
    `title: ${yaml(post.title)}`,
    `description: ${yaml(post.description)}`,
    `category: ${yaml(post.category)}`,
    `date: ${post.published}`,
    // Solo si hubo revision. Ver `Post.updated`.
    ...(post.updated ? [`updated: ${post.updated}`] : []),
    `source: ${SITE_URL}/${post.slug}/`,
    "---",
  ].join("\n");

  const cuerpo = post.body.map(bloque).join("\n\n");

  return `${frontMatter}\n\n# ${escapar(post.title)}\n\n${rico(post.lede)}\n\n${cuerpo}\n`;
}

/**
 * `/llms.txt`: la lista de lo que hay, en texto plano.
 *
 * Sigue la forma que propone llmstxt.org —un h1 con el sitio, una linea en
 * cursiva que lo resume y secciones de enlaces con descripcion— porque es la
 * convencion que los rastreadores de modelos esperan encontrar, y aqui no hay
 * motivo para inventar otra.
 *
 * **Enlaza al `.md`, no al HTML.** Es el punto entero del fichero: si algo
 * viene a leer, se le da la version sin maqueta a la primera y no despues de
 * atravesar la pagina.
 */
export function llmsTxt(): string {
  const porFecha = [...posts].sort((a, b) =>
    b.published.localeCompare(a.published),
  );

  // Cada articulo es una linea, asi que un salto dentro de la descripcion
  // partiria la lista en dos. Hoy no hay ninguna con saltos; la tarea diaria
  // escribe estos campos sin supervision y puede meterlo cualquier dia.
  const unaLinea = (texto: string) => texto.replace(/\s+/g, " ").trim();

  const articulos = porFecha
    .map(
      (p) =>
        `- [${p.title}](${SITE_URL}/${p.slug}.md): ${unaLinea(p.description)}`,
    )
    .join("\n");

  return `# ${SITE_NAME}

> ${SITE_TAGLINE}

## Articles

${articulos}

## Pages

- [All articles](${SITE_URL}/blog/): Every article, newest first.
- [Contact](${SITE_URL}/contact-us/): Tell us what you need.
`;
}
