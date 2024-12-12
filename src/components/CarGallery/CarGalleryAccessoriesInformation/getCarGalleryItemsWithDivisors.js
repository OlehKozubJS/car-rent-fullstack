import { CarGalleryInformationDivider } from "../CarGalleryInformationDivider";

import { CarGalleryItemStyleBase } from "./imports";

const getCarGalleryItemsWithDivisors = (items) => {
  let CarGalleryItemsArray = [];

  for (let itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
    CarGalleryItemsArray = [
      ...CarGalleryItemsArray,
      <CarGalleryItemStyleBase key={`item${itemIndex}`}>
        {items[itemIndex]}
      </CarGalleryItemStyleBase>,
      itemIndex < items.length - 1 && (
        <CarGalleryInformationDivider key={`divisor${itemIndex}`} />
      ),
    ];
  }

  return CarGalleryItemsArray;
};

export { getCarGalleryItemsWithDivisors };
