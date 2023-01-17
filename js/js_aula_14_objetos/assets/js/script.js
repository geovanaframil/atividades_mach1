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
    filtrados = listaUsuarios.filter(//Atribui à variável filtrados um método que vai filtrar um dado de acordo com as condições abaixo;
      (usuario) =>
        usuario.id.toString().indexOf(pesquisa.value) > -1 ||//Converte o ID de cada objeto dentro de listaUsuarios para string e faz uma busca do valor digitado no input, retornando um índice numérico caso exista ou -1 caso não exista e por fim verifica se o resultado é maior que -1, pois se for, significa que foi encontrado
        usuario.nome.toLowerCase().indexOf(pesquisa.value.toLowerCase()) > -1 ||//Passa todo NOME de cada objeto dentro de listaUsuarios para minúsculo e converte também o valor que foi digitado no input para minúsculo; faz uma busca do valor digitado no input, retornando um índice numérico caso exista ou -1 caso não exista e por fim verifica se o resultado é maior que -1, pois se for, significa que foi encontrado
        usuario.sexo.toLowerCase().indexOf(pesquisa.value.toLowerCase()) > -1 ||//Passa todo SEXO de cada objeto dentro de listaUsuarios para minúsculo e converte também o valor que foi digitado no input para minúsculo; faz uma busca do valor digitado no input, retornando um índice numérico caso exista ou -1 caso não exista e por fim verifica se o resultado é maior que -1, pois se for, significa que foi encontrado
        usuario.idade.toString().indexOf(pesquisa.value) > -1 ||//Converte a IDADE de cada objeto dentro de listaUsuarios para string e faz uma busca do valor digitado no input, retornando um índice numérico caso exista ou -1 caso não exista e por fim verifica se o resultado é maior que -1, pois se for, significa que foi encontrado
        usuario.email.toLowerCase().indexOf(pesquisa.value.toLowerCase()) > -1//Passa todo EMAIL de cada objeto dentro de listaUsuarios para minúsculo e converte também o valor que foi digitado no input para minúsculo; faz uma busca do valor digitado no input, retornando um índice numérico caso exista ou -1 caso não exista e por fim verifica se o resultado é maior que -1, pois se for, significa que foi encontrado
    );
  } else {//Varificação para caso a condição acima não seja atendida, a variável filtrados vai receber apenas a variável listaUsuarios
    filtrados = listaUsuarios;
  }
  listarUsuariosNaTabela(filtrados);
};

let limpaFormulario = () => {//Função para limpar o que foi digitado no input;
  pesquisa.value = "";//Atribui ao valor do input uma string vazia, pois é isso que fará com que o input fique "zerado";
  listarUsuariosNaTabela(listaUsuarios);//Chama a função listarUsuariosNaTabela com o parâmetro listaUsuários, para que continue sendo exibido a tabela com os objetos listaUsuarios
};

window.addEventListener("onload", listarUsuariosNaTabela()); //Executa a função listarUsuariosNaTabela no momento em que a página é carregada
btnPesquisar.addEventListener("click", filtraDados);//Executa a função filtraDados no momento em que o botão Pesquisar recebe o evento de click
btnLimpar.addEventListener("click", limpaFormulario); //Executa a função limpaFormulário no momento em que o botão Limpar recebe o evento de click
