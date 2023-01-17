let inputMatricula = document.querySelector("#matricula");
let btnBuscarMatricula = document.querySelector("#btnBuscarMatricula");

let labelMatricula = document.querySelector("#matricula-aluno");
let labelNome = document.querySelector("#nome-aluno");

let radioBuscaNome = document.querySelector("#opt-busca-nome");
let radioBuscaTodos = document.querySelector("#opt-busca-todos");
let campoInputNome = document.querySelector("#pn-filter-nome");

let btnBuscar = document.querySelector("#btnBuscar");

let divDados = document.querySelector("#dados");

radioBuscaNome.addEventListener("change", () => {
  if (radioBuscaNome.checked) {
    campoInputNome.removeAttribute("style");
  }
});

const buscarPorMatricula = () => {
  let valorInputMatricula = inputMatricula.value;

  fetch(`http://localhost:3000/aluno/${valorInputMatricula}`).then(
    (response) => {
      if (response.ok) {
        response.json().then((jsonData) => {
          labelMatricula.innerHTML = `<p>${jsonData.matricula}</p>`;
          labelNome.innerHTML = `<p>${jsonData.nome}</p>`;
        });
      } else {
        alert("Matrícula não encontrada");
      }
    }
  );
};

const buscarPorNomeOuTodos = () => {
  divDados.innerHTML = "Carregando";
  let url = `http://localhost:3000/aluno/todos`;

  if (radioBuscaNome.checked) {
    let inputNome = document.querySelector("#nome").value;

    url = `http://localhost:3000/aluno/search?nome=${inputNome}`;
  }

  fetch(url)
    .then((response) => {
      if (response.ok) {
        divDados.innerHTML = "";
        return response.json();
      }
    })
    .then((jsonData) => {
      if (jsonData.length == 0) {
        divDados.innerHTML = "Nenhuma informação encontrada";
        return;
      }
      jsonData.forEach((element) => {
        divDados.innerHTML += `<p>${element.matricula} - ${element.nome}`;
      });
    });
};


btnBuscarMatricula.addEventListener("click", buscarPorMatricula);
btnBuscar.addEventListener("click", buscarPorNomeOuTodos);
