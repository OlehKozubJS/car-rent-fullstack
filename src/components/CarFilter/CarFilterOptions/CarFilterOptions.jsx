import { useState, useEffect } from "react";

import { CarFilterOptionsInput } from "./CarFilterOptionsInput";
import { CarFilterOptionsMenu } from "./CarFilterOptionsMenu";

const CarFilterOptions = ({ makes }) => {
  const [carBrands, setCarBrands] = useState([]);
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
    setCarBrands(makes);
  }, [makes]);

  useEffect(() => {
    const filteredCarBrands = carBrands.filter((carBrand) =>
      carBrand.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setCarBrands(
      searchQuery
        ? filteredCarBrands.length
          ? filteredCarBrands
          : ["Sorry, no results found"]
        : makes
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
        <CarFilterOptionsMenu options={carBrands} onChange={handleCarBrand} />
      )}
    </div>
  );
};

export { CarFilterOptions };
