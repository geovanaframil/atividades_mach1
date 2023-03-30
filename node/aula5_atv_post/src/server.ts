import express from "express";
import { Router, Request, Response } from "express";
import { IDataCliente } from "./interfaces/client";
import fs from "fs";

const app = express();
const route = Router();
app.use(express.json());

function load() {
  const fileBuffer = fs.readFileSync("./client.json", "utf-8");
  const contentJson = JSON.parse(fileBuffer);
  return contentJson;
}

// const client: IDataCliente[] = load();

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

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello guys" });
});

route.get("/clientList", (req: Request, res: Response) => {});

app.use(route);
app.listen(3000, () => "server running port 3000");
