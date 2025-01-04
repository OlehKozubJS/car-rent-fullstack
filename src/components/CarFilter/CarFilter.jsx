import { CarBrandSelector } from "./CarBrandSelector";
import { CarMileageSelector } from "./CarMileageSelector";
import { CarPriceSelector } from "./CarPriceSelector";

import { CarFilterContainer } from "./CarFilterStyle";

const CarFilter = ({ cars, carBrands }) => {
  return (
    <form>
      <CarBrandSelector carBrands={carBrands} />

      <CarMileageSelector />

      <CarPriceSelector />

      <button type="submit">Search</button>
    </form>
  );
};

export { CarFilter };
