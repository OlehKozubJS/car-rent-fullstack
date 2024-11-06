import { useState, useEffect } from "react";

import { SVGimage } from "../../../images";

const CarFilterOptionsInput = ({ options }) => {
  const [carBrands] = useState(makes);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const open = () => {
    setSearchQuery("");
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const handleCarBrand = (event) => {
    setIsCarBrandsOptions(false);
    setSearchResult(event.target.value);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <label htmlFor="car-filter-input" className="car-filter-input-label">
      <input
        id="car-filter-input"
        type="text"
        placeholder="Enter the text"
        value={searchQuery}
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
