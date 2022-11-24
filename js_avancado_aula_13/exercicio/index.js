import { CriarNovaTurma, getTurmas } from "./services/turma-service.js";

const btnMatricular = document.querySelector("#matricular");
const inputNome = document.querySelector("#nome");

/**
 * Função responsavel por atualizar a tabela de turmas com os alunos
 */
function atualizarTela() {
  const panelTurmas = document.querySelector(".turmas");

  panelTurmas.innerHTML = "";
  getTurmas().then((turmas) => {
    turmas.forEach((turma) => {
      let div = document.createElement("div");
      div.classList.add("turma");
      div.innerHTML = `<h2>${turma.nome}</h2>`;

      let alunos = turma
        .obterAlunosMatriculados()
        .map((aluno) => {
          return `<div>${aluno}</div>`;
        })
        .join("");

      div.innerHTML += alunos;
      panelTurmas.appendChild(div);
    });
  });
}

atualizarTela();

async function matricular() {
  const valorInputNome = inputNome.value;

  if (!valorInputNome) {
    alert("Nome do aluno é obrigatório");
  }

  let turmas = await getTurmas();

  for (let i = 0; i < turmas.length; i++) {
    if (turmas[i].obterAlunosMatriculados().length < 7) {
      await turmas[i].MatricularAluno(valorInputNome);
      return atualizarTela();
    }
  }
  let newTurmas = await CriarNovaTurma();

  await newTurmas.MatricularAluno(valorInputNome);
  return atualizarTela();
}

btnMatricular.addEventListener("click", matricular);
