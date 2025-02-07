import { useState } from "react";

import { DraggableComponent } from "../DraggableComponent";

const AnimationTest = () => {
  const [transformRotateValue, setTransformRotateValue] = useState(0);

  const handleTransformRotateValue = ({ valueX }) => {
    setTransformRotateValue(valueX);
  };

  return (
    <div>
      This is animation test
      <DraggableComponent
        onChange={handleTransformRotateValue}
        valueX={transformRotateValue}
        valueY={250}
      />
      <p>{transformRotateValue}</p>
    </div>
  );
};

export { AnimationTest };
