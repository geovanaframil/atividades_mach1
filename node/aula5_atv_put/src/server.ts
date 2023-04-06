import express from "express";
import { Router, Request, Response } from "express";
import { IProduct } from "./interfaces/product";
import {messages} from './enums/messages'

const app = express();
const route = Router();
app.use(express.json());

const data = require("../product.json");
const products: IProduct[] = data;

route.get("/productList", (req: Request, res: Response) => {
    if (products.length !== 0) {
      res.json(products);
    } else {
      res.json({ message: messages.unregisteredClient });
    }
  });

app.use(route);
app.listen(3000, () => "server running port 3000");
