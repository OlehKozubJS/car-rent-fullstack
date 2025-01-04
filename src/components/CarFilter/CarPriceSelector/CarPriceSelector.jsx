import { useState, useEffect } from "react";

import {
  CarPriceSelectorLabelFromStyleBase,
  CarPriceSelectorLabelToStyleBase,
  CarPriceSelectorInputStyleBase,
  CarPriceSelectorDividerStyleBase,
} from "./CarPriceSelectorStyle";

const CarPriceSelector = () => {
  return (
    <div>
      <h3>Car price / dollars</h3>
      <div style={{ display: "flex" }}>
        <CarPriceSelectorLabelFromStyleBase htmlFor="mileageFrom">
          <CarPriceSelectorInputStyleBase
            id="mileageFrom"
            type="number"
            placeholder="From"
          />
        </CarPriceSelectorLabelFromStyleBase>
        <CarPriceSelectorDividerStyleBase />
        <CarPriceSelectorLabelToStyleBase htmlFor="mileageTo">
          <CarPriceSelectorInputStyleBase
            id="mileageTo"
            type="number"
            placeholder="To"
          />
        </CarPriceSelectorLabelToStyleBase>
      </div>
    </div>
  );
};

export { CarPriceSelector };
