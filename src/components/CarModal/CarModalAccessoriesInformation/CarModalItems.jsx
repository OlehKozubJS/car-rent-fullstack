import { CarModalInformationDivider } from "../CarModalInformationDivider";

import { CarModalItemStyleBase } from "./imports";

const CarModalItems = ({ items }) => {
  let CarModalItemsArray = [];

  return items.forEach((item, index, array) => {
    return (
      <CarModalItemStyleBase key={`item${index}`}>{item}</CarModalItemStyleBase>
    );
  });
};

export {};
