/**
 * Una escena ilustrada, en SVG en linea.
 *
 * En linea y no como <img> por dos razones. La primera, la tipografia: el
 * texto de la escena hereda DM Sans de la pagina, y dentro de un <img> el SVG
 * no puede cargar la fuente y caeria en la del sistema. La segunda, el movil:
 * una escena ancha a 390px deja el texto ilegible, asi que con `mobileViewBox`
 * se dibuja la misma escena recortada a la pieza que cuenta.
 *
 * Estilo comun a todas: contorno #171717 de 3.5, sombra gris desplazada,
 * lavanda, lima y crema como rellenos, y el violeta de marca solo en lo que es
 * la accion o la respuesta. Nombres y negocios que aparecen dentro son
 * ejemplos de la escena, no clientes. Ninguna muestra cifras de facturacion.
 *
 * El markup es estatico y de este repositorio, por eso dangerouslySetInnerHTML.
 */
export type SceneData = {
  viewBox: string;
  mobileViewBox: string | null;
  markup: string;
};

export function Scene({
  id,
  scene,
  label,
  className = "",
}: {
  /** Unico en la pagina: da nombre a los clipPath de cada variante. */
  id: string;
  scene: SceneData;
  /** Lo que ensena la escena, para el lector de pantalla. */
  label: string;
  className?: string;
}) {
  // La variante oculta con display:none no puede prestar su clipPath a la
  // otra, asi que cada una lleva el suyo.
  const desktop = scene.markup.replaceAll("ill-clip", `ill-clip-${id}-d`);
  const mobile = scene.markup.replaceAll("ill-clip", `ill-clip-${id}-m`);
  return (
    <div className={className}>
      <svg
        viewBox={scene.viewBox}
        role="img"
        aria-label={label}
        className={`block h-auto w-full ${scene.mobileViewBox ? "max-md:hidden" : ""}`}
        dangerouslySetInnerHTML={{ __html: desktop }}
      />
      {scene.mobileViewBox ? (
        <svg
          viewBox={scene.mobileViewBox}
          role="img"
          aria-label={label}
          className="block h-auto w-full md:hidden"
          dangerouslySetInnerHTML={{ __html: mobile }}
        />
      ) : null}
    </div>
  );
}
