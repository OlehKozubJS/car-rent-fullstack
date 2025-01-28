import { useState } from "react";

import {
  CellularFieldStyleBase,
  CellStyleBase,
} from "./CellularAutomatonStyle";

import { Cells } from "./Cells";

const createCellsDataArray = () => {
  let cellsData = [];

  for (let cellNumber = 1; cellNumber <= 2500; cellNumber += 1) {
    cellsData = [...cellsData, false];
  }

  return cellsData;
};

const CellularAutomaton = () => {
  = useState(createCellsDataArray);

  return <CellularFieldStyleBase>{<CellStyleBase />}</CellularFieldStyleBase>;
};

export { CellularAutomaton };
