import { useState } from "react";

import styled from "@emotion/styled";

const ComponentChooser = ({
  componentNames,
  currentComponentName,
  onChange,
}) => {
  const [componentName, setComponentName] = useState(currentComponentName);

  const chooseComponent = (event) => {
    const newComponentName = event.target.value;
    setComponentName(newComponentName);
    onChange(newComponentName);
  };

  return (
    <nav>
      {componentNames.map((value) => {
        return (
          <label key={value} htmlFor={value}>
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
        );
      })}
    </nav>
  );
};

export { ComponentChooser };
