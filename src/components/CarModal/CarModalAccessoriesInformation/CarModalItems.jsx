import {
  CarModalSubHeaderStyleBase,
  CarModalItemsStyleBase,
  CarModalItemStyleBase,
} from "./imports";

const CarModalAccessoriesInformation = ({ accessories, functionalities }) => {
  return (
    <CarModalItemsStyleBase>
      {accessories.map((item, index, array) => {
        return (
          <CarModalItemStyleBase key={index}>{item}</CarModalItemStyleBase>
        );
      })}
      {functionalities.map((item, index) => {
        return (
          <CarModalItemStyleBase key={index}>{item}</CarModalItemStyleBase>
        );
      })}
    </CarModalItemsStyleBase>
  );
};

export { CarModalAccessoriesInformation };
