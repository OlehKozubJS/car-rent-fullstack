import { useState, useEffect } from "react";

import makes from "../../../makes.json";

import { CarFilterOptionsInput } from "./CarFilterOptionsInput";
import { CarFilterOptionsMenu } from "./CarFilterOptionsMenu";

const CarFilterOptions = ({}) => {
  const [carBrands] = useState(makes);
  const [selectedCarBrands, setSelectedCarBrands] = useState(carBrands);
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
    setSelectedCarBrands(
      searchQuery
        ? carBrands.filter((carBrand) =>
            carBrand.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : carBrands
    );
  };

  return (
    <div>
      <h3>Car brand</h3>
      <CarFilterOptionsInput
        value={searchQuery}
        onChange={handleSearchQuery}
        onClick={toggleCarBrandOptions}
      />
      {isCarBrandsOptions && (
        <CarFilterOptionsMenu
          options={selectedCarBrands}
          onChange={handleCarBrand}
        />
      )}
    </div>
  );
};

export { CarFilterOptions };
