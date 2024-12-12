import { CarModalInformationDivider } from "../CarModalInformationDivider";

import { CarModalItemStyleBase } from "./imports";

const CarModalItems = ({ accessories, functionalities }) => {
  let
  
  return accessories.forEach((item, index, array) => {
    return (
      <CarModalItemStyleBase key={`item${index}`}>{item}</CarModalItemStyleBase>
    );
  });
};

export {  };
