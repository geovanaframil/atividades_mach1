class Product {
  #id;
  name;

  constructor(id, name) {
    this.#id = id;
    this.name = name;
  }
}

class Order {
  #id;
  created;
  #products = [];

  constructor(id) {
    this.#id = id;
    this.created = new Date();
  }

  addProduct(productCode) {
    if (!productCode instanceof Product) {
      throw new Error("Item inválido");
    }
    this.#products.push(productCode);
  }

  calculateShipping() {
    throw new Error("Método não implementado");
  }
}

class OrderStore extends Order {
  tableNumber;

  constructor(id, tableNumber) {
    super(id);
    this.tableNumber = tableNumber;
  }

  calculateShipping() {
    return 0;
  }
}

class OrderDelivery extends Order {
  client;

  constructor(id, client) {
    super(id);
    if (!client instanceof Customer) {
      throw new Error("Cliente informado inválido");
    }
    this.client = client;
  }

  calculateShipping(zipCode) {
    let currentZipcode = zipCode ?? this.client.zipCode;

    let firstNumber = Number.parseInt(currentZipcode.charAt(0));
    if (firstNumber >= 0 && firstNumber <= 4) {
      return 5;
    } else if (firstNumber >= 5 && firstNumber <= 9) {
      return 10;
    } else {
      throw new Error("Cep inválido");
    }
  }
}

class Customer {
  #id;
  name;
  address;
  zipCode;
  active = true;

  constructor(id, name, address, zipCode) {
    this.#id = id;
    this.name = name;
    this.address = address;
    this.zipCode = zipCode;
  }
}

let produto = new Product(1, "Refrigerante");
let pedido1 = new OrderStore(5, 110);

pedido1.addProduct(produto);
console.log(pedido1);

let cliente1 = new Customer(2, "João", "Rua x", "750000");
let pedido2 = new OrderDelivery(5, cliente1);

console.log(pedido2);
console.log(pedido2.calculateShipping());
