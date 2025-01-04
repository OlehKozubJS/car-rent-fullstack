import { useState, useEffect } from "react";

import { CarBrandSelectorInput } from "./CarBrandSelectorInput";
import { CarBrandSelectorMenu } from "./CarBrandSelectorMenu";

import {
  CarBrandSelectorContainerStyleBase,
  CarBrandSelectorNotFoundMessageStyleBase,
} from "./СarBrandSelectorStyle";

import { CarFilterHeader } from "./imports";

const CarBrandSelector = ({ carBrands, onChange }) => {
  const [filteredCarBrands, setFilteredCarBrands] = useState(carBrands);
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
    onChange(newCarBrand);
  };

  const handleSearchQuery = (value) => {
    setSearchQuery(value);
  };

  useEffect(() => {
    const newFilteredCarBrands = carBrands.filter((carBrand) =>
      carBrand.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredCarBrands(searchQuery ? newFilteredCarBrands : carBrands);
  }, [searchQuery]);

  return (
    <CarBrandSelectorContainerStyleBase>
      <CarFilterHeader>Car brand</CarFilterHeader>
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
    </CarBrandSelectorContainerStyleBase>
  );
};

export { CarBrandSelector };
