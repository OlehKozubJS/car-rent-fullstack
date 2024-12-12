import { CarModalInformationDivider } from "../CarModalInformationDivider";
import { getCarModalItemsWithDivisors } from "./getCarModalItemsWithDivisors";

import {
  CarModalSubHeaderStyleBase,
  CarModalItemsStyleBase,
  CarModalItemStyleBase,
} from "./imports";

const CarModalAccessoriesInformation = ({ accessories, functionalities }) => {
  return (
    <section>
      <CarModalSubHeaderStyleBase>
        Accessories and functionalities:
      </CarModalSubHeaderStyleBase>
      <CarModalItemsStyleBase>
        {getCarModalItemsWithDivisors(accessories)}
        {getCarModalItemsWithDivisors(functionalities)}
      </CarModalItemsStyleBase>
    </section>
  );
};

export { CarModalAccessoriesInformation };
