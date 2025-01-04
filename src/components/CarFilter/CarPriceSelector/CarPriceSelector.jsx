import { useState, useEffect } from "react";

import {
  CarPriceSelectorLabelFromStyleBase,
  CarPriceSelectorLabelToStyleBase,
  CarPriceSelectorInputStyleBase,
  CarPriceSelectorDividerStyleBase,
} from "./CarPriceSelectorStyle";

import { CarFilterHeader } from "./imports";

const CarPriceSelector = ({ minValue, maxValue, onMinChange, onMaxChange }) => {
  return (
    <div>
      <CarFilterHeader>Car price / 1 hour / dollars</CarFilterHeader>
      <div style={{ display: "flex" }}>
        <CarPriceSelectorLabelFromStyleBase htmlFor="priceFrom">
          <CarPriceSelectorInputStyleBase
            id="priceFrom"
            type="text"
            placeholder="From"
            value={minValue}
            onChange={onMinChange}
          />
        </CarPriceSelectorLabelFromStyleBase>
        <CarPriceSelectorDividerStyleBase />
        <CarPriceSelectorLabelToStyleBase htmlFor="priceTo">
          <CarPriceSelectorInputStyleBase
            id="priceTo"
            type="text"
            placeholder="To"
            value={maxValue}
            onChange={onMaxChange}
          />
        </CarPriceSelectorLabelToStyleBase>
      </div>
    </div>
  );
};

export { CarPriceSelector };
