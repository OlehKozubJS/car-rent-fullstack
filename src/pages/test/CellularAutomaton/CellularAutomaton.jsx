import {
  CellularFieldStyleBase,
  CellStyleBase,
} from "./CellularAutomatonStyle";

import { Cells } from "./Cells";

const createCllsDataArray = () => {
  let cellsData = [];

  for (let cellNumber = 1; cellNumber <= 2500; cellNumber += 1) {
    cellsData = [...cells, false];
  }

  return cellsData;
};

const CellularAutomaton = () => {
  return (
    <CellularFieldStyleBase>
      <Cells />
    </CellularFieldStyleBase>
  );
};

export { CellularAutomaton };
