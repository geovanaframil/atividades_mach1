/**
Numa aplicação Web da qual você faz parte da equipe de desenvolvimento, pretende - se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada de números e retorne a média simples desses números.
Exemplo:
calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3
*/

function calcularMedia(arrayNumeros) {
    let qtdNumeros = arrayNumeros.length;
    let soma = 0;

    for(let i = 0; i < arrayNumeros.length; i++) {
        soma += arrayNumeros[i]
    }

    return soma / qtdNumeros
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))
