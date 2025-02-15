import { useState } from "react";

import { AnimationTestController } from "./AnimationTestController";

const handleValue = (valueSetter) => {
  return ({ valueX }) => {
    if (valueX >= 0 && valueX <= 180) {
      valueSetter(valueX);
    }
  };
};

const AnimationTest = () => {
  const [transformRotateValue, setTransformRotateValue] = useState(0);
  const [transformRotateYvalue, setTransformRotateYvalue] = useState(0);
  const [transformRotateXvalue, setTransformRotateXvalue] = useState(0);
  const [perspectiveValue, setPerspectiveValue] = useState(0);

  const handleTransformRotateValue = handleValue(setTransformRotateValue);
  const handleTransformRotateYvalue = handleValue(setTransformRotateYvalue);
  const handleTransformRotateXvalue = handleValue(setTransformRotateXvalue);
  const handlePerspectiveValue = handleValue(setPerspectiveValue);

  return (
    <div>
      <AnimationTestController
        onChange={handleTransformRotateValue}
        value={transformRotateValue}
        color={"red"}
      />
      <AnimationTestController
        onChange={handleTransformRotateYvalue}
        value={transformRotateYvalue}
        color={"green"}
      />
      <AnimationTestController
        onChange={handleTransformRotateXvalue}
        value={transformRotateXvalue}
        color={"blue"}
      />
      <AnimationTestController
        onChange={handlePerspectiveValue}
        value={perspectiveValue}
        color={"cyan"}
      />
      <p>transform: rotate: {transformRotateValue}</p>
      <p>transfrom: rotateY: {transformRotateYvalue}</p>
      <p>transform: rotateX: {transformRotateXvalue}</p>
      <p>transform: perspective: {perspectiveValue}</p>
      <div>
        <div
          style={{
            height: "250px",
            width: "250px",
            border: "5px solid rgb(150, 250, 250)",
            backgroundColor: "red",
            transformOrigin: "center",
            transform: `perspective(${perspectiveValue}px) rotate(${transformRotateValue}deg) rotateY(${transformRotateYvalue}deg) rotateX(${transformRotateXvalue}deg)`,
          }}
        >
          Hello
        </div>
      </div>
    </div>
  );
};

export { AnimationTest };
