import { Router, Request, Response } from "express";
import { executeQuery } from "./pool";

const route = Router();

async function getSales() {
  const query = "select * from vendas";
  const salesBD = await executeQuery(query, []);
  return salesBD;
}

async function getSaleById(id: number) {
  const query =
    "select id_venda, total, data_venda as saleDate from vendas where id_venda=$1";
  const params = [id];
  const user = await executeQuery(query, params);
  return user;
}

async function getSalesByDate(startDate: any, endDate: any) {
  const query =
    "select id_venda, total, data_venda as saleDate from vendas where data_venda >= $1 and data_venda <= $2";
  const params = [startDate, endDate];
  const sale = await executeQuery(query, params);
  return sale;
}

route.get("/salesList", async (req: Request, res: Response) => {
  const sales = await getSales();
  res.status(200).json(sales);
});

route.get("/sale/:id", async (req: Request, res: Response) => {
  const saleId = Number(req.params.id);
  const sale = await getSaleById(saleId);
  res.status(200).json(sale);
});

route.get("/salesDate", async (req: Request, res: Response) => {
  const startDate = req.query.startDate;
  const endDate = req.query.endDate;
  const sale = await getSalesByDate(startDate, endDate);
  res.status(200).json(sale);
});

export default route;
