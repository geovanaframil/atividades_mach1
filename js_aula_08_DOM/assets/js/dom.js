let qtdFilhosBody = document.body.childElementCount;
console.log(qtdFilhosBody);

let verificaQtdFilhos = (qtdFilhos) => {
  let qtdFilhosMenorQueCinco = false;
  if (qtdFilhos > 5) {
    qtdFilhosMenorQueCinco = true;
  }
  return qtdFilhosMenorQueCinco;
};

console.log(verificaQtdFilhos(qtdFilhosBody));

let filhosP = document.querySelectorAll("p");
console.log(filhosP)
