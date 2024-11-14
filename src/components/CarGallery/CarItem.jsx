import { useState, useEffect } from "react";

import { SVGimage } from "../../images";

const CarItem = ({ carInformation }) => {
  return <li>{JSON.stringify(carInformation)}</li>;
};

export { CarItem };
