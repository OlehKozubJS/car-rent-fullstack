import { useState, useEffect } from "react";

import { CarGalleryContainerStyleBase } from "./CarGalleryStyles";

import { SVGimage } from "../../images";

const CarItem = ({ car, onClick }) => {
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
    <li>
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
      <button onClick={handleClick}>Learn more</button>
    </li>
  );
};

export { CarItem };
