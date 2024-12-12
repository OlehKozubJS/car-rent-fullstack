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
            <p>
              <CarModalItemStyleBase key={`info${index}`}>
                {item}
              </CarModalItemStyleBase>
              {index < array.length - 1 && (
                <CarModalInformationDivider key={`div${index}`} />
              )}
            </p>
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
