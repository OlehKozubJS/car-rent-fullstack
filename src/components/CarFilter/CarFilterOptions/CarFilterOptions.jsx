import { useState, useEffect } from "react";

import { CarFilterOptionsInput } from "./CarFilterOptionsInput";
import { CarFilterOptionsMenu } from "./CarFilterOptionsMenu";

const CarFilterOptions = ({ carBrands }) => {
  const [filteredCarBrands, setFilteredCarBrands] = useState([]);
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

  useEffect(() => {
    setFilteredCarBrands(carBrands);
  }, [carBrands]);

  useEffect(() => {
    const newFilteredCarBrands = carBrands.filter((carBrand) =>
      carBrand.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredCarBrands(
      searchQuery
        ? newFilteredCarBrands.length
          ? newFilteredCarBrands
          : ["Sorry, no results found"]
        : carBrands
    );
  }, [searchQuery]);

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
          options={filteredCarBrands}
          onChange={handleCarBrand}
        />
      )}
    </div>
  );
};

export { CarFilterOptions };
