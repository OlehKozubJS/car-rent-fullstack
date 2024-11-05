import { useState, useEffect } from "react";

import makes from "../../../makes.json";

import { CarFilterOptionsMenu } from "./CarFilterOptionsMenu";

import { CarFilterOptionsStyles } from "./CarFilterOptionsStyles";
import { SVGimage } from "../../../images";

const CarFilterOptions = ({}) => {
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
      <CarFilterOptionsStyles />
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
        <CarFilterOptionsMenu options={carBrands} onChange={handleCarBrand} />
      )}
      {carBrand}
    </div>
  );
};

export { CarFilterOptions };
