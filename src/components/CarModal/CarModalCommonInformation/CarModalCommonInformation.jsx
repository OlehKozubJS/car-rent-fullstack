import {
  CarModalItemsStyleBase,
  CarModalItemStyleBase,
  CarModalItemValueStyleBase,
} from "./imports";

const CarModal = ({ address, id, type, fuelConsumption }) => {
  return (
    <CarModalItemsStyleBase>
      <CarModalItemStyleBase>
        {car.address.split(", ")[1]}
      </CarModalItemStyleBase>
      <CarModalItemStyleBase>
        {car.address.split(", ")[2]}
      </CarModalItemStyleBase>
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
        <CarModalItemValueStyleBase>
          {car.engineSize}
        </CarModalItemValueStyleBase>
      </CarModalItemStyleBase>
    </CarModalItemsStyleBase>
  );
};

export { CarModal };
