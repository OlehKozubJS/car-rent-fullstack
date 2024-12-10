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
  return (
    <>
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
    </>
  );
};

export { CarModal };
