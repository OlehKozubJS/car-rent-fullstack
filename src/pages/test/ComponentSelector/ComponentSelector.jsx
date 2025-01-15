import { useState } from "react";

import {} from "./ComponentSelectorStyle";

const ComponentSelector = ({
  componentNames,
  initialComponentName,
  onChange,
}) => {
  const [componentName, setComponentName] = useState(initialComponentName);

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
