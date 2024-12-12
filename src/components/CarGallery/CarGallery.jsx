import {} from "./CarGalleryStyles";

import { CarItem } from "./CarItem";

const CarGallery = ({ cars, onClick }) => {
  return (
    <ul>
      {cars.map((car, carIndex) => {
        return <CarItem key={carIndex} car={car} onClick={onClick} />;
      })}
    </ul>
  );
};

export { CarGallery };
