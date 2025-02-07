import { useState } from "react";

import { DraggableComponent } from "../DraggableComponent";

const AnimationTest = () => {
  const [transformRotateValue, setTransformRotateValue] = useState();

  const handleTransformRotateValue = (newValue) => {};

  return (
    <div>
      This is animation test
      <DraggableComponent
        onChange={handleTransformRotateValue}
        valueX={transformRotateValue}
        valueY={0}
      />
    </div>
  );
};

export { AnimationTest };
