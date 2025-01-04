import { useState, useEffect } from "react";

import {
  CarMileageSelectorLabelFromStyleBase,
  CarMileageSelectorLabelToStyleBase,
  CarMileageSelectorInputStyleBase,
  CarMileageSelectorDividerStyleBase,
} from "./CarMileageSelectorStyle";

import { CarFilterHeader } from "./imports";

const CarMileageSelector = ({ value, onMinChange, onMaxChange }) => {
  return (
    <div>
      <CarFilterHeader>Car mileage / km</CarFilterHeader>
      <div style={{ display: "flex" }}>
        <CarMileageSelectorLabelFromStyleBase htmlFor="mileageFrom">
          <CarMileageSelectorInputStyleBase
            id="mileageFrom"
            type="text"
            placeholder="From"
            onChange={onMinChange}
          />
        </CarMileageSelectorLabelFromStyleBase>
        <CarMileageSelectorDividerStyleBase />
        <CarMileageSelectorLabelToStyleBase htmlFor="mileageTo">
          <CarMileageSelectorInputStyleBase
            id="mileageTo"
            type="text"
            placeholder="To"
            onChange={onMaxChange}
          />
        </CarMileageSelectorLabelToStyleBase>
      </div>
    </div>
  );
};

export { CarMileageSelector };
