import { useState, useEffect } from "react";

import { CarBrandSelectorInputStyleBase } from "./CarMileageSelectorStyle";

const CarMileageSelector = ({ cars }) => {
  const [carBrands] = useState(cars);

  return (
    <div>
      <h3>Car mileage / km</h3>

      <CarBrandSelectorInputStyleBase htmlFor="mileageFrom">
        <input id="mileageFrom" type="number" placeholder="From" />
      </CarBrandSelectorInputStyleBase>

      <label htmlFor="mileageTo">
        <input id="mileageTo" type="number" placeholder="To" />
      </label>
    </div>
  );
};

export { CarMileageSelector };
