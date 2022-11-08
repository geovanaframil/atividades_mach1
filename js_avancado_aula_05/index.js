class Aluno {
  nome = "";
  endereco = "";
  data_nascimento = new Date();
  email = "";
  telefone = "";
  avaliacoes = [];

  constructor(nome) {
    this.nome = nome;
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
