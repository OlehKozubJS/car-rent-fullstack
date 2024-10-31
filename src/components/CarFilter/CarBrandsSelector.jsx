import { useState, useEffect } from "react";

import cars from "../../advertsCars.json";
import makes from "../../makes.json";

import { SVGimage } from "../../images";

const CarBrandsSelector = ({}) => {
  const [carBrands] = useState(makes);
  const [carsInformation] = useState(makes);
  const [isCarBrandsOptions, setIsCarBrandsOptions] = useState(false);
  const [carBrand, setCarBrand] = useState("");

  const openCarBrandOptions = () => {
    setIsCarBrandsOptions(true);
  };

  const closeCarBrandOptions = () => {
    setIsCarBrandsOptions(false);
  };

  const handleCarBrand = (event) => {
    setCarBrand(event.target.value);
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
                <label htmlFor={carBrandIndex}>
                  <input
                    id={carBrandIndex}
                    type="radio"
                    name="carBrand"
                    value={carBrand}
                    onChange={handleCarBrand}
                  />
                  <span>{carBrand}</span>
                </label>
              </li>
            );
          })}
        </ul>
      )}
      {carBrand}
    </div>
  );
};

export { CarBrandsSelector };
