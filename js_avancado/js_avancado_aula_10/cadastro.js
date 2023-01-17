let inputMatricula = document.querySelector("#matricula");
let inputNome = document.querySelector("#nome");
let btnCadastrar = document.querySelector("#cadastrar");

const cadastrarAluno = () => {
  let valorInputMatricula = inputMatricula.value;
  let valorInputNome = inputNome.value;
  let aluno = { matricula: valorInputMatricula, nome: valorInputNome };

  const init = { method: "POST", body: JSON.stringify(aluno) };
  fetch("http://localhost:3000/aluno", init).then((response) => {
    if (response.ok) {
      alert("Aluno cadastro com sucesso");
    } else {
      alert("Matricula já cadastrada");
    }
  });
};

btnCadastrar.addEventListener("click", cadastrarAluno);
