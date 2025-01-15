import { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";

import { LogicGates } from "./LogicGates";
import { SimplestCustomRange } from "./SimplestCustomRange";
import { ComponentChooser } from "./ComponentChooser";
import { DraggableComponentField } from "./DraggableComponent";
import { RecursionFunctionTest } from "./RecursionFunctionTest";

const CustomRangeField = () => {
  const [componentName, setComponentName] = useState("Logic gates");
  const [rangeValue, setRangeValue] = useState(0);
  const [pagePath, setPagePath] = useState("test");

  const handlePagePath = (event) => {
    event.preventDefault();
    setPagePath(event.currentTarget.elements.pageNameInput.value);
    event.currentTarget.reset();
  };

  const handleRangeValue = (newRangeValue) => {
    setRangeValue(newRangeValue);
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
      {componentName === "Simplest custom range" && (
        <SimplestCustomRange onChange={handleRangeValue} value={rangeValue} />
      )}
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
