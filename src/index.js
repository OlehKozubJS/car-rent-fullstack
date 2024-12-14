import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ReducerComponent } from "./redux";
import { carModel, selectedCars } from "./hooks";

import { App } from "./App.jsx";

const htmlRoot = document.querySelector("#root");
const reactRoot = createRoot(htmlRoot);

reactRoot.render(
  <StrictMode>
    {" "}
    <ReducerComponent
      reducers={{ carModel, selectedCars }}
      blacklist={["selectedCars"]}
      whitelist={["carModel"]}
    >
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        basename="/car-rent-fullstack"
      >
        <App />
      </BrowserRouter>
    </ReducerComponent>
  </StrictMode>
);

/*


    
*/
