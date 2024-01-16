import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import AppRouter from "./components/AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
