import { CarGalleryInformationDivider } from "../CarGalleryInformationDivider";

import { CarModalItemStyleBase } from "./imports";

const getCarModalItemsWithDivisors = (items) => {
  let CarModalItemsArray = [];

  for (let itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
    CarModalItemsArray = [
      ...CarModalItemsArray,
      <CarModalItemStyleBase key={`item${itemIndex}`}>
        {items[itemIndex]}
      </CarModalItemStyleBase>,
      itemIndex < items.length - 1 && (
        <CarModalInformationDivider key={`divisor${itemIndex}`} />
      ),
    ];
  }

  return CarModalItemsArray;
};

export { getCarModalItemsWithDivisors };
