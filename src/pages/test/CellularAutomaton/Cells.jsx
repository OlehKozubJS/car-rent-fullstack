import { CellStyleBase } from "./CellularAutomatonStyle";

const Cells = () => {
  let cells = [];

  for (let cellNumber = 1; cellNumber <= 2500; cellNumber += 1) {
    cells = [
      ...cells,
      <CellStyleBase key={cellNumber} isActive={false}></CellStyleBase>,
    ];
  }

  return cells;
};

export { Cells };
