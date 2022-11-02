import { calcular as juros } from "./calculos/juros.mjs";
import { calcular as multa } from "./calculos/multa.mjs";

const valorJuros = 10;
const dataDeAtraso = 20;

console.log(juros(valorJuros, dataDeAtraso) + multa(valorJuros, dataDeAtraso));
