let elementoInput = document.querySelector('#pesquisa');
let btnPesquisa = document.querySelector('#btnPesquisar');
let btnLimpar = document.querySelector('#btnLimpar');

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

let price = shoppingCart.map((item) => {
    return item.price;
});
