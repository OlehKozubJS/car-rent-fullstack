import { useState, useEffect } from "react";

import { CarGalleryHeader } from "./CarGalleryHeader";
import { CarGalleryCommonInformation } from "./CarGalleryCommonInformation";
import { CarGalleryAccessoriesInformation } from "./CarGalleryAccessoriesInformation";

import {
  CarGalleryItemContainerStyleBase,
  CarGalleryImageContainerStyleBase,
  CarGalleryImageStyleBase,
  CarGalleryFavouriteButtonStyleBase,
  CarGalleryButtonStyleBase,
} from "./CarGalleryStyles";

import { SVGimage } from "../imports";

const CarGalleryItem = ({ car, onLearnMoreClick, onFavouriteClick }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const markAsFavourite = () => {
    onFavouriteClick(car);
    setIsFavourite(true);
  };

  const unMarkAsFavourite = () => {
    setIsFavourite(false);
  };

  const handleClick = () => {
    onLearnMoreClick(car);
  };

  useEffect(() => {
    onFavouriteClick(car);
  }, [isFavourite]);
  {
    car, isFavourite;
  }

  return (
    <CarGalleryItemContainerStyleBase>
      <div>
        <CarGalleryImageContainerStyleBase>
          <CarGalleryImageStyleBase src={car.photoLink} alt="" />
          <CarGalleryFavouriteButtonStyleBase
            type="button"
            onClick={isFavourite ? unMarkAsFavourite : markAsFavourite}
          >
            <SVGimage name={isFavourite ? "fav" : "norm"} />
          </CarGalleryFavouriteButtonStyleBase>
        </CarGalleryImageContainerStyleBase>
        <CarGalleryHeader
          make={car.make}
          model={car.model}
          year={car.year}
          rentalPrice={car.rentalPrice}
        />
      </div>
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
    </CarGalleryItemContainerStyleBase>
  );
};

export { CarGalleryItem };
