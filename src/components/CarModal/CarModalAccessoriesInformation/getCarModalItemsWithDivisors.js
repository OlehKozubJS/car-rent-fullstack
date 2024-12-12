import { CarModalInformationDivider } from "../CarModalInformationDivider";

import { CarModalItemStyleBase } from "./imports";

const getCarModalItemsWithDivisors = (items) => {
  let CarModalItemsArray = [];

  for (let itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
    CarModalItemsArray = [
      ...CarModalItemsArray,
      <CarModalItemStyleBase>{item}</CarModalItemStyleBase>,
      <CarModalInformationDivider />,
    ];
  }

  return CarModalItemsArray;
};

export { getCarModalItemsWithDivisors };
