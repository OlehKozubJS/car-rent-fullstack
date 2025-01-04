import { CarBrandSelector } from "./CarBrandSelector";
import { CarMileageSelector } from "./CarMileageSelector";
import { CarPriceSelector } from "./CarPriceSelector";

const CarFilter = ({ cars, carBrands }) => {
  return (
    <form>
      <CarBrandSelector carBrands={carBrands} />

      <CarMileageSelector cars={cars} />

      <CarPriceSelector />

      <button type="submit">Search</button>
    </form>
  );
};

export { CarFilter };
