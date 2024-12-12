import { useState, useEffect } from "react";

import { SVGimage } from "../../images";

const CarItem = ({ car, onClick }) => {
  const [ifFavourite, setIsFavourite] = useState();

  const markAsFavourite = () => {};
  const unMarkAsFavourite = () => {};

  const handleClick = () => {
    onClick(car);
  };

  return (
    <li>
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
      <CarModalAccessoriesInformation
        accessories={car.accessories}
        functionalities={car.functionalities}
      />
      <CarModalLink />
      <button onClick={handleClick}>Learn more</button>
    </li>
  );
};

export { CarItem };
