import { useState, useEffect } from "react";

import cars from "../../advertsCars.json";
import makes from "../../makes.json";

import { SVGimage } from "../../images";

const CarBrandsSelector = ({}) => {
  const [carBrands] = useState(makes);
  const [isCarBrandsOptions, setIsCarBrandsOptions] = useState(false);

  const openCarBrandOptions = () => {
    setIsCarBrandsOptions(true);
  };

  const closeCarBrandOptions = () => {
    setIsCarBrandsOptions(false);
  };

  return (
    <div>
      <h3>Car brand</h3>
      <label htmlFor="carBrandSearch">
        <input id="carBrandSearch" type="text" placeholder="Enter the text" />

        <button
          type="button"
          onClick={
            isCarBrandsOptions ? closeCarBrandOptions : openCarBrandOptions
          }
        >
          {<SVGimage name={isCarBrandsOptions ? "up" : "down"} />}
        </button>
      </label>
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
  );
};

export { CarBrandsSelector };
