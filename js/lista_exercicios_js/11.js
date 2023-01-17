/**
Crie uma função que retorna a string "Olá, "
concatenada com um argumento text(a ser passado para a função) e com ponto de exclamação "!"
no final.
Exemplo:
cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
cumprimentar("Maria") // retornará "Olá, Maria!"
*/

function cumprimentar(nome) {
    let texto = `Olá, ${nome}!`

    return texto
}

console.log(cumprimentar('Leonardo'))
console.log(cumprimentar('Maria'))