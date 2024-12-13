import { CarGalleryStyleBase } from "./CarGalleryStyles";

import { CarGalleryItem } from "./CarGalleryItem";

const CarGallery = ({ cars, onLearnMoreClick, onFavouriteClick }) => {
  return (
    <CarGalleryStyleBase>
      {cars.map((car, carIndex) => {
        return (
          <CarGalleryItem
            key={carIndex}
            car={car}
            onLearnMoreClick={onLearnMoreClick}
            onFavouriteClick={(carData) => {
              console.log(carData);
            }}
          />
        );
      })}
    </CarGalleryStyleBase>
  );
};

export { CarGallery };
