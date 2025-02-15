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
          height={25}
          width={50}
          backgroundColor={"red"}
        />
      </div>
      <div style={{ position: "relative", height: "50px" }}>
        <DraggableComponent
          onChange={handleTransformRotateYvalue}
          valueX={transformRotateYvalue}
          valueY={0}
          height={25}
          width={50}
          backgroundColor={"green"}
        />
      </div>
      <div style={{ position: "relative", height: "50px" }}>
        <DraggableComponent
          onChange={handleTransformRotateXvalue}
          valueX={transformRotateXvalue}
          valueY={0}
          height={25}
          width={50}
          backgroundColor={"blue"}
        />
      </div>
      <div style={{ position: "relative", height: "50px" }}>
        <DraggableComponent
          onChange={handlePerspectiveValue}
          valueX={perspectiveValue}
          valueY={0}
          height={25}
          width={50}
          backgroundColor={"cyan"}
        />
      </div>
      <p>transform: rotate: {transformRotateValue}</p>
      <p>transfrom: rotateY: {transformRotateYvalue}</p>
      <p>transform: rotateX: {transformRotateXvalue}</p>
      <p>transform: rotateX: {perspectiveValue}</p>
      <div></div>
    </div>
  );
};

export { AnimationTest };
