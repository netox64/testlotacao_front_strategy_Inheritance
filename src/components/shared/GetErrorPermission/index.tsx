"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

export const GetErrorPermission: React.FC = () => {
    const searchParams = useSearchParams();
    const error = searchParams.get("error");

    useEffect(() => {
        if (error) {
            switch (error) {
                case "not_has_token":
                    toast.error("Você não deveria nem estar aqui bixo, está sem token de acesso.");
                    break;
                case "invalid_token":
                    toast.error("Token inválido é de 1500 A.C");
                    break;
                case "invalid_role":
                    toast.error("Você não é ADMIN major, não pode acessar isso aí não.");
                    break;
                default:
                    toast.error("Ocorreu um erro desconhecido.");
            }
        }

    }, [error]);
    return (
        <></>
    );
}