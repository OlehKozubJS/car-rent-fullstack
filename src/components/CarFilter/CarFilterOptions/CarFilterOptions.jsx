import { useState, useEffect } from "react";

import makes from "../../../makes.json";

import { CarFilterOptionsInput } from "./CarFilterOptionsInput";
import { CarFilterOptionsMenu } from "./CarFilterOptionsMenu";

const CarFilterOptions = ({}) => {
  const [carBrands] = useState(makes);
  const [isCarBrandsOptions, setIsCarBrandsOptions] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCarBrandOptions = (value) => {
    setIsCarBrandsOptions(value);
  };

  const handleCarBrand = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchQuery = (value) => {
    setSearchQuery(value);
  };

  return (
    <div>
      <h3>Car brand</h3>
      <CarFilterOptionsInput
        onChange={handleSearchQuery}
        onClick={toggleCarBrandOptions}
      />
      {isCarBrandsOptions && (
        <CarFilterOptionsMenu
          options={
            searchQuery
              ? carBrands.filter((carBrand) =>
                  carBrand.toLowerCase().includes(searchQuery.toLowerCase())
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
