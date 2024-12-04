import { useState, useEffect } from "react";

import { carsLocalData, makesLocalData } from "./imports";

import { CarFilterOptions } from "./CarFilterOptions";
import { CarMileageSelector } from "./CarMileageSelector";

const CarFilter = () => {
  return (
    <form>
      <CarFilterOptions carBrands={makesLocalData} />

      <CarMileageSelector />

      <button type="submit">Search</button>
    </form>
  );
};

export { CarFilter };
