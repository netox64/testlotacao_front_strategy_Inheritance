"use client";

import React, { ReactNode, useEffect } from "react";
import { Caravana, Cidade, Comentario, Motorista, Onibus, Organizador, Participante, Postagem, UserRole, Usuario } from "../forms/modeltypes";
import { useGlobalStore } from "@/store";
import * as service from "../forms/functions-request";

interface ILoadContext {
    children: ReactNode;
}

export const LoadContext: React.FC<ILoadContext> = ({ children }) => {
    const usuarioLogado = useGlobalStore((state) => state.usuarioLogado);
    const setUsuario = useGlobalStore((state) => state.addToUsuarioLogado);

    const addToMotorista = useGlobalStore((state) => state.addToMotorista);
    const addToParticipante = useGlobalStore((state) => state.addToParticipante);
    const addToOrganizador = useGlobalStore((state) => state.addToOrganizador);

    const initStateParticipantes = useGlobalStore((state) => state.initStateParticipantes);
    const initStateOrganizadores = useGlobalStore((state) => state.initStateOrganizadores);
    const initStateMotoristas = useGlobalStore((state) => state.initStateMotoristas);
    const initStatePostagens = useGlobalStore((state) => state.initStatePostagens);
    const initStateComentarios = useGlobalStore((state) => state.initStateComentarios);
    const initStateCidades = useGlobalStore((state) => state.initStateCidades);
    const initStateFrota = useGlobalStore((state) => state.initStateFrota);
    const initStateCaravanas = useGlobalStore((state) => state.initStateCaravanas);

    const loadUsuarioLogado = async () => {
        const response = await fetch("http://localhost:3000/api/usuarios/getlogado");
        const usuario: Usuario = await response.json();
        if (response.ok && usuario) {
            setUsuario(usuario);
        }
    }

    // Attention, the following code uses short circuit evaluation
    const loadPersona = async (role: UserRole) => {

        const participante = role === "PARTICIPANTE" ? await service.getPersona<Participante>("participante") : null;
        participante && addToParticipante(participante);

        const organizador = role === "ORGANIZADOR" ? await service.getPersona<Organizador>("organizador") : null;
        organizador && addToOrganizador(organizador);

        const motorista = role === "MOTORISTA" ? await service.getPersona<Motorista>("motorista") : null;
        motorista && addToMotorista(motorista);

    }

    const loadDataWithPromiseAll = async () => {
        try {
            const [participantes, organizadores, motoristas, postagens, comentarios, cidades, frota, caravanas] = await Promise.all([
                service.getAll<Participante>("participantes"),
                service.getAll<Organizador>("organizadores"),
                service.getAll<Motorista>("motoristas"),
                service.getAll<Postagem>("postagens"),
                service.getAll<Comentario>("comentarios"),
                service.getAll<Cidade>("cidades"),
                service.getAll<Onibus>("frota"),
                service.getAll<Caravana>("caravanas"),
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
        loadUsuarioLogado().then(() => {
            loadPersona(usuarioLogado.role);
            loadDataWithPromiseAll();
        });
        console.log(`\x1b[1;32mAtenção:\x1b[0m \x1b[1;33m Entrou area de manager ${""} x \x1b[0m`);
    }, []);

    return (
        <>
            {children}
        </>
    );
}