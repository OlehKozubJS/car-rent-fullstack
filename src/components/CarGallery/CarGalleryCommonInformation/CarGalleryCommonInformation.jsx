import { CarGalleryInformationDivider } from "../CarGalleryInformationDivider";

import {
  CarGalleryItemsStyleBase,
  CarGalleryItemStyleBase,
  CarGalleryItemValueStyleBase,
} from "./imports";

const CarGalleryCommonInformation = ({
  address,
  id,
  year,
  type,
  fuelConsumption,
  engineSize,
}) => {
  return (
    <CarGalleryItemsStyleBase>
      <CarGalleryItemStyleBase>
        {address.split(", ")[1]}
      </CarGalleryItemStyleBase>
      <CarGalleryInformationDivider />
      <CarGalleryItemStyleBase>
        {address.split(", ")[2]}
      </CarGalleryItemStyleBase>
      <CarGalleryInformationDivider />
      <CarGalleryItemStyleBase>
        Id: <CarGalleryItemValueStyleBase>{id}</CarGalleryItemValueStyleBase>
      </CarGalleryItemStyleBase>
      <CarGalleryInformationDivider />
      <CarGalleryItemStyleBase>
        Year:{" "}
        <CarGalleryItemValueStyleBase>{year}</CarGalleryItemValueStyleBase>
      </CarGalleryItemStyleBase>
      <CarGalleryInformationDivider />
      <CarGalleryItemStyleBase>
        Type:{" "}
        <CarGalleryItemValueStyleBase>{type}</CarGalleryItemValueStyleBase>
      </CarGalleryItemStyleBase>
      <CarGalleryInformationDivider />
      <CarGalleryItemStyleBase>
        Fuel Consumption:{" "}
        <CarGalleryItemValueStyleBase>
          {fuelConsumption}
        </CarGalleryItemValueStyleBase>
      </CarGalleryItemStyleBase>
      <CarGalleryInformationDivider />
      <CarGalleryItemStyleBase>
        Engine Size:{" "}
        <CarGalleryItemValueStyleBase>
          {engineSize}
        </CarGalleryItemValueStyleBase>
      </CarGalleryItemStyleBase>
    </CarGalleryItemsStyleBase>
  );
};

export { CarGalleryCommonInformation };
