const clientes = ['Jorge', 'Maria', 'Manoel', 'João', 'Roberto', 'Vera'];




let calcularTempoSaida = (listaClientes, nomeCliente, index = 0) => {
    let tempoEspera = 15;
    let numeroClientes = listaClientes.length;

    if(numeroClientes === index) {
        return null
    }else if (listaClientes[index] === nomeCliente) {
        return (numeroClientes - index) * tempoEspera
    } else {
        index++
        return calcularTempoSaida(listaClientes, nomeCliente, index)
    }
}

console.log(calcularTempoSaida(clientes, "Vera"))
console.log(calcularTempoSaida(clientes, "Manoel"))
console.log(calcularTempoSaida(clientes, "Jorge"))
console.log(calcularTempoSaida(clientes, "Jonas"))