import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./i18n";
import "./index.css";
import Router from "./navigation/Router";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <Router />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
