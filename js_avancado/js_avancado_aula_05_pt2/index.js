function incrementaID(contador) {
  let numeroLoop = () => {
    return contador++;
  };
  return numeroLoop;
}

contador = this.incrementaID(1);

class Aluno {
  #id;
  nome = "";
  endereco = "";
  data_nascimento = new Date();
  email = "";
  telefone = "";
  avaliacoes = [];

  constructor(nome) {
    this.nome = nome;
    this.#id = contador();
  }
}

class Avaliacao {
  tipo = "";
  nota = 0;
  observacao = "";

  constructor(tipo) {
    this.tipo = tipo;
  }
}

const primeiroAluno = new Aluno("Primeiro Aluno");
console.log(primeiroAluno);
const segundoAluno = new Aluno("Segundo Aluno");
console.log(segundoAluno);
