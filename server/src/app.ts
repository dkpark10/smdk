import express, { Request, Response, NextFunction } from "express";

const app = express();
const port = 8080;

app.get("/", (request: Request, ressponse: Response, next: NextFunction) => {
  ressponse.send("smdk");
});

app.listen(port, () => {
  console.log(`smdk server start: ${port}`);
});
