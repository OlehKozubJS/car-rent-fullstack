import { useState, useEffect } from "react";

import { SVGimage } from "../../../images";

const CarFilterOptionsInput = ({ onChange, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newValue, setNewValue] = useState("");

  const handleChange = (event) => {
    setNewValue(event.target.value);
  };

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    onChange(newValue);
  }, [newValue]);

  useEffect(() => {
    onClick(isOpen);
  }, [isOpen]);

  return (
    <label htmlFor="car-filter-input" className="car-filter-input-label">
      <input
        id="car-filter-input"
        type="text"
        placeholder="Enter the text"
        value={newValue}
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
