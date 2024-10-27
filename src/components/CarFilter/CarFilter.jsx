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
      <label htmlFor="">
        <input type="number" />
      </label>
      <label htmlFor="">
        <input type="number" />
      </label>
      <ul>
        {carBrands.map((carBrand) => {
          return <li key={carBrand}>{carBrand}</li>;
        })}
      </ul>
      <button type="submit">Search</button>
    </form>
  );
};

export { CarFilter };
