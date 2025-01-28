import { CellStyleBase } from "./CellularAutomatonStyle";

const Cell = ({}) => {
  return <CellStyleBase key={cellNumber}>{cellNumber}</CellStyleBase>;
};

export { Cell };
