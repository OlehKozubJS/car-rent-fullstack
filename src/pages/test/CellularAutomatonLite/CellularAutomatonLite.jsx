import { useState } from "react";

import {
  CellularFieldStyleBase,
  CellStyleBase,
} from "./CellularAutomatonLiteStyle";

const CellularAutomatonLite = () => {
  const [cellsData, setCellsData] = useState([]);

  const getCellPosition = (event) => {
    const { clientY, clientX, target } = event;
    const { top, left } = target.getBoundingClientRect();
    const y = clientY - top;
    const x = clientX - left;
    const cellY = y - (y % 10);
    const cellX = x - (x % 10);

    return { cellY, cellX };
  };

  const addCellData = (event) => {
    setCellsData([
      ...cellsData,

      <CellStyleBase
        key={`${roundY}, ${roundX}`}
        top={roundY}
        left={roundX}
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
