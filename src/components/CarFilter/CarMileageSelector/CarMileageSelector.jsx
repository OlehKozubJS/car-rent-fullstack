import { useState, useEffect } from "react";

import {
  CarMileageSelectorLabelFromStyleBase,
  CarMileageSelectorLabelToStyleBase,
  CarMileageSelectorDividerStyleBase,
} from "./CarMileageSelectorStyle";

const CarMileageSelector = ({ cars }) => {
  const [carBrands] = useState(cars);

  return (
    <div>
      <h3>Car mileage / km</h3>

      <CarMileageSelectorLabelFromStyleBase htmlFor="mileageFrom">
        <input id="mileageFrom" type="number" placeholder="From" />
      </CarMileageSelectorLabelFromStyleBase>
      <CarMileageSelectorDividerStyleBase />
      <CarMileageSelectorLabelToStyleBase htmlFor="mileageTo">
        <input id="mileageTo" type="number" placeholder="To" />
      </CarMileageSelectorLabelToStyleBase>
    </div>
  );
};

export { CarMileageSelector };
