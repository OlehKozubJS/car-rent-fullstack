import { CarGalleryItemValueStyleBase } from "./imports";

import { CarGalleryHeaderStyleBase } from "./CarGalleryHeaderStyles";

const CarGalleryHeader = ({ make, year, model }) => {
  return (
    <CarGalleryHeaderStyleBase>
      <span>{make}</span>{" "}
      <CarGalleryItemValueStyleBase>{model}</CarGalleryItemValueStyleBase>,{" "}
      <span>{year}</span>
    </CarGalleryHeaderStyleBase>
  );
};

export { CarGalleryHeader };
