import { useState } from "react";

const PageChooser = ({ componentNames, currentComponentName }) => {
  const chooseComponent = ({ target }) => {
    setComponentName(target.value);
  };

  return (
    <nav>
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
    </nav>
  );
};

export { PageChooser };
