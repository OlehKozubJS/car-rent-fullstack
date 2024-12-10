import {
  CarModalSubHeaderStyleBase,
  CarModalItemsStyleBase,
  CarModalItemStyleBase,
} from "./imports";

const CarModalAccessoriesInformation = ({ car, onClose }) => {
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

export { CarModalAccessoriesInformation };
