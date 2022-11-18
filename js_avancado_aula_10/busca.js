let inputMatricula = document.querySelector("#matricula");
let btnBuscarMatricula = document.querySelector("#btnBuscarMatricula");
let labelMatricula = document.querySelector("#matricula-aluno");
let labelNome = document.querySelector("#nome-aluno");
let btnBuscar = document.querySelector("#btnBuscar");
let divDados = document.querySelector("#dados");

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

const buscar = () => {
  let inputChecked = document.querySelector(
    'input[name="tipo-busca"]:checked'
  ).value;

  fetch(`http://localhost:3000/aluno/todos`).then((response) => {
    if (response.ok) {
      response.json().then((jsonData) => {
        if (jsonData.length >= 1) {
          jsonData.forEach((element) => {
            divDados.innerHTML += `${element.matricula} - ${element.nome} `;
          });
        } else {
            divDados.innerHTML = `Nenhuma informação encontrada`
        }
      });
    }
  });
};

btnBuscarMatricula.addEventListener("click", buscarPorMatricula);
btnBuscar.addEventListener("click", buscar);
