import express, { Express } from "express";
import helmet from "helmet";
import cors from 'cors'

import equipmentRouter from "./routes/equipmentRouter";
import yardRouter from "./routes/yardRouter";

import { getData } from "./controllers/dataControllers";

import errorHandler from "./middleware/errorHandler";

const app: Express = express();

const PORT = process.env.PORT ?? 8080;

app.use(express.json());

app.use(helmet());

app.use(cors())

app.get("/", (req, res) => {
  res.send(`Yard console api is running on port ${PORT}`);
});

app.get("/health", (req, res) => {
  res.send("Health check");
});

app.get("/data", getData);

app.use("/api/v1/equipment", equipmentRouter);
app.use("/api/v1/yards", yardRouter);
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(
    `Yard console api is listening on http://localhost:${PORT} on port ${PORT}`
  );
});
