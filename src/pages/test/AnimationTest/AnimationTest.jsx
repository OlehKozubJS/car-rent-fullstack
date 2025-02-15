import { useState } from "react";

import { AnimationTestControllers } from "./AnimationTestControllers";
import { AnimationTestObject } from "./AnimationTestObject";

const AnimationTest = () => {
  const [transformValues, setTransformValues] = useState({
    r: 0,
    ry: 0,
    rx: 0,
    p: 500,
  });

  const handleTransformValues = (newValues) => setTransformValues(newValues);

  return (
    <div>
      <AnimationTestControllers
        onChange={handleTransformValues}
        value={transformValues}
      />
      <AnimationTestObject transformValues={transformValues} />
    </div>
  );
};

export { AnimationTest };
