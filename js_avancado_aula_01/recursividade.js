const clientes = ['Jorge', 'Maria', 'Manoel', 'João', 'Roberto', 'Vera'];


let tempoEspera = 15;

let somaTempoEspera = (arrClientes, nomeCliente) => {
    let indexArray = arrClientes.length - 1;
    let clienteAtual = arrClientes[indexArray];
    if(clienteAtual == nomeCliente) {
        console.log(`Resultado (${tempoEspera})`);
    }else if (indexArray == 0) {
        console.log(null)
    } else {
        tempoEspera += 15;
        arrClientes.pop();
        somaTempoEspera(arrClientes, nomeCliente)
    }
}

somaTempoEspera(clientes, "Geovana")