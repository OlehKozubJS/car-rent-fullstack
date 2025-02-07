import { useState } from "react";

import { DraggableComponent } from "../DraggableComponent";

const AnimationTest = () => {
const [transformRotateValue] = useState();

const handleTransformRotateValue

  return (
    <div>
      This is animation test
      <DraggableComponent onChange={}valueX={}valueY={}/>
    </div>
  );
};

export { AnimationTest };
