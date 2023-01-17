/* a. Crie uma variável e armazene a seguinte string “Manipulando strings com JS”

b. Utilize a função adequada para exibir um alerta com o conteúdo da variável todo em maiúsculo.

c. Exiba no console do navegador apenas os 5 primeiros caracteres contidos na string.

d. Exiba em um alerta a quantidade de caracteres que contém esta string.

e. Crie uma variável e armazene a seguinte string “Vamos concatenar as duas strings”.

f. Agora exiba no console o valor de ambas as strings concatenadas em uma única mensagem.*/

let tipoString = 'Manipulando strings com JS'
let concatenandoStrings = 'Vamos concaterar as duas strings'

alert(tipoString.toLocaleUpperCase())
console.log(tipoString.slice(0,5))

alert(`Essa string possui ${tipoString.length} caracteres`)

console.log(`${tipoString}. ${concatenandoStrings}`)