import { useState, useEffect } from "react";

import cars from "../../advertsCars.json";
import makes from "../../makes.json";

import { CarFilterOptionsSelector } from "./CarFilterOptionsSelector";

import { SVGimage } from "../../images";

const CarBrandsSelector = ({}) => {
  const [carBrands] = useState(makes);
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
        <CarFilterOptionsSelector
          options={carBrands}
          onChange={handleCarBrand}
        />
      )}
      {carBrand}
    </div>
  );
};

export { CarBrandsSelector };
