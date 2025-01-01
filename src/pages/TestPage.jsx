import { useEffect, useState } from "react";

import { LogicGates, SimplestCustomRange } from "./test";

const TestPage = () => {
  const [rangeValue, setRangeValue] = useState(0);

  const handleRangeValue = (newRangeValue) => {
    setRangeValue(newRangeValue);
  };

  return (
    <section>
      <SimplestCustomRange onChange={handleRangeValue} value={rangeValue} />
      <LogicGates />
      <p>{rangeValue}</p>
    </section>
  );
};

export default TestPage;
