import {
  CellularFieldStyleBase,
  CellStyleBase,
} from "./CellularAutomatonStyle";

import { Cells } from "./Cells";

const createCllsDataArray = () => {
  let cells = [];

  for (let cellNumber = 1; cellNumber <= 2500; cellNumber += 1) {
    cells = [...cells, false];
  }

  return cells;
};

const CellularAutomaton = () => {
  return (
    <CellularFieldStyleBase>
      <Cells />
    </CellularFieldStyleBase>
  );
};

export { CellularAutomaton };
