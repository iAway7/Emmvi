import { llmsTxt } from "@/lib/markdown";

/**
 * `/llms.txt`: el indice del sitio en texto plano, para modelos y agentes.
 *
 * Es el equivalente del `robots.txt` de al lado, pero para lo contrario: aquel
 * dice por donde no pasar, este dice que merece la pena leer y donde esta la
 * version limpia. Los dos se escriben solos desde `lib/`, sin URLs a mano.
 *
 * Va como Route Handler y no en `public/`: el contenido sale de `posts`, y un
 * fichero estatico habria que acordarse de regenerarlo cada vez que la tarea
 * diaria publica un articulo. Aqui se genera en build, que es cuando esa tarea
 * despliega.
 *
 * Se sirve como `text/plain` a proposito, aunque el cuerpo sea Markdown: es lo
 * que dice la convencion y lo que hace que se abra en el navegador en vez de
 * descargarse.
 *
 * `force-static` porque en Next 16 los Route Handlers son dinamicos por
 * defecto, y sin esto el fichero se generaria en cada peticion para devolver
 * siempre lo mismo: todo lo que lee sale de `posts`, que se resuelve en build.
 * Los `/<slug>.md` de al lado ya son estaticos por su `generateStaticParams`.
 */
export const dynamic = "force-static";

export function GET() {
  return new Response(llmsTxt(), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
