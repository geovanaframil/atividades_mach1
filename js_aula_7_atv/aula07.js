let nomePilotos = prompt('Digite os nomes dos pilotos de acordo com a ordem de chegada separados por vírgula. Ex: Amauri, Júnior')
let listaPilotos = nomePilotos.split(',')
let msgPodio = '';

if(nomePilotos == '') {
    alert('Por favor, preencha o campo solicitado')
}


for(let i = 0; i < listaPilotos.length; i++) {
    if(i <= 2) {
        msgPodio += `Bronze - ${i+1} - ${listaPilotos[i]} \n`
    }else {
        msgPodio += `${i+1} - ${listaPilotos[i]} \n`
    }
}

alert(msgPodio)

