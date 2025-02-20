import { Caravana, Cidade, Comentario, Motorista, Onibus, Organizador, Participante, Postagem } from "./modeltypes";

export async function getAllParticipantes(): Promise<Participante[]> { return [] as Participante[]; }
export async function getAllOrganizadores(): Promise<Organizador[]> { return [] as Organizador[]; }
export async function getAllMotoristas(): Promise<Motorista[]> { return [] as Motorista[]; }
export async function getAllPostagens(): Promise<Postagem[]> { return [] as Postagem[]; }
export async function getAllComentarios(): Promise<Comentario[]> { return [] as Comentario[]; }
export async function getAllCidades(): Promise<Cidade[]> { return [] as Cidade[]; }
export async function getAllFrota(): Promise<Onibus[]> { return [] as Onibus[]; }
export async function getAllCaravanas(): Promise<Caravana[]> { return [] as Caravana[]; }