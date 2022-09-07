let listaProdutos = [
  ["0", "Sem cadastro"],
  ["1", "Leite"],
  ["2", "Ovo"],
  ["3", "Farinha"],
  ["4", "Milho"],
  ["5", "Café"],
];

let recebeCodigoProduto = prompt(
  "Digite o código do produto que deseja encontrar: "
);
let msgUsuario = "";
let encontroProduto = "";

for (let produto of listaProdutos) {
  encontroProduto = produto.indexOf(recebeCodigoProduto);
  if (encontroProduto != -1) {
    msgUsuario = `${produto[1]}`;
    break;
  } else {
    msgUsuario = `${listaProdutos[0][1]}`;
  }
}
alert(msgUsuario);

let incluiProduto = prompt(
  "Deseja incluir um novo produto? (S/N)"
).toLowerCase();
let msgProdutoIncluso = '';

if(incluiProduto == 's') {
  let codigo = prompt('Digite o código do produto: ');
  let nomeProduto = prompt('Digite o nome do produto: ');
  let incluiProduto = [codigo, nomeProduto];
  listaProdutos.push(incluiProduto);
  msgProdutoIncluso = `Produto incluído com sucesso: ${codigo} - ${nomeProduto}`
} else if(incluiProduto == 'n') {
  msgProdutoIncluso = `Obrigada, volte sempre`
} else {
  msgProdutoIncluso = `Por favor, digite apenas S ou N`
}

alert(msgProdutoIncluso)
console.log(listaProdutos)
