import { NextResponse, type NextRequest } from "next/server";

/**
 * Con COMING_SOON=1, la raiz sirve la pagina de espera.
 *
 * Es un rewrite, no un redirect: la URL sigue siendo emmvi.com/, asi que al
 * quitar la variable el sitio completo aparece sin que nadie tenga una
 * /coming-soon guardada ni indexada.
 *
 * Quitar la variable (o ponerla a cualquier otra cosa) devuelve la home.
 */
export function middleware(request: NextRequest) {
  if (process.env.COMING_SOON === "1") {
    return NextResponse.rewrite(new URL("/coming-soon", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
