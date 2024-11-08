import { useState, useEffect } from "react";

import { SVGimage } from "../../../images";

const CarFilterOptionsInput = ({
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

  return (
    <label htmlFor="car-filter-input" className="car-filter-input-label">
      <input
        id="car-filter-input"
        type="text"
        placeholder="Enter the text"
        value={value}
        onChange={handleChange}
        className="car-filter-input"
      />
      <button type="button" onClick={isOpen ? close : open}>
        {<SVGimage name={isOpen ? "up" : "down"} />}
      </button>
    </label>
  );
};

export { CarFilterOptionsInput };
