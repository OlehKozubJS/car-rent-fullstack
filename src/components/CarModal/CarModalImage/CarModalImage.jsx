import { useState, useEffect } from "react";

import { SVGimage } from "../../images";

import {
  CarModalBackdropStyleBase,
  CarModalContainerStyleBase,
  CarModalCloseButtonContainerStyleBase,
  CarModalCloseButtonStyleBase,
  CarModalImageStyleBase,
  CarModalHeaderStyleBase,
  CarModalItemsStyleBase,
  CarModalItemStyleBase,
  CarModalItemValueStyleBase,
  CarModalDescriptionStyleBase,
  CarModalSubHeaderStyleBase,
  CarModalRentalItemsStyleBase,
  CarModalRentalItemStyleBase,
  CarModalRentalItemValueStyleBase,
  CarModalSubmitButtonStyleBase,
} from "./CarModalStyles";

const CarModal = ({ car, onClose }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.type === "keydown" && event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <CarModalBackdropStyleBase>
      <CarModalContainerStyleBase>
        <CarModalCloseButtonContainerStyleBase>
          <CarModalCloseButtonStyleBase
            onClick={onClose}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <SVGimage name={isHover ? "close-hover" : "close"} />
          </CarModalCloseButtonStyleBase>
        </CarModalCloseButtonContainerStyleBase>
        <CarModalImageStyleBase src={car.img} alt="" />
        <CarModalHeaderStyleBase>
          <span>{car.make}</span>{" "}
          <CarModalItemValueStyleBase>{car.model}</CarModalItemValueStyleBase>,{" "}
          <span>{car.year}</span>
        </CarModalHeaderStyleBase>
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
        <CarModalDescriptionStyleBase>
          {car.description}
        </CarModalDescriptionStyleBase>
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
        <CarModalSubmitButtonStyleBase>
          Rental car
        </CarModalSubmitButtonStyleBase>
      </CarModalContainerStyleBase>
    </CarModalBackdropStyleBase>
  );
};

export { CarModal };
