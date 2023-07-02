import express from "express";

import getBooks from "./books/getBooks";

const app = express();

app.use(getBooks);
