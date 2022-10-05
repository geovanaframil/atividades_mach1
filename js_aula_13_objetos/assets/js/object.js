let btnCalcular = document.getElementById("calcular");
let btnLimpar = document.getElementById("limpar");

let numero = document.getElementById("numero");
let resultadoDiv = document.getElementById("resultado");

let arrValores = [];

let valorDigitado = () => {
  let valorInput = numero.value;
  arrValores.push(valorInput);
  let triplica = arrValores.map(function (item) {
    return item * 3;
  });
  resultadoDiv.innerText = triplica.join(",");
  resultadoDiv.removeAttribute("hidden");
  limpaInput();
};

let limpaInput = () => {
  numero.value = "";
};

let limparFormulario = () => {
  arrValores = [];
  resultadoDiv.setAttribute("hidden", "false");
};

btnCalcular.addEventListener("click", valorDigitado);
btnLimpar.addEventListener("click", limparFormulario);
