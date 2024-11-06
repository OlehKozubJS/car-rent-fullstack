import { useState, useEffect } from "react";

import makes from "../../../makes.json";

import { CarFilterOptionsMenu } from "./CarFilterOptionsMenu";

import { CarFilterOptionsStyles } from "./CarFilterOptionsStyles";
import { SVGimage } from "../../../images";

const CarFilterOptions = ({}) => {
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
    <div>
      <CarFilterOptionsStyles />
      <h3>Car brand</h3>
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
      {isCarBrandsOptions && (
        <CarFilterOptionsMenu
          options={
            searchResult
              ? carBrands.filter((carBrand) =>
                  carBrand.toLowerCase().includes(searchResult)
                )
              : carBrands
          }
          onChange={handleCarBrand}
        />
      )}
    </div>
  );
};

export { CarFilterOptions };
