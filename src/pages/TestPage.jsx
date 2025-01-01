import { useEffect, useState } from "react";

import {
  LogicGates,
  SimplestCustomRange,
  PageChooser,
  DraggableComponent,
} from "./test";

const TestPage = () => {
  const [componentName, setComponentName] = useState("Logic gates");
  const [rangeValue, setRangeValue] = useState(0);
  const [valueY, setValueY] = useState(0);
  const [valueX, setValueX] = useState(0);

  const handleRangeValue = (newRangeValue) => {
    setRangeValue(newRangeValue);
  };

  const chooseComponent = (newComponentName) => {
    setComponentName(newComponentName);
  };

  const handleXYvalue = ({ valueY, valueX }) => {
    setValueY(valueY);
    setValueX(valueX);
  };

  return (
    <section>
      <PageChooser
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
      {componentName === "Draggable component" && (
        <DraggableComponent
          valueY={valueY}
          valueX={valueX}
          onChange={handleXYvalue}
        />
      )}
      <p>{rangeValue}</p>
      <p>{}</p>
    </section>
  );
};

export default TestPage;
