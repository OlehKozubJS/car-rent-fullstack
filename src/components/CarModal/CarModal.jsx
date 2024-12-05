import { useState, useEffect } from "react";

import {
  carsLocalData,
  ManropeR,
  ManropeM,
  ManropeB,
  MontserratR,
  MontserratB,
} from "./imports";

import { SVGimage } from "../../images";

import {
  CarModalBackdropStyleBase,
  CarModalContainerStyleBase,
  CarModalCloseButtonContainerStyleBase,
  CarModalCloseButtonStyleBase,
  CarModalCloseButtonIconStyleBase,
  CarModalImageStyleBase,
  CarModalHeaderStyleBase,
  CarModalItemsStyleBase,
  CarModalItemStyleBase,
  CarModalItemValueStyleBase,
  CarModalDescriptionStyleBase,
  CarModalSubHeaderStyleBase,
  CarModalRentalItemsStyleBase,
  CarModalRentalItemStyleBase,
  CarModalSubmitButtonStyleBase,
} from "./CarModalStyles";

const CarModal = ({ carId, onClose }) => {
  const [car] = useState(carsLocalData.find((car) => car.id === carId));
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
        <CarModalHeaderStyleBase className="{ManropeM}">
          <span>{car.make}</span>{" "}
          <CarModalItemValueStyleBase>{car.model}</CarModalItemValueStyleBase>,{" "}
          <span>{car.year}</span>
        </CarModalHeaderStyleBase>
        <CarModalItemsStyleBase>
          <CarModalItemStyleBase className="{ManropeR}">
            {car.address.split(", ")[1]}
          </CarModalItemStyleBase>
          <CarModalItemStyleBase className="{ManropeR}">
            {car.address.split(", ")[2]}
          </CarModalItemStyleBase>
          <CarModalItemStyleBase className="{ManropeR}">
            Id:{" "}
            <CarModalItemValueStyleBase className="{css.CarModalItemValue}">
              {car.id}
            </CarModalItemValueStyleBase>
          </CarModalItemStyleBase>
          <CarModalItemStyleBase className="{ManropeR}">
            Year:{" "}
            <CarModalItemValueStyleBase className="{css.CarModalItemValue}">
              {car.year}
            </CarModalItemValueStyleBase>
          </CarModalItemStyleBase>
          <CarModalItemStyleBase className="{ManropeR}">
            Type:{" "}
            <CarModalItemValueStyleBase>{car.type}</CarModalItemValueStyleBase>
          </CarModalItemStyleBase>
          <CarModalItemStyleBase className="{ManropeR}">
            Fuel Consumption:{" "}
            <CarModalItemValueStyleBase>
              {car.fuelConsumption}
            </CarModalItemValueStyleBase>
          </CarModalItemStyleBase>
          <CarModalItemStyleBase className="{ManropeR}">
            Engine Size:{" "}
            <CarModalItemValueStyleBase>
              {car.engineSize}
            </CarModalItemValueStyleBase>
          </CarModalItemStyleBase>
        </CarModalItemsStyleBase>
        <CarModalDescriptionStyleBase className="{`${css.CarModalDescription} ${ManropeR}`}">
          {car.description}
        </CarModalDescriptionStyleBase>
        <CarModalSubHeaderStyleBase className="{`${css.CarModalSubHeader} ${ManropeM}`}">
          Accessories and functionalities:
        </CarModalSubHeaderStyleBase>
        <CarModalItemsStyleBase className="{css.CarModalItems}">
          {car.accessories.map((item, index) => {
            return (
              <CarModalItemStyleBase
                key={index}
                className="{`${css.CarModalItem} ${ManropeR}`}"
              >
                {item}
              </CarModalItemStyleBase>
            );
          })}
          {car.functionalities.map((item, index) => {
            return (
              <CarModalItemStyleBase
                key={index}
                className="{`${css.CarModalItem} ${ManropeR}`}"
              >
                {item}
              </CarModalItemStyleBase>
            );
          })}
        </CarModalItemsStyleBase>
        <CarModalSubHeaderStyleBase className="{`${css.CarModalSubHeader} ${ManropeM}`}">
          Rental Conditions:{" "}
        </CarModalSubHeaderStyleBase>
        <CarModalRentalItemsStyleBase className="{css.CarModalRentalItems}">
          <CarModalRentalItemStyleBase className="{`${css.CarModalRentalItem} ${MontserratR}`}">
            Minimum age:{" "}
            <CarModalItemValueStyleBase className="{`${css.CarModalItemValue} ${MontserratB}`}">
              {car.rentalConditions.split("\n")[0].split(" ")[2]}
            </CarModalItemValueStyleBase>
          </CarModalRentalItemStyleBase>
          <CarModalRentalItemStyleBase className="{`${css.CarModalRentalItem} ${MontserratR}`}">
            {car.rentalConditions.split("\n")[1]}
          </CarModalRentalItemStyleBase>
          <CarModalItemStyleBase className="{`${css.CarModalRentalItem} ${MontserratR}`}">
            {car.rentalConditions.split("\n")[2]}
          </CarModalItemStyleBase>
          <CarModalItemsStyleBase className="{`${css.CarModalRentalItem} ${MontserratR}`}">
            Mileage:{" "}
            <CarModalItemValueStyleBase className="{`${css.CarModalItemValue} ${MontserratB}`}">
              {car.mileage}
            </CarModalItemValueStyleBase>
          </CarModalItemsStyleBase>
          <CarModalRentalItemStyleBase className="{`${css.CarModalRentalItem} ${MontserratR}`}">
            Price:{" "}
            <CarModalItemValueStyleBase className="{`${css.CarModalItemValue} ${MontserratB}`}">
              {car.rentalPrice}
            </CarModalItemValueStyleBase>
          </CarModalRentalItemStyleBase>
        </CarModalRentalItemsStyleBase>
        <CarModalSubmitButtonStyleBase className="{`${css.CarModalSubmitButton} ${ManropeB}`}">
          Rental car
        </CarModalSubmitButtonStyleBase>
      </CarModalContainerStyleBase>
    </CarModalBackdropStyleBase>
  );
};

export { CarModal };
