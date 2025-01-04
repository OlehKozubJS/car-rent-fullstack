import { useState, useEffect } from "react";

import { CarMileageSelectorLabelStyleBase } from "./CarMileageSelectorStyle";

const CarMileageSelector = ({ cars }) => {
  const [carBrands] = useState(cars);

  return (
    <div>
      <h3>Car mileage / km</h3>

      <CarMileageSelectorLabelStyleBase htmlFor="mileageFrom">
        <input id="mileageFrom" type="number" placeholder="From" />
      </CarMileageSelectorLabelStyleBase>

      <CarMileageSelectorLabelStyleBase htmlFor="mileageTo">
        <input id="mileageTo" type="number" placeholder="To" />
      </CarMileageSelectorLabelStyleBase>
    </div>
  );
};

export { CarMileageSelector };
