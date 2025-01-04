import { useState, useEffect } from "react";

import {
  CarMileageSelectorLabelFromStyleBase,
  CarMileageSelectorLabelToStyleBase,
  CarMileageSelectorInputStyleBase,
  CarMileageSelectorDividerStyleBase,
} from "./CarMileageSelectorStyle";

import { CarFilterHeader } from "./imports";

const CarMileageSelector = ({
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
}) => {
  return (
    <div>
      <CarFilterHeader>Car mileage / km</CarFilterHeader>
      <div style={{ display: "flex" }}>
        <CarMileageSelectorLabelFromStyleBase htmlFor="mileageFrom">
          <CarMileageSelectorInputStyleBase
            id="mileageFrom"
            type="text"
            placeholder="From"
            value={minValue}
            onChange={onMinChange}
          />
        </CarMileageSelectorLabelFromStyleBase>
        <CarMileageSelectorDividerStyleBase />
        <CarMileageSelectorLabelToStyleBase htmlFor="mileageTo">
          <CarMileageSelectorInputStyleBase
            id="mileageTo"
            type="text"
            placeholder="To"
            value={maxValue}
            onChange={onMaxChange}
          />
        </CarMileageSelectorLabelToStyleBase>
      </div>
    </div>
  );
};

export { CarMileageSelector };
