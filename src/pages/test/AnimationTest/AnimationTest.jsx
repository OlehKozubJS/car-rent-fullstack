import { useState } from "react";

import { DraggableComponent } from "../DraggableComponent";

const AnimationTest = () => {
  const [transformRotateValue, setTransformRotateValue] = useState(0);

  const handleTransformRotateValue = ({ valueX }) => {
    setTransformRotateValue(valueX);
  };

  return (
    <div>
      <div style={{ position: "relative", height: "50px" }}>
        <DraggableComponent
          onChange={handleTransformRotateValue}
          valueX={transformRotateValue}
          valueY={0}
        />
      </div>
      <p>{transformRotateValue}</p>
    </div>
  );
};

export { AnimationTest };
