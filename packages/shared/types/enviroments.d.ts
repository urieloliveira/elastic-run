export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_PORT: number;
      ELASTIC_APM_SERVICE_NAME: string;
      ELASTIC_APM_SERVER_URL: string;
      NODE_ENV: "local" | "development" | "production";
    }
  }
}
