import { CarModalCloseButton } from "./CarModalCloseButton";
import { CarModalHeader } from "./CarModalHeader";

import { CarModalDescription } from "./CarModalDescription";
import {} from "./CarModalAccessoriesInformation";
import { CarModalLink } from "./CarModalLink";

import {
  CarModalBackdropStyleBase,
  CarModalContainerStyleBase,
  CarModalImageStyleBase,
  CarModalItemsStyleBase,
  CarModalItemStyleBase,
  CarModalItemValueStyleBase,
  CarModalSubHeaderStyleBase,
  CarModalRentalItemsStyleBase,
  CarModalRentalItemStyleBase,
  CarModalRentalItemValueStyleBase,
} from "./CarModalStyles";

const CarModal = ({ car, onClose }) => {
  return (
    <CarModalBackdropStyleBase>
      <CarModalContainerStyleBase>
        <CarModalCloseButton onClose={onClose} />
        <CarModalImageStyleBase src={car.img} alt="" />
        <CarModalHeader make={car.make} model={car.model} year={car.year} />
        <CarModalItemsStyleBase>
          <CarModalItemStyleBase>
            {car.address.split(", ")[1]}
          </CarModalItemStyleBase>
          <CarModalItemStyleBase>
            {car.address.split(", ")[2]}
          </CarModalItemStyleBase>
          <CarModalItemStyleBase>
            Id:{" "}
            <CarModalItemValueStyleBase>{car.id}</CarModalItemValueStyleBase>
          </CarModalItemStyleBase>
          <CarModalItemStyleBase>
            Year:{" "}
            <CarModalItemValueStyleBase>{car.year}</CarModalItemValueStyleBase>
          </CarModalItemStyleBase>
          <CarModalItemStyleBase>
            Type:{" "}
            <CarModalItemValueStyleBase>{car.type}</CarModalItemValueStyleBase>
          </CarModalItemStyleBase>
          <CarModalItemStyleBase>
            Fuel Consumption:{" "}
            <CarModalItemValueStyleBase>
              {car.fuelConsumption}
            </CarModalItemValueStyleBase>
          </CarModalItemStyleBase>
          <CarModalItemStyleBase>
            Engine Size:{" "}
            <CarModalItemValueStyleBase>
              {car.engineSize}
            </CarModalItemValueStyleBase>
          </CarModalItemStyleBase>
        </CarModalItemsStyleBase>
        <CarModalDescription description={car.description} />
        <CarModalSubHeaderStyleBase>
          Accessories and functionalities:
        </CarModalSubHeaderStyleBase>
        <CarModalItemsStyleBase>
          {car.accessories.map((item, index) => {
            return (
              <CarModalItemStyleBase key={index}>{item}</CarModalItemStyleBase>
            );
          })}
          {car.functionalities.map((item, index) => {
            return (
              <CarModalItemStyleBase key={index}>{item}</CarModalItemStyleBase>
            );
          })}
        </CarModalItemsStyleBase>
        <CarModalSubHeaderStyleBase>
          Rental Conditions:{" "}
        </CarModalSubHeaderStyleBase>
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
        <CarModalLink />
      </CarModalContainerStyleBase>
    </CarModalBackdropStyleBase>
  );
};

export { CarModal };
