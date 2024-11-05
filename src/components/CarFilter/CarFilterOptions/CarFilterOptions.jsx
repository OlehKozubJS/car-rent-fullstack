import { useState, useEffect } from "react";

import makes from "../../../makes.json";

import { CarFilterOptionsMenu } from "./CarFilterOptionsMenu";

import { CarFilterOptionsStyles } from "./CarFilterOptionsStyles";
import { SVGimage } from "../../../images";

const CarFilterOptions = ({}) => {
  const [carBrands] = useState(makes);
  const [isCarBrandsOptions, setIsCarBrandsOptions] = useState(false);
  const [carBrand, setCarBrand] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const openCarBrandOptions = () => {
    setIsCarBrandsOptions(true);
  };

  const closeCarBrandOptions = () => {
    setIsCarBrandsOptions(false);
  };

  const handleCarBrand = (event) => {
    setCarBrand(event.target.value);
    setSearchResult(event.target.value);
  };

  const handleSearchResult = (event) => {
    setSearchResult(event.target.value);
  };

  return (
    <div>
      <CarFilterOptionsStyles />
      <h3>Car brand</h3>
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          placeholder="Enter the text"
          value={searchResult}
          onChange={handleSearchResult}
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
        <CarFilterOptionsMenu options={carBrands} onChange={handleCarBrand} />
      )}
      {carBrand}
    </div>
  );
};

export { CarFilterOptions };
