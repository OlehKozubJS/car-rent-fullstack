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

import css from "./CarModal.module.css";

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
    <CarModalBackdropStyleBase className={css.CarModalBackdrop}>
      <CarModalContainerStyleBase className={css.CarModalContainer}>
        <CarModalCloseButtonContainerStyleBase
          className={css.CarModalCloseButtonContainer}
        >
          <CarModalCloseButtonStyleBase
            className={css.CarModalCloseButton}
            onClick={onClose}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            <SVGimage
              className={css.CarModalCloseButtonIcon}
              name={isHover ? "close-hover" : "close"}
            />
          </CarModalCloseButtonStyleBase>
        </CarModalCloseButtonContainerStyleBase>
        <CarModalImageStyleBase
          className={css.CarModalImage}
          src={car.img}
          alt=""
        />
        <CarModalHeaderStyleBase
          className={`${css.CarModalHeader} ${ManropeM}`}
        >
          <span>{car.make}</span>{" "}
          <CarModalItemValueStyleBase className={css.CarModalItemValue}>
            {car.model}
          </CarModalItemValueStyleBase>
          , <span>{car.year}</span>
        </CarModalHeaderStyleBase>
        <CarModalItemsStyleBase className={css.CarModalItems}>
          <CarModalItemStyleBase className={`${css.CarModalItem} ${ManropeR}`}>
            {car.address.split(", ")[1]}
          </CarModalItemStyleBase>
          <CarModalItemStyleBase className={`${css.CarModalItem} ${ManropeR}`}>
            {car.address.split(", ")[2]}
          </CarModalItemStyleBase>
          <CarModalItemStyleBase className={`${css.CarModalItem} ${ManropeR}`}>
            Id:{" "}
            <CarModalItemValue className={css.CarModalItemValue}>
              {car.id}
            </CarModalItemValue>
          </CarModalItemStyleBase>
          <CarModalItemStyleBase className={`${css.CarModalItem} ${ManropeR}`}>
            Year:{" "}
            <CarModalItemValueStyleBase className={css.CarModalItemValue}>
              {car.year}
            </CarModalItemValueStyleBase>
          </CarModalItemStyleBase>
          <CarModalItemStyleBase className={`${css.CarModalItem} ${ManropeR}`}>
            Type:{" "}
            <CarModalItemValueStyleBase className={css.CarModalItemValue}>
              {car.type}
            </CarModalItemValueStyleBase>
          </CarModalItemStyleBase>
          <CarModalItemStyleBase className={`${css.CarModalItem} ${ManropeR}`}>
            Fuel Consumption:{" "}
            <CarModalItemValueStyleBase className={css.CarModalItemValue}>
              {car.fuelConsumption}
            </CarModalItemValueStyleBase>
          </CarModalItemStyleBase>
          <CarModalItemStyleBase className={`${css.CarModalItem} ${ManropeR}`}>
            Engine Size:{" "}
            <CarModalItemValueStyleBase className={css.CarModalItemValue}>
              {car.engineSize}
            </CarModalItemValueStyleBase>
          </CarModalItemStyleBase>
        </CarModalItemsStyleBase>
        <CarModalDescriptionStyleBase
          className={`${css.CarModalDescription} ${ManropeR}`}
        >
          {car.description}
        </CarModalDescriptionStyleBase>
        <CarModalSubHeaderStyleBase
          className={`${css.CarModalSubHeader} ${ManropeM}`}
        >
          Accessories and functionalities:
        </CarModalSubHeaderStyleBase>
        <CarModalItemsStyleBase className={css.CarModalItems}>
          {car.accessories.map((item, index) => {
            return (
              <CarModalItemStyleBase
                key={index}
                className={`${css.CarModalItem} ${ManropeR}`}
              >
                {item}
              </CarModalItemStyleBase>
            );
          })}
          {car.functionalities.map((item, index) => {
            return (
              <CarModalItemStyleBase
                key={index}
                className={`${css.CarModalItem} ${ManropeR}`}
              >
                {item}
              </CarModalItemStyleBase>
            );
          })}
        </CarModalItemsStyleBase>
        <CarModalSubHeaderStyleBase
          className={`${css.CarModalSubHeader} ${ManropeM}`}
        >
          Rental Conditions:{" "}
        </CarModalSubHeaderStyleBase>
        <CarModalRentalItemsStyleBase className={css.CarModalRentalItems}>
          <CarModalRentalItemStyleBase
            className={`${css.CarModalRentalItem} ${MontserratR}`}
          >
            Minimum age:{" "}
            <CarModalItemValue
              className={`${css.CarModalItemValue} ${MontserratB}`}
            >
              {car.rentalConditions.split("\n")[0].split(" ")[2]}
            </CarModalItemValue>
          </CarModalRentalItemStyleBase>
          <CarModalRentalItemStyleBase
            className={`${css.CarModalRentalItem} ${MontserratR}`}
          >
            {car.rentalConditions.split("\n")[1]}
          </CarModalRentalItemStyleBase>
          <CarModalItemStyleBase
            className={`${css.CarModalRentalItem} ${MontserratR}`}
          >
            {car.rentalConditions.split("\n")[2]}
          </CarModalItemStyleBase>
          <CarModalItemsStyleBase
            className={`${css.CarModalRentalItem} ${MontserratR}`}
          >
            Mileage:{" "}
            <CarModalItemValueStyleBase
              className={`${css.CarModalItemValue} ${MontserratB}`}
            >
              {car.mileage}
            </CarModalItemValueStyleBase>
          </CarModalItemsStyleBase>
          <CarModalRentalItemStyleBase
            className={`${css.CarModalRentalItem} ${MontserratR}`}
          >
            Price:{" "}
            <CarModalItemValueStyleBase
              className={`${css.CarModalItemValue} ${MontserratB}`}
            >
              {car.rentalPrice}
            </CarModalItemValueStyleBase>
          </CarModalRentalItemStyleBase>
        </CarModalRentalItemsStyleBase>
        <CarModalSubmitButtonStyleBase
          className={`${css.CarModalSubmitButton} ${ManropeB}`}
        >
          Rental car
        </CarModalSubmitButtonStyleBase>
      </CarModalContainerStyleBase>
    </CarModalBackdropStyleBase>
  );
};

export { CarModal };
