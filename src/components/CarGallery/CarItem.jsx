import { useState, useEffect } from "react";

import { SVGimage } from "../../images";

const CarItem = ({ car, onClick }) => {
  const handleClick = () => {
    onClick(car);
  };

  return (
    <li>
      <CarModalContainer>
        <CarModalUpperSection car={car} />
        <CarModalAccessoriesInformation
          accessories={car.accessories}
          functionalities={car.functionalities}
        />
        <CarModalLink />
      </CarModalContainer>
      {JSON.stringify(car)}
      <button onClick={handleClick}>Learn more</button>
    </li>
  );
};

export { CarItem };
