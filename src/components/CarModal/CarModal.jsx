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
          <span className={css.CarModalItemValue}>{car.model}</span>,{" "}
          <span>{car.year}</span>
        </CarModalHeaderStyleBase>
        <CarModalItemsStyleBase className={css.CarModalItems}>
          <CarModalItemStyleBase className={`${css.CarModalItem} ${ManropeR}`}>
            {car.address.split(", ")[1]}
          </CarModalItemStyleBase>
          <CarModalItemStyleBase className={`${css.CarModalItem} ${ManropeR}`}>
            {car.address.split(", ")[2]}
          </CarModalItemStyleBase>
          <CarModalItemStyleBase className={`${css.CarModalItem} ${ManropeR}`}>
            Id: <span className={css.CarModalItemValue}>{car.id}</span>
          </CarModalItemStyleBase>
          <CarModalItemStyleBase className={`${css.CarModalItem} ${ManropeR}`}>
            Year: <span className={css.CarModalItemValue}>{car.year}</span>
          </CarModalItemStyleBase>
          <CarModalItemStyleBase className={`${css.CarModalItem} ${ManropeR}`}>
            Type: <span className={css.CarModalItemValue}>{car.type}</span>
          </CarModalItemStyleBase>
          <CarModalItemStyleBase className={`${css.CarModalItem} ${ManropeR}`}>
            Fuel Consumption:{" "}
            <span className={css.CarModalItemValue}>{car.fuelConsumption}</span>
          </CarModalItemStyleBase>
          <CarModalItemStyleBase className={`${css.CarModalItem} ${ManropeR}`}>
            Engine Size:{" "}
            <span className={css.CarModalItemValue}>{car.engineSize}</span>
          </CarModalItemStyleBase>
        </CarModalItemsStyleBase>
        <p className={`${css.CarModalDescription} ${ManropeR}`}>
          {car.description}
        </p>
        <h4 className={`${css.CarModalSubHeader} ${ManropeM}`}>
          Accessories and functionalities:
        </h4>
        <ul className={css.CarModalItems}>
          {car.accessories.map((item, index) => {
            return (
              <li key={index} className={`${css.CarModalItem} ${ManropeR}`}>
                {item}
              </li>
            );
          })}
          {car.functionalities.map((item, index) => {
            return (
              <li key={index} className={`${css.CarModalItem} ${ManropeR}`}>
                {item}
              </li>
            );
          })}
        </ul>
        <h4 className={`${css.CarModalSubHeader} ${ManropeM}`}>
          Rental Conditions:{" "}
        </h4>
        <ul className={css.CarModalRentalItems}>
          <li className={`${css.CarModalRentalItem} ${MontserratR}`}>
            Minimum age:{" "}
            <span className={`${css.CarModalItemValue} ${MontserratB}`}>
              {car.rentalConditions.split("\n")[0].split(" ")[2]}
            </span>
          </li>
          <li className={`${css.CarModalRentalItem} ${MontserratR}`}>
            {car.rentalConditions.split("\n")[1]}
          </li>
          <li className={`${css.CarModalRentalItem} ${MontserratR}`}>
            {car.rentalConditions.split("\n")[2]}
          </li>
          <li className={`${css.CarModalRentalItem} ${MontserratR}`}>
            Mileage:{" "}
            <span className={`${css.CarModalItemValue} ${MontserratB}`}>
              {car.mileage}
            </span>
          </li>
          <li className={`${css.CarModalRentalItem} ${MontserratR}`}>
            Price:{" "}
            <span className={`${css.CarModalItemValue} ${MontserratB}`}>
              {car.rentalPrice}
            </span>
          </li>
        </ul>
        <button className={`${css.CarModalSubmitButton} ${ManropeB}`}>
          Rental car
        </button>
      </CarModalContainerStyleBase>
    </CarModalBackdropStyleBase>
  );
};

export { CarModal };
