import { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";

import { LogicGates } from "./LogicGates";
import { CustomRangeField } from "./CustomRange";
import { ComponentChooser } from "./ComponentChooser";
import { DraggableComponentField } from "./DraggableComponent";
import { RecursionFunctionTest } from "./RecursionFunctionTest";

const TestPage = () => {
  const [componentName, setComponentName] = useState("Logic gates");

  const [pagePath, setPagePath] = useState("test");

  const handlePagePath = (event) => {
    event.preventDefault();
    setPagePath(event.currentTarget.elements.pageNameInput.value);
    event.currentTarget.reset();
  };

  const chooseComponent = (newComponentName) => {
    setComponentName(newComponentName);
  };

  return (
    <section>
      <ComponentChooser
        componentNames={[
          "Logic gates",
          "Simplest custom range",
          "Draggable component",
        ]}
        currentComponentName={componentName}
        onChange={chooseComponent}
      />
      {componentName === "Logic gates" && <LogicGates />}
      {componentName === "Simplest custom range" && <CustomRangeField />}
      {componentName === "Draggable component" && <DraggableComponentField />}
      <p>{rangeValue}</p>
      <p>valueY={valueY}</p>
      <p>valueX={valueX}</p>
      <div>
        <form onSubmit={handlePagePath}>
          <input
            name="pageNameInput"
            type="text"
            placeholder="Enter page name"
          />
          <button type="submit">Enter</button>
        </form>
        <Navigate to={`/${pagePath}`} />
      </div>
      <RecursionFunctionTest />
    </section>
  );
};

export { TestPage };
