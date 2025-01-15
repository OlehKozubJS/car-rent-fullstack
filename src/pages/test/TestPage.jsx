import { useEffect, useState } from "react";

import { ComponentChooser } from "./ComponentChooser";

import { LogicGates } from "./LogicGates";
import { CustomRangeField } from "./CustomRange";
import { DraggableComponentField } from "./DraggableComponent";
import { RecursionFunctionTest } from "./Recursion";
import { NavigationTest } from "./NavigationTest";

const TestPage = () => {
  const [componentName, setComponentName] = useState("Logic gates");

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
          "Navigation test",
          "Recursion",
        ]}
        currentComponentName={"Logic gates"}
        onChange={chooseComponent}
      />
      {componentName === "Logic gates" && <LogicGates />}
      {componentName === "Simplest custom range" && <CustomRangeField />}
      {componentName === "Draggable component" && <DraggableComponentField />}
      {componentName === "Navigation test" && <NavigationTest />}
      {componentName === "Recursion" && <RecursionFunctionTest />}
    </section>
  );
};

export { TestPage };
