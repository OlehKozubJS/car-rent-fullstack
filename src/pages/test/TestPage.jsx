import { useState } from "react";

import { ComponentSelector } from "./ComponentSelector";

import { LogicGates } from "./LogicGates";
import { CustomRangeField } from "./CustomRange";
import { DraggableComponentField } from "./DraggableComponent";
import { RecursionFunctionTest } from "./Recursion";
import { NavigationTest } from "./NavigationTest";
import { GradientHoverField } from "./GradientHover";
import { CellularAutomaton } from "./CellularAutomaton";
import { CellularAutomatonLite } from "./CellularAutomatonLite";
import { AnimationTest } from "./AnimationTest";
import { TotalDigitalization } from "./TotalDigitalization";
import { BinarySystemTest } from "./BinarySystemTest";

const TestPage = () => {
  const [componentName, setComponentName] = useState("Total digitalization");

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
          "Cellular automaton",
          "Cellular automaton lite",
          "Animation test",
          "Total digitalization",
        ]}
        initialComponentName={componentName}
        onChange={chooseComponent}
      />
      {componentName === "Logic gates" && <LogicGates />}
      {componentName === "Simplest custom range" && <CustomRangeField />}
      {componentName === "Draggable component" && <DraggableComponentField />}
      {componentName === "Navigation test" && <NavigationTest />}
      {componentName === "Recursion" && <RecursionFunctionTest />}
      {componentName === "Gradient hover" && <GradientHoverField />}
      {componentName === "Cellular automaton" && <CellularAutomaton />}
      {componentName === "Cellular automaton lite" && <CellularAutomatonLite />}
      {componentName === "Animation test" && <AnimationTest />}
      {componentName === "Total digitalization" && <TotalDigitalization />}
    </section>
  );
};

export { TestPage };
