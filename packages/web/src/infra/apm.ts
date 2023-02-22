import { init as apmInit } from "@elastic/apm-rum";
export default apmInit({
  serviceName: "web-app",
  serverUrl: "https://d448-177-73-82-219.ngrok.io",
  environment: "local",
});
