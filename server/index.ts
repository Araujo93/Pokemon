import express from "express";
import { Request, Response } from "express";
import authRouter from "./router/authRouter";
import cors from "cors";
require("dotenv").config();
const db = require("./db");

const app = express();

const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());
app.use(authRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
