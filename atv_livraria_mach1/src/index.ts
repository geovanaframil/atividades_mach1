import express from "express";
import booksRoute from "./books";
import salesRoute from "./sales";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/books", booksRoute);
app.use("/sales", salesRoute);
app.listen(3000, () => "server running port 3000");
