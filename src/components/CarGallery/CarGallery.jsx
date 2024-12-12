import { CarGalleryStyleBase } from "./CarGalleryStyles";

import { CarGalleryItem } from "./CarGalleryItem";

const CarGallery = ({ cars, onClick }) => {
  return (
    <CarGalleryStyleBase>
      {cars.map((car, carIndex) => {
        return <CarGalleryItem key={carIndex} car={car} onClick={onClick} />;
      })}
    </CarGalleryStyleBase>
  );
};

export { CarGallery };
