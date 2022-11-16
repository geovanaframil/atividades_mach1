let divLoading = document.querySelector("#loading");
let divMessage = document.querySelector("#message");
let inputCep = document.querySelector("#cep");
let labelLogradouro = document.querySelector("#logradouro");
let labelCidade = document.querySelector("#bairro");
let labelUf = document.querySelector("#uf");

let buscarCep = function () {
  const request = new XMLHttpRequest();
  const valueInputCep = inputCep.value;

  request.onreadystatechange = function () {
    if (request.readyState == 1) {
      divLoading.removeAttribute("style");
    } else if (request.readyState == 4) {
      if (request.status == 200) {
        let objData = JSON.parse(request.response);
        labelLogradouro.innerHTML = `<p>${objData.address}</p>`;
        labelCidade.innerHTML = `<p>${objData.city}</p>`;
        labelUf.innerHTML = `<p>${objData.state}</p>`;
      } else {
        divMessage.removeAttribute("style");
      }
      divLoading.setAttribute("style", "display: none");
    }
  };

  request.open(
    "GET",
    `https://cdn.apicep.com/file/apicep/${valueInputCep}.json`
  );
  request.send();
};

inputCep.addEventListener("blur", buscarCep);
