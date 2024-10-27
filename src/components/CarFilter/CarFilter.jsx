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
      <label htmlFor="from">
        <input id="" type="number" placeholder="" />
      </label>
      <label htmlFor="">
        <input id="" type="number" placeholder="" />
      </label>
      <ul>
        {carBrands.map((carBrand, carBrandIndex) => {
          return (
            <li key={carBrandIndex}>
              {carBrandIndex} {carBrand}
            </li>
          );
        })}
      </ul>
      <button type="submit">Search</button>
    </form>
  );
};

export { CarFilter };
