import { CarModalHeaderStyleBase } from "./CarModalHeaderStyles";

const CarModal = ({ car, onClose }) => {
  return (
    <CarModalHeaderStyleBase>
      <span>{car.make}</span>{" "}
      <CarModalItemValueStyleBase>{car.model}</CarModalItemValueStyleBase>,{" "}
      <span>{car.year}</span>
    </CarModalHeaderStyleBase>
  );
};

export { CarModal };
