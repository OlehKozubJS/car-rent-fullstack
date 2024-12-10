import { CarModalHeaderStyleBase } from "./CarModalHeaderStyles";

const CarModal = ({ make, year, model }) => {
  return (
    <CarModalHeaderStyleBase>
      <span>{make}</span>{" "}
      <CarModalItemValueStyleBase>{model}</CarModalItemValueStyleBase>,{" "}
      <span>{year}</span>
    </CarModalHeaderStyleBase>
  );
};

export { CarModal };
