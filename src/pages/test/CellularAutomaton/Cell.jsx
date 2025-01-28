import { CellStyleBase } from "./CellularAutomatonStyle";

const Cell = ({ isActive }) => {
  return <CellStyleBase key={cellNumber} isActive={isActive}></CellStyleBase>;
};

export { Cell };
