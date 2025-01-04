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
  const [] = useState();
  const [] = useState();
  const [] = useState();
  const [] = useState();

  const handleCarBrand = (newCarBrand) => {
    setCarBrand(newCarBrand);
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <CarFilterContainer onSubmit={handleSubmit}>
      <CarBrandSelector
        carBrands={carBrands}
        onChange={(carBrand) => console.log(carBrand)}
      />

      <CarMileageSelector />

      <CarPriceSelector />

      <CarFilterSubmitButtonStyleBase type="submit">
        Search
      </CarFilterSubmitButtonStyleBase>
    </CarFilterContainer>
  );
};

export { CarFilter };
