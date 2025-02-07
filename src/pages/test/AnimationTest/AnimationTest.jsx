import { useState } from "react";

import { DraggableComponent } from "../DraggableComponent";

const AnimationTest = () => {
  const [transformRotateValue, setTransformRotateValue] = useState(0);

  const handleTransformRotateValue = ({ valueX }) => {
    if (valueX >= 0 && valueX <= 180) {
      setTransformRotateValue(valueX);
    }
  };

  return (
    <div>
      <div style={{ position: "relative", height: "50px" }}>
        <DraggableComponent
          onChange={handleTransformRotateValue}
          valueX={transformRotateValue}
          valueY={0}
          height={50}
          width={150}
          backgroundColor={"red"}
        />
      </div>
      <p>{transformRotateValue}</p>
    </div>
  );
};

export { AnimationTest };
