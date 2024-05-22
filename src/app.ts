import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/products/product.routes";

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application route
app.use("/api/v1/products", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
