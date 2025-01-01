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
      <ul>
        {["Simplest custom range", "Logic gates"].map((value) => {
          return (
            <li key={value}>
              <label htmlFor={value}>
                <input
                  id={value}
                  name="chooseComponentRadio"
                  type="radio"
                  value={value}
                  onChange={chooseComponent}
                />
                <span>{value}</span>
              </label>
            </li>
          );
        })}
      </ul>
      {componentName === "Simplest custom range" && (
        <SimplestCustomRange onChange={handleRangeValue} value={rangeValue} />
      )}
      {componentName === "Logic gates" && <LogicGates />}
      <p>{rangeValue}</p>
    </section>
  );
};

export default TestPage;
