import { useState } from "react";

import { DraggableComponent } from "../DraggableComponent";

const AnimationTest = () => {
  const [transformRotateValue, setTransformRotateValue] = useState(0);
  const [transformRotateYvalue, setTransformRotateYvalue] = useState(0);
  const [transformRotateXvalue, setTransformRotateXvalue] = useState(0);
  const [perspectiveValue, setPerspectiveValue] = useState(0);

  const handleTransformRotateValue = ({ valueX }) => {
    if (valueX >= 0 && valueX <= 180) {
      setTransformRotateValue(valueX);
    }
  };

  const handleTransformRotateYvalue = ({ valueX }) => {
    if (valueX >= 0 && valueX <= 180) {
      setTransformRotateYvalue(valueX);
    }
  };

  const handleTransformRotateXvalue = ({ valueX }) => {
    if (valueX >= 0 && valueX <= 180) {
      setTransformRotateXvalue(valueX);
    }
  };

  const handlePerspectiveValue = ({ valueX }) => {
    if (valueX >= 0 && valueX <= 180) {
      setPerspectiveValue(valueX);
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
      <div style={{ position: "relative", height: "50px" }}>
        <DraggableComponent
          onChange={handleTransformRotateYvalue}
          valueX={transformRotateYvalue}
          valueY={0}
          height={50}
          width={150}
          backgroundColor={"green"}
        />
      </div>
      <div style={{ position: "relative", height: "50px" }}>
        <DraggableComponent
          onChange={handleTransformRotateXvalue}
          valueX={transformRotateXvalue}
          valueY={0}
          height={50}
          width={150}
          backgroundColor={"blue"}
        />
      </div>
      <div style={{ position: "relative", height: "50px" }}>
        <DraggableComponent
          onChange={handlePerspectiveValue}
          valueX={perspective}
          valueY={0}
          height={50}
          width={150}
          backgroundColor={"blue"}
        />
      </div>
      <p>transform: rotate: {transformRotateValue}</p>
      <p>transfrom: rotateY: {transformRotateYvalue}</p>
      <p>transform: rotateX: {transformRotateXvalue}</p>
      <div></div>
    </div>
  );
};

export { AnimationTest };
