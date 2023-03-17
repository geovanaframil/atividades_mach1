"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let cpf;
let confirmMsg;
let name;
let age;
let maritalStatus;
let address;
let city;
let state;
let clientList = [];
do {
    cpf = prompt("Digite o CPF (11 digitos): ");
    if (cpf.length === 11) {
        name = prompt("Digite seu nome: ");
        age = Number(prompt("Digite sua idade: "));
        maritalStatus = prompt("Estado civil: ");
        address = prompt("Endereço: ");
        city = prompt("Cidade: ");
        state = prompt("Estado: ");
        let client = {
            cpf: cpf,
            name: name,
            age: age,
            maritalStatus: maritalStatus,
            address: address,
            city: city,
            state: state,
        };
        clientList.push(client);
    }
    else {
        console.log("Digite o cpf com apenas 11 dígitos");
    }
    confirmMsg = prompt("Deseja continuar? ").toLocaleLowerCase();
} while (confirmMsg === "s");
console.table(clientList);
