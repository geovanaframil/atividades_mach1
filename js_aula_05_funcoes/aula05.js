let recebeCpfs = prompt("Informe 5 cpfs separados por vírgula e sem espaços:");
recebeCpfs = recebeCpfs.split(",");

function validaCpf(cpf) {
  let cpfsValidos = false;
  if (!isNaN(cpf) && cpf.length === 11) {
    cpfsValidos = true;
  }
  return cpfsValidos;
}

function formataCpf(cpf) {
  let cpfFormatado = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(
    6,
    9
  )}-${cpf.slice(9, 11)}`;
  return cpfFormatado;
}

function exibeCpf(arrCpf) {
  let cpfValido = "";
  let cpfFormatado = "";
  let msg = "";

  for (cpf of arrCpf) {
    cpfValido = validaCpf(cpf.toString());
    if (validaCpf(cpf)) {
      cpfFormatado = formataCpf(cpf);
      msg = `O cpf: ${cpfFormatado} é ${cpfValido}.`;
    } else {
      cpfFormatado = cpf;
      msg = `O cpf: ${cpf} é ${cpfValido}`
    }
    alert(msg);
  }
}

exibeCpf(recebeCpfs);
