import { useState } from "react";

import { CellStyleBase } from "./CellularAutomatonStyle";

const Cell = ({ isActive }) => {
  return <CellStyleBase isActive={isActive}></CellStyleBase>;
};

export { Cell };
