import { Motorista, Organizador, Participante } from "./modeltypes";

export async function getAll<T>(endpoint: string): Promise<T[]> {
    try {
        const response = await fetch(`http://localhost:3000/api/${endpoint}`);
        if (!response.ok) {
            return [];
        }
        return await response.json();
    } catch (error) {
        console.error(`Erro ao buscar ${endpoint}:`, error);
        return [];
    }
}

//TODO: no need to pass the user ID because someone is already logged in, via token (need to redeem token)
export async function getPersona<T extends Participante | Motorista | Organizador>(endpoint: string): Promise<T | null> {
    try {
        const response = await fetch(`http://localhost:3000/api/usuarios/getlogado/${endpoint}`);

        if (!response.ok) {
            return null;
        }

        const usuario: T = await response.json();
        return usuario;
    } catch (error) {
        console.error("Erro ao buscar persona:", error);
        return null;
    }
}