import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ReducerComponent } from "./redux";

import { App } from "./App.jsx";

const htmlRoot = document.querySelector("#root");
const reactRoot = createRoot(htmlRoot);

reactRoot.render(
  <StrictMode>
    <ReducerComponent blacklist={[]} whitelist={[]}>
      <App />
    </ReducerComponent>
  </StrictMode>
);
