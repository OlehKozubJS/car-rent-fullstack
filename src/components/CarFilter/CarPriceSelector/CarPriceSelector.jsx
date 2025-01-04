import { useState, useEffect } from "react";

import {
  CarPriceSelectorLabelFromStyleBase,
  CarPriceSelectorLabelToStyleBase,
  CarPriceSelectorInputStyleBase,
  CarPriceSelectorDividerStyleBase,
} from "./CarPriceSelectorStyle";

import { CarFilterHeader } from "./imports";

const CarPriceSelector = ({ value, onChange }) => {
  return (
    <div>
      <CarFilterHeader>Car price / dollars</CarFilterHeader>
      <div style={{ display: "flex" }}>
        <CarPriceSelectorLabelFromStyleBase htmlFor="mileageFrom">
          <CarPriceSelectorInputStyleBase
            id="mileageFrom"
            type="text"
            placeholder="From"
          />
        </CarPriceSelectorLabelFromStyleBase>
        <CarPriceSelectorDividerStyleBase />
        <CarPriceSelectorLabelToStyleBase htmlFor="mileageTo">
          <CarPriceSelectorInputStyleBase
            id="mileageTo"
            type="text"
            placeholder="To"
          />
        </CarPriceSelectorLabelToStyleBase>
      </div>
    </div>
  );
};

export { CarPriceSelector };
