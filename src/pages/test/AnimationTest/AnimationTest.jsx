import { useState } from "react";

import { AnimationTestControllers } from "./AnimationTestControllers";

const AnimationTest = () => {
  const [transformRotateValue, setTransformRotateValue] = useState(0);
  const [transformRotateYvalue, setTransformRotateYvalue] = useState(0);
  const [transformRotateXvalue, setTransformRotateXvalue] = useState(0);
  const [perspectiveValue, setPerspectiveValue] = useState(500);

  const handleTransformRotateValue = (value) => setTransformRotateValue(value);
  const handleTransformRotateYvalue = (value) =>
    setTransformRotateYvalue(value);
  const handleTransformRotateXvalue = (value) =>
    setTransformRotateXvalue(value);
  const handlePerspectiveValue = (value) => setPerspectiveValue(value);

  const reset = () => {
    setTransformRotateValue(0);
    setTransformRotateYvalue(0);
    setTransformRotateXvalue(0);
    setPerspectiveValue(500);
  };

  return (
    <div>
      <AnimationTestControllers onChange={} value={}/>
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
