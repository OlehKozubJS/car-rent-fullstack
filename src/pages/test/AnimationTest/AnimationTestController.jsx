import { useEffect, useState } from "react";

import { DraggableComponent } from "../DraggableComponent";

const AnimationTestController = ({ onChange, value, range, color }) => {
  const handleValue = () => {
    return ({ valueX }) => {
      if (valueX >= 0 && valueX <= range) {
        onChange(valueX);
      }
    };
  };

  return (
    <div style={{ position: "relative", height: "50px" }}>
      <DraggableComponent
        onChange={handleValue}
        valueX={value}
        valueY={0}
        height={50}
        width={50}
        backgroundColor={color}
      />
    </div>
  );
};

export { AnimationTestController };
