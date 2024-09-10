import { formatarMoeda, formatarData } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Contas.js";
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso != null) {
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
rederizarSaldo();
function rederizarSaldo() {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}
const SaldoComponent = {
    atualizar() {
        rederizarSaldo();
    }
};
export default SaldoComponent;
// // Tipos Primitivos
// let valor: number = 3000;
// let nome: string = "";
// let isPago: boolean = false;
// let qualquer: any = "";
// qualquer = 22;
// // Arrays
// const lista: number[] = [];
// lista.push(13, 22.5, 22, 89, 1.58);
