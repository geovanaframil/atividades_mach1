const montarTabuada = (numeroDaTabuada) =>{
    let total = 0;
    let tabuada =  function (numero1,numero2){
        if(numero1 <= numero2){
            for(let i = numero1; i <= numero2; i++){
                total = i * numeroDaTabuada
                console.log(`${i} X ${numeroDaTabuada} = ${total}`)
            }
        }
    }
    return tabuada;
};

const tabuada = montarTabuada(2);
tabuada(1,10)