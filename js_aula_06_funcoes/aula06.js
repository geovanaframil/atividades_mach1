let recebeSalarioUsuario = Number(
  prompt("Digite o valor do seu salário mensal: ")
);

let exibeResultadoDescontoIr = (resultado) => {
  alert(resultado);
};

let calculoDescontoImposto = (exibeResultado) => {
  let msg = "";
  let resultado = "";
  if (recebeSalarioUsuario <= 1903.98) {
    msg = `Isento de desconto`;
  } else if (
    recebeSalarioUsuario > 1903.98 &&
    recebeSalarioUsuario <= 2826.55
  ) {
    resultado = recebeSalarioUsuario * 0.075 - 142.8;
    msg = `Valor do desconto mensal: ${parseFloat(resultado).toFixed(2)}`;
  } else if (
    recebeSalarioUsuario > 2826.65 &&
    recebeSalarioUsuario <= 3751.05
  ) {
    resultado = recebeSalarioUsuario * 0.15 - 354.8;
    msg = `Valor do desconto mensal: ${parseFloat(resultado).toFixed(2)}`;
  } else if (
    recebeSalarioUsuario > 3751.05 &&
    recebeSalarioUsuario <= 4664.68
  ) {
    resultado = recebeSalarioUsuario * 0.225 - 636.13;
    msg = `Valor do desconto mensal: ${parseFloat(resultado).toFixed(2)}`;
  } else {
    resultado = recebeSalarioUsuario * 0.275 - 869.36;
    msg = `Valor do desconto mensal: ${parseFloat(resultado).toFixed(2)}`;
  }
  exibeResultado(msg);
};

calculoDescontoImposto(exibeResultadoDescontoIr);
