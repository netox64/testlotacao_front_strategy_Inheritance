"use client";
import { signIn } from "next-auth/react";
import React, { ChangeEvent, useState } from "react";

interface dataLogin { email: string; password: string; };
export const FormLogin: React.FC = () => {
    const [dataLogin, setDataLogin] = useState<dataLogin>({ email: "", password: "" });

    const handleChangeDataLogin = (event: ChangeEvent<HTMLInputElement>) => {
        setDataLogin((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    }
    const handleCLickButton = () => { 
        signIn("credentials", { ...dataLogin, callbackUrl: "/manager" });
    }
    return (
        <div className="flex items-center space-x-2">
            <input type="tetx" name="email" placeholder="Login" className="px-3 py-2 border rounded-md text-black" onChange={handleChangeDataLogin} value={dataLogin.email} />
            <input type="password" name="password" placeholder="Senha" className="px-3 py-2 border rounded-md text-black" onChange={handleChangeDataLogin} value={dataLogin.password} />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={handleCLickButton}>Entrar</button>
        </div>
    );
}