import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { CarBrandSelectorInput } from "./CarBrandSelectorInput";
import { CarBrandSelectorMenu } from "./CarBrandSelectorMenu";

import { CarBrandSelectorNotFoundMessageStyleBase } from "./CarBrandSelectorStyles";

const CarBrandSelector = ({ carBrands }) => {
  const [filteredCarBrands, setFilteredCarBrands] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCarBrandsOptions, setIsCarBrandsOptions] = useState(false);

  const toggleCarBrandOptions = (value) => {
    if (value) {
      setSearchQuery("");
    }

    setIsCarBrandsOptions(value);
  };

  const handleCarBrand = (event) => {
    setIsCarBrandsOptions(false);
    const newCarBrand = event.target.value;
    setSearchQuery(newCarBrand);
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
      <CarBrandSelectorInput
        inputValue={searchQuery}
        onChange={handleSearchQuery}
        buttonValue={isCarBrandsOptions}
        onClick={toggleCarBrandOptions}
      />
      {isCarBrandsOptions &&
        (filteredCarBrands.length ? (
          <CarBrandSelectorMenu
            options={filteredCarBrands}
            onChange={handleCarBrand}
          />
        ) : (
          <CarBrandSelectorNotFoundMessageStyleBase>
            Sorry, no results found
          </CarBrandSelectorNotFoundMessageStyleBase>
        ))}
    </div>
  );
};

export { CarBrandSelector };
