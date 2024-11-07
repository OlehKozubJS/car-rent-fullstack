import { useState, useEffect } from "react";

import makes from "../../../makes.json";

import { CarFilterOptionsInput } from "./CarFilterOptionsInput";
import { CarFilterOptionsMenu } from "./CarFilterOptionsMenu";

const CarFilterOptions = ({}) => {
  const [carBrands] = useState(makes);
  const [isCarBrandsOptions, setIsCarBrandsOptions] = useState(false);
  const [searchResult, setSearchResult] = useState("");

  const toggleCarBrandOptions = (value) => {
    setIsCarBrandsOptions(value);
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
      <h3>Car brand</h3>
      <CarFilterOptionsInput
        onChange={handleSearchResult}
        onClick={toggleCarBrandOptions}
      />
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
