import { Transacao } from "./Transacao.js";

export type GrupoTransacao = {
    label: string;
    transacoes: Transacao[];
}

export type ResumoTransacoes = {
    totalDepositos: number;
    totalTransferencias: number;
    totalPagamentosBoleto: number;
}