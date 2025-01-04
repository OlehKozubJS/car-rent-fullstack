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

  const handleMinMileage = (minMileage) => {};

  const handleMaxMileage = (maxMileage) => {};

  const handleMinPrice = (minPrice) => {};

  const handleMaxPrice = (maxPrice) => {};

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <CarFilterContainer onSubmit={handleSubmit}>
      <CarBrandSelector carBrands={carBrands} onChange={handleCarBrand} />

      <CarMileageSelector minValue={} maxValue={} onMinChange={} onMaxChange={} />

      <CarPriceSelector minValue={} maxValue={} onMaxChange={} onMaxChange={} />

      <CarFilterSubmitButtonStyleBase type="submit">
        Search
      </CarFilterSubmitButtonStyleBase>
    </CarFilterContainer>
  );
};

export { CarFilter };
