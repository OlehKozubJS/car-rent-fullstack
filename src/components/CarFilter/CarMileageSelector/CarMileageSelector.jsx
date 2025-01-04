import { useState, useEffect } from "react";

import {
  CarMileageSelectorLabelFromStyleBase,
  CarMileageSelectorLabelToStyleBase,
  CarMileageSelectorInputStyleBase,
  CarMileageSelectorDividerStyleBase,
} from "./CarMileageSelectorStyle";

const CarMileageSelector = ({ cars }) => {
  const [carBrands] = useState(cars);

  return (
    <div>
      <h3>Car mileage / km</h3>
      <div style={{ display: "flex" }}>
        <CarMileageSelectorLabelFromStyleBase htmlFor="mileageFrom">
          <CarMileageSelectorInputStyleBase
            id="mileageFrom"
            type="number"
            placeholder="From"
          />
        </CarMileageSelectorLabelFromStyleBase>
        <CarMileageSelectorDividerStyleBase />
        <CarMileageSelectorLabelToStyleBase htmlFor="mileageTo">
          <input id="mileageTo" type="number" placeholder="To" />
        </CarMileageSelectorLabelToStyleBase>
      </div>
    </div>
  );
};

export { CarMileageSelector };
