import { CarModalItemValueStyleBase } from "./imports";

import { CarModalHeaderStyleBase } from "./CarModalHeaderStyle";

const CarModalHeader = ({ make, year, model }) => {
  return (
    <CarModalHeaderStyleBase>
      <span>{make}</span>{" "}
      <CarModalItemValueStyleBase>{model}</CarModalItemValueStyleBase>,{" "}
      <span>{year}</span>
    </CarModalHeaderStyleBase>
  );
};

export { CarModalHeader };
