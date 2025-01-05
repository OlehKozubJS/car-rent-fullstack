import { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";

import { LogicGates } from "./LogicGates";
import { SimplestCustomRange } from "./SimplestCustomRange";
import { PageChooser } from "./PageChooser";
import { DraggableComponent } from "./DraggableComponent";

const TestPage = () => {
  const [componentName, setComponentName] = useState("Logic gates");
  const [rangeValue, setRangeValue] = useState(0);
  const [valueY, setValueY] = useState(200);
  const [valueX, setValueX] = useState(0);
  const [isMainPage, setIsMainPage] = useState(false);

  const handleIsMainPage = () => {
    setIsMainPage(true);
  };

  const handleRangeValue = (newRangeValue) => {
    setRangeValue(newRangeValue);
  };

  const chooseComponent = (newComponentName) => {
    setComponentName(newComponentName);
  };

  const handleXYvalue = ({ valueY, valueX }) => {
    if (valueY >= 200) {
      setValueY(valueY);
    }
    if (valueX >= 0) {
      setValueX(valueX);
    }
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
      <p>valueY={valueY}</p>
      <p>valueX={valueX}</p>
      <div>
        <form>
          <input placeholder="" />
          <button type="submit" onClick={handleIsMainPage}>
            Enter
          </button>
        </form>
        {isMainPage && <Navigate to="/" />}
      </div>
    </section>
  );
};

export { TestPage };
