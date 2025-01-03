import { CarBrandSelector } from "./CarBrandSelector";
import { CarMileageSelector } from "./CarMileageSelector";

const CarFilter = ({ makesLocalData }) => {
  return (
    <form>
      <CarBrandSelector carBrands={makesLocalData} />

      <CarMileageSelector />

      <button type="submit">Search</button>
    </form>
  );
};

export { CarFilter };
