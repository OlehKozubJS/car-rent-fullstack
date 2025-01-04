import { CarModalSubHeaderStyleBase } from "./imports";

import {
  CarModalRentalItemsStyleBase,
  CarModalRentalItemStyleBase,
  CarModalRentalItemValueStyleBase,
} from "./CarModalRentalInformationStyle";

const CarModalRentalInformation = ({
  rentalConditions,
  mileage,
  rentalPrice,
}) => {
  return (
    <section>
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
    </section>
  );
};

export { CarModalRentalInformation };
