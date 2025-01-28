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

  const changeCellData = ({ target }) => {
    setCellsData(
      cellsData.map((cellData, cellNumber) => {
        if (Number(target.dataset.number) === cellNumber) {
          return !cellData;
        } else {
          return cellData;
        }
      })
    );
  };

  return (
    <CellularFieldStyleBase onClick={changeCellData}>
      {cellsData.map((cellData, cellNumber) => {
        return (
          <CellStyleBase
            key={cellNumber}
            data-number={cellNumber}
            isActive={cellData}
          ></CellStyleBase>
        );
      })}
    </CellularFieldStyleBase>
  );
};

export { CellularAutomaton };
