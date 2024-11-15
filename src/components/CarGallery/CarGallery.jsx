import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { getSelectedCars } from "../../hooks";

import { CarItem } from "./CarItem";

const CarGallery = () => {
  const selectedCarsInformation = useSelector(getSelectedCars);

  return (
    <>
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
    </>
  );
};

export { CarGallery };
