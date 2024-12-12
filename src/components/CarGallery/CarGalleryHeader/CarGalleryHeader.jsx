import { CarGalleryItemValueStyleBase } from "./imports";

import { CarGalleryHeaderStyleBase } from "./CarGalleryHeaderStyles";

const CarGalleryHeader = ({ make, year, model, rentalPrice }) => {
  return (
    <CarGalleryHeaderStyleBase>
      <span>
        <span>{make}</span>{" "}
        <CarGalleryItemValueStyleBase>{model}</CarGalleryItemValueStyleBase>,{" "}
        <span>{year}</span>
      </span>
      <CarGalleryItemValueStyleBase>{rentalPrice}</CarGalleryItemValueStyleBase>
    </CarGalleryHeaderStyleBase>
  );
};

export { CarGalleryHeader };
