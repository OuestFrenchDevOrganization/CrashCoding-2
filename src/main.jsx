import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/assets/styles/reset.css";
import { GlobalStyle } from "./theme/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
