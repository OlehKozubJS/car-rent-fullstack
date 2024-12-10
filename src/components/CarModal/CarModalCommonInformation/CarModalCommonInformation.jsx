import {
  CarModalItemsStyleBase,
  CarModalItemStyleBase,
  CarModalItemValueStyleBase,
} from "./imports";

const CarModalCommonInformation = ({
  address,
  id,
  type,
  fuelConsumption,
  engineSize,
}) => {
  return (
    <CarModalItemsStyleBase>
      <CarModalItemStyleBase>{address.split(", ")[1]}</CarModalItemStyleBase>
      <CarModalItemStyleBase>{address.split(", ")[2]}</CarModalItemStyleBase>
      <CarModalItemStyleBase>
        Id: <CarModalItemValueStyleBase>{id}</CarModalItemValueStyleBase>
      </CarModalItemStyleBase>
      <CarModalItemStyleBase>
        Year: <CarModalItemValueStyleBase>{year}</CarModalItemValueStyleBase>
      </CarModalItemStyleBase>
      <CarModalItemStyleBase>
        Type: <CarModalItemValueStyleBase>{type}</CarModalItemValueStyleBase>
      </CarModalItemStyleBase>
      <CarModalItemStyleBase>
        Fuel Consumption:{" "}
        <CarModalItemValueStyleBase>
          {fuelConsumption}
        </CarModalItemValueStyleBase>
      </CarModalItemStyleBase>
      <CarModalItemStyleBase>
        Engine Size:{" "}
        <CarModalItemValueStyleBase>{engineSize}</CarModalItemValueStyleBase>
      </CarModalItemStyleBase>
    </CarModalItemsStyleBase>
  );
};

export { CarModalCommonInformation };
