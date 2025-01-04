import { useState, useEffect } from "react";

import {
  CarMileageSelectorLabelFromStyleBase,
  CarMileageSelectorLabelToStyleBase,
  CarMileageSelectorInputStyleBase,
  CarMileageSelectorDividerStyleBase,
} from "./CarMileageSelectorStyle";

import { CarFilterHeader } from "./imports";

const CarMileageSelector = ({ value, onChange }) => {
  return (
    <div>
      <CarFilterHeader>Car mileage / km</CarFilterHeader>
      <div style={{ display: "flex" }}>
        <CarMileageSelectorLabelFromStyleBase htmlFor="mileageFrom">
          <CarMileageSelectorInputStyleBase
            id="mileageFrom"
            type="text"
            placeholder="From"
          />
        </CarMileageSelectorLabelFromStyleBase>
        <CarMileageSelectorDividerStyleBase />
        <CarMileageSelectorLabelToStyleBase htmlFor="mileageTo">
          <CarMileageSelectorInputStyleBase
            id="mileageTo"
            type="text"
            placeholder="To"
          />
        </CarMileageSelectorLabelToStyleBase>
      </div>
    </div>
  );
};

export { CarMileageSelector };
