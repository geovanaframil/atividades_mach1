class Aluno {
  #id = 0;
  nome = "";
  endereco = "";
  data_nascimento;
  email = "";
  telefone = "";
  #avaliacao = [];

  constructor(nome, data_nascimento) {
    this.nome = nome;
    this.data_nascimento = data_nascimento;

    if (!data_nascimento) {
      throw new Error("Data de Nascimento não informada");
    }
  }

  get idade() {
    const today = new Date();
    const birthDate = new Date(this.data_nascimento);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  get avaliacao() {
    return [...this.#avaliacao];
  }

  adicionarAvaliacao(avaliacao) {
    this.#avaliacao.push(avaliacao);
  }

  obterMedia() {
    let somaNotas = this.#avaliacao.reduce((prev, cur) => {
      return prev + cur;
    }, 0);
    return (somaNotas / this.#avaliacao.length).toFixed(1);
  }

  get aprovado() {
    let media = this.obterMedia();
    if (media >= 7) {
      return true;
    }
    return false;
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

let geovana = new Aluno(`Geovana`, "07/01/1995");

geovana.adicionarAvaliacao(5);
geovana.adicionarAvaliacao(8);
geovana.adicionarAvaliacao(10);

console.log(geovana.idade)
console.log(geovana.obterMedia());
console.log(geovana.aprovado);
