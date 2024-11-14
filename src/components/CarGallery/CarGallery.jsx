import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { getSelectedCars } from "../../hooks";

import { CarItem } from "./CarItem";
import { SVGimage } from "../../images";

const CarGallery = ({}) => {
  const [selectedCarsInformation] = useState(useSelector(getSelectedCars));

  return (
    <ul>
      {selectedCarsInformation.map(
        (selectedCarInformation, selectedCarIndex) => {
          return (
            <CarItem
              key={selectedCarIndex}
              carInformation={selectedCarInformation}
            />
          );
        }
      )}
    </ul>
  );
};

export { CarGallery };
