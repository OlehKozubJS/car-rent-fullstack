import { CarBrandSelector } from "./CarBrandSelector";
import { CarMileageSelector } from "./CarMileageSelector";
import { CarPriceSelector } from "./CarPriceSelector";

import {
  CarFilterContainer,
  CarFilterSubmitButtonStyleBase,
} from "./CarFilterStyle";

const CarFilter = ({ carBrands }) => {
  return (
    <CarFilterContainer>
      <CarBrandSelector carBrands={carBrands} />

      <CarMileageSelector />

      <CarPriceSelector />

      <CarFilterSubmitButtonStyleBase type="submit">
        Search
      </CarFilterSubmitButtonStyleBase>
    </CarFilterContainer>
  );
};

export { CarFilter };
