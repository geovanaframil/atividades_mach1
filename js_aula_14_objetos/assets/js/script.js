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

let exibirTabelaUsuarios = (pessoa) => {
  //Função para exibir na tela linha da tabela com os dados do objeto listaUsuarios
  let elementoTBody = document.getElementById("resultado"); //Captura elemento tbody através do ID resultado
  let linhaTabela = `<tr>
                        <td>${pessoa.id}</td>
                        <td>${pessoa.nome}</td>
                        <td>${pessoa.sexo}</td>
                        <td>${pessoa.idade}</td>
                        <td>${pessoa.email}</td>
                        </tr>`; //Variável que recebe uma template string com tags html onde cada td recebe o objeto pessoa com a propriedade especificado após o ponto;
  elementoTBody.innerHTML += linhaTabela; //Exibe no DOM a variável linha tabela dentro do elementoTBody
};

let limpaFormulario = () => {
  pesquisa.value = "";
};

listaUsuarios.forEach(exibirTabelaUsuarios); //Percorre cada objeto do array de objetos listaUsuario e executa a função callback exibirTabelaUsuarios

window.addEventListener("onload", exibirTabelaUsuarios); //Executa a função exibirTabelaUsuarios no momento em que a página é carregada

btnLimpar.addEventListener("click", limpaFormulario); //Executa a função limpaFormulário no momento em que o botão Limpar recebe o evento de click
