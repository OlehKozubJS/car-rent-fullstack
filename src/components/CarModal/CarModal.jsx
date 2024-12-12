import { CarModalContainer } from "./CarModalContainer";
import { CarModalCloseButton } from "./CarModalCloseButton";
import { CarModalHeader } from "./CarModalHeader";
import { CarModalCommonInformation } from "./CarModalCommonInformation";
import { CarModalDescription } from "./CarModalDescription";
import { CarModalAccessoriesInformation } from "./CarModalAccessoriesInformation";
import { CarModalRentalInformation } from "./CarModalRentalInformation";
import { CarModalLink } from "./CarModalLink";

import { CarModalImageStyleBase } from "./CarModalStyles";

const CarModal = ({ car, onClose }) => {
  return (
    <CarModalContainer>
      <CarModalCloseButton onClose={onClose} />
      <section>
        <CarModalImageStyleBase src={car.img} alt="" />
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
      <CarModalAccessoriesInformation
        accessories={car.accessories}
        functionalities={car.functionalities}
      />
      <CarModalRentalInformation
        rentalConditions={car.rentalConditions}
        mileage={car.mileage}
        rentalPrice={car.rentalPrice}
      />
      <CarModalLink />
    </CarModalContainer>
  );
};

export { CarModal };
