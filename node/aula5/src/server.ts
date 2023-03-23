import express from "express";

import { Router, Request, Response } from "express";

const app = express();

const route = Router();

app.use(express.json());

route.get("/", (req: Request, res: Response) => {
  res.json([
    { product1: "Smartphone", product2: "Notebook", product3: "Tablet" },
  ]);
});

route.get("/details", (req: Request, res: Response) => {
  res.json([
    {
      product1: {
        name: "Smartphone Motorola",
        model: "G40",
      },
      product2: {
        name: "HP",
        model: "1100",
      },
      product3: {
        name: "Tablet Samsung",
        model: "1100",
      },
    },
  ]);
});

app.use(route);

app.listen(3000, () => "Server running port 3000");
