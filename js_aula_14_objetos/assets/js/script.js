let listaUsuarios = [ //Lista de objetos usuarios
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

const pesquisa = document.getElementById("pesquisa");//Captura elemento input através do ID pesquisa
const btnPesquisar = document.getElementById("btnPesquisar");//Captura elemento botão pesquisar através do ID btnPesquisar
const btnLimpar = document.getElementById("btnLimpar");//Captura elemento botão limpar através do ID btnLimpar
