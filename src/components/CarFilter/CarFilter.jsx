import { useState, useEffect } from "react";

import cars from "../../advertsCars.json";
import makes from "../../makes.json";

import { SVGimage } from "../../images";

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
      <div></div>
      <div></div>
      <label htmlFor="mileageFrom">
        <input id="mileageFrom" type="number" placeholder="from" />
      </label>
      <label htmlFor="mileageTo">
        <input id="mileageTo" type="number" placeholder="to" />
      </label>
      <div>
        <button
          type="button"
          onClick={
            isCarBrandsOptions ? closeCarBrandOptions : openCarBrandOptions
          }
        >
          {}
        </button>
        {isCarBrandsOptions && (
          <ul>
            {carBrands.map((carBrand, carBrandIndex) => {
              return (
                <li key={carBrandIndex}>
                  <button type="button" value={carBrand}>
                    {carBrand}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export { CarFilter };
