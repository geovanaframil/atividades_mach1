const criarContadorNumerico = (contador) => {
    let alunos = 0;
    let numeroLoop = () => {
        alunos = contador++
        console.log(alunos)
    }
    return numeroLoop;
};



const contador = criarContadorNumerico (1)

const idPrimeiroAluno = contador()
const idSegundoAluno = contador()
const idTerceiroAluno = contador()

const novoContador = criarContadorNumerico(6)

novoContador()
novoContador()