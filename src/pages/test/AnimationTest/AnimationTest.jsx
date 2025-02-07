import { useState } from "react";

import { DraggableComponent } from "../DraggableComponent";

const AnimationTest = () => {
  const [transformRotateValue, setTransformRotateValue] = useState(0);

  const handleTransformRotateValue = ({ valueX }) => {
    setTransformRotateValue(valueX);
  };

  return (
    <div>
      <div>
        <DraggableComponent
          onChange={handleTransformRotateValue}
          valueX={transformRotateValue}
          valueY={250}
        />
      </div>
      <p>{transformRotateValue}</p>
    </div>
  );
};

export { AnimationTest };
