import promptSync from "prompt-sync";

const prompt = promptSync();

let cpf: string;
let confirmMsg: string;
let name: string;
let age: number;
let maritalStatus: string;
let address: string;
let city: string;
let state: string;
let clientList: Array<IClient> = [];

interface IClient {
  cpf: string;
  name: string;
  age: number;
  maritalStatus: string;
  address: string;
  city: string;
  state: string;
}

do {
  cpf = prompt("Digite o CPF (11 digitos): ");
  if (cpf.length === 11) {
    name = prompt("Digite seu nome: ");
    age = Number(prompt("Digite sua idade: "));
    maritalStatus = prompt("Estado civil: ");
    address = prompt("Endereço: ");
    city = prompt("Cidade: ");
    state = prompt("Estado: ");

    let client: IClient = {
      cpf: cpf,
      name: name,
      age: age,
      maritalStatus: maritalStatus,
      address: address,
      city: city,
      state: state,
    };

    clientList.push(client);
  } else {
    console.log("Digite o cpf com apenas 11 dígitos");
  }
  confirmMsg = prompt("Deseja continuar? ").toLocaleLowerCase();
} while (confirmMsg === "s");

console.table(clientList)
