import { NextRequest, NextResponse } from "next/server";
import { decoderTokenToClaims } from "@/app/api/decode-claims";

type Role = 'ADMIN' | 'MOTORISTA' | 'PARTICIPANTE' | 'ORGANIZADOR';

const controleDeAcesso: Record<Role, string[]> = {
    ADMIN: ["/admin", "/usuarios", "/dashboard"],
    MOTORISTA: ["/carvanas", "/perfil"],
    PARTICIPANTE: ["/caravanas", "/perfil"],
    ORGANIZADOR: ["/caravanas", "/organizacao", "/dashboard"],
};


// aplicamos o midleware em todas as rotas privadas, para fazer logica com as diferentes personas
export const config = {
    matcher: ["/admin/:path*", "/usuarios/:path*", "/corridas/:path*", "/eventos/:path*", "/organizacao/:path*", "/dashboard/:path*"],
};

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    console.log(`Middleware ativado para: ${path}`);

    // Obtém o token do cookie
    const token = request.cookies.get("jwt_back")?.value;
    if (!token) {
        return NextResponse.redirect(new URL("/manager?error=not_has_token", request.url));
    }

    // Decodificamos os claims do token
    const claims = decoderTokenToClaims(token);
    if (!claims) {
        return NextResponse.redirect(new URL("/manager?error=invalid_token", request.url));
    }

    // Obtém os papéis do usuário
    const userRoles = Array.isArray(claims.Role) ? claims.Role : claims.Role ? [claims.Role] : [];
    // Verifica se pelo menos 1 dos papéis do usuário tem permissão para acessar a rota
    const hasAccess = userRoles.some(role => (controleDeAcesso[role as Role] || []).some((route: string) => path.startsWith(route)));

    if (!hasAccess) {
        return NextResponse.redirect(new URL("/manager?error=invalid_role", request.url));
    }
}
