import express from "express";
import booksRoute from "./books";
import salesRoute from "./sales";
import customersRoute from "./customers";
import usersRoute from "./users";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/books", booksRoute);
app.use("/sales", salesRoute);
app.use("/customers", customersRoute);
app.use("/users", usersRoute);
app.listen(3000, () => "server running port 3000");
