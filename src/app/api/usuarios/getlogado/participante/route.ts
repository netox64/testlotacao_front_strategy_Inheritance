import { decoderTokenToClaims } from "@/app/api/decode-claims";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {

    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('jwt_back');
        let jwt = !token ? "not found" : token.value;

        let id = "";
        const decodedClaims = decoderTokenToClaims(jwt);
        if (decodedClaims && decodedClaims.Id) {
            id = decodedClaims.Id;
        }

        //faz requisição pelo usuario
        const response = await fetch(`http://localhost:8080/participantes/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json',
            },
        });

        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json") && response.ok) {
            const data = await response.json();
            return NextResponse.json({ ...data }, { status: 200 });
        }
        return NextResponse.json({ message: "Not found" }, { status: 404 });
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong, try turning on the backend server at least bixo" }, { status: 500 });
    }
}