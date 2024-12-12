import { CarModalInformationDivider } from "../CarModalInformationDivider";

import {
  CarModalSubHeaderStyleBase,
  CarModalItemsStyleBase,
  CarModalItemStyleBase,
} from "./imports";

const CarModalAccessoriesInformation = ({ accessories, functionalities }) => {
  return accessories.map((item, index, array) => {
    return <CarModalItemStyleBase key={index}>{item}</CarModalItemStyleBase>;
  });
};

export { CarModalAccessoriesInformation };
