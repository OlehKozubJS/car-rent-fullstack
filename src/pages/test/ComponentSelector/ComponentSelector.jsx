import { useState } from "react";

import {
  ComponentSelectorContainerStyleBase,
  ComponentSelectorButtonStyleBase,
  ComponentSelectorRadioButtonStyleBase,
} from "./ComponentSelectorStyle";

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
    <ComponentSelectorContainerStyleBase>
      {componentNames.map((value) => {
        return (
          <ComponentSelectorButtonStyleBase key={value} htmlFor={value}>
            <ComponentSelectorRadioButtonStyleBase
              id={value}
              name="chooseComponentRadio"
              type="radio"
              value={value}
              onChange={chooseComponent}
              checked={componentName === value}
            />
            <span>{value}</span>
          </ComponentSelectorButtonStyleBase>
        );
      })}
    </ComponentSelectorContainerStyleBase>
  );
};

export { ComponentSelector };
