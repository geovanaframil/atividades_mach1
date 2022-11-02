import * as calculadora from "./calculadora/index.mjs";
import { dividir, multiplicar, somar, subtrair } from "./calculadora/index.mjs";
const valor1 = 12;
const valor2 = 15;

console.log(
  calculadora.somar(valor1, valor2),
  calculadora.subtrair(valor1, valor2)
);
console.log(dividir(valor1, valor2));
console.log(multiplicar(valor1, valor2));
console.log(somar(valor1, valor2));
console.log(subtrair(valor1, valor2));
