import { useState } from "react";

import {
  CellularFieldStyleBase,
  CellStyleBase,
} from "./CellularAutomatonLiteStyle";

import { Cells } from "./Cells";

const createCellsDataArray = () => {
  let cellsData = [];

  for (let cellNumber = 1; cellNumber <= 2500; cellNumber += 1) {
    cellsData = [...cellsData, false];
  }

  return cellsData;
};

const CellularAutomatonLite = () => {
  const [cellsData, setCellsData] = useState([]);

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
      <CellStyleBase
        key={cellNumber}
        data-number={cellNumber}
        isActive={true}
      ></CellStyleBase>
    </CellularFieldStyleBase>
  );
};

export { CellularAutomatonLite };
/*

      {cellsData.map((cellData, cellNumber) => {
        return (

        );
      })}

*/
