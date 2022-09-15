let recebeCpfs = prompt("Informe 5 cpfs separados por vírgula:");
recebeCpfs = recebeCpfs.split(",");

function validaCpf(cpfs) {
  let cpfsValidos = false;
  for (let cpf of cpfs) {
    if (cpf.length === 11) {
      cpfsValidos = true;
    }
  }
  return cpfsValidos;
}

function formataCpf(cpfs) {
  
}

console.log(formataCpf(recebeCpfs))
