const clientes = ['Jorge', 'Maria', 'Manoel', 'João', 'Roberto', 'Vera'];


let ordemRecebeProduto = (arrClientes, tempoPedido = 15, nomeCliente) => {
    if(arrClientes.length == 0) {
        return 1;
    } else {
        console.log(arrClientes[arrClientes.length -1], tempoPedido)
        arrClientes.pop()
        ordemRecebeProduto(arrClientes, tempoPedido + 15)
    }
}


ordemRecebeProduto(clientes)

















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