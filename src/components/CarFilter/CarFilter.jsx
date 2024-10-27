import { useState, useEffect } from "react";

import cars from "../../advertsCars.json";
import makes from "../../makes.json";

import { SVGimage } from "../../images";
import { CarBrandsSelector } from "./CarBrandsSelector";

const CarFilter = ({}) => {
  const [carBrands, setCarBrands] = useState(makes);
  const [isCarBrandsOptions, setIsCarBrandsOptions] = useState(false);

  const openCarBrandOptions = () => {
    setIsCarBrandsOptions(true);
  };

  const closeCarBrandOptions = () => {
    setIsCarBrandsOptions(false);
  };

  return (
    <form>
      <CarBrandsSelector />

      <h3>Car mileage / km</h3>
      <label htmlFor="mileageFrom">
        <input id="mileageFrom" type="number" placeholder="From" />
      </label>

      <label htmlFor="mileageTo">
        <input id="mileageTo" type="number" placeholder="To" />
      </label>

      <button type="submit">Search</button>
    </form>
  );
};

export { CarFilter };
