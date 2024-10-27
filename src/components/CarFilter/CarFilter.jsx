import { useState, useEffect } from "react";

import cars from "../../advertsCars.json";
import carBrands from "../../makes.json";

import { SVGimage } from "../../images";

const CarFilter = ({}) => {
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
      <button type="submit">Search</button>
    </form>
  );
};

export { CarFilter };
