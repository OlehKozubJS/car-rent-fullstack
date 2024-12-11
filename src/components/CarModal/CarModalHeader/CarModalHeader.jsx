import { CarModalItemValueStyleBase } from "./imports";

import {
  CarModalHeaderStyleBaseOne,
  CarModalHeaderStyleBaseTwo,
  CarModalHeaderStyleBaseThree,
} from "./CarModalHeaderStyles";

const CarModalHeader = ({ make, year, model }) => {
  return (
    <>
      <CarModalHeaderStyleBaseOne>
        <span>{make}</span>{" "}
        <CarModalItemValueStyleBase>{model}</CarModalItemValueStyleBase>,{" "}
        <span>{year}</span>
      </CarModalHeaderStyleBaseOne>
    </>
  );
};

export { CarModalHeader };
