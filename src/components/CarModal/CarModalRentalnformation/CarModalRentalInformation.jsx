import {
  CarModalSubHeaderStyleBase,
  CarModalRentalItemsStyleBase,
  CarModalRentalItemStyleBase,
  CarModalRentalItemValueStyleBase,
} from "./CarModalStyles";

const CarModal = ({ car, onClose }) => {
  return (
    <CarModalRentalItemsStyleBase>
      <CarModalRentalItemStyleBase>
        Minimum age:{" "}
        <CarModalRentalItemValueStyleBase>
          {car.rentalConditions.split("\n")[0].split(" ")[2]}
        </CarModalRentalItemValueStyleBase>
      </CarModalRentalItemStyleBase>
      <CarModalRentalItemStyleBase>
        {car.rentalConditions.split("\n")[1]}
      </CarModalRentalItemStyleBase>
      <CarModalRentalItemStyleBase>
        {car.rentalConditions.split("\n")[2]}
      </CarModalRentalItemStyleBase>
      <CarModalRentalItemStyleBase>
        Mileage:{" "}
        <CarModalRentalItemValueStyleBase>
          {car.mileage}
        </CarModalRentalItemValueStyleBase>
      </CarModalRentalItemStyleBase>
      <CarModalRentalItemStyleBase>
        Price:{" "}
        <CarModalRentalItemValueStyleBase>
          {car.rentalPrice}
        </CarModalRentalItemValueStyleBase>
      </CarModalRentalItemStyleBase>
    </CarModalRentalItemsStyleBase>
  );
};

export { CarModal };
