import { useEffect, useState } from "react";

import { AnimationTestController } from "./AnimationTestController";

const AnimationTestControllers = () => {
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

  useEffect(() => {}, []);

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
        range={500}
        color={"cyan"}
      />
      <button
        type="button"
        onClick={reset}
        style={{ backgroundColor: "rgb(250, 225, 225)" }}
      >
        Reset
      </button>
      <p>transform: rotate: {transformRotateValue}</p>
      <p>transfrom: rotateY: {transformRotateYvalue}</p>
      <p>transform: rotateX: {transformRotateXvalue}</p>
      <p>transform: perspective: {perspectiveValue}</p>
    </div>
  );
};

export { AnimationTestControllers };
