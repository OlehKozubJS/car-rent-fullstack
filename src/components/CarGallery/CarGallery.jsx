import { useState, useEffect } from "react";

import { CarItem } from "./CarItem";

const CarGallery = ({ cars, onClick = null }) => {
  return <>{JSON.stringify(cars)}</>;
};

export { CarGallery };
/*

    <ul>
      {cars.map((car, carIndex) => {
        return (
          <CarItem key={carIndex} carInformation={car} onClick={onClick} />
        );
      })}
    </ul>

*/
