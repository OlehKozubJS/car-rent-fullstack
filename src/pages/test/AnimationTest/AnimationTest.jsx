import { useState } from "react";

import { AnimationTestControllers } from "./AnimationTestControllers";

const AnimationTest = () => {
  const [transformValues, setTransformValues] = useState({
    r: 0,
    ry: 0,
    rx: 0,
    p: 0,
  });

  const handleTransformValues = (newValues) => setTransformValues(newValues);

  return (
    <div>
      <AnimationTestControllers
        onChange={handleTransformValues}
        value={transformValues}
      />
      <div>
        <div
          style={{
            height: "250px",
            width: "250px",
            border: "5px solid rgb(150, 250, 250)",
            backgroundColor: "red",
            transformOrigin: "center",
            transform: `perspective(${transformValues.p}px) rotate(${transformValues.r}deg) rotateY(${transformValues.ry}deg) rotateX(${transformValues.rx}deg)`,
          }}
        >
          Hello
        </div>
      </div>
    </div>
  );
};

export { AnimationTest };
