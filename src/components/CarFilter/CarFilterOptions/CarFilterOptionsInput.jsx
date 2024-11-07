import { useState, useEffect } from "react";

import { SVGimage } from "../../../images";

const CarFilterOptionsInput = ({ value, onChange, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newValue, setNewValue] = useState("");

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const handleChange = (event) => {
    setNewValue(event.target.value);
  };

  useEffect(() => {
    onChange(isOpen);
  }, [isOpen]);

  useEffect(() => {
    onChange(newValue);
  }, [newValue]);

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
        {<SVGimage name={isCarBrandsOptions ? "up" : "down"} />}
      </button>
    </label>
  );
};

export { CarFilterOptionsInput };
