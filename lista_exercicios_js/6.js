/**
Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplo:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
*/

function somarNumeros(arrayNumeros) {
    arrayNumeros;
    let total = 0;

    for(let i = 0; i < arrayNumeros.length; i++) {
        total += arrayNumeros[i]
    }
    return total;
}
console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))
