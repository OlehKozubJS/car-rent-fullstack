import { useState } from "react";

import { ComponentSelector } from "./ComponentSelector";

import { LogicGates } from "./LogicGates";
import { CustomRangeField } from "./CustomRange";
import { DraggableComponentField } from "./DraggableComponent";
import { RecursionFunctionTest } from "./Recursion";
import { NavigationTest } from "./NavigationTest";
import { GradientHover } from "./GradientHover";

const TestPage = () => {
  const [componentName, setComponentName] = useState("Gradient hover");

  const chooseComponent = (newComponentName) => {
    setComponentName(newComponentName);
  };

  return (
    <section>
      <ComponentSelector
        componentNames={[
          "Logic gates",
          "Simplest custom range",
          "Draggable component",
          "Navigation test",
          "Recursion",
          "Gradient hover",
        ]}
        initialComponentName={componentName}
        onChange={chooseComponent}
      />
      {componentName === "Logic gates" && <LogicGates />}
      {componentName === "Simplest custom range" && <CustomRangeField />}
      {componentName === "Draggable component" && <DraggableComponentField />}
      {componentName === "Navigation test" && <NavigationTest />}
      {componentName === "Recursion" && <RecursionFunctionTest />}
      {componentName === "Gradient hover" && <GradientHover />}
    </section>
  );
};

export { TestPage };
