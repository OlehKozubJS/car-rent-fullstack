import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCarModel } from "../../hooks";

import { CarFilterOptions } from "./CarFilterOptions";
import { CarMileageSelector } from "./CarMileageSelector";

const CarFilter = ({}) => {
  const [selectedCarBrand] = useState(useSelector(getCarModel));

  return (
    <form>
      <CarFilterOptions carBrands={makes} />

      <CarMileageSelector />

      <button type="submit">Search</button>
    </form>
  );
};

export { CarFilter };
