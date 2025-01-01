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
        componentNames={["Simplest custom range", "Logic gates"]}
        currentComponentName={componentName}
        onChange={chooseComponent}
      />
      {componentName === "Simplest custom range" && (
        <SimplestCustomRange onChange={handleRangeValue} value={rangeValue} />
      )}
      {componentName === "Logic gates" && <LogicGates />}
      <p>{rangeValue}</p>
    </section>
  );
};

export default TestPage;
