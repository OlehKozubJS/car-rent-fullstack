import { getCarGalleryItemsWithDivisors } from "./getCarGalleryItemsWithDivisors";

import { CarGalleryItemsStyleBase } from "./imports";

const CarGalleryAccessoriesInformation = ({ accessories, functionalities }) => {
  return (
    <section>
      <CarGalleryItemsStyleBase>
        {getCarGalleryItemsWithDivisors(accessories)}
        {getCarGalleryItemsWithDivisors(functionalities)}
      </CarGalleryItemsStyleBase>
    </section>
  );
};

export { CarGalleryAccessoriesInformation };
