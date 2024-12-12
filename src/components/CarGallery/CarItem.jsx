import { useState, useEffect } from "react";

import { SVGimage } from "../../images";

const CarItem = ({ car, onClick }) => {
  const handleClick = () => {
    onClick(car);
  };

  return (
    <li>
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
      {JSON.stringify(car)}
      <button onClick={handleClick}>Learn more</button>
    </li>
  );
};

export { CarItem };
