import { CarGalleryItemValueStyleBase } from "./imports";

import { CarGalleryHeaderStyleBase } from "./CarGalleryHeaderStyles";

const CarGalleryHeader = ({ make, year, model, rentalPrice }) => {
  return (
    <CarGalleryHeaderStyleBase>
      <span>{make}</span>{" "}
      <CarGalleryItemValueStyleBase>{model}</CarGalleryItemValueStyleBase>,{" "}
      <span>{year}</span>
      <CarGalleryItemValueStyleBase>{rentalPrice}</CarGalleryItemValueStyleBase>
      ,{" "}
    </CarGalleryHeaderStyleBase>
  );
};

export { CarGalleryHeader };
