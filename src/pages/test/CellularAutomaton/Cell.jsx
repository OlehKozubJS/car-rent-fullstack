import { CellStyleBase } from "./CellularAutomatonStyle";

const Cell = ({}) => {
  let cells = [];

  return <CellStyleBase key={cellNumber}>{cellNumber}</CellStyleBase>;
};

export { Cell };
