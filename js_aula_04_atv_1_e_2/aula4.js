let recebeLetraAlfabeto = prompt('Digite uma letra do alfabeto: ')

if(recebeLetraAlfabeto == 'a' || recebeLetraAlfabeto == 'e' || recebeLetraAlfabeto == 'i' || recebeLetraAlfabeto == 'o' || recebeLetraAlfabeto == 'u') {
    alert('Letra digitada é uma vogal')
} else if (!isNaN(recebeLetraAlfabeto)) {
    alert('Deve digitar uma letra do alfabeto para obter o resultado')
} else {
    alert('Letra digitada é uma consoante')
}