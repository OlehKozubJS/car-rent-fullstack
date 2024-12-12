import { CarModalInformationDivider } from "../CarModalInformationDivider";

import { CarModalItemStyleBase } from "./imports";

const CarModalItems = ({ items }) => {
  let CarModalItemsArray = [];

  for (let item of items) {
    CarModalItemsArray = [
      ...CarModalItemsArray,
      <CarModalItemStyleBase key={`item${index}`}>
        {item}
      </CarModalItemStyleBase>,
      <CarModalInformationDivider />,
    ];
  }
};

export {};
