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
    setCellsData([
      ...cellsData,
      <CellStyleBase
        key={`${clientY}, ${clientX}`}
        top={clientY}
        left={clientX}
        isActive={true}
      ></CellStyleBase>,
    ]);
    console.log(target.getBoundingClientRect().top);
    console.log(target.getBoundingClientRect().left);
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
