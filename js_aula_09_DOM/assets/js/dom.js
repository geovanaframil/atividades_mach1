let inputName = document.getElementById("name");
let inputLastName = document.getElementById("last-name");
let inputCPF = document.getElementById("cpf");
let positiveFeedback = document.getElementById("positive-feedback");
let negativeFeedback = document.getElementById("negative-feedback");
let validCPF = document.getElementById("valid-cpf");
let invalidCPF = document.getElementById("invalid-cpf");
let botao = document.getElementById("button");

botao.onclick = () => {
  let name = inputName.value;
  let lastName = inputLastName.value;
  let cpf = inputCPF.value;
  if (name.length == "" || lastName.length == "") {
    positiveFeedback.setAttribute("hidden", "false");
    negativeFeedback.removeAttribute("hidden");
  } else if (cpf.toString().length != 11) {
    positiveFeedback.setAttribute("hidden", "false");
    invalidCPF.removeAttribute("hidden");
    validCPF.setAttribute("hidden", "false");
  } else {
    validCPF.removeAttribute("hidden");
    invalidCPF.setAttribute("hidden", "false");
    negativeFeedback.setAttribute("hidden", "false");
    positiveFeedback.removeAttribute("hidden");
  }
};
