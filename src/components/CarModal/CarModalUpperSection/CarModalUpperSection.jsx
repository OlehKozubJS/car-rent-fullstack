import { CarModalHeader } from "../CarModalHeader";
import { CarModalCommonInformation } from "../CarModalCommonInformation";
import { CarModalDescription } from "../CarModalDescription";

import { CarModalImageStyleBase } from "../CarModalStyles";

const CarModalUpperSection = ({ car }) => {
  return (
    <section>
      <CarModalImageStyleBase src={car.photoLink} alt="" />
      <CarModalHeader make={car.make} model={car.model} year={car.year} />
      <CarModalCommonInformation
        address={car.address}
        id={car.id}
        year={car.year}
        type={car.type}
        fuelConsumption={car.fuelConsumption}
        engineSize={car.engineSize}
      />
      <CarModalDescription description={car.description} />
    </section>
  );
};

export { CarModalUpperSection };
