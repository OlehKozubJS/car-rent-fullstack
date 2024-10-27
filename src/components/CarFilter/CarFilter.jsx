import { useState, useEffect } from "react";

import cars from "../../advertsCars.json";
import makes from "../../makes.json";

import { SVGimage } from "../../images";

const CarFilter = ({}) => {
  const [carBrands, setCarBrands] = useState(makes);

  return (
    <form>
      <div></div>
      <div></div>
      <label htmlFor="mileageFrom">
        <input id="mileageFrom" type="number" placeholder="from" />
      </label>
      <label htmlFor="mileageTo">
        <input id="mileageTo" type="number" placeholder="to" />
      </label>
      <ul>
        {carBrands.map((carBrand, carBrandIndex) => {
          return (
            <li key={carBrandIndex}>
              <button type="button" value={}>{carBrand}</button>
            </li>
          );
        })}
      </ul>
      <button type="submit">Search</button>
    </form>
  );
};

export { CarFilter };
