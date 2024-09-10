import { formatarData, formatarMoeda } from "../utils/formatters.js";
export var FormatoData;
(function (FormatoData) {
    FormatoData["PADRAO"] = "DD/MM/AAAA";
    FormatoData["DIA_SEMANA_DIA_MES_ANO"] = "DIA_SEMANA, DD/MM/AAAA";
    FormatoData["DIA_MES"] = "DD/MM";
})(FormatoData || (FormatoData = {}));
export function formatarInformacoes(valor, data, FormatoData) {
    const dataFormatada = formatarData(data, FormatoData);
    const valorFormatado = formatarMoeda(valor);
    return '${dataFormatada} -  ${valorFormatado}';
}
