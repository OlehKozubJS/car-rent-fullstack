import { useEffect, useState } from "react";

import { AnimationTestController } from "./AnimationTestController";

const AnimationTestControllers = ({ onChange, value }) => {
  const [transformRotateValue, setTransformRotateValue] = useState(value.r);
  const [transformRotateYvalue, setTransformRotateYvalue] = useState(value.ry);
  const [transformRotateXvalue, setTransformRotateXvalue] = useState(value.rx);
  const [perspectiveValue, setPerspectiveValue] = useState(value.p);

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

  useEffect(() => {
    onChange({
      r: transformRotateValue,
      ry: transformRotateYvalue,
      rx: transformRotateXvalue,
      p: perspectiveValue,
    });
  }, [
    transformRotateValue,
    transformRotateYvalue,
    transformRotateXvalue,
    perspectiveValue,
  ]);

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
