import { getCarGalleryItemsWithDivisors } from "./getCarGalleryItemsWithDivisors";

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
        {getCarGalleryItemsWithDivisors(accessories)}
        {getCarGalleryItemsWithDivisors(functionalities)}
      </CarGalleryItemsStyleBase>
    </section>
  );
};

export { CarGalleryAccessoriesInformation };
