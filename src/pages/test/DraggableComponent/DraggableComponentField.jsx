import { useEffect, useState } from "react";

import { DraggableComponent } from "./DraggableComponent";

const DraggableComponentField = () => {
  const [valueY, setValueY] = useState(200);
  const [valueX, setValueX] = useState(0);

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

export { DraggableComponentField };
