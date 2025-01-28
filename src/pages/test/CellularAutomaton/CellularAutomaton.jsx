import {
  CellularFieldStyleBase,
  CellStyleBase,
} from "./CellularAutomatonStyle";

import { Cells } from "./Cells";

const CellularAutomaton = () => {
  let cells = [];

  for (let cellNumber = 1; cellNumber <= 2500; cellNumber += 1) {
    cells = [...cells, false];
  }

  return (
    <CellularFieldStyleBase>
      <Cells />
    </CellularFieldStyleBase>
  );
};

export { CellularAutomaton };
