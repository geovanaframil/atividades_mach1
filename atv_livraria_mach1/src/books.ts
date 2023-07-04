import { Router, Request, Response } from "express";
import { executeQuery } from "./pool";

const route = Router();

async function getBooks() {
  const query = "select * from livros";
  const booksBD = await executeQuery(query, []);
  return booksBD;
}

route.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome" });
});

route.get("/booksList", async (req: Request, res: Response) => {
  const books = await getBooks();
  res.status(200).json(books);
});

export default route;
