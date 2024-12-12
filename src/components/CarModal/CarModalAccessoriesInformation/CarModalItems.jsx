import { CarModalInformationDivider } from "../CarModalInformationDivider";

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
        {accessories.map((item, index, array) => {
          return (
            <CarModalItemStyleBase key={`info${index}`}>
              {item}
            </CarModalItemStyleBase>
          );
        })}
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
