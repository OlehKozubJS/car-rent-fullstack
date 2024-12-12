import { CarGalleryItemValueStyleBase } from "./imports";

import { CarGalleryHeaderStyleBase } from "./CarGalleryHeaderStyles";

const CarGalleryHeader = ({ make, year, model, rentalPrice }) => {
  return (
    <CarGalleryHeaderStyleBase>
      <div>
        <span>{make}</span>{" "}
        <CarGalleryItemValueStyleBase>{model}</CarGalleryItemValueStyleBase>,{" "}
        <span>{year}</span>
      </div>
      <CarGalleryItemValueStyleBase>{rentalPrice}</CarGalleryItemValueStyleBase>
    </CarGalleryHeaderStyleBase>
  );
};

export { CarGalleryHeader };
