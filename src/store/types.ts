import { Usuario, Postagem, Participante, Organizador, Motorista, Comentario, Cidade, Caravana, Onibus } from "@/components/forms/modeltypes";

export type GlobalStore = {

    usuarioLogado: Usuario;
    addToUsuarioLogado: (item: Usuario) => void;
    removeToUsuarioLogado: () => void;
    addPostagemToUsuarioLogado: (post: Postagem) => void;

    participante: Participante;
    addToParticipante: (item: Participante) => void;
    removeToParticipante: () => void;

    organizador: Organizador;
    addToOrganizador: (item: Organizador) => void;
    removeToOrganizador: () => void;

    motorista: Motorista;
    addToMotorista: (item: Motorista) => void;
    removeToMotorista: () => void;

    postagens: Postagem[];
    initStatePostagens: (list: Postagem[]) => void;
    addToPostagens: (item: Postagem) => void;
    removeToPostagens: (id: number) => void;

    participantes: Participante[];
    initStateParticipantes: (list: Participante[]) => void;
    addToParticipantes: (item: Participante) => void;
    removeToParticipantes: (id: string) => void;

    cidades: Cidade[];
    initStateCidades: (list: Cidade[]) => void;
    addToCidades: (item: Cidade) => void;
    removeToCidades: (id: number) => void;

    usuarios: Usuario[];
    initStateUsuarios: (list: Usuario[]) => void;
    addToUsuarios: (item: Usuario) => void;
    removeToUsuarios: (id: string) => void;

    organizadores: Organizador[];
    initStateOrganizadores: (list: Organizador[]) => void;
    addToOrganizadores: (item: Organizador) => void;
    removeToOrganizadores: (id: string) => void;

    motoristas: Motorista[];
    initStateMotoristas: (list: Motorista[]) => void;
    addToMotoristas: (item: Motorista) => void;
    removeToMotoristas: (id: string) => void;

    comentarios: Comentario[];
    initStateComentarios: (list: Comentario[]) => void;
    addToComentarios: (item: Comentario) => void;
    removeToComentarios: (id: number) => void;

    caravanas: Caravana[];
    initStateCaravanas: (list: Caravana[]) => void;
    addToCaravanas: (item: Caravana) => void;
    removeToCaravanas: (id: number) => void;

    frota: Onibus[];
    initStateFrota: (list: Onibus[]) => void;
    addToFrota: (item: Onibus) => void;
    removeToFrota: (id: number) => void;
}