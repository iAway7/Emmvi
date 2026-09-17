import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Turbopack infiere la raiz del workspace buscando lockfiles hacia arriba, y
   * encontraba /Users/iaway/package-lock.json (un archivo huerfano, sin
   * package.json al lado). Lo fijamos al repo para que no salga del proyecto.
   */
  turbopack: {
    root: path.dirname(new URL(import.meta.url).pathname),
  },
};

export default nextConfig;
