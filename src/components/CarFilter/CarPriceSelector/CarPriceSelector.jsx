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
      <CarFilterHeader>Car price / 1 hour / dollars</CarFilterHeader>
      <div style={{ display: "flex" }}>
        <CarPriceSelectorLabelFromStyleBase htmlFor="priceFrom">
          <CarPriceSelectorInputStyleBase
            id="priceFrom"
            type="text"
            placeholder="From"
          />
        </CarPriceSelectorLabelFromStyleBase>
        <CarPriceSelectorDividerStyleBase />
        <CarPriceSelectorLabelToStyleBase htmlFor="priceTo">
          <CarPriceSelectorInputStyleBase
            id="priceTo"
            type="text"
            placeholder="To"
          />
        </CarPriceSelectorLabelToStyleBase>
      </div>
    </div>
  );
};

export { CarPriceSelector };
