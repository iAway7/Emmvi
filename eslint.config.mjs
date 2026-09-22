/**
 * eslint-config-next 16 exporta flat config nativa. El envoltorio FlatCompat
 * que genera create-next-app@15 provoca "Converting circular structure to JSON"
 * contra esta version, asi que se importa directo.
 */
import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...(Array.isArray(coreWebVitals) ? coreWebVitals : [coreWebVitals]),
  ...(Array.isArray(typescript) ? typescript : [typescript]),
  {
    ignores: [
      // Artefactos de build de un worktree de agente, no codigo fuente: metian
      // 14 avisos por ejecucion sobre chunks generados por Turbopack.
      ".seo-agent/**",
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
