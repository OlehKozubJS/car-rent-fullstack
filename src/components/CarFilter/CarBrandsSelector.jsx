import { useState, useEffect } from "react";

import cars from "../../advertsCars.json";
import makes from "../../makes.json";

import { SVGimage } from "../../images";

const CarBrandsSelector = ({}) => {
  const [carBrands, setCarBrands] = useState(makes);
  const [isCarBrandsOptions, setIsCarBrandsOptions] = useState(false);

  const openCarBrandOptions = () => {
    setIsCarBrandsOptions(true);
  };

  const closeCarBrandOptions = () => {
    setIsCarBrandsOptions(false);
  };

  return (
    <div>
      <label htmlFor="carBrandSearch">
        <input id="carBrandSearch" type="text" placeholder="Enter the text" />
      </label>
      <button
        type="button"
        onClick={
          isCarBrandsOptions ? closeCarBrandOptions : openCarBrandOptions
        }
      >
        {<SVGimage name={isCarBrandsOptions ? "up" : "down"} />}
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
  );
};

export { CarBrandsSelector };
