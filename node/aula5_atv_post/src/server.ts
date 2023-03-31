import express from "express";
import { Router, Request, Response } from "express";
import { IDataCliente } from "./interfaces/client";
import saveDataJson from "./utils/saveDataJson";

const app = express();
const route = Router();
app.use(express.json());

const data = require("../client.json");
const clients: IDataCliente[] = data;

function handleBodyRegister(returnAPI: any, idClient: string): IDataCliente {
  const newClient = {
    id: idClient,
    name: returnAPI.name,
    age: returnAPI.age,
    email: returnAPI.email,
    profile: {
      type: returnAPI.profile.type,
      credit: returnAPI.profile.credit,
      business: returnAPI.profile.business,
    },
  };
  return newClient;
}

function verifyBody(body: any): { isValid: boolean; message: string } {
  if (!body) {
    return { isValid: false, message: "Corpo inválido" };
  }

  if (!body.name || typeof body.name !== "string") {
    return {
      isValid: false,
      message: "Campo nome é obrigatório e deve receber uma string",
    };
  }

  if (!body.age || typeof body.age !== "number") {
    return {
      isValid: false,
      message: "Campo idade é obrigatório e deve receber um número",
    };
  }

  if (!body.email || typeof body.email !== "string") {
    return {
      isValid: false,
      message: "Campo email é obrigatório e deve receber uma string",
    };
  }

  if (!body.profile.type || typeof body.profile.type !== "string") {
    return {
      isValid: false,
      message: "Campo type é obrigatório e deve receber uma string",
    };
  }

  if (!body.profile.credit || typeof body.profile.credit !== "number") {
    return {
      isValid: false,
      message: "Campo credit é obrigatório e deve receber um número",
    };
  }

  if (!body.profile.business || typeof body.profile.credit !== "boolean") {
    return {
      isValid: false,
      message: "Campo business é obrigatório e deve receber um boolean",
    };
  }

  return { isValid: true, message: "" };
}

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello guys" });
});

route.get("/clientList", (req: Request, res: Response) => {
  if (clients.length !== 0) {
    res.json(clients);
  } else {
    res.json({ message: "Não há clientes cadastrados" });
  }
});

app.use(route);
app.listen(3000, () => "server running port 3000");
