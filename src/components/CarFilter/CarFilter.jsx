import { CarBrandSelector } from "./CarBrandSelector";
import { CarMileageSelector } from "./CarMileageSelector";

const CarFilter = ({ cars }) => {
  return (
    <form>
      <CarBrandSelector cars={cars} />

      <CarMileageSelector cars={cars} />

      <button type="submit">Search</button>
    </form>
  );
};

export { CarFilter };
