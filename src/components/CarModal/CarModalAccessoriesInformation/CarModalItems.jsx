import { CarModalInformationDivider } from "../CarModalInformationDivider";

import { CarModalItemStyleBase } from "./imports";

const CarModalAccessoriesInformation = ({ accessories, functionalities }) => {
  let
  return accessories.forEach((item, index, array) => {
    return (
      <CarModalItemStyleBase key={`item${index}`}>{item}</CarModalItemStyleBase>
    );
  });
};

export {  };
