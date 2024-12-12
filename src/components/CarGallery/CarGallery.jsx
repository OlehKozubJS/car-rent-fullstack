import { useState, useEffect } from "react";

import { CarItem } from "./CarItem";

const CarGallery = () => {
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
