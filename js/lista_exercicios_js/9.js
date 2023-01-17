/**
Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
Exemplo:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará true
*/

function maiorOuIgual(num1, num2) {
    if(num1 >= num2 && typeof(num1) === typeof(num2)) {
        console.log(true)
    } else {
        console.log(false)
    }
    return
}

maiorOuIgual(0, 0)
maiorOuIgual(0, '0')
maiorOuIgual(5, 1)
maiorOuIgual(5, '5')