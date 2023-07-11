import { Router, Request, Response } from "express";
import { executeQuery } from "./pool";
import Joi from "joi";

const route = Router();
const bodyParser = require("body-parser");

async function getBooks() {
  const query = "select * from livros";
  const booksBD = await executeQuery(query, []);
  return booksBD;
}

async function insertBook(
  name: string,
  barcode: number,
  publisherId: number,
  price: number,
  stock: number,
  languageId: number,
  description: string
) {
  const schema = Joi.object({
    name: Joi.string().required(),
    barcode: Joi.number().required(),
    publisherId: Joi.number().required(),
    price: Joi.number().required(),
    stock: Joi.number().required(),
    languageId: Joi.number().required(),
    description: Joi.string().required(),
  });

  const { error } = schema.validate({
    name,
    barcode,
    publisherId,
    price,
    stock,
    languageId,
    description,
  });

  if (error) {
    throw new Error(`Parâmetros inválidos: ${error.details[0].message}`);
  }

  const query = `INSERT INTO livros(
                  nome_livro, cod_barra, id_editora, valor_livro, estoque, id_idioma, descricao)
                VALUES ($1, $2, $3, $4, $5, $6, $7)`;

  const params = [name, barcode, publisherId, price, stock, languageId, description];

  await executeQuery(query, params);
}

route.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome" });
});

route.get("/booksList", async (req: Request, res: Response) => {
  const books = await getBooks();
  res.status(200).json(books);
});

route.post("/books/register", async (req: Request, res: Response) => {
  const body = req.body;

  await insertBook(
    body.name,
    body.barcode,
    body.publisherId,
    body.price,
    body.stock,
    body.languageId,
    body.description
  );

  res.json({sucess: 'Livro registrado com sucesso'})
});

export { route, bodyParser };
