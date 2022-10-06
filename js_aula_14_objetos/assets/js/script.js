let listaUsuarios = [
  //Lista de objetos usuarios
  {
    id: 1,
    nome: "Thiago Pereira",
    sexo: "Masculino",
    idade: 20,
    email: "fulanodetal@termail.com",
  },
  {
    id: 2,
    nome: "Thaís Lins",
    sexo: "Feminino",
    idade: 19,
    email: "thaisdetal@gtemail.com",
  },
  {
    id: 3,
    nome: "Mariana Ferreira",
    sexo: "Feminino",
    idade: 25,
    email: "marianaferreira@tailme.com",
  },
  {
    id: 4,
    nome: "Pedro Ivo Silva",
    sexo: "Feminino",
    idade: 28,
    email: "manuelatrait@gteprmail.com",
  },
];

const pesquisa = document.getElementById("pesquisa"); //Captura elemento input através do ID pesquisa
const btnPesquisar = document.getElementById("btnPesquisar"); //Captura elemento botão pesquisar através do ID btnPesquisar
const btnLimpar = document.getElementById("btnLimpar"); //Captura elemento botão limpar através do ID btnLimpar

let listarUsuariosNaTabela = (filtrados = undefined) => {//Função que exibe tabela no DOM
  let trTds = "";//Variável recebe string vazia para que possa ser alterada posteriormente
  let lista = [];//Cria variável que inicializa com array vazio;
  let elementoTBody = document.getElementById("resultado");//Captura elemento tbody através do ID resultado

  lista = filtrados === undefined ? listaUsuarios : filtrados;//Lista recebe condição que testa se o parâmetro filtrados é undefined e retorna listaUsuarios caso sim, caso não, retorna o parâmetro filtrados;

  lista.forEach((usuario) => {//Percorre array lista e devolve template string com tags html com cada propriedade do objeto que foi passada
    trTds += `<tr><td>${usuario.id}</td>`;
    trTds += `<td>${usuario.nome}</td>`;
    trTds += `<td>${usuario.sexo}</td>`;
    trTds += `<td>${usuario.idade}</td>`;
    trTds += `<td>${usuario.email}</td></tr>`;
  });
  elementoTBody.innerHTML = trTds;//Insere no html na tag que foi passada o elementoTBody a variável trTds;

  if (lista.length === 0) {//Testa se o cumprimento do array lista é vazio, e caso seja, insere no html a template string abaixo;
    elementoTBody.innerHTML = `<tr><td colspan="5">Nenhum dado encontrado</td></tr>`;
  }
};

let filtraDados = () => {//Função que filtra os dados solicitados;
  let filtrados = [];//Variável que recebe um array vazio;

  if (pesquisa.value.toLowerCase() !== "") {//Verifica se o valor do input (convertido já em minúsculo) é diferente de vazio;
    filtrados = listaUsuarios.filter(
      (usuario) =>
        usuario.id.toString().indexOf(pesquisa.value) > -1 ||
        usuario.nome.toLowerCase().indexOf(pesquisa.value.toLowerCase()) > -1 ||
        usuario.sexo.toLowerCase().indexOf(pesquisa.value.toLowerCase()) > -1 ||
        usuario.idade.toString().indexOf(pesquisa.value) > -1 ||
        usuario.email.toLowerCase().indexOf(pesquisa.value.toLowerCase()) > -1
    );
  } else {
    filtrados = listaUsuarios;
  }
  listarUsuariosNaTabela(filtrados);
};

let limpaFormulario = () => {
  pesquisa.value = "";
  listarUsuariosNaTabela(listaUsuarios);
};

window.addEventListener("onload", listarUsuariosNaTabela()); //Executa a função listarUsuariosNaTabela no momento em que a página é carregada
btnPesquisar.addEventListener("click", filtraDados);//Executa a função filtraDados no momento em que o botão Pesquisar recebe o evento de click
btnLimpar.addEventListener("click", limpaFormulario); //Executa a função limpaFormulário no momento em que o botão Limpar recebe o evento de click
