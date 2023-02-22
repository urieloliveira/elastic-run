import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import apm from "./infra/apm";

apm.setUserContext({
  username: "foo",
  id: "bar",
});
apm.setInitialPageLoadName("App List");
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
