import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Router from './app/router';
import apm from './infra/apm';

apm.setUserContext({
  username: 'foo',
  id: 'bar',
});
apm.setInitialPageLoadName('App List');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
