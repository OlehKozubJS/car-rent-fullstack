import { CarModalContainer } from "./CarModalContainer";
import { CarModalCloseButton } from "./CarModalCloseButton";
import { CarModalUpperSection } from "./CarModalUpperSection";
import { CarModalAccessoriesInformation } from "./CarModalAccessoriesInformation";
import { CarModalRentalInformation } from "./CarModalRentalInformation";
import { CarModalLink } from "./CarModalLink";

const CarModal = ({ car, onClose }) => {
  return (
    <CarModalContainer>
      <CarModalCloseButton onClose={onClose} />
      <CarModalUpperSection car={car} />
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
