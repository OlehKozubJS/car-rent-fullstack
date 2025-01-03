import { useState, useEffect } from "react";

import {
  CarBrandSelectorInputLabelStyleBase,
  CarBrandSelectorInputStyleBase,
  CarBrandSelectorInputButtonStyleBase,
} from "./CarBrandSelectorStyles";

import { SVGimage } from "../images";

const CarBrandSelectorInput = ({
  inputValue,
  onChange,
  buttonValue,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    onClick(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(buttonValue);
  }, [buttonValue]);

  return (
    <CarBrandSelectorInputLabelStyleBase htmlFor="car-filter-input">
      <CarBrandSelectorInputStyleBase
        id="car-filter-input"
        type="text"
        placeholder="Enter the text"
        value={inputValue}
        onChange={handleChange}
      />
      <CarBrandSelectorInputButtonStyleBase
        type="button"
        onClick={isOpen ? close : open}
      >
        {<SVGimage name={isOpen ? "up" : "down"} />}
      </CarBrandSelectorInputButtonStyleBase>
    </CarBrandSelectorInputLabelStyleBase>
  );
};

export { CarBrandSelectorInput };
