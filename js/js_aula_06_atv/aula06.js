let recebeAnosVinculados = Number(
  prompt("Informe a quantidade de anos vinculados a MACH1: ")
);
let contador = 0;
let qtdReciclagem = 0;

if (recebeAnosVinculados == 1) {
  alert(
    "Você ainda não atingiu o tempo mínimo de 2 anos para ter uma reciclagem"
  );
} else if (isNaN(recebeAnosVinculados)) {
  alert("Digite apenas números");
}

while (contador < recebeAnosVinculados) {
  qtdReciclagem = recebeAnosVinculados / 2;
  contador++;
}

alert(`Você participou de ${parseInt(qtdReciclagem)} reciclagens`);