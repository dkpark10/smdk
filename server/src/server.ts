import express, { Request, Response } from "express";
// import { authValidator } from "@server/middlewares/auth";
import { authValidator } from "./middlewares/auth";

const app = express();
const port = 8080;

app.use(authValidator);

app.get("/", (_: Request, ressponse: Response) => {
  ressponse.send("smdk");
});

app.listen(port, () => {
  console.log(`smdk server start: ${port}`);
});
