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

  const addCellData = ({ clientY, clientX, target }) => {
    const y = clientY - target.getBoundingClientRect().top;
    const x = clientX - target.getBoundingClientRect().left;

    const roundY = y - (y % 10);
    const roundX = x - (x % 10);

    setCellsData([
      ...cellsData,

      <CellStyleBase
        key={`${y}, ${x}`}
        top={y}
        left={x}
        isActive={true}
      ></CellStyleBase>,
    ]);
  };

  return (
    <CellularFieldStyleBase onClick={addCellData}>
      {cellsData.map((cell) => {
        return cell;
      })}
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
