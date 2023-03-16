"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let listaPessoas = [];
let nome;
let email;
let idade;
let genero;
let msg;
do {
    nome = prompt("Digite seu nome: ");
    email = prompt("Digite seu email: ");
    idade = Number(prompt("Digite sua idade: "));
    genero = prompt("Digite seu genero: ");
    msg = prompt("Deseja continuar? ").toLocaleLowerCase();
    listaPessoas.push(nome);
} while (msg === "s");
console.table(listaPessoas);
