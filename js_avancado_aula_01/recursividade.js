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

















// {
//     function countDown(fromNumber){
//         // console.log('Count', fromNumber);
//         let nexNumber = fromNumber -1;
//         if(nexNumber > 0){
//             countDown(nexNumber);
//         }
//     }
//     // countDown(5);
// }

// {
//     function factorial(fromNumber){
//         if(fromNumber <= 1){ // condition base
//             return 1
//         }else{
//             return fromNumber * factorial(fromNumber -1)
//         }
        
//     }
    
//     // console.log('factorial', factorial(5))
// }

// {
//     function contador(n){
//         if(n < 1){
//             return [];
//         } else{
//             let contadorArray = contador(n - 1);
//             contadorArray.push(n);
//             return contadorArray;
//         }
//     }
//     // console.log(contador(20))
// }