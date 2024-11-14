import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { SVGimage } from "../../images";
import { CarFilterOptions } from "./CarFilterOptions";
import { CarMileageSelector } from "./CarMileageSelector";

const CarFilter = ({}) => {
  return (
    <form>
      <CarFilterOptions carBrands={makes} />

      <CarMileageSelector />

      <button type="submit">Search</button>
    </form>
  );
};

export { CarFilter };
