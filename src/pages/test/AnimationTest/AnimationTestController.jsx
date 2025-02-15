import { useState } from "react";

import { DraggableComponent } from "../DraggableComponent";

const AnimationTestController = ({ onChange, value, color }) => {
  return (
    <div style={{ position: "relative", height: "25px" }}>
      <DraggableComponent
        onChange={onChange}
        valueX={value}
        valueY={0}
        height={25}
        width={50}
        backgroundColor={color}
      />
    </div>
  );
};

export { AnimationTestController };
