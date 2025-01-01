import { useState } from "react";

const PageChooser = () => {
  const [componentName, setComponentName] = useState("Simplest custom range");

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
                  checked={componentName === value}
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

export { PageChooser };
