import { useState, useEffect } from "react";

import { SVGimage } from "../../../images";

const CarFilterOptionsInput = ({}) => {
  const [carBrands] = useState(makes);
  const [isCarBrandsOptions, setIsCarBrandsOptions] = useState(false);
  const [searchResult, setSearchResult] = useState("");

  const openCarBrandOptions = () => {
    setSearchResult("");
    setIsCarBrandsOptions(true);
  };

  const closeCarBrandOptions = () => {
    setIsCarBrandsOptions(false);
  };

  const handleCarBrand = (event) => {
    setIsCarBrandsOptions(false);
    setSearchResult(event.target.value);
  };

  const handleSearchResult = (event) => {
    setSearchResult(event.target.value);
  };

  return (
    <label htmlFor="car-filter-input" className="car-filter-input-label">
      <input
        id="car-filter-input"
        type="text"
        placeholder="Enter the text"
        value={searchResult}
        onChange={handleSearchResult}
        className="car-filter-input"
      />
      <button
        type="button"
        onClick={
          isCarBrandsOptions ? closeCarBrandOptions : openCarBrandOptions
        }
      >
        {<SVGimage name={isCarBrandsOptions ? "up" : "down"} />}
      </button>
    </label>
  );
};

export { CarFilterOptionsInput };
