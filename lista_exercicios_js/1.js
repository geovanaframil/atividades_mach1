/**
 Escreva uma função que receba dois parâmetros.O primeiro parâmetro é o elemento que repetirá, enquanto
 que o segundo será o número de vezes que haverá repetição. Um array será retornado.
 Exemplo:
 repetir("código", 2) // retornará ["código", "código"]
 repetir(7, 3) // retornará [7, 7, 7]
 */

function repeteNumero(num, repet) {
  let array = [];
  for (let i = 0; i < repet; i++) {
    array.push(num);
  }
  return array;
}

console.log(repeteNumero(7, 3));
