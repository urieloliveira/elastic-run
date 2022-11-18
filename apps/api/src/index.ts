import "dotenv/config";
import express, { Request, Response } from "express";
import apm from "elastic-apm-node";

apm.start({
  serviceName: process.env.ELASTIC_APM_SERVICE_NAME,
  serverUrl: process.env.ELASTIC_APM_SERVER_URL,
  environment: process.env.NODE_ENV,
});

const app = express();

app.get("/", (_req: Request, res: Response) => {
  console.log("Teste");
  res.send("Hello!");
});

app.listen(process.env.API_PORT, () => {
  console.log(`Listening on port ${process.env.API_PORT}`);
});
