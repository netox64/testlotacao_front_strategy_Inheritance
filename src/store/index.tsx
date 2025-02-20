import { create } from 'zustand';
import { GlobalStore } from './types';
import { Usuario, Postagem, Participante, Organizador, Motorista, Comentario, Cidade, Caravana, Onibus } from "@/components/forms/modeltypes";

export const useGlobalStore = create<GlobalStore>((set) => {
    let usuarioLogado = {} as Usuario;
    let participante = {} as Participante; let organizador = {} as Organizador; let motorista = {} as Motorista;

    return {

        // For usuario Logado
        usuarioLogado,
        addToUsuarioLogado: (usuario: Usuario) => set(() => ({ usuarioLogado: usuario })),
        removeToUsuarioLogado: () => set(() => ({ usuarioLogado: {} as Usuario })),
        addPostagemToUsuarioLogado: (post: Postagem) => set((state) => ({ usuarioLogado: { ...state.usuarioLogado, imoveis: [...(state.usuarioLogado.postagens || []), post], }, })),

        participante,
        addToParticipante: (p: Participante) => set(() => ({ participante: p })),
        removeToParticipante: () => set(() => ({ participante: {} as Participante })),

        organizador,
        addToOrganizador: (p: Organizador) => set(() => ({ organizador: p })),
        removeToOrganizador: () => set(() => ({ organizador: {} as Organizador })),

        motorista,
        addToMotorista: (p: Motorista) => set(() => ({ motorista: p })),
        removeToMotorista: () => set(() => ({ motorista: {} as Motorista })),


        // For postagens
        postagens: [],
        initStatePostagens: (list: Postagem[]) => set(() => ({ postagens: [...list] })),
        addToPostagens: (item: Postagem) => set((state) => ({ postagens: [...state.postagens, item] })),
        removeToPostagens: (id: number) => set((state) => ({ postagens: state.postagens.filter((item) => item.postagemId !== id) })),

        // For participantes
        participantes: [],
        initStateParticipantes: (list: Participante[]) => set(() => ({ participantes: [...list] })),
        addToParticipantes: (item: Participante) => set((state) => ({ participantes: [...state.participantes, item] })),
        removeToParticipantes: (id: string) => set((state) => ({ participantes: state.participantes.filter((item) => item.usuarioId.toLocaleLowerCase() !== id.toLocaleLowerCase()) })),

        // For cidades
        cidades: [],
        initStateCidades: (list: Cidade[]) => set(() => ({ cidades: [...list] })),
        addToCidades: (item: Cidade) => set((state) => ({ cidades: [...state.cidades, item] })),
        removeToCidades: (id: number) => set((state) => ({ cidades: state.cidades.filter((item) => item.cidadeId !== id) })),

        // For Usuario
        usuarios: [],
        initStateUsuarios: (list: Usuario[]) => set(() => ({ usuarios: [...list] })),
        addToUsuarios: (item: Usuario) => set((state) => ({ usuarios: [...state.usuarios, item] })),
        removeToUsuarios: (id: string) => set((state) => ({ usuarios: state.usuarios.filter((item) => item.usuarioId.toLocaleLowerCase() !== id.toLocaleLowerCase()) })),

        // For organizadores
        organizadores: [],
        initStateOrganizadores: (list: Organizador[]) => set(() => ({ organizadores: [...list] })),
        addToOrganizadores: (item: Organizador) => set((state) => ({ organizadores: [...state.organizadores, item] })),
        removeToOrganizadores: (id: string) => set((state) => ({ organizadores: state.organizadores.filter((item) => item.usuarioId.toLocaleLowerCase() !== id.toLocaleLowerCase()) })),

        // For motoristas
        motoristas: [],
        initStateMotoristas: (list: Motorista[]) => set(() => ({ motoristas: [...list] })),
        addToMotoristas: (item: Motorista) => set((state) => ({ motoristas: [...state.motoristas, item] })),
        removeToMotoristas: (id: string) => set((state) => ({ motoristas: state.motoristas.filter((item) => item.usuarioId.toLocaleLowerCase() !== id.toLocaleLowerCase()) })),

        // For comentarios
        comentarios: [],
        initStateComentarios: (list: Comentario[]) => set(() => ({ comentarios: [...list] })),
        addToComentarios: (item: Comentario) => set((state) => ({ comentarios: [...state.comentarios, item] })),
        removeToComentarios: (id: number) => set((state) => ({ comentarios: state.comentarios.filter((item) => item.comentarioId !== id) })),

        // For caravanas
        caravanas: [],
        initStateCaravanas: (list: Caravana[]) => set(() => ({ caravanas: [...list] })),
        addToCaravanas: (item: Caravana) => set((state) => ({ caravanas: [...state.caravanas, item] })),
        removeToCaravanas: (id: number) => set((state) => ({ caravanas: state.caravanas.filter((item) => item.caravanaId !== id) })),

        // For frota
        frota: [],
        initStateFrota: (list: Onibus[]) => set(() => ({ frota: [...list] })),
        addToFrota: (item: Onibus) => set((state) => ({ frota: [...state.frota, item] })),
        removeToFrota: (id: number) => set((state) => ({ frota: state.frota.filter((item) => item.onibusId !== id) })),


    }
});
