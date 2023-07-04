import { Router, Request, Response } from "express";
import { executeQuery } from "./pool";

const route = Router();

async function getSales() {
  const query = "select * from vendas";
  const salesBD = await executeQuery(query, []);
  return salesBD;
}

route.get("/salesList", async (req: Request, res: Response) => {
  const sales = await getSales();
  res.status(200).json(sales);
});

export default route;
