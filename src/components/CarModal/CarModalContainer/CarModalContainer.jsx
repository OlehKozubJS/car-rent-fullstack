import {
  CarModalBackdropStyleBase,
  CarModalContainerStyleBase,
} from "./CarModalContainerStyles";

const CarModalContainer = ({ children }) => {
  return (
    <CarModalBackdropStyleBase>
      <CarModalContainerStyleBase>{children}</CarModalContainerStyleBase>
    </CarModalBackdropStyleBase>
  );
};

export { CarModalContainer };
