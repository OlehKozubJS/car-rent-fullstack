import {
  CarModalSubHeaderStyleBase,
  CarModalRentalItemsStyleBase,
  CarModalRentalItemStyleBase,
  CarModalRentalItemValueStyleBase,
} from "./CarModalStyles";

const CarModal = ({ rentalConditions, mileage, rentalPrice }) => {
  return (
    <>
      <CarModalSubHeaderStyleBase>
        Rental Conditions:{" "}
      </CarModalSubHeaderStyleBase>
      <CarModalRentalItemsStyleBase>
        <CarModalRentalItemStyleBase>
          Minimum age:{" "}
          <CarModalRentalItemValueStyleBase>
            {rentalConditions.split("\n")[0].split(" ")[2]}
          </CarModalRentalItemValueStyleBase>
        </CarModalRentalItemStyleBase>
        <CarModalRentalItemStyleBase>
          {rentalConditions.split("\n")[1]}
        </CarModalRentalItemStyleBase>
        <CarModalRentalItemStyleBase>
          {rentalConditions.split("\n")[2]}
        </CarModalRentalItemStyleBase>
        <CarModalRentalItemStyleBase>
          Mileage:{" "}
          <CarModalRentalItemValueStyleBase>
            {mileage}
          </CarModalRentalItemValueStyleBase>
        </CarModalRentalItemStyleBase>
        <CarModalRentalItemStyleBase>
          Price:{" "}
          <CarModalRentalItemValueStyleBase>
            {rentalPrice}
          </CarModalRentalItemValueStyleBase>
        </CarModalRentalItemStyleBase>
      </CarModalRentalItemsStyleBase>
    </>
  );
};

export { CarModal };
