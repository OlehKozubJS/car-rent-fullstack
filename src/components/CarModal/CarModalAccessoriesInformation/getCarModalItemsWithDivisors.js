import { CarModalInformationDivider } from "../CarModalInformationDivider";

import { CarModalItemStyleBase } from "./imports";

const getCarModalItemsWithDivisors = ({ items }) => {
  let CarModalItemsArray = [];

  for (let item of items) {
    CarModalItemsArray = [
      ...CarModalItemsArray,
      <CarModalItemStyleBase>{item}</CarModalItemStyleBase>,
      <CarModalInformationDivider />,
    ];
  }
};

export { getCarModalItemsWithDivisors };
