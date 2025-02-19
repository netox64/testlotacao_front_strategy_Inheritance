type UserRole = "PARTICIPANTE" | "ADMIN" | "MOTORISTA" | "ORGANIZADOR";
type ParticipanteStatus = ""; // Parece que está incompleto. Defina os possíveis valores se necessário.
type Status = "EM_ANDAMENTO" | "CONCLUIDA" | "FECHADA";
type Estado = "AC" | "AL" | "AP" | "AM" | "BA" | "CE" | "DF" | "ES" | "GO" | "MA" | "MT" | "MS" | "MG" | "PA" | "PB" | "PR" | "PE" | "PI" | "RJ" | "RN" | "RS" | "RO" | "RR" | "SC" | "SP" | "SE" | "TO";

type Usuario = {
    usuarioId: string; username: string; email: string; image: string; phone: string; cpf: string; password: string; role: UserRole; dataCriacao: Date; postagens: Postagem[];
};

type Participante = Usuario & {
    role: "PARTICIPANTE"; status: ParticipanteStatus; caravanas: Caravana[];
};

type Organizador = Usuario & {
    role: "ORGANIZADOR"; caravanas: Caravana[];
};

type Motorista = Usuario & {
    role: "MOTORISTA"; CNH: string; caravanas: Caravana[];
};

type Postagem = {
    postagemId: number; conteudo: string; dataPostagem: Date; usuario: Usuario; caravana: Caravana; comentarios: Comentario[];
};

type Comentario = {
    comentarioId: number; texto: string; post: Postagem; usuario: Usuario;
};

type Cidade = {
    cidadeId: number; nome: string; estado: Estado; latitude: number; longitude: number; caravanas: Caravana[];
};

type Onibus = {
    onibusId: number; info: string; placa: string; status: Status; caravanas: Caravana[];
};

type Caravana = {
    caravanaId: number; dataSaid: Date; dataRetorno: Date; quantVagas: number; descricao: string; precoPorPessoa: number; status: Status; cidades: Cidade[]; posts: Postagem[]; organizadores: Organizador[]; motoristas: Motorista[]; frota: Onibus[]; participantes: Participante[];
};

export type { UserRole, ParticipanteStatus, Status, Estado, Usuario, Postagem, Participante, Organizador, Motorista, Comentario, Cidade, Caravana, Onibus };
