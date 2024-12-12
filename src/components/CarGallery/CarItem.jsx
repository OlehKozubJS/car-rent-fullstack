import { useState, useEffect } from "react";

import { SVGimage } from "../../images";

const CarItem = ({ car, onClick }) => {
  const handleClick = () => {
    onClick(car);
  };

  return (
    <li>
      {JSON.stringify(car)}
      <button onClick={handleClick}>Learn more</button>
    </li>
  );
};

export { CarItem };
