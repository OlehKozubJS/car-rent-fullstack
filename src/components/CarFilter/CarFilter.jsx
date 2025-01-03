import { CarBrandSelector } from "./CarBrandSelector";
import { CarMileageSelector } from "./CarMileageSelector";

const CarFilter = ({ cars, carBrands }) => {
  return (
    <form>
      <CarBrandSelector cars={carBrands} />

      <CarMileageSelector cars={cars} />

      <button type="submit">Search</button>
    </form>
  );
};

export { CarFilter };
