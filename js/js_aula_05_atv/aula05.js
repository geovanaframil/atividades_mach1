let recebePet = prompt('Informe qual é o seu pet para que possamos continuar com o atendimento: ');
const msgBanhoETosa = 'Conseguimos atender esse pet com todo carinho!';
const msgVetEspecializado = 'Infelizmente não possuímos estruturas para atender esse pet, iremos te encaminhar para um veterinário especializado!';
const msgRatos = 'Possuímos apenas gaiolas especiais para seu pet.'
const msgPassaros = 'Possuímos implantes de rastreamento para seu animalzinho. Vamos conhecer sobre?'
const msgRacao = 'Temos vários tipos de ração para seu bichinho! Vamos conferir?'

switch(recebePet) {
    case 'Cachorro':
    case 'Gato':
    case 'Coelho':
        alert(`${msgBanhoETosa} \n\n${msgRacao}`)
    break
    case 'Cavalo':
    case 'Cabra':
    case 'Camelo':
        alert(`${msgVetEspecializado} \n\n${msgRacao}`)
    break
    case 'Rato':
        alert(`${msgRatos} \n\n${msgRacao}`)
    break
    case 'Passaro':
        alert(`${msgPassaros} \n\n${msgRacao}`)
    break
    default:
        alert('Infelizmente não conseguimos te atender. :(')

}