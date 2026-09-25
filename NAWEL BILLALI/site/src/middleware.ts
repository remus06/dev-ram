import { NextRequest, NextResponse } from "next/server";

/**
 * Protège le site par mot de passe HTTP Basic tant que BASIC_AUTH_USER /
 * BASIC_AUTH_PASS sont définis (aperçu de validation sur s-fservices.fr).
 * Retirer ces deux variables d'environnement au moment de la mise en ligne
 * définitive désactive la protection.
 */
export function middleware(req: NextRequest) {
  const user = process.env.BASIC_AUTH_USER;
  const pass = process.env.BASIC_AUTH_PASS;
  if (!user || !pass) return NextResponse.next();

  const auth = req.headers.get("authorization");
  if (auth?.startsWith("Basic ")) {
    const decoded = atob(auth.slice(6));
    const separatorIndex = decoded.indexOf(":");
    const u = decoded.slice(0, separatorIndex);
    const p = decoded.slice(separatorIndex + 1);
    if (u === user && p === pass) return NextResponse.next();
  }

  return new NextResponse("Authentification requise", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Aperçu privé"' },
  });
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
