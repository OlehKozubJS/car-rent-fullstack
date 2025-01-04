import { useState, useEffect } from "react";

import {
  CarPriceSelectorLabelFromStyleBase,
  CarPriceSelectorLabelToStyleBase,
  CarPriceSelectorInputStyleBase,
  CarPriceSelectorDividerStyleBase,
} from "./CarPriceSelectorStyle";

const CarPriceSelector = ({ cars }) => {
  const [carBrands] = useState(cars);

  return (
    <div>
      <h3>Car price / dollars</h3>

      <CarPriceSelectorLabelFromStyleBase htmlFor="mileageFrom">
        <CarPriceSelectorInputStyleBase
          id="mileageFrom"
          type="number"
          placeholder="From"
        />
      </CarPriceSelectorLabelFromStyleBase>

      <CarPriceSelectorLabelToStyleBase htmlFor="mileageTo">
        <CarPriceSelectorInputStyleBase
          id="mileageTo"
          type="number"
          placeholder="To"
        />
      </CarPriceSelectorLabelToStyleBase>
    </div>
  );
};

export { CarPriceSelector };
