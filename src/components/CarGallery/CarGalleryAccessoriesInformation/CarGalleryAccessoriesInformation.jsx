import { getCarModalItemsWithDivisors } from "./getCarModalItemsWithDivisors";

import { CarModalSubHeaderStyleBase, CarModalItemsStyleBase } from "./imports";

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
