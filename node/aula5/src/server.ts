import express from "express";

import { Router, Request, Response } from "express";

const app = express();

const route = Router();

app.use(express.json());

route.get("/", (req: Request, res: Response) => {
  let name = req.query.name;

  if (name === "product1") {
    res.json({
      product1: "Smartphone",
      message: "No precinho se levar até sexta-feira",
    });
  } else if (name === "product2") {
    res.json({
      product2: "Notebook",
      message: "No precinho se levar até sexta-feira",
    });
  } else {
    res.json({ message: "Produto não encontrado" });
  }
});

route.get("/details", (req: Request, res: Response) => {
  const name = req.query.name;

  if (name === "product1") {
    res.json({
      product1: {
        name: "Smartphone Motorola",
        model: "G40",
      },
    });
  } else if (name === "product2") {
    res.json({
      product2: {
        name: "HP",
        model: "1100",
      },
    });
  } else {
    res.json({ message: "Produto não encontrado" });
  }
});

app.use(route);

app.listen(3000, () => "Server running port 3000");
