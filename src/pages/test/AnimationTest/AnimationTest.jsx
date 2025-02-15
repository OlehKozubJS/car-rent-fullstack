import { useState } from "react";

import { AnimationTestController } from "./AnimationTestController";

const AnimationTest = () => {
  const [transformRotateValue, setTransformRotateValue] = useState(0);
  const [transformRotateYvalue, setTransformRotateYvalue] = useState(0);
  const [transformRotateXvalue, setTransformRotateXvalue] = useState(0);
  const [perspectiveValue, setPerspectiveValue] = useState(0);

  const handleTransformRotateValue = (value) => setTransformRotateValue(value);
  const handleTransformRotateYvalue = (value) =>
    setTransformRotateYvalue(value);
  const handleTransformRotateXvalue = (value) =>
    setTransformRotateXvalue(value);
  const handlePerspectiveValue = (value) => setPerspectiveValue(value);

  return (
    <div>
      <AnimationTestController
        onChange={handleTransformRotateValue}
        value={transformRotateValue}
        range={180}
        color={"red"}
      />
      <AnimationTestController
        onChange={handleTransformRotateYvalue}
        value={transformRotateYvalue}
        range={180}
        color={"green"}
      />
      <AnimationTestController
        onChange={handleTransformRotateXvalue}
        value={transformRotateXvalue}
        range={180}
        color={"blue"}
      />
      <AnimationTestController
        onChange={handlePerspectiveValue}
        value={perspectiveValue}
        range={300}
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
