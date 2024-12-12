import { useState, useEffect } from "react";

import { CarGalleryHeader } from "./CarGalleryHeader";
import { CarGalleryCommonInformation } from "./CarGalleryCommonInformation";
import { CarGalleryAccessoriesInformation } from "./CarGalleryAccessoriesInformation";

import {
  CarGalleryItemStyleBase,
  CarGalleryImageStyleBase,
  CarGalleryButtonStyleBase,
} from "./CarGalleryStyles";

import { SVGimage } from "../../images";

const CarGalleryItem = ({ car, onClick }) => {
  const [ifFavourite, setIsFavourite] = useState(false);

  const markAsFavourite = () => {
    setIsFavourite(true);
  };

  const unMarkAsFavourite = () => {
    setIsFavourite(false);
  };

  const handleClick = () => {
    onClick(car);
  };

  return (
    <CarGalleryItemStyleBase>
      <CarGalleryImageStyleBase src={car.img} alt="" />
      <CarGalleryHeader make={car.make} model={car.model} year={car.year} />
      <CarGalleryCommonInformation
        address={car.address}
        id={car.id}
        year={car.year}
        type={car.type}
        fuelConsumption={car.fuelConsumption}
        engineSize={car.engineSize}
      />
      <CarGalleryAccessoriesInformation
        accessories={car.accessories}
        functionalities={car.functionalities}
      />
      <CarGalleryButtonStyleBase onClick={handleClick}>
        Learn more
      </CarGalleryButtonStyleBase>
    </CarGalleryItemStyleBase>
  );
};

export { CarGalleryItem };
