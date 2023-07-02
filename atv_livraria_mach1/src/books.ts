import { Router, Request, Response } from "express";
import { IBooks } from "./interfaces/booksInterface";

const route = Router();
const data = require("../books.json");
const books: IBooks[] = data;

route.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome" });
});

route.get("/booksList", (req: Request, res: Response) => {
  if (books.length !== 0) {
    res.status(200).json(books);
  } else {
    res.status(404).json({ message: "No registered books" });
  }
});

export default route;
