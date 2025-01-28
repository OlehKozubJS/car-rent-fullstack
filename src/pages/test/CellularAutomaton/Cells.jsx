import { CellStyleBase } from "./CellularAutomatonStyle";

const CellularAutomaton = () => {
  const cells = [];

  for (let cellNumber = 1; cellNumber <= 2500; cellNumber += 1) {
    cells = [...cells, <CellStyleBase></CellStyleBase>];
  }

  return cells;
};

export { CellularAutomaton };
