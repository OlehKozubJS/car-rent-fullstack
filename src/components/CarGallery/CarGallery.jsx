import { useState, useEffect } from "react";

import { CarItem } from "./CarItem";

const CarGallery = ({ cars }) => {
  return (
    <ul>
      {cars.map((car, carIndex) => {
        return <CarItem key={carIndex} carInformation={car} />;
      })}
    </ul>
  );
};

export { CarGallery };
