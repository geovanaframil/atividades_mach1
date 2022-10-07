let elementoTBody = document.querySelector("#resultado");

let shoppingCart = [
  {
    product: "Leite - Barnabé",
    measure: "Litro",
    qty: 5,
    price: 7.8,
  },
  {
    product: "Alcatra - Fribov",
    measure: "kg",
    qty: 1.896,
    price: 40,
  },
  {
    product: "Refrigerante - Toca Polar",
    measure: "Pet - 2 Litros",
    qty: 3,
    price: 8.99,
  },
  {
    product: "Arroz - Tio Chicão",
    measure: "Pacote - 1kg",
    qty: 4,
    price: 5.99,
  },
  {
    product: "Peito de Frango - Hot Chicken",
    measure: "kg",
    qty: 5,
    price: 16.99,
  },
];

let exibeTabela = (item) => {
  let linhaTabela = `<tr>
                      <td>${item.product}</td>
                      <td>${item.measure}</td>
                      <td>${item.qty}</td>
                      <td>${item.price}</td>
                      </tr>`;

  elementoTBody.innerHTML += linhaTabela;
};

let formatarTotal = (resultado) => {
  let linhaFormatada = `<tr>
                        <td colspan = "4">Valor total: ${resultado}</td>
                        </tr>`;
  elementoTBody.innerHTML += linhaFormatada;
};

let precoTotal = shoppingCart.reduce((total, objAtual) => {
  return total + objAtual.qty * objAtual.price;
}, 0);

shoppingCart.forEach(exibeTabela);

formatarTotal(precoTotal);

window.addEventListener("onload", exibeTabela);
