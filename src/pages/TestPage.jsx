import { useEffect, useState } from "react";

import { LogicGates, SimplestCustomRange } from "./test";

const TestPage = () => {
  const [componentName, setComponentName] = useState("");
  const [rangeValue, setRangeValue] = useState(0);

  const handleRangeValue = (newRangeValue) => {
    setRangeValue(newRangeValue);
  };

  const chooseComponent = ({ target }) => {
    setComponentName(target.value);
  };

  return (
    <section>
      {[].map()}
      <SimplestCustomRange onChange={handleRangeValue} value={rangeValue} />
      <LogicGates />
      <p>{rangeValue}</p>
    </section>
  );
};

export default TestPage;
