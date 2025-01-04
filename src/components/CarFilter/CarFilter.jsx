import { useState } from "react";

import { CarBrandSelector } from "./CarBrandSelector";
import { CarMileageSelector } from "./CarMileageSelector";
import { CarPriceSelector } from "./CarPriceSelector";

import {
  CarFilterContainer,
  CarFilterSubmitButtonStyleBase,
} from "./CarFilterStyle";

const CarFilter = ({ carBrands, onSubmit }) => {
  const [carBrand, setCarBrand] = useState("");
  const [minMileage, setMinMileage] = useState(0);
  const [maxMileage, setMaxMileage] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const handleCarBrand = (newCarBrand) => {
    setCarBrand(newCarBrand);
  };

  const handleMinMileage = (event) => {
    setMinMileage(event.target.value);
  };

  const handleMaxMileage = (event) => {
    setMaxMileage(event.target.value);
  };

  const handleMinPrice = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPrice = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ carBrand, minMileage, maxMileage, minPrice, maxPrice });
  };

  return (
    <CarFilterContainer onSubmit={handleSubmit}>
      <CarBrandSelector carBrands={carBrands} onChange={handleCarBrand} />

      <CarMileageSelector
        minValue={minMileage}
        maxValue={maxMileage}
        onMinChange={handleMinMileage}
        onMaxChange={handleMaxMileage}
      />

      <CarPriceSelector
        minValue={minPrice}
        maxValue={maxPrice}
        onMinChange={handleMinPrice}
        onMaxChange={handleMaxPrice}
      />

      <CarFilterSubmitButtonStyleBase type="submit">
        Search
      </CarFilterSubmitButtonStyleBase>
    </CarFilterContainer>
  );
};

export { CarFilter };
