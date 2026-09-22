import type { Block } from "@/lib/posts";

/**
 * El indice de contenidos de un articulo, y los `id` a los que apunta.
 *
 * Reconstruye el widget `table-of-contents` que el WordPress tenia en la
 * plantilla "Single Post", pero sin su maquinaria: aquel lo montaba en el
 * navegador leyendo el DOM ya pintado. Aqui los encabezados son datos, asi que
 * el indice se calcula en build y llega en el HTML.
 *
 * Solo entran los `h2`. El original tambien recogia h3 y salia un indice de
 * treinta y tantas entradas en articulos como el de hosting, que es mas largo
 * que la seccion que resume.
 */

/**
 * `id` de un encabezado, a partir de su texto.
 *
 * Tiene que dar lo mismo aqui y en `PostBody`, porque uno escribe el destino y
 * el otro el enlace. De ahi que viva en un solo sitio: si diverge, el indice
 * apunta a anclas que no existen y falla en silencio.
 *
 * Normaliza a NFD y quita los diacriticos antes de limpiar, para que un
 * encabezado con tilde no pierda la letra entera.
 */
export function headingId(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export type TocEntry = { id: string; text: string };

/**
 * Los h2 de un articulo, en orden.
 *
 * **Desambigua los repetidos.** Varios articulos abren cada apartado con el
 * mismo encabezado —"Fix:", "Why it matters"— y dos `id` iguales en la misma
 * pagina hacen que el segundo enlace lleve siempre al primero. El sufijo
 * numerico se calcula igual en las dos direcciones, asi que la correspondencia
 * se mantiene.
 */
export function tableOfContents(blocks: readonly Block[]): TocEntry[] {
  const vistos = new Map<string, number>();
  const salida: TocEntry[] = [];

  for (const block of blocks) {
    if (block.kind !== "h2") continue;
    const base = headingId(block.text);
    if (!base) continue;
    const n = vistos.get(base) ?? 0;
    vistos.set(base, n + 1);
    salida.push({ id: n === 0 ? base : `${base}-${n + 1}`, text: block.text });
  }

  return salida;
}
