import { TipoTransacao } from "./TipoTransacao.js";

// Tipos Personalizados (Type Alias)
export type Transacao = {
    tipoTransacao: TipoTransacao;
    valor: number;
    data: Date;
}