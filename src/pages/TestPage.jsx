import { useEffect, useState } from "react";

import { LogicGates, SimplestCustomRange } from "./test";

const TestPage = () => {
  const [rangeValue, setRangeValue] = useState(0);

  const handleRangeValue = (newRangeValue) => {
    setRangeValue(newRangeValue);
  };

  return (
    <section>
      <SimplestCustomRange />
      <LogicGates />
      <p></p>
    </section>
  );
};

export default TestPage;
