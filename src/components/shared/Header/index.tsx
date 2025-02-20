import { FormLogin } from "@/components/forms/FormLogin";
import React from "react";

export const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-xl font-bold">Minha Aplicação</h1>
                <FormLogin />
            </div>
        </header>
    );
}