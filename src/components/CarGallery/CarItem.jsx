import { useState, useEffect } from "react";

import { SVGimage } from "../../images";

const CarItem = ({ car }) => {
  return <li>{JSON.stringify(car)}</li>;
};

export { CarItem };
