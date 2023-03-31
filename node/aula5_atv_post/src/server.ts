import express from "express";
import { Router, Request, Response } from "express";
import { IDataCliente } from "./interfaces/client";
import saveDataJson from "./utils/saveDataJson";
import messages from "./enums/messages";
import createIdByUser from "./utils/createIdByUser";

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

  if (
    body.profile.business === undefined ||
    typeof body.profile.business !== "boolean"
  ) {
    return {
      isValid: false,
      message: "Campo business é obrigatório e deve receber um boolean",
    };
  }

  return { isValid: true, message: "" };
}

route.get("/", (req: Request, res: Response) => {
  res.json({ message: messages.salutation });
});

route.get("/clientList", (req: Request, res: Response) => {
  if (clients.length !== 0) {
    res.json(clients);
  } else {
    res.json({ message: messages.unregisteredClient });
  }
});

route.post("/clientRegister", (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);
  const validBody = verifyBody(body);
  if (validBody.isValid) {
    let idClient = createIdByUser(body.name, body.email);
    let client = handleBodyRegister(body, idClient);
    clients.push(client);
    saveDataJson(clients);
    res.json({ message: messages.registeredClient });
  } else {
    res.json({ message: validBody.message });
  }
});

app.use(route);
app.listen(3000, () => "server running port 3000");
