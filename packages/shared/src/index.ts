import "dotenv/config";
import express, { Request, Response } from "express";
import apm from "elastic-apm-node";
import promBundle from "express-prom-bundle";
import { Counter, Gauge, Histogram } from "prom-client";

const metricsMiddleware = promBundle({
  includeMethod: true,
  includePath: true,
  customLabels: {
    project_version: "2.0",
  },
});

apm.start({
  serviceName: process.env.ELASTIC_APM_SERVICE_NAME,
  serverUrl: process.env.ELASTIC_APM_SERVER_URL,
  environment: process.env.NODE_ENV,
});

const app = express();

app.use(metricsMiddleware);

const onlineUsers = new Gauge({
  name: "node_app_online_users",
  help: "Online users",
  labelNames: ["method", "code"],
});

const httpRequestsTotal = new Counter({
  name: "node_app_http_requests_total",
  help: "Total number of HTTP requests made.",
});

const httpRequestsDuration = new Histogram({
  name: "node_app_http_requests_duration_seconds",
  help: "Duration of HTTP requests in seconds.",
  labelNames: ["method", "code", "handler"],
});

app.get("/", (_req: Request, res: Response) => {
  onlineUsers.set(
    { method: "get", code: 200 },
    parseInt((Math.random() * 100).toString(), 10)
  );
  onlineUsers.labels("post", "300").inc();
  httpRequestsTotal.inc();
  httpRequestsDuration.labels("get", "200", "index").startTimer()();
  res.send("Hello!");
});

app.listen(process.env.API_PORT, () => {
  console.log(`Listening on port ${process.env.API_PORT}`);
});
