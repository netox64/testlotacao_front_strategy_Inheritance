import { jwtDecode } from 'jwt-decode';

export interface IObjectClaims {
    Id: string; Name: string; Image: string; Email: string; Role: string | string[];
}

export const decoderTokenToClaims = (token: string): Partial<IObjectClaims> | null => {
    if (token) {
        try {
            const decodedToken = jwtDecode(token) as any;
            // Acesse as claims e retire tudo em ordem
            const userRoles = decodedToken.Role;
            return { Id: decodedToken.Id, Name: decodedToken.Name, Image: decodedToken.Image, Email: decodedToken.Email, Role: decodedToken.Role };
        } catch (error) {
            console.error('Erro ao decodificar o token:', error);
            return null;
        }
    } else {
        console.log('Token não encontrado foda-se');
        return null;
    }
}