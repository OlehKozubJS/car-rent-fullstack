import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ReducerComponent } from "./redux";
import { carModel, selectedCars } from "./hooks";

import { App } from "./App.jsx";

const htmlRoot = document.querySelector("#root");
const reactRoot = createRoot(htmlRoot);

reactRoot.render(
  <StrictMode>
    <ReducerComponent
      reducers={{ carModel, selectedCars }}
      blacklist={["selectedCars"]}
      whitelist={["carModel"]}
    >
      <App />
    </ReducerComponent>
  </StrictMode>
);
