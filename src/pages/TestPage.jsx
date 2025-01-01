import { useEffect, useState } from "react";

import { LogicGates, SimplestCustomRange, PageChooser } from "./test";

const TestPage = () => {
  const [componentName, setComponentName] = useState("Simplest custom range");
  const [rangeValue, setRangeValue] = useState(0);

  const handleRangeValue = (newRangeValue) => {
    setRangeValue(newRangeValue);
  };

  const chooseComponent = (newComponentName) => {
    setComponentName(newComponentName);
  };

  return (
    <section>
      <PageChooser
        componentNames={["Logic gates", "Simplest custom range"]}
        currentComponentName={componentName}
        onChange={chooseComponent}
      />
      {componentName === "Logic gates" && <LogicGates />}
      {componentName === "Simplest custom range" && (
        <SimplestCustomRange onChange={handleRangeValue} value={rangeValue} />
      )}

      <p>{rangeValue}</p>
    </section>
  );
};

export default TestPage;
