import { useState, useEffect } from "react";

import { SVGimage } from "../../images";

const CarItem = ({ car, onClick }) => {
  const [ifFavourite, setIsFavourite] = useState(false);

  const markAsFavourite = () => {
    setIsFavourite(true);
  };

  const unMarkAsFavourite = () => {
    setIsFavourite(false);
  };

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
