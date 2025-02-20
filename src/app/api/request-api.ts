import { ICredentials } from "./auth/[...nextauth]/route";

const requestAuthenticationUser = async (user: ICredentials) => {
    const resposta = await fetch("http://localhost:8080/auth/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    return await resposta.json();
}
export { requestAuthenticationUser };