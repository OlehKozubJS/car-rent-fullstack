import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { cars, makes } from "./imports";

import {
  getCarModel,
  getSelectedCars,
  selectedCars,
  setSelectedCars,
} from "../../hooks";

import { CarFilterOptions } from "./CarFilterOptions";
import { CarMileageSelector } from "./CarMileageSelector";

const CarFilter = ({}) => {
  const dispatch = useDispatch();

  const [carModel] = useState(useSelector(getCarModel));

  dispatch(setSelectedCars({ cars, carModel }));

  return (
    <form>
      <CarFilterOptions carBrands={makes} />

      <CarMileageSelector />

      <button type="submit">Search</button>
    </form>
  );
};

export { CarFilter };
