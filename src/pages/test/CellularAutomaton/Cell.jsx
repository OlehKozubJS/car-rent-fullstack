import { useState } from "react";

import { CellStyleBase } from "./CellularAutomatonStyle";

const Cell = ({ isActive, onClick }) => {
  return <CellStyleBase isActive={isActive} onClick={onClick}></CellStyleBase>;
};

export { Cell };
