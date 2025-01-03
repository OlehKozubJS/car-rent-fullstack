import { CarBrandSelector } from "./CarBrandSelector";
import { CarMileageSelector } from "./CarMileageSelector";

const CarFilter = ({ cars, carBrands }) => {
  return (
    <form>
      <CarBrandSelector carBrands={carBrands} />

      <CarMileageSelector cars={cars} />

      <button type="submit">Search</button>
    </form>
  );
};

export { CarFilter };
