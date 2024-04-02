import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./AppContextProvider";

import "./assets/css/variables.css";
import "./assets/css/reset.css";
import "./assets/css/global.css";

import "./assets/css/buttons.css";
import "./assets/css/forms.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </StrictMode>
);
