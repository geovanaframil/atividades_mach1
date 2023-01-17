class Animal {
  codigo;
  nome;
  dataNascimento;

  constructor(nome) {
    this.nome = nome;
  }
}

class Ave extends Animal {
  velocidadeVoo;
  quantidadeAsas;
  tamanhoBico;

  constructor(nome, tamanhoBico) {
    super(nome);
    this.tamanhoBico = tamanhoBico;
  }
}

class Peixe extends Animal {
  tipoAguaHabitat;
  possuiEscamas;
  possuiBarbatana;

  constructor(nome, tipoAguaHabitat) {
    super(nome);
    this.tipoAguaHabitat = tipoAguaHabitat;
  }
}

class Mamifero extends Animal {
  possuiPelo;
  velocidade;
  possuiCalda;

  constructor(nome, possuiCalda) {
    super(nome);
    this.possuiCalda = possuiCalda;
  }
}

class AveFalante extends Ave {
  vocabulario;
  arrPalavras;

  constructor(nome, tamanhoBico, arrPalavras) {
    super(nome, tamanhoBico);
    this.arrPalavras = arrPalavras;
  }
}

class AveNaoFalante extends Ave {
  tipoPiado;

  constructor(nome, tamanhoBico) {
    super(nome, tamanhoBico);
  }
}

class Canino extends Mamifero {
  consegueLatir;
  consegueUivar;

  constructor(nome, possuiCalda, consegueLatir) {
    super(nome, possuiCalda);
    this.consegueLatir = consegueLatir;
  }
}

class Felino extends Mamifero {
  consegueMiar;

  constructor(nome, possuiCalda, consegueMiar) {
    super(nome, possuiCalda);
    this.consegueMiar = consegueMiar;
  }
}
