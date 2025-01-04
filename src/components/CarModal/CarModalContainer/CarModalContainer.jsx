import {
  CarModalBackdropStyleBase,
  CarModalContainerStyleBase,
} from "./CarModalContainerStyle";

const CarModalContainer = ({ children }) => {
  return (
    <CarModalBackdropStyleBase>
      <CarModalContainerStyleBase>{children}</CarModalContainerStyleBase>
    </CarModalBackdropStyleBase>
  );
};

export { CarModalContainer };
