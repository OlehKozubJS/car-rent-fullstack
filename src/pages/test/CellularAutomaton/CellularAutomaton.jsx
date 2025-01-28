import { useState } from "react";

import {
  CellularFieldStyleBase,
  CellStyleBase,
} from "./CellularAutomatonStyle";

import { Cells } from "./Cells";

const createCellsDataArray = () => {
  let cellsData = [];

  for (let cellNumber = 1; cellNumber <= 2500; cellNumber += 1) {
    cellsData = [...cellsData, false];
  }

  return cellsData;
};

const CellularAutomaton = () => {
  const [cellsData, setCellsData] = useState(createCellsDataArray());

  const changeCellData = () => {};

  return (
    <CellularFieldStyleBase onClick={changeCellData}>
      {cellsData.map((cellData, cellNumber) => {
        return (
          <CellStyleBase key={cellNumber} isActive={cellData}></CellStyleBase>
        );
      })}
    </CellularFieldStyleBase>
  );
};

export { CellularAutomaton };
