import { useState, useEffect } from "react";

import { makes } from "./imports";

import { SVGimage } from "../../images";

const CarMileageSelector = ({}) => {
  const [carBrands] = useState(makes);

  return (
    <div>
      <h3>Car mileage / km</h3>

      <label htmlFor="mileageFrom">
        <input id="mileageFrom" type="number" placeholder="From" />
      </label>

      <label htmlFor="mileageTo">
        <input id="mileageTo" type="number" placeholder="To" />
      </label>
    </div>
  );
};

export { CarMileageSelector };
