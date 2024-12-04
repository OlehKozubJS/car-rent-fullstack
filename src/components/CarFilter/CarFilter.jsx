import { useState, useEffect } from "react";

import { carsLocalData, makesLocalData } from "./imports";

import { CarBrandSelector } from "./CarBrandSelector";
import { CarMileageSelector } from "./CarMileageSelector";

const CarFilter = () => {
  return (
    <form>
      <CarBrandSelector carBrands={makesLocalData} />

      <CarMileageSelector />

      <button type="submit">Search</button>
    </form>
  );
};

export { CarFilter };
