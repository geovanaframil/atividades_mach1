import { Router, Request, Response } from "express";
import { executeQuery } from "./pool";

const route = Router();

async function getCustomers() {
  const query = "select * from clientes";
  const customersBD = await executeQuery(query, []);
  return customersBD;
}

route.get("/customersList", async (req: Request, res: Response) => {
  const customers = await getCustomers();
  res.json(customers);
});

export default route;
