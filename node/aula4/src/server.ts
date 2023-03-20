import express from "express";

import { Router, Request, Response } from "express";

const app = express();

const route = Router();

app.use(express.json());

route.get('/', (req: Request, res: Response) => {
    res.json({message: 'Servidor com express criado'})
})

app.use(route)

app.listen(3000, () => 'Server running port 3000')