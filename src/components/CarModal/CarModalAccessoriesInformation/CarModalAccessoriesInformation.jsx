import { CarModalInformationDivider } from "../CarModalInformationDivider";
import { getCarModalItemsWithDivisors } from "./getCarModalItemsWithDivisors";

import {
  CarModalSubHeaderStyleBase,
  CarModalItemsStyleBase,
  CarModalItemStyleBase,
} from "./imports";

const CarModalAccessoriesInformation = ({ accessories, functionalities }) => {
  return (
    <>
      <CarModalSubHeaderStyleBase>
        Accessories and functionalities:
      </CarModalSubHeaderStyleBase>
      <CarModalItemsStyleBase>
        {getCarModalItemsWithDivisors(accessories)}
        {functionalities.map((item, index) => {
          return (
            <CarModalItemStyleBase key={index}>{item}</CarModalItemStyleBase>
          );
        })}
      </CarModalItemsStyleBase>
    </>
  );
};

export { CarModalAccessoriesInformation };
