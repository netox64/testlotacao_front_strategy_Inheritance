"use client";

import React, { ReactNode, useEffect } from "react";
import { Usuario } from "../forms/modeltypes";
import { useGlobalStore } from "@/store";
import * as service from "../forms/functions-request";

interface ILoadContext {children: ReactNode;}

export const LoadContext: React.FC<ILoadContext> = ({ children }) => {
    const setUsuario = useGlobalStore((state) => state.addToUsuarioLogado);
    const initStateParticipantes = useGlobalStore((state) => state.initStateParticipantes);
    const initStateOrganizadores = useGlobalStore((state) => state.initStateOrganizadores);
    const initStateMotoristas = useGlobalStore((state) => state.initStateMotoristas);
    const initStatePostagens = useGlobalStore((state) => state.initStatePostagens);
    const initStateComentarios = useGlobalStore((state) => state.initStateComentarios);
    const initStateCidades = useGlobalStore((state) => state.initStateCidades);
    const initStateFrota = useGlobalStore((state) => state.initStateFrota);
    const initStateCaravanas = useGlobalStore((state) => state.initStateCaravanas);



    const loadUsuarioLogado = async () => {
        const response = await fetch("http://localhost:3000/api/usuarios/email");
        const usuario: Usuario = await response.json();
        if (response.ok && usuario) {
            setUsuario(usuario);
        }
    }

    const loadDataWithPromiseAll = async () => {
        try {
            const [participantes, organizadores, motoristas, postagens, comentarios, cidades, frota, caravanas] = await Promise.all([
                service.getAllParticipantes(),
                service.getAllOrganizadores(),
                service.getAllMotoristas(),
                service.getAllPostagens(),
                service.getAllComentarios(),
                service.getAllCidades(),
                service.getAllFrota(),
                service.getAllCaravanas(),
            ]);

            if (Array.isArray(participantes)) initStateParticipantes(participantes);
            if (Array.isArray(organizadores)) initStateOrganizadores(organizadores);
            if (Array.isArray(motoristas)) initStateMotoristas(motoristas);
            if (Array.isArray(postagens)) initStatePostagens(postagens);
            if (Array.isArray(comentarios)) initStateComentarios(comentarios);
            if (Array.isArray(cidades)) initStateCidades(cidades);
            if (Array.isArray(frota)) initStateFrota(frota);
            if (Array.isArray(caravanas)) initStateCaravanas(caravanas);
        } catch (error) {
            console.error("Erro ao carregar dados:", error);
        }
    }
    useEffect(() => {
        loadUsuarioLogado().then(() => loadDataWithPromiseAll());
        console.log(`\x1b[1;32mAtenção:\x1b[0m \x1b[1;33m Entrou area de manager ${""} x \x1b[0m`);
    }, []);

    return (
        <>
            {children}
        </>
    );
}