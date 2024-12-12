import { getCarGalleryItemsWithDivisors } from "./getCarModalItemsWithDivisors";

import {
  CarGallerySubHeaderStyleBase,
  CarGalleryItemsStyleBase,
} from "./imports";

const CarGalleryAccessoriesInformation = ({ accessories, functionalities }) => {
  return (
    <section>
      <CarGallerySubHeaderStyleBase>
        Accessories and functionalities:
      </CarGallerySubHeaderStyleBase>
      <CarGalleryItemsStyleBase>
        {getCarModalItemsWithDivisors(accessories)}
        {getCarModalItemsWithDivisors(functionalities)}
      </CarGalleryItemsStyleBase>
    </section>
  );
};

export { CarGalleryAccessoriesInformation };
