import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { cars } from "./imports";

import { setCarModel, setSelectedCars } from "../../../hooks";

import { CarFilterOptionsInput } from "./CarFilterOptionsInput";
import { CarFilterOptionsMenu } from "./CarFilterOptionsMenu";

const CarFilterOptions = ({ carBrands }) => {
  const [filteredCarBrands, setFilteredCarBrands] = useState([]);
  const [isCarBrandsOptions, setIsCarBrandsOptions] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  const toggleCarBrandOptions = (value) => {
    setIsCarBrandsOptions(value);
  };

  const handleCarBrand = (event) => {
    setIsCarBrandsOptions(false);
    const newCarBrand = event.target.value;
    setSearchQuery(newCarBrand);
    dispatch(setCarModel(newCarBrand));
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

    setFilteredCarBrands(searchQuery ? newFilteredCarBrands : carBrands);
  }, [searchQuery]);

  return (
    <div>
      <h3>Car brand</h3>
      <CarFilterOptionsInput
        inputValue={searchQuery}
        onChange={handleSearchQuery}
        buttonValue={isCarBrandsOptions}
        onClick={toggleCarBrandOptions}
      />
      {isCarBrandsOptions &&
        (filteredCarBrands.length ? (
          <CarFilterOptionsMenu
            options={filteredCarBrands}
            onChange={handleCarBrand}
          />
        ) : (
          <div className="car-filter-options-not-found-message">
            Sorry, no results found
          </div>
        ))}
    </div>
  );
};

export { CarFilterOptions };
