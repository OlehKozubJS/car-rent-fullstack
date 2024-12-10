import { CarModalItemValueStyleBase } from "./imports";

import {
  CarModalHeaderStyleBase1,
  CarModalHeaderStyleBase2,
  CarModalHeaderStyleBase3,
} from "./CarModalHeaderStyles";

const CarModalHeader = ({ make, year, model }) => {
  return (
    <>
      <CarModalHeaderStyleBase1>
        <span>{make}</span>{" "}
        <CarModalItemValueStyleBase>{model}</CarModalItemValueStyleBase>,{" "}
        <span>{year}</span>
      </CarModalHeaderStyleBase1>
      <CarModalHeaderStyleBase2>
        <span>{make}</span>{" "}
        <CarModalItemValueStyleBase>{model}</CarModalItemValueStyleBase>,{" "}
        <span>{year}</span>
      </CarModalHeaderStyleBase2>
      <CarModalHeaderStyleBase3>
        <span>{make}</span>{" "}
        <CarModalItemValueStyleBase>{model}</CarModalItemValueStyleBase>,{" "}
        <span>{year}</span>
      </CarModalHeaderStyleBase3>
    </>
  );
};

export { CarModalHeader };
