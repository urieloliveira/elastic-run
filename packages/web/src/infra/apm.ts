import { init as apmInit } from '@elastic/apm-rum';
export default apmInit({
  serviceName: 'web-app',
  serverUrl: 'http://localhost:8200',
  environment: 'local',
});
