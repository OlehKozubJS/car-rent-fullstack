import { useState, useEffect } from "react";

import { CarItem } from "./CarItem";

const CarGallery = ({ cars, onClick }) => {
  return (
    <ul>
      {cars.map((car, carIndex) => {
        return (
          <CarItem key={carIndex} carInformation={car} onClick={onClick} />
        );
      })}
    </ul>
  );
};

export { CarGallery };
