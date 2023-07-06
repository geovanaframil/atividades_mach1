import { Router, Request, Response } from "express";
import { executeQuery } from "./pool";

const route = Router();

async function getUsers() {
  const query = "select * from atendentes";
  const usersDB = await executeQuery(query, []);
  return usersDB;
}

async function getUserById(id: number) {
  const query =
    "select id_atendente, nome_atendente as name, sobrenome_atendente as lastName, email_corp as email from atendentes where id_atendente=$1";
  const params = [id];
  const user = await executeQuery(query, params);
  return user;
}

route.get("/usersList", async (req: Request, res: Response) => {
  const users = await getUsers();
  res.status(200).json(users);
});

route.get("/user/:id", async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const user = await getUserById(userId);
  res.status(200).json(user);
});

export default route;
