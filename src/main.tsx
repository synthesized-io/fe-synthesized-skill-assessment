import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "@app/app";
import './main.css'

const entrypoint = document.querySelector("#app")!;

createRoot(entrypoint).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
