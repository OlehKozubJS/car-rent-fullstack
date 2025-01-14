import { useState } from "react";

import {
  ComponentSelectorContainerStyleBase,
  ComponentSelectorButtonStyleBase,
  ComponentSelectorRadioButtonStyleBase,
  ComponentSelectorRadioButtonTextStyleBase,
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
          <ComponentSelectorButtonStyleBase
            key={value}
            htmlFor={value}
            isactive={(componentName === value).toString()}
          >
            <ComponentSelectorRadioButtonStyleBase
              id={value}
              name="chooseComponentRadio"
              type="radio"
              value={value}
              checked={componentName === value}
              onChange={chooseComponent}
            />
            <ComponentSelectorRadioButtonTextStyleBase>
              {value}
            </ComponentSelectorRadioButtonTextStyleBase>
          </ComponentSelectorButtonStyleBase>
        );
      })}
    </ComponentSelectorContainerStyleBase>
  );
};

export { ComponentSelector };
