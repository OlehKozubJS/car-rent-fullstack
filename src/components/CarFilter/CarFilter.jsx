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

  const handleMinMileage = (newMinMileage) => {
    setMinMileage(newMinMileage);
  };

  const handleMaxMileage = (newMaxMileage) => {
    setMaxMileage(newMaxMileage);
  };

  const handleMinPrice = (newMinPrice) => {
    setMinPrice(newMinPrice);
  };

  const handleMaxPrice = (newMaxPrice) => {
    setMaxPrice(newMaxPrice);
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
