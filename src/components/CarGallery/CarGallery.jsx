import {} from "./CarGalleryStyles";

import { CarGalleryItem } from "./CarGalleryItem";

const CarGallery = ({ cars, onClick }) => {
  return (
    <ul>
      {cars.map((car, carIndex) => {
        return <CaGalleryItem key={carIndex} car={car} onClick={onClick} />;
      })}
    </ul>
  );
};

export { CarGallery };
