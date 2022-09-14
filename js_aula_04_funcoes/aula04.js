/*Crie um arquivo chamado funcoes1_js.html, e vamos fazer um algoritmo:

a. Receba do usuário através do comando prompt um CPF (apenas números), e atribua isso a uma variável.

b. Crie uma função para verificar se o CPF digitado contém 11 dígitos, caso não contenha retorne false true caso retorne.

c. Crie uma função para formatá-lo de acordo com a máscara xxx.xxx.xxx-xx

d. Crie uma última função para exibir o CPF formatado através de um alert para o cliente caso a função de validação de dígitos retorne true.

Dicas importantes:
● Leve suas dúvidas para as mentorias, é sempre uma boa oportunidade para aprender mais detalhes sobre a matéria.
● Utilize CPFs gerados através de geradores de CPF na internet.*/

let recebeCpf = prompt('Digite o seu CPF (Apenas números)');
recebeCpf = recebeCpf.toString();

function qtdCaracteres(cpf) {
    let validaCpf = false;
    if(cpf.length === 11) {
        validaCpf = true
    }
    return validaCpf
}

function formataCpf(cpf) {

}