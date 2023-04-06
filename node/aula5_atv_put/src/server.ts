import express from "express";
import { Router, Request, Response } from "express";
import { IProduct } from "./interfaces/product";

const app = express();
const route = Router();
app.use(express.json());


app.use(route);
app.listen(3000, () => "server running port 3000");