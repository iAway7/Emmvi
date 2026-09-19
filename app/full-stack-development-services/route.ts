import { gone } from "@/lib/gone";

/** Misma decision que /web-hosting: indexada, sin equivalente, se retira. */
export function GET() {
  return gone("full-stack development as a separate service");
}
