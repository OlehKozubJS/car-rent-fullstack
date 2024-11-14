import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { getSelectedCars } from "../../hooks";

import { CarItem } from "./CarItem";

const CarGallery = () => {
  const [selectedCarsInformation] = useState([]);
  console.log(useSelector((state) => state));
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
